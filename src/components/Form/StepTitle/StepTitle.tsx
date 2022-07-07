import React from 'react';

interface IStepTitle {
  title: string;
}

const StepTitle = ({ title }: IStepTitle) => {
  return (
    <div className="flex justify-center items-center h-[10vh] text-md font-bold text-lowContrast tracking-wide uppercase ">
      {title}
    </div>
  );
};

export default StepTitle;
