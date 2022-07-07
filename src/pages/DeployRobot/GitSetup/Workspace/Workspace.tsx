/* eslint-disable react/jsx-key */
/* eslint-disable react/no-array-index-key */
import React from 'react';
import { FastField, FieldArray } from 'formik';
import InputField from '../../../../components/Form/InputField/InputField';
import BuildField from '../BuildField/BuildField';
import LabelWithInfo from '../../../../components/Form/LabelWithInfo/LabelWithInfo';
import Button from '../../../../components/Button/Button';

type WorkspaceType = {
  index1: number;
  values: any;
  setValues: React.Dispatch<React.SetStateAction<any>>;
  currentFields: any;
  setCurrentFields: any;
};

const Workspace = ({
  index1,
  values,
  setValues,
  currentFields,
  setCurrentFields
}: WorkspaceType) => {
  const handleAddRepository = (index) => {
    values.workspaces[index].repositories.push({
      gitURL: '',
      branch: '',
      rosPackages: [],
      customLaunchPath: false,
      env: []
    });
    setValues(values);
  };

  const handlePreviousStep = () => {
    if (index1 === 0) {
      setCurrentFields('fleetSetup');
    } else {
      setCurrentFields(`workspaces.workspace${index1 - 1}`);
    }
  };

  const handleNextStep = () => {
    if (values.workspaces[index1].repositories.length === 0) {
      handleAddRepository(index1);
    }
    setCurrentFields(`workspaces.workspace${index1}.repositories.repository0`);
  };
  return (
    <div
      key={index1}
      className="flex flex-col items-center justify-center rounded mb-4 w-full"
      id="workspace"
    >
      <div className="text-sm font-bold uppercase w-full text-lowContrast">
        Workspace {index1 + 1}
      </div>
      <div className="w-full bg-light-200 dark:bg-layer-200 duration-300 transition-all mx-4 border border-lowContrast rounded dark:border-layer-600 p-4">
        <InputField id="workspaceName" label="Workspace Name" info="Enter the workspace name.">
          <FastField
            className="h-input rounded p-2 bg-light-300 dark:bg-layer-100 border border-layer-600 outline-none focus:outline-1 focus:outline-layer-600 focus:border-none"
            placeholder="e.g airport"
            name={`workspaces[${index1}].name`}
          />
        </InputField>
        <InputField
          id="rosDistro"
          label="ROS Distro"
          info="Select the ROS Distro for this workspace."
        >
          <FastField
            className="h-input rounded p-2 bg-light-300 dark:bg-layer-100 border border-layer-600 outline-none focus:outline-1 focus:outline-layer-600 focus:border-none"
            as="select"
            name="rosDistro"
          >
            <option value="foxy">Foxy</option>
            <option value="galactic">Galactic</option>
          </FastField>
        </InputField>

        <label className="flex p-2 items-center">
          <LabelWithInfo
            label="Custom Build"
            info="Select if the repository is for development purposes."
          />
          <FastField
            className="rounded p-2 bg-light-300 dark:bg-layer-100 placeholder:italic border border-layer-600 outline-none focus:outline-1 focus:outline-layer-600 focus:border-none w-5 h-5"
            type="checkbox"
            name={`workspaces[${index1}].customBuild`}
          />
        </label>

        {values.workspaces[index1].customBuild && (
          <FieldArray name={`workspaces[${index1}].buildSteps`}>
            {(arrayHelpers4) => (
              <div className="bg-light-200 dark:bg-layer-200 rounded p-2">
                <div>
                  <p className="uppercase text-lowContrast text-sm font-bold">Build Steps</p>
                </div>
                <div className="w-full bg-light-200 dark:bg-layer-200 p-2">
                  {values.workspaces[index1].buildSteps &&
                  values.workspaces[index1].buildSteps.length > 0
                    ? values.workspaces[index1].buildSteps.map(
                        (workspaceBuild: any, index4: number) => {
                          return (
                            <BuildField
                              key={index4}
                              index1={index1}
                              index4={index4}
                              values={values}
                              arrayHelpers4={arrayHelpers4}
                            />
                          );
                        }
                      )
                    : ''}
                  <div className="flex justify-center items-center w-[100%]">
                    <button
                      className="flex justify-center items-center w-full px-2 py-4 bg-primary-100 text-white border font-bold border-none transition-all uppercase rounded hover:bg-primary-200 cursor-pointer h-[40px] m-1"
                      type="button"
                      onClick={() => {
                        values.workspaces[index1].buildSteps.push({
                          type: 'command',
                          name: '',
                          text: ''
                        });
                        setValues(values);
                      }}
                    >
                      Add Command Build
                    </button>
                    <button
                      className="flex justify-center items-center w-full px-2 py-4 bg-primary-100 text-white border font-bold border-none transition-all uppercase rounded hover:bg-primary-200 cursor-pointer h-[40px] m-1"
                      type="button"
                      onClick={() => {
                        values.workspaces[index1].buildSteps.push({
                          type: 'script',
                          name: '',
                          text: ''
                        });
                        setValues(values);
                      }}
                    >
                      Add Script Build
                    </button>
                  </div>
                </div>
              </div>
            )}
          </FieldArray>
        )}
      </div>
      <div className="flex justify-center w-full mt-8 mb-8">
        <div className="flex justify-between flex-row-reverse w-full">
          <Button
            text="Next"
            type="button"
            disabled={false}
            style="primary"
            handleClick={handleNextStep}
          />
          <Button
            text="Previous"
            type="button"
            disabled={false}
            style="default"
            handleClick={handlePreviousStep}
          />
        </div>
      </div>
    </div>
  );
};

export default Workspace;
