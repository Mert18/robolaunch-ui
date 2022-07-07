import React, { useState } from 'react';

type ILabelWithInfo = {
  label: string;
  info: string;
};

const LabelWithInfo = ({ label, info }: ILabelWithInfo) => {
  const [isInfoOpen, setIsInfoOpen] = useState(false);
  return (
    <div className="flex items-center">
      <p className="text-lowContrast text-sm uppercase font-bold z-50">{label}</p>
      <button
        className="bg-transparent border-none pl-2 relative"
        type="button"
        onMouseEnter={() => setIsInfoOpen(true)}
        onMouseLeave={() => setIsInfoOpen(false)}
      >
        <img src="/icons/labelhelp.svg" alt="info" width="18px" className="mr-4" />
        {isInfoOpen && (
          <div className="absolute p-3 bg-white text-layer-100 font-medium bottom-full right-full z-50 min-w-[200px] text-sm">
            <p>{info}</p>
          </div>
        )}
      </button>
    </div>
  );
};

export default LabelWithInfo;
