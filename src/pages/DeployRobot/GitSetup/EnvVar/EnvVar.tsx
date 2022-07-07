/* eslint-disable react/no-array-index-key */
import React from 'react';
import { FastField } from 'formik';
import InputField from '../../../../components/Form/InputField/InputField';

type EnvVarType = {
  values: any;
  index1: number;
  index2: number;
  index3: number;
  arrayHelpers3: any;
  setValues: React.Dispatch<React.SetStateAction<any>>;
};

const EnvVar = ({ values, index1, index2, index3, arrayHelpers3 }: EnvVarType) => {
  return (
    <div key={index3} className="rounded bg-light-200 dark:bg-layer-200 relative">
      <div className="flex flex-col w-full mb-4 rounded relative overflow-hidden bg-light-200 dark:bg-layer-200 border border-lowContrast dark:border-layer-600 mt-4">
        <div className="w-full bg-light-200 dark:bg-layer-200 flex justify-between p-2 items-center text-sm rounded">
          <p className="uppercase text-lowContrast font-bold">Variable {index3 + 1}</p>

          <div className="flex justify-center absolute bottom-0 right-0 z-50 ">
            <button
              className="cursor-pointer py-2 px-3 bg-red-100 transition-all rounded-tl-xl rounded-br hover:bg-red-200"
              type="button"
              onClick={() => arrayHelpers3.remove(index3)}
            >
              <img src="/icons/trash.svg" />
            </button>
          </div>
        </div>
        <div className="flex flex-col items-start p-4">
          <div className="w-full">
            <InputField id="env_name" label="Env Name" info="Type the Environment Variable name.">
              <FastField
                className="h-input rounded p-2 bg-light-300 dark:bg-layer-100 border border-layer-600 outline-none focus:outline-1 focus:outline-layer-600 focus:border-none"
                placeholder="Variable Name"
                name={`workspaces[${index1}].repositories[${index2}].env[${index3}].env_name`}
              />
            </InputField>
            <InputField
              id="env_value"
              label="Env Value"
              info="Type the Environment Variable value."
            >
              <FastField
                className="h-input rounded p-2 bg-light-300 dark:bg-layer-100 border border-layer-600 outline-none focus:outline-1 focus:outline-layer-600 focus:border-none"
                placeholder="Variable Value"
                name={`workspaces[${index1}].repositories[${index2}].env[${index3}].env_value`}
              />
            </InputField>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnvVar;
