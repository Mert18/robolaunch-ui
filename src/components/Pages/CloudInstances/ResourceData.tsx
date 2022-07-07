import React, { useContext } from 'react';
import { ThemeContext } from '../../../context/ThemeContext';

const ResourceData = ({ values }) => {
  const { theme, setTheme } = useContext(ThemeContext);

  const vCPUCloud = 100 * (values.cpu.cloud / (values.cpu.cloud + values.cpu.physical));
  const vCPUPhysical = 100 * (values.cpu.physical / (values.cpu.cloud + values.cpu.physical));

  const ramCloud = 100 * (values.ram.cloud / (values.ram.cloud + values.ram.physical));
  const ramPhysical = 100 * (values.ram.physical / (values.ram.cloud + values.ram.physical));

  const gpuCloud = 100 * (values.gpu.cloud / (values.gpu.cloud + values.gpu.physical));
  const gpuPhysical = 100 * (values.gpu.physical / (values.gpu.cloud + values.gpu.physical));

  const diskCloud = 100 * (values.disk.cloud / (values.disk.cloud + values.disk.physical));
  const diskPhysical = 100 * (values.disk.physical / (values.disk.cloud + values.disk.physical));

  return (
    <div>
      <div>
        <div className="flex items-center justify-between my-2">
          <div className="flex items-center">
            <div className="bg-secondary-100 p-1 w-5 h-5 rounded"></div>
            <p className="ml-1 font-semibold">Cloud</p>
          </div>
          <div className="flex items-center">
            <p className="mr-1 font-semibold">Physical</p>
            <div className="bg-primary-100 p-1 w-5 h-5 rounded"></div>
          </div>
        </div>
      </div>
      <ul>
        <li className="flex">
          <div className="bg-secondary-100 p-1 rounded-tl" style={{ width: `${vCPUCloud}%` }}>
            <p className="text-white overflow-ellipsis whitespace-nowrap overflow-hidden font-semibold">
              {values.cpu.cloud}vCPU
            </p>
          </div>
          <div className="bg-primary-100 p-1 rounded-tr" style={{ width: `${vCPUPhysical}%` }}>
            <p className="text-white overflow-ellipsis whitespace-nowrap overflow-hidden font-semibold">
              {values.cpu.physical}vCPU
            </p>
          </div>
        </li>

        <li className="flex">
          <div className="bg-secondary-100 p-1" style={{ width: `${ramCloud}%` }}>
            <p className="text-white overflow-ellipsis whitespace-nowrap overflow-hidden font-semibold">
              {values.ram.cloud}GB RAM
            </p>
          </div>
          <div className=" bg-primary-100 p-1" style={{ width: `${ramPhysical}%` }}>
            <p className="text-white overflow-ellipsis whitespace-nowrap overflow-hidden font-semibold">
              {values.ram.physical}GB RAM
            </p>
          </div>
        </li>

        <li className="flex">
          <div className=" bg-secondary-100 p-1" style={{ width: `${gpuCloud}%` }}>
            <p className="text-white overflow-ellipsis whitespace-nowrap overflow-hidden font-semibold">
              {values.gpu.cloud}GPU
            </p>
          </div>
          <div className=" bg-primary-100 p-1" style={{ width: `${gpuPhysical}%` }}>
            <p className="text-white overflow-ellipsis whitespace-nowrap overflow-hidden font-semibold">
              {values.gpu.physical}GPU
            </p>
          </div>
        </li>

        <li className="flex">
          <div className="bg-secondary-100 p-1 rounded-bl" style={{ width: `${diskCloud}%` }}>
            <p className="text-white overflow-ellipsis whitespace-nowrap overflow-hidden font-semibold">
              {values.disk.cloud}GB Disk
            </p>
          </div>
          <div className="bg-primary-100 p-1 rounded-br" style={{ width: `${diskPhysical}%` }}>
            <p className="text-white overflow-ellipsis whitespace-nowrap overflow-hidden font-semibold">
              {values.disk.physical}GB Disk
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default ResourceData;
