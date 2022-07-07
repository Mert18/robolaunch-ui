import React, { useEffect } from 'react';

interface IStep {
  text: string;
  isActive: boolean;
  setCurrentFields: any;
  step: string;
  arrayHelpers?: any;
  currentFields: any;
  index: any;
}

const Step = ({
  text,
  isActive,
  setCurrentFields,
  step,
  arrayHelpers,
  currentFields,
  index
}: IStep) => {
  const handleSetStep = () => {
    setCurrentFields(step);
  };
  const handleRemoveWorkspace = () => {
    setCurrentFields('fleetSetup');
    arrayHelpers.remove(index);
  };

  return (
    <div className="flex items-center">
      <div
        onClick={handleSetStep}
        className={`${
          isActive
            ? 'bg-light-400 border-lowContrast text-layer-100 hover:bg-light-300 dark:bg-layer-600 dark:border-lowContrast dark:text-white dark:hover:bg-layer-400'
            : 'bg-light-200 border-lowContrast text-layer-100 hover:bg-light-300 dark:bg-layer-400 dark:border-lowContrast dark:text-white dark:hover:bg-layer-500'
        } flex items-center border  cursor-pointer justify-center w-[180px] font-semibold rounded h-[40px] my-2`}
      >
        <p>{text}</p>
      </div>
      {arrayHelpers && (
        <div
          className="ml-2 bg-red-100 p-2 rounded-full hover:bg-red-200 cursor-pointer"
          onClick={handleRemoveWorkspace}
        >
          <img src="/icons/trash.svg" alt="trash" className="w-4 h-4" />
        </div>
      )}
    </div>
  );
};

export default Step;
