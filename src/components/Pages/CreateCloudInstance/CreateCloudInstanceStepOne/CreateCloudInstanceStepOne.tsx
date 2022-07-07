/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import { ErrorMessage, FastField } from 'formik';
import Button from '../../../Button/Button';
import StepTitle from '../../../Form/StepTitle/StepTitle';
import InputField from '../../../Form/InputField/InputField';
import LabelWithInfo from '../../../Form/LabelWithInfo/LabelWithInfo';

interface IStepOne {
  setStep: React.Dispatch<React.SetStateAction<number>>;
  values: any;
  setValues: any;
}

const AddCloudInstanceStepOne = ({ setStep, values, setValues }: IStepOne) => {
  const [isSelect, setIsSelect] = useState(true);

  /* Doing a little validation of robot name.*/
  const handleClick = () => {
    setStep((s: number) => s + 1);
  };

  return (
    <>
      <StepTitle title="Create Cloud Instance" />
      <div className="flex flex-col items-center justify-center pt-4 pb-4 w-full rounded">
        <div className="relative flex flex-col items-center justify-center">
          <div
            className={`overflow-hidden bg-layer-200 transition-all mx-4 border border-layer-600 rounded p-4`}
          >
            {/* Region */}
            <label className="flex flex-col " htmlFor="region" id="region">
              <LabelWithInfo label="Region" info="Select your region." />
              <select
                className="h-input rounded p-2 bg-layer-200 border border-layer-500 outline-none focus:outline-1 focus:outline-layer-600 focus:border-none w-full"
                id="region"
                name="region"
              >
                <option value="region01">Region 01</option>
                <option value="region02">Region 02</option>
                <option value="region03">Region 03</option>
              </select>
              <ErrorMessage
                name="region"
                render={(msg) => <div className="form__error">{msg}</div>}
              />
            </label>

            {/* Cloud Instance Name */}
            <InputField
              id="cloudInstance"
              label="Cloud Instance's Name"
              info="Robotname cannot include uppercase characters, underscore(_)..."
            >
              <FastField
                className="h-input rounded p-2 bg-layer-200 border border-layer-500 outline-none focus:outline-1 focus:outline-layer-600 focus:border-none"
                placeholder="ci-xdye"
                type="text"
                id="cloudInstance"
                name="cloudInstance"
                label="Cloud Instance's Name"
              />
            </InputField>

            {/* Checkbox */}
            <div className="flex justify-start items-start mb-2 p-2">
              <label className="flex items-center justify-center">
                <input
                  type="checkbox"
                  className="h-5 w-5 mr-2"
                  onChange={() => {
                    if (values.connectionHub) {
                      values.connectionHub = false;
                      setValues(values);
                    } else {
                      values.connectionHub = true;
                      setValues(values);
                    }
                  }}
                />
                <LabelWithInfo
                  label="Connection Hub"
                  info="Make it connectible to other clusters"
                />
              </label>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center mt-8 mb-8 w-full">
              <Button
                text="Create Cloud Instance"
                type="submit"
                disabled={false}
                style="primary"
                icon="plus"
                handleClick={handleClick}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default AddCloudInstanceStepOne;
