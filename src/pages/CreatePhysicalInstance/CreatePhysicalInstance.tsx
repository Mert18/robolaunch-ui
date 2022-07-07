import React, { useState } from 'react';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import CreatePhysicalInstanceStepOne from '../../components/Pages/CreatePhysicalInstance/CreatePhysicalInstanceStepOne/CreatePhysicalInstanceStepOne';
import CreatePhysicalInstanceStepTwo from '../../components/Pages/CreatePhysicalInstance/CreatePhysicalInstanceStepTwo/CreatePhysicalInstanceStepTwo';

const CreatePhysicalInstance = () => {
  const [step, setStep] = useState(0);
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
          // Regions that the user hosts.
          region: ''
        }}
        onSubmit={async (values) => {
          console.log(values);
        }}
      >
        {({ values }) => (
          <Form
            autoComplete="off"
            className="flex flex-col justify-center items-center w-full min-h-[70vh]"
          >
            <div className="flex flex-col w-[50%] justify-center items-center">
              <div className="bg-black-200 rounded mb-4 flex flex-col items-center justify-center w-full">
                {step === 0 && <CreatePhysicalInstanceStepOne values={values} setStep={setStep} />}
                {step === 1 && <CreatePhysicalInstanceStepTwo />}
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CreatePhysicalInstance;
