import React, { useState } from 'react';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import FleetSetup from './FleetSetup/FleetSetup';
import GitSetup from './GitSetup/GitSetup';
import Preview from './Preview/Preview';
import ProgressBar from '../../components/Form/ProgressBar/ProgressBar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useNavigate } from 'react-router';
import ROSPackageAnalyze from './GitSetup/ROSPackageAnalyze/ROSPackageAnalyze';

const DeployRobot = () => {
  const [isSubmitBlocked, setIsSubmitBlocked] = useState(false);
  const [currentFields, setCurrentFields] = useState('fleetSetup');
  const [loadingROSPackages, setLoadingROSPackages] = useState(false);

  const navigate = useNavigate();
  const RobotCreateSchema = Yup.object().shape({
    robot_name: Yup.string().matches(
      /[a-z0-9]([-a-z0-9]*[a-z0-9])?(\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*/,
      'Robot Name is not valid'
    )
  });
  const notify = () =>
    toast.success('Robot is created! You will be redirected to robots page.', {
      position: 'bottom-right',
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: false,
      draggable: false,
      progress: undefined,
      theme: 'dark'
    });

  return (
    <div className="flex justify-center items-center">
      <Formik
        validationSchema={RobotCreateSchema}
        initialValues={{
          fleetName: '',
          robotName: '',
          rosVersion: '',
          robotsVirtual: [],
          robotsHybrid: [],
          robotResource: {},
          workspaces: [],
          startAutomatically: true
        }}
        onSubmit={async (values) => {
          console.log('ROBOT VALUES!', values);
          if (!isSubmitBlocked) {
            setIsSubmitBlocked(true);
            notify();
            setTimeout(() => {
              navigate('/robots');
            }, 5000);
          }
        }}
      >
        {({ values, setValues, handleSubmit }) => (
          <Form autoComplete="off" className="flex flex-col justify-center items-center w-full">
            <div className="flex items-center justify-around w-full">
              <div className="flex items-center justify-center flex-1">
                <ProgressBar
                  values={values}
                  setValues={setValues}
                  currentFields={currentFields}
                  setCurrentFields={setCurrentFields}
                  handleSubmit={handleSubmit}
                />
              </div>
              <div className="flex flex-col bg-light-100 dark:bg-layer-100 rounded mb-4 flex-1 min-h-[90vh]">
                {currentFields === 'fleetSetup' && (
                  <FleetSetup
                    setValues={setValues}
                    values={values}
                    currentFields={currentFields}
                    setCurrentFields={setCurrentFields}
                  />
                )}
                {currentFields.startsWith('workspaces') && (
                  <GitSetup
                    setValues={setValues}
                    values={values}
                    currentFields={currentFields}
                    setCurrentFields={setCurrentFields}
                    workspaceIndex={currentFields.split('.')[1]}
                    repositoryIndex={currentFields.split('.')[3]}
                    setLoadingROSPackages={setLoadingROSPackages}
                  />
                )}
                {currentFields === 'preview' && (
                  <Preview
                    currentFields={currentFields}
                    setCurrentFields={setCurrentFields}
                    disabled={isSubmitBlocked}
                    values={values}
                    handleSubmit={handleSubmit}
                  />
                )}
              </div>
              <div className="flex items-start justify-center flex-1 min-h-[70vh]">
                {currentFields.split('.').length > 2 && (
                  <ROSPackageAnalyze
                    values={values}
                    currentFields={currentFields}
                    loadingROSPackages={loadingROSPackages}
                    index1={parseInt(
                      currentFields.split('.')[1][currentFields.split('.')[1].length - 1]
                    )}
                    index2={parseInt(
                      currentFields.split('.')[3][currentFields.split('.')[3].length - 1]
                    )}
                    setValues={setValues}
                  />
                )}
              </div>
            </div>
          </Form>
        )}
      </Formik>

      <ToastContainer />
    </div>
  );
};

export default DeployRobot;
