import React, { useState } from 'react';
import Modal from '../../../components/Modal/Modal';
import { Field, Form, Formik } from 'formik';
import InputField from '../../../components/Form/InputField/InputField';

import organizations from '../../../mock/mockOrganization.json';
import groups from '../../../mock/mockGroups.json';
import robots from '../../../mock/mockRobots.json';
import cloudInstances from '../../../mock/mockCloudInstances.json';
import Button from '../../../components/Button/Button';

interface ICreateUser {
  handleClose: any;
}

const CreateUser = ({ handleClose }: ICreateUser) => {
  const [isSubmitBlocked, setIsSubmitBlocked] = useState(false);

  return (
    <Modal title="Create User" handleClose={handleClose}>
      <Formik
        initialValues={{
          email: '',
          organization: '',
          group: '',
          permissions: [],
          cloudInstances: [],
          fleets: [],
          robots: []
        }}
        onSubmit={async (values) => {
          console.log('Group create values!', values);
          if (!isSubmitBlocked) {
            setIsSubmitBlocked(true);
          }
        }}
      >
        {({ values, setValues, handleSubmit }) => (
          <Form autoComplete="off">
            <div className="grid grid-cols-2 grid-rows-1 gap-12">
              <div className="col-start-1 col-end-2">
                <div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit
                    amet, consectetur amet adipiscing elit.
                  </p>
                </div>
                <div>
                  <InputField id="email" info="Email address of the user." label="Email">
                    <Field
                      className="h-input rounded p-2 bg-layer-100 border border-layer-600 outline-none focus:outline-1 focus:outline-layer-600 focus:border-none placeholder:italic"
                      id="email"
                      name="email"
                      label="Email"
                      placeholder="e.g example@gmail.com"
                    />
                  </InputField>

                  <InputField
                    id="organization"
                    label="Organization"
                    info="Select the organization of the user."
                  >
                    <Field
                      as="select"
                      className="h-input rounded p-2 bg-layer-100 border border-layer-600 outline-none focus:outline-1 focus:outline-layer-600 focus:border-none"
                      id="organization"
                      name="organization"
                    >
                      <option value="">Select an organization</option>
                      {organizations.map((organization) => (
                        <option key={organization.id} value={organization.id}>
                          {organization.name}
                        </option>
                      ))}
                    </Field>
                  </InputField>
                  {values.organization && (
                    <InputField id="group" label="Group" info="Select the group of the user.">
                      <Field
                        as="select"
                        className="h-input rounded p-2 bg-layer-100 border border-layer-600 outline-none focus:outline-1 focus:outline-layer-600 focus:border-none"
                        id="group"
                        name="group"
                      >
                        {groups
                          .filter((group) => group.organization === values?.organization)
                          .map((group) => (
                            <option key={group.id} value={group.name}>
                              {group.name}
                            </option>
                          ))}
                      </Field>
                    </InputField>
                  )}
                </div>
              </div>
              <div className="col-start-2 col-end-3">
                <div className="max-h-[30vh] overflow-y-auto">
                  <InputField
                    id="limitations"
                    info="Select the accessible resources for the user."
                    label="User Access limitations"
                  >
                    <p className="text-lowContrast text-sm font-bold mt-4">Cloud Instance</p>
                    {cloudInstances.map((cloudInstance) => (
                      <div key={cloudInstance.cloudInstanceName} className="flex my-2">
                        <div className="mr-8">
                          <label className="flex items-center">
                            <Field
                              type="checkbox"
                              name={`cloudInstances`}
                              value={cloudInstance.cloudInstanceName}
                              className="text-lg w-5 h-5"
                              onChange={() => {
                                if (
                                  values.cloudInstances.indexOf(cloudInstance.cloudInstanceName) !==
                                  -1
                                ) {
                                  values.cloudInstances = values.cloudInstances.filter(
                                    (cis) => cis !== cloudInstance.cloudInstanceName
                                  );
                                  values.fleets = values.fleets.filter((flt) => {
                                    return cloudInstance.fleets.indexOf(flt) === 1;
                                  });
                                  setValues(values);
                                } else {
                                  values.cloudInstances.push(cloudInstance.cloudInstanceName);
                                }
                                setValues(values);
                              }}
                            />
                            <p className="m-2">{cloudInstance.cloudInstanceName}</p>
                          </label>
                        </div>
                        {values.cloudInstances.includes(cloudInstance.cloudInstanceName) && (
                          <div>
                            <p className="text-lowContrast text-sm font-bold">Fleet</p>
                            {cloudInstance.fleets.map((fleet) => (
                              <div key={fleet.name} className="flex">
                                <div>
                                  <label className="flex items-center">
                                    <Field
                                      type="checkbox"
                                      name={`fleets`}
                                      value={fleet.name}
                                      className="text-lg w-5 h-5"
                                      onChange={() => {
                                        if (values.fleets.indexOf(fleet.name) !== -1) {
                                          values.fleets = values.fleets.filter(
                                            (flt) => flt !== fleet.name
                                          );
                                          values.robots = values.robots.filter(
                                            (rbt) =>
                                              robots.find(
                                                (innerRobot) => innerRobot.robotName === rbt
                                              ).fleet !== fleet.name
                                          );
                                          setValues(values);
                                        } else {
                                          values.fleets.push(fleet.name);
                                        }
                                        setValues(values);
                                        console.log(values.robots);
                                      }}
                                    />
                                    <p className="m-2">{fleet.name}</p>
                                  </label>
                                </div>
                                {values.fleets.includes(fleet.name) && (
                                  <div key={fleet.name}>
                                    <div>
                                      <p className="text-lowContrast text-sm font-bold">Robot</p>

                                      {fleet.robots.map((robot) => {
                                        return (
                                          <div key={robot.robotName}>
                                            <div>
                                              <label className="flex items-center">
                                                <Field
                                                  type="checkbox"
                                                  name={`robots`}
                                                  value={robot.robotName}
                                                  className="text-lg w-5 h-5"
                                                  onChange={() => {
                                                    if (
                                                      values.robots.indexOf(robot.robotName) !== -1
                                                    ) {
                                                      values.robots = values.robots.filter(
                                                        (rbt) => rbt !== robot.robotName
                                                      );
                                                      setValues(values);
                                                    } else {
                                                      values.robots.push(robot.robotName);
                                                    }
                                                    setValues(values);
                                                  }}
                                                />
                                                <p className="m-2">{robot.robotName}</p>
                                              </label>
                                            </div>
                                          </div>
                                        );
                                      })}
                                    </div>
                                  </div>
                                )}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </InputField>
                </div>
              </div>
            </div>
            <div className="flex flex-row-reverse">
              <Button
                disabled={false}
                style="primary"
                icon="plus"
                type="submit"
                text="Create User"
              />
            </div>
          </Form>
        )}
      </Formik>
    </Modal>
  );
};

export default CreateUser;
