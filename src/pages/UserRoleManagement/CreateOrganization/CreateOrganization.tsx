import { Field, Form, Formik } from 'formik';
import React, { useState } from 'react';
import Button from '../../../components/Button/Button';
import InputField from '../../../components/Form/InputField/InputField';
import Modal from '../../../components/Modal/Modal';

interface ICreateOrganization {
  handleClose: any;
}

const CreateOrganization = ({ handleClose }: ICreateOrganization) => {
  const [isSubmitBlocked, setIsSubmitBlocked] = useState(false);

  const handleCreateOrganization = () => {
    console.log('Organization create');
  };
  return (
    <Modal
      handleClose={handleClose}
      title="Create Organization"
      buttonStyle="primary"
      handleSubmit={handleCreateOrganization}
    >
      <Formik
        initialValues={{
          name: ''
        }}
        onSubmit={async (values) => {
          console.log('Organization create values!', values);
          if (!isSubmitBlocked) {
            setIsSubmitBlocked(true);
          }
        }}
      >
        {({ values, setValues, handleSubmit }) => (
          <Form autoComplete="off">
            <div className="grid grid-cols-1 grid-rows-1">
              <div className="col-start-1 col-end-2">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit
                  amet, consectetur amet adipiscing elit.
                </p>
                <div className="my-2">
                  <InputField id="name" info="name address of the user." label="Name">
                    <Field
                      className="h-input rounded p-2 bg-layer-100 border border-layer-600 outline-none focus:outline-1 focus:outline-layer-600 focus:border-none placeholder:italic"
                      id="name"
                      name="name"
                      label="Name"
                      placeholder="e.g org-robolaunch"
                    />
                  </InputField>
                </div>
              </div>
            </div>
            <Button
              disabled={false}
              style="primary"
              icon="plus"
              type="submit"
              text="Create Organization"
            />
          </Form>
        )}
      </Formik>
    </Modal>
  );
};

export default CreateOrganization;
