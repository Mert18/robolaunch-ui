/* eslint-disable react/no-array-index-key */
import React from 'react';
import { FastField, Field, FieldArray } from 'formik';
import EnvVar from '../EnvVar/EnvVar';
import { IEnv, IRobot } from '../../../../types/types';
import InputField from '../../../../components/Form/InputField/InputField';
import LabelWithInfo from '../../../../components/Form/LabelWithInfo/LabelWithInfo';
import Button from '../../../../components/Button/Button';
import rosPackages from '../../../../mock/mockROSPackages.json';

type RepositoryType = {
  index1: number;
  index2: number;
  values: any;
  setValues: React.Dispatch<React.SetStateAction<IRobot>>;
  currentFields: any;
  setCurrentFields: any;
  setLoadingROSPackages: any;
};

const Repository = ({
  index1,
  index2,
  values,
  setValues,
  setCurrentFields,
  setLoadingROSPackages
}: RepositoryType) => {
  const handleRepositoryChange = (e) => {
    setLoadingROSPackages(true);
    values.workspaces[index1].repositories[index2].gitURL = e.target.value;
    values.workspaces[index1].repositories[index2].rosPackages = rosPackages;
    setTimeout(() => {
      setLoadingROSPackages(false);
    }, 3000);
    setValues(values);
  };

  const handlePreviousStep = () => {
    if (index2 === 0) {
      setCurrentFields(`workspaces.workspace${index1}`);
    } else {
      setCurrentFields(`workspaces.workspace${index1}.repositories.repository${index2 - 1}`);
    }
  };

  const handleNextStep = () => {
    if (index2 === values.workspaces[index1].repositories.length - 1) {
      if (index1 < values.workspaces.length - 1) {
        setCurrentFields(`workspaces.workspace${index1 + 1}`);
      } else {
        setCurrentFields('preview');
      }
    } else {
      setCurrentFields(`workspaces.workspace${index1}.repositories.repository${index2 + 1}`);
    }
  };

  return (
    <div key={index2} className="w-full rounded">
      <div className="text-sm font-bold uppercase w-full text-lowContrast">
        Workspace {index1 + 1} - Repository {index2 + 1}
      </div>
      <div className="bg-light-200 dark:bg-layer-200 border border-layer-600 p-4 mb-4">
        <InputField id="gitURL" label="Git URL" info="Enter the repository URL.">
          <Field
            className="h-input rounded p-2 bg-light-300 dark:bg-layer-100 placeholder:italic border border-lowContrast dark:border-layer-600 outline-none focus:outline-1 focus:outline-layer-600 focus:border-none"
            placeholder="https://github.com/user/reponame"
            name={`workspaces[${index1}].repositories[${index2}].gitURL`}
            onChange={handleRepositoryChange}
          />
        </InputField>

        <InputField id="repositoryBranch" label="Branch" info="Type the repository branch name.">
          <FastField
            className="h-input rounded p-2 bg-light-300 dark:bg-layer-100 placeholder:italic border border-lowContrast dark:border-layer-600 outline-none focus:outline-1 focus:outline-layer-600 focus:border-none"
            placeholder="main"
            name={`workspaces[${index1}].repositories[${index2}].branch`}
          />
        </InputField>

        <label className="flex p-2 items-center">
          <LabelWithInfo
            label="Custom Launch Path"
            info="Select if the repository is for development purposes."
          />
          <FastField
            className="rounded p-2 bg-light-300 dark:bg-layer-100 placeholder:italic border border-lowContrast dark:border-layer-600 outline-none focus:outline-1 focus:outline-layer-600 focus:border-none w-5 h-5"
            type="checkbox"
            name={`workspaces[${index1}].repositories[${index2}].customLaunchPath`}
          />
        </label>

        {values.workspaces[index1].repositories[index2].customLaunchPath && (
          <>
            <InputField id="launchPath" label="Repository Launch" info="Repository launch.">
              <FastField
                className="h-input rounded p-2 bg-light-300 dark:bg-layer-100 placeholder:italic border border-lowContrast dark:border-layer-600 outline-none focus:outline-1 focus:outline-layer-600 focus:border-none"
                placeholder="/var/lib/blaihe"
                name={`workspaces[${index1}].repositories[${index2}].launchPath`}
              />
            </InputField>

            <FieldArray name={`workspaces[${index1}].repositories[${index2}].env`}>
              {(arrayHelpers3) => (
                <div className="w-[80%]">
                  <div className="w-fullflex justify-between p-2 mt-2 items-center text-sm rounded ">
                    <p className="uppercase font-bold text-sm text-lowContrast">
                      Environment Variables
                    </p>
                  </div>
                  <div>
                    {values.workspaces[index1].repositories[index2].env &&
                    values.workspaces[index1].repositories[index2].env.length > 0
                      ? values.workspaces[index1].repositories[index2].env.map(
                          (env: IEnv, index3: number) => (
                            <EnvVar
                              key={index3}
                              values={values}
                              index1={index1}
                              index2={index2}
                              index3={index3}
                              arrayHelpers3={arrayHelpers3}
                              setValues={setValues}
                            />
                          )
                        )
                      : ''}
                    <div className="flex justify-center items-center w-full">
                      <button
                        className="flex justify-center items-center w-full px-2 py-4 bg-primary-100 text-white border font-bold border-none transition-all uppercase rounded hover:bg-primary-200 cursor-pointer h-[40px] m-1"
                        type="button"
                        onClick={() => {
                          values.workspaces[index1].repositories[index2].env.push({
                            name: '',
                            value: ''
                          });
                          setValues(values);
                        }}
                      >
                        Add Environment Variable
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </FieldArray>
          </>
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

export default Repository;
