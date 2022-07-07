import { FieldArray } from 'formik';
import React from 'react';
import Step from './Step/Step';

interface IProgressBar {
  values: any;
  setValues: any;
  currentFields: any;
  setCurrentFields: any;
  handleSubmit: any;
}

const ProgressBar = ({
  values,
  setValues,
  currentFields,
  setCurrentFields,
  handleSubmit
}: IProgressBar) => {
  const handleAddWorkspace = () => {
    values.workspaces.push({
      name: '',
      rosDistro: '',
      repositories: [],
      customBuild: false,
      buildSteps: []
    });
    setValues(values);
  };

  const handleAddRepository = (index1) => {
    values.workspaces[index1].repositories.push({
      gitURL: '',
      branch: '',
      rosPackages: [],
      customLaunchPath: false,
      env: []
    });
    setValues(values);
  };

  return (
    <div className="overflow-y-auto h-[90vh] p-4 fixed top-24">
      <div className="my-4">
        <p className="uppercase text-sm text-lowContrast font-bold">Basic Information</p>
        <Step
          index="fleetSetup"
          key="fleetSetup"
          text="Fleet Setup"
          isActive={'fleetSetup' === currentFields}
          currentFields={currentFields}
          setCurrentFields={setCurrentFields}
          step="fleetSetup"
        />
      </div>
      <FieldArray name="workspaces">
        {(arrayHelpers) => (
          <>
            <p className="uppercase text-sm text-lowContrast font-bold">Git Setup</p>
            {values.workspaces &&
              values.workspaces.length > 0 &&
              values.workspaces.map((workspace: any, index1: number) => (
                <div key={index1}>
                  <Step
                    key={index1}
                    index={index1}
                    currentFields={currentFields}
                    arrayHelpers={arrayHelpers}
                    text={`Workspace ${index1 + 1}`}
                    isActive={`workspaces.workspace${index1}` === currentFields}
                    setCurrentFields={setCurrentFields}
                    step={`workspaces.workspace${index1}`}
                  />
                  <div className="ml-8">
                    <FieldArray name={`workspaces[${index1}].repositories`}>
                      {(arrayHelpers2) => (
                        <>
                          {values.workspaces[index1].repositories &&
                            values.workspaces[index1].repositories.length > 0 &&
                            values.workspaces[index1].repositories.map(
                              (repository: any, index2: number) => (
                                <div key={index2}>
                                  <Step
                                    key={index2}
                                    index={index2}
                                    currentFields={currentFields}
                                    arrayHelpers={arrayHelpers2}
                                    text={`Repository ${index2 + 1}`}
                                    isActive={
                                      `workspaces.workspace${index1}.repositories.repository${index2}` ===
                                      currentFields
                                    }
                                    setCurrentFields={setCurrentFields}
                                    step={`workspaces.workspace${index1}.repositories.repository${index2}`}
                                  />
                                </div>
                              )
                            )}
                          <div className="my-4">
                            <div
                              onClick={() => handleAddRepository(index1)}
                              className="bg-light-200 hover:bg-light-300 border-green-300 dark:bg-layer-300 dark:hover:bg-layer-400 cursor-pointer dark:border-green-300
          flex items-center border font-semibold justify-center w-[180px] rounded h-[40px]"
                            >
                              <p>Add Repository</p>
                            </div>
                          </div>
                        </>
                      )}
                    </FieldArray>
                  </div>
                </div>
              ))}
            <div className="my-2">
              <div
                onClick={handleAddWorkspace}
                className="bg-light-200 hover:bg-light-300 border-green-300 dark:bg-layer-300 dark:hover:bg-layer-400 cursor-pointer dark:border-green-300
          flex items-center border font-semibold justify-center w-[180px] rounded h-[40px]"
              >
                <p>Add Workspace</p>
              </div>
            </div>
          </>
        )}
      </FieldArray>

      <div className="my-4">
        <p className="uppercase text-sm text-lowContrast font-bold">Preview</p>
        <Step
          index="preview"
          key="preview"
          text="Preview"
          isActive={'preview' === currentFields}
          currentFields={currentFields}
          setCurrentFields={setCurrentFields}
          step="preview"
        />
      </div>

      <div className="my-4">
        <button
          onClick={handleSubmit}
          className="w-[180px] h-[40px] rounded bg-primary-100 hover:bg-primary-200 font-bold text-white"
        >
          Launch
        </button>
      </div>
    </div>
  );
};

export default ProgressBar;
