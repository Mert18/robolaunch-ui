import React, { useState } from 'react';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import CreateCloudInstanceStepOne from '../../components/Pages/CreateCloudInstance/CreateCloudInstanceStepOne/CreateCloudInstanceStepOne';
import CreateCloudInstanceStepTwo from '../../components/Pages/CreateCloudInstance/CreateCloudInstanceStepTwo/CreateCloudInstanceStepTwo';

const CreateCloudInstance = () => {
  const [step, setStep] = useState(0);
  const [loading, setLoading] = useState(false);
  const RobotCreateSchema = Yup.object().shape({
    robot_name: Yup.string().matches(
      /[a-z0-9]([-a-z0-9]*[a-z0-9])?(\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*/,
      'Robot Name is not valid'
    )
  });
  return (
    <div className="flex justify-center items-center">
      <Formik
        validationSchema={RobotCreateSchema}
        initialValues={{
          name: '',
          connectionHub: false,
          // Regions that Robolaunch hosts.
          region: ''
        }}
        onSubmit={async (values) => {
          setLoading(true);
          console.log(values);
          setTimeout(() => {
            setLoading(false);
          }, 2000);
        }}
      >
        {({ values, setValues }) => (
          <Form
            autoComplete="off"
            className="flex flex-col justify-center items-center w-full min-h-[80vh]"
          >
            <div className="flex flex-col w-[50%] justify-center items-center">
              <div className="rounded mb-4 flex flex-col items-center justify-center w-full">
                {step === 0 && (
                  <CreateCloudInstanceStepOne
                    values={values}
                    setStep={setStep}
                    setValues={setValues}
                  />
                )}
                {step === 1 && <CreateCloudInstanceStepTwo loading={loading} />}
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CreateCloudInstance;
