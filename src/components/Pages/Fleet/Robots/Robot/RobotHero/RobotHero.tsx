import React from 'react';

const RobotHero = () => {
  return (
    <div className="grid grid-cols-6 grid-rows-1 bg-light-300 dark:bg-layer-300 w-full p-4 text-sm">
      <div className="col-start-1 col-end-2 flex flex-col items-center justify-center h-full ">
        <div className="bg-light-400 dark:bg-layer-400 rounded-full p-4">
          <img src="/images/robot.png" alt="robot" />
        </div>
        <p className="font-medium p-2">robot01</p>
        <p className="font-bold">Jackal</p>
      </div>
      <div className="col-start-2 col-end-7 p-4">
        <ul className="grid grid-cols-5 grid-rows-3 gap-x-4 gap-y-2 ">
          <li className="flex items-start justify-start flex-col">
            <p className="text-sm text-lowContrast font-bold uppercase">Status</p>
            <p>Building</p>
          </li>
          <li className="flex items-start justify-start flex-col">
            <p className="text-sm text-lowContrast font-bold uppercase">Robot Name</p>
            <p>Jackal</p>
          </li>
          <li className="flex items-start justify-start flex-col">
            <p className="text-sm text-lowContrast font-bold uppercase">Robot Type</p>
            <p>Virtual</p>
          </li>
          <li className="flex items-start justify-start flex-col">
            <p className="text-sm text-lowContrast font-bold uppercase">Fleet Name</p>
            <p>fleet01</p>
          </li>
          <li className="flex items-start justify-start flex-col">
            <p className="text-sm text-lowContrast font-bold uppercase">Disk</p>
            <p>100GB</p>
          </li>
          <li className="flex items-start justify-start flex-col">
            <p className="text-sm text-lowContrast font-bold uppercase">CPU</p>
            <p>4</p>
          </li>
          <li className="flex items-start justify-start flex-col">
            <p className="text-sm text-lowContrast font-bold uppercase">GPU</p>
            <p>Nvidia v100</p>
          </li>
          <li className="flex items-start justify-start flex-col">
            <p className="text-sm text-lowContrast font-bold uppercase">RAM</p>
            <p>4GB</p>
          </li>
          <li className="flex items-start justify-start flex-col">
            <p className="text-sm text-lowContrast font-bold uppercase">ROS Distro</p>
            <p>Galactic</p>
          </li>
          <li className="flex items-start justify-start flex-col">
            <p className="text-sm text-lowContrast font-bold uppercase">Teleoperation</p>
            <p>Active</p>
          </li>
          <li className="flex items-start justify-start flex-col">
            <p className="text-sm text-lowContrast font-bold uppercase">VDI</p>
            <p>Active</p>
          </li>
          <li className="flex items-start justify-start flex-col">
            <p className="text-sm text-lowContrast font-bold uppercase">Cloud IDE</p>
            <p>Active</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default RobotHero;
