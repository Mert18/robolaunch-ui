1; /* eslint-disable react/no-array-index-key */
import React from 'react';
import Workspace from './Workspace/Workspace';
import StepTitle from '../../../components/Form/StepTitle/StepTitle';
import Repository from './Repository/Repository';

type IGitSetup = {
  values: any;
  setValues: React.Dispatch<React.SetStateAction<any>>;
  workspaceIndex: string;
  repositoryIndex: string;
  currentFields: any;
  setCurrentFields: any;
  setLoadingROSPackages: any;
};

const GitSetup = ({
  values,
  setValues,
  workspaceIndex,
  repositoryIndex,
  currentFields,
  setCurrentFields,
  setLoadingROSPackages
}: IGitSetup) => {
  return (
    <div className="w-full">
      <StepTitle title="Git Setup" />
      <div className="flex flex-col items-center justify-center rounded">
        {currentFields.split('.').length <= 2 ? (
          <Workspace
            currentFields={currentFields}
            setCurrentFields={setCurrentFields}
            key={workspaceIndex}
            index1={parseInt(workspaceIndex.split('')[workspaceIndex.length - 1])}
            values={values}
            setValues={setValues}
          />
        ) : (
          <Repository
            currentFields={currentFields}
            setCurrentFields={setCurrentFields}
            key={parseInt(repositoryIndex.split('')[repositoryIndex.length - 1])}
            values={values}
            index2={parseInt(repositoryIndex.split('')[repositoryIndex.length - 1])}
            index1={parseInt(workspaceIndex.split('')[workspaceIndex.length - 1])}
            setValues={setValues}
            setLoadingROSPackages={setLoadingROSPackages}
          />
        )}
      </div>
    </div>
  );
};
export default GitSetup;
