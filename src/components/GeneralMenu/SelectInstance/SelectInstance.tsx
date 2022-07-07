import React, { useContext, useState } from 'react';
import { ThemeContext } from '../../../context/ThemeContext';
import MenuItem from '../MenuItem/MenuItem';

interface ISelectInstance {
  isOpen: boolean;
}

const SelectInstance = ({ isOpen }: ISelectInstance) => {
  const { theme, setTheme } = useContext(ThemeContext);
  const [isInstancesOpen, setIsInstancesOpen] = useState(false);

  const handleInstancesStatus = () => {
    setIsInstancesOpen(!isInstancesOpen);
  };

  return (
    <li className="flex flex-col justify-start items-center my-2 text-sm">
      <div
        className="w-full flex justify-center items-center h-full transition-all cursor-pointer dark:hover:bg-layer-300"
        onClick={() => handleInstancesStatus()}
      >
        <img src={`/icons/${theme}/menu/environments.svg`} alt="machines" />
        {isOpen && (
          <div
            className={`${
              theme === 'dark' ? 'text-white' : 'text-layer-100'
            } flex justify-between items-center transition-all rounded w-full`}
          >
            <p className="overflow-ellipsis whitespace-nowrap overflow-hidden text-sm font-medium">
              Instances
            </p>
            <button
              type="button"
              className={
                isInstancesOpen
                  ? 'transition-all rotate-180 duration-300 select-none'
                  : 'transition-all duration-300 select-none'
              }
            >
              <img src={`/icons/${theme}/arrow.svg`} alt="open/close" />
            </button>
          </div>
        )}
      </div>

      {isInstancesOpen && (
        <ul className="w-full ml-4 bg-light-100 dark:bg-layer-200">
          <MenuItem
            isOpen={isOpen}
            path={`instances/cloud-instances`}
            text="Cloud Instances"
            img={`${theme}/menu/virtual.svg`}
            active={location.pathname.split('/')[2] === 'cloud-instances'}
          />
          <MenuItem
            isOpen={isOpen}
            path={`instances/physical-instances`}
            text="Physical Instances"
            img={`${theme}/menu/physical.svg`}
            active={location.pathname.split('/')[2] === 'physical-instances'}
          />
        </ul>
      )}
    </li>
  );
};

export default SelectInstance;
