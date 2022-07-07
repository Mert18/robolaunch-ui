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
}

const AddPhysicalInstanceStepOne = ({ setStep, values }: IStepOne) => {
  const [isSelect, setIsSelect] = useState(true);
  const [loading, setLoading] = useState(false);

  /* Doing a little validation of robot name.*/
  const handleClick = () => {
    setLoading(true);
    setStep((s: number) => s + 1);
  };

  return (
    <>
      <StepTitle title="Physical Instance Details" />
      <div className="flex flex-col items-center justify-center pt-4 pb-4 w-full rounded">
        <div className="relative w-[60%] flex flex-col items-center justify-center">
          <div
            className={`overflow-hidden bg-layer-200 overflow-y-auto max-h-[150vh] transition-all mx-4 border border-layer-600 p-4`}
          >
            <label className="flex flex-col p-2 " htmlFor="region" id="region">
              <div className="flex justify-between mb-2">
                <LabelWithInfo label="Region" info="Select your region." />
                <div className="flex justify-center items-center">
                  <label className=" text-sm flex items-center">
                    Create a new one
                    <input
                      className="ml-4 text-lg w-5 h-5"
                      type="checkbox"
                      onChange={() => setIsSelect(!isSelect)}
                    />
                  </label>
                </div>
              </div>
              <div className="">
                {isSelect ? (
                  <select
                    className="h-input rounded p-2 bg-layer-100 border border-layer-600 outline-none focus:outline-1 focus:outline-black-500 focus:border-none w-full"
                    id="region"
                    name="region"
                  >
                    <option value="region01">Region 01</option>
                    <option value="region02">Region 02</option>
                    <option value="region03">Region 03</option>
                  </select>
                ) : (
                  <input
                    className="w-full h-input rounded p-2 bg-layer-100 border border-layer-600 outline-none focus:outline-1 focus:outline-black-500 focus:border-none placeholder:italic"
                    placeholder="Enter region name"
                  />
                )}
              </div>
              <ErrorMessage
                name="region"
                render={(msg) => <div className="form__error">{msg}</div>}
              />
            </label>

            <InputField
              id="physicalInstance"
              label="Physical Instance's Name"
              info="Robotname cannot include uppercase characters, underscore(_)..."
            >
              <FastField
                className="h-input rounded p-2 bg-layer-100 border border-layer-600 outline-none focus:outline-1 focus:outline-black-500 focus:border-none placeholder:italic"
                placeholder="pi-xdye"
                type="text"
                id="physicalInstance"
                name="physicalInstance"
                label="Physical Instance's Name"
              />
            </InputField>

            <InputField
              id="connectionHub"
              label="connectionHub"
              info="Connection Hub to connect to."
            >
              <FastField
                className="h-input rounded p-2 bg-layer-100 border border-layer-600 outline-1 focus:outline-1 focus:outline-layer-600 focus:border-none "
                as="select"
                id="connectionHub"
                name="connectionHub"
                label="connectionHub"
              >
                <option value="connectionHub01">connectionHub 01</option>
                <option value="connectionHub02">connectionHub 02</option>
                <option value="connectionHub03">connectionHub 03</option>
              </FastField>
            </InputField>
            <div className="flex justify-center mt-8 mb-8 w-full">
              <Button
                text="Create Physical Instance"
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
export default AddPhysicalInstanceStepOne;
