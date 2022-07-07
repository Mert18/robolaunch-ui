import { Field, Form, Formik } from 'formik';
import React, { useState } from 'react';
import Button from '../../../components/Button/Button';
import InputField from '../../../components/Form/InputField/InputField';
import Modal from '../../../components/Modal/Modal';
import organizations from '../../../mock/mockOrganization.json';

interface ICreateGroup {
  handleClose: any;
}

const roles = ['Create Robot', 'Create User', 'Create Fleet', 'Operate Fleets', 'Operate Robots'];

const CreateGroup = ({ handleClose }: ICreateGroup) => {
  const [isSubmitBlocked, setIsSubmitBlocked] = useState(false);
  const handleCreateGroup = () => {
    console.log('Group create');
  };
  return (
    <Modal
      handleClose={handleClose}
      title="Create Group"
      buttonStyle="primary"
      handleSubmit={handleCreateGroup}
    >
      <Formik
        initialValues={{
          organization: '',
          name: '',
          permissions: ''
        }}
        onSubmit={async (values) => {
          console.log('User create values!', values);
          if (!isSubmitBlocked) {
            setIsSubmitBlocked(true);
          }
        }}
      >
        {({ values, setValues, handleSubmit }) => (
          <Form autoComplete="off">
            <div>
              <div className="grid grid-cols-2 grid-rows-1 gap-12">
                <div className="col-start-1 col-end-2 self-center">
                  <div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit
                      amet, consectetur amet adipiscing elit.
                    </p>
                  </div>
                  <div>
                    <InputField
                      id="organization"
                      info="Organization that the group will be belong to."
                      label="Organization"
                    >
                      <Field
                        as="select"
                        className="h-input rounded p-2 bg-layer-100 border border-layer-600 outline-none focus:outline-1 focus:outline-layer-600 focus:border-none placeholder:italic"
                        id="organization"
                        name="organization"
                        label="Organization"
                        placeholder="e.g linorobot"
                      >
                        {organizations.map((organization) => (
                          <option key={organization.id}>{organization.name}</option>
                        ))}
                      </Field>
                    </InputField>
                    <InputField id="group" info="Name of the group." label="Group Name">
                      <Field
                        type="text"
                        id="name"
                        name="name"
                        label="Group Name"
                        placeholder="e.g Operator"
                        className="h-input rounded p-2 bg-layer-100 border border-layer-600 outline-none focus:outline-1 focus:outline-layer-600 focus:border-none placeholder:italic"
                      />
                    </InputField>
                  </div>
                </div>
                <div className="col-start-2 col-end-3 self-center">
                  <div className="max-h-[30vh] overflow-y-auto">
                    <InputField
                      id="permissions"
                      info="Select the accessible resources for the user."
                      label="Group Permissions"
                    >
                      {roles.map((role) => (
                        <label key={role} className="flex items-center">
                          <Field
                            className="text-lg w-5 h-5"
                            type="checkbox"
                            name="permissions"
                            value={role}
                          />
                          <p className="m-2">{role}</p>
                        </label>
                      ))}
                    </InputField>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row-reverse">
              <Button
                disabled={false}
                style="primary"
                icon="plus"
                type="submit"
                text="Create Group"
              />
            </div>
          </Form>
        )}
      </Formik>
    </Modal>
  );
};

export default CreateGroup;
