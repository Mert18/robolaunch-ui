import React from 'react';
import Button from '../../../components/Button/Button';
import StepTitle from '../../../components/Form/StepTitle/StepTitle';
import ReactJson from 'react-json-view';
import LabelWithInfo from '../../../components/Form/LabelWithInfo/LabelWithInfo';
import { FastField } from 'formik';

type IPreview = {
  values: any;
  disabled: boolean;
  handleSubmit: any;
  currentFields: any;
  setCurrentFields: any;
};

const Preview = ({ currentFields, setCurrentFields, values, disabled, handleSubmit }: IPreview) => {
  const handlePreviousStep = () => {
    if (values.workspaces.length > 0) {
      setCurrentFields(`workspaces.workspace${values.workspaces.length - 1}`);
    } else {
      setCurrentFields('fleetSetup');
    }
  };

  return (
    <div className="w-full">
      <StepTitle title="Preview" />
      <p className="uppercase text-sm font-bold text-lowContrast">Preview</p>
      <div className="flex flex-col bg-light-200 dark:bg-layer-200 border border-layer-600">
        <div className="m-4">
          <div className="text-white font-medium">
            <p className="text-lowContrast uppercase font-bold text-sm pt-4">
              Total number of robots
            </p>
            <p className="text-layer-100 dark:text-white">
              {values.robotsVirtual.length + values.robotsHybrid.length}
            </p>
            <p className="text-lowContrast uppercase font-bold text-sm pt-4">Virtual Robots</p>
            <p className="text-layer-100 dark:text-white">{values.robotsVirtual.length} Virtual</p>
            <p className="text-lowContrast uppercase font-bold text-sm pt-4">Hybrid Robots</p>
            <p className="text-layer-100 dark:text-white">{values.robotsHybrid.length} Virtual</p>
            <p className="text-lowContrast uppercase font-bold text-sm pt-4">Workspaces</p>
            <p className="text-layer-100 dark:text-white">{values.workspaces.length}</p>
            <p className="text-lowContrast uppercase font-bold text-sm pt-4">Pricing</p>
            <p className="text-layer-100 dark:text-white">$0.25 per hour</p>
          </div>
          <label className="flex items-center mt-4">
            <LabelWithInfo
              label="Start Automatically"
              info="Select if the repository is for development purposes."
            />
            <FastField
              className="rounded p-2 bg-light-300 dark:bg-layer-100 placeholder:italic border border-layer-600 outline-none focus:outline-1 focus:outline-layer-600 focus:border-none w-5 h-5"
              type="checkbox"
              name={`startAutomatically`}
            />
          </label>
          <div>
            <p className="text-lowContrast uppercase font-bold text-sm pt-4">JSON View</p>
            <ReactJson
              src={values}
              collapsed={true}
              theme="hopscotch"
              style={{
                padding: '10px',
                backgroundColor: '#252229',
                border: '1px solid #413E45'
              }}
              displayDataTypes={false}
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center w-full mt-8 mb-8">
        <div className="flex justify-between flex-row w-full">
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

export default Preview;
