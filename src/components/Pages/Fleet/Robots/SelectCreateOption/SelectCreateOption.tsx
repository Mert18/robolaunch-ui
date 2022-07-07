import React from 'react';
import { Link } from 'react-router-dom';

const SelectCreateOption = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-[200px] bg-layer-100">
      <div className="min-h-[80px] flex justify-center items-center text-lg">
        <h2>Create Robot</h2>
      </div>
      <div className="flex justify-center items-center mt-6 p-4">
        <div className="flex-1 hover:bg-layer-300 transition-all border border-layer-600 bg-layer-200 h-[250px] m-2 rounded flex items-center justify-center">
          <Link
            className="flex flex-col justify-center items-center text-center"
            to="/robot-create-wizard/virtual"
          >
            <div className="flex justify-center items-center">
              <img src="/icons/virtual.svg" alt="cloud" />
            </div>
            <div className="m-4 p-2">
              <h3 className="text-sm">Virtual</h3>
              <p className="p-4">Most basic form. Appropriate for beginners.</p>
            </div>
          </Link>
        </div>
        <div className="flex-1 hover:bg-layer-300 transition-all border border-layer-600 bg-layer-200 h-[250px] m-2 rounded flex items-center justify-center">
          <Link
            className="flex flex-col justify-center items-center text-center"
            to="/robot-create-wizard/hybrid"
          >
            <div className="flex justify-center items-center">
              <img src="/icons/hybrid.svg" alt="cross" />
            </div>
            <div className="m-4 p-2">
              <h3 className="text-sm">Hybrid</h3>
              <p className="p-4">Virtual and Physical robot deployment. For intermediate users.</p>
            </div>
          </Link>
        </div>

        <div className="flex-1 hover:bg-layer-200 transition-all border border-layer-600 bg-layer-200 h-[250px] m-2 rounded flex items-center justify-center">
          <Link
            className="flex flex-col justify-center items-center text-center"
            to="/robot-create-wizard/hybrid"
          >
            <div className="flex justify-center items-center">
              <img src="/icons/hybrid.svg" alt="cross" />
            </div>
            <div className="m-4 p-2">
              <h3 className="text-sm">Multi</h3>
              <p className="p-4">
                Deploy multiple robots at once. Requires advanced knowledge about ROS.
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SelectCreateOption;
