/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { setFleet } from '../../store/features/fleet/fleetSlice';
import fleets from '../../mock/mockFleets.json';
import CustomLink from '../Link/Link';
import { ThemeContext } from '../../context/ThemeContext';

const Header = () => {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const fleet = useAppSelector((state) => state.fleet);
  const [currentFleet, setCurrentFleet] = useState(fleet.name || 'all');
  const { theme, setTheme } = React.useContext(ThemeContext);
  const [fleetsSelectOpen, setFleetsSelectOpen] = useState(false);

  /*  const convertPathToText = (str: string) => {
    const newOne = str.split('/');
    for (let i = 0; i < newOne.length; i++) {
      if (newOne[i]) {
        newOne[i] = newOne[i][0].toUpperCase() + newOne[i].substr(1);
      }
    }
    return newOne.join(' / ');
  }; */

  useEffect(() => {
    console.log(theme);
    if (fleet.name) {
      setCurrentFleet(fleet.name);
    } else {
      setTimeout(() => {
        setCurrentFleet(fleets[0][0]);
      }, 1000);
    }
  }, [fleet, theme]);

  return (
    <header className="flex justify-between items-center bg-light-100 dark:bg-layer-200 p-2 text-sm border-b border-b-primary-100 dark:border-b-layer-600 shadow-md">
      {/*      <div className="bg-light-200 dark:bg-layer-300 p-3 ml-4 rounded border border-lowContrast dark:border-layer-600">
        <div className="flex justify-start items-center select-none">
          <p className="text-sm text-layer-100 dark:text-light-200">
            {convertPathToText(location.pathname).toString().length > 3 &&
              convertPathToText(location.pathname)}
          </p>
        </div>
      </div> */}

      <div className="flex">
        <div className="relative flex items-center w-[180px] mr-2 ml-8">
          <p className="uppercase text-lowContrast text-sm font-semibold mr-2">Fleet</p>

          <div className="border border-lowContrast dark:border-layer-600 flex items-center w-full bg-light-200 dark:bg-layer-300 hover:bg-light-300 dark:hover:bg-layer-400 cursor-pointer transition-all rounded relative text-layer-100 dark:text-white">
            <div
              className="flex justify-between items-center w-full rounded p-2"
              onClick={() => setFleetsSelectOpen(!fleetsSelectOpen)}
            >
              <p className="flex-1 overflow-ellipsis whitespace-nowrap overflow-hidden font-medium">
                {currentFleet}
              </p>
              <div className="flex items-center justify-center">
                <button
                  type="button"
                  onClick={() => setFleetsSelectOpen(!fleetsSelectOpen)}
                  className={
                    !fleetsSelectOpen
                      ? 'rotate-180 transition-all duration-300'
                      : ' transition-all duration-300'
                  }
                >
                  <img
                    src={`/icons/${theme === 'light' ? 'light' : 'dark'}/arrow.svg`}
                    alt="open/close"
                  />
                </button>
              </div>
            </div>
            {fleetsSelectOpen && (
              <ul className="absolute top-12 left-0 z-50 w-full border border-lowContrast dark:border-layer-600">
                <li
                  className="p-3 bg-light-200 dark:bg-layer-200 hover:bg-light-300 dark:hover:bg-layer-300 transition-all cursor-pointer overflow-ellipsis whitespace-nowrap overflow-hidden border-b border-lowContrast dark:border-layer-600"
                  key="all"
                  onClick={() => {
                    dispatch(setFleet('all'));
                    setFleetsSelectOpen(false);
                  }}
                >
                  All Fleets
                </li>
                {fleets.map((myfleet: any) => {
                  return (
                    <li
                      className="p-3 bg-light-200 dark:bg-layer-200 hover:bg-light-300 dark:hover:bg-layer-300 transition-all cursor-pointer overflow-ellipsis whitespace-nowrap overflow-hidden border-b border-lowContrast dark:border-layer-600"
                      key={myfleet[0]}
                      onClick={() => {
                        dispatch(setFleet(myfleet.fleetName));
                        setFleetsSelectOpen(false);
                      }}
                    >
                      <div>
                        <p>{myfleet.fleetName}</p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        </div>
      </div>

      <div className="p-2">
        <CustomLink text="Deploy Robot" to="/deploy-robot" icon="plus" />
      </div>
      <div onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className="cursor-pointer">
        {theme === 'dark' ? <img src="icons/dark/sun.svg" /> : <img src="icons/light/moon.svg" />}
      </div>
      <div className="flex justify-end items-center">
        <ul className="flex mr-4">
          <li className="bg-light-200 dark:bg-layer-300 flex mr-2 rounded border border-lowContrast dark:border-layer-600 cursor-pointer transition-all hover:bg-light-300 dark:hover:bg-layer-400">
            <img src={`/icons/${theme}/help.svg`} alt="questions" />
          </li>
          <li className="bg-light-200 dark:bg-layer-300 flex mr-2 rounded border border-lowContrast dark:border-layer-600 cursor-pointer transition-all hover:bg-light-300 dark:hover:bg-layer-400">
            <img src={`/icons/${theme}/bell.svg`} alt="notifications" />
          </li>
          <li className="bg-light-200 dark:bg-layer-300 flex mr-2 rounded border border-lowContrast dark:border-layer-600 cursor-pointer transition-all hover:bg-light-300 dark:hover:bg-layer-400">
            <img src={`/icons/${theme}/user.svg`} alt="user" />
          </li>
        </ul>
      </div>
    </header>
  );
};
export default Header;
