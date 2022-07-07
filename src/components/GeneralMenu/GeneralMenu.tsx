/* eslint-disable prefer-arrow-callback */
import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import ReactModal from 'react-modal';
import FleetMenu from './FleetMenu/FleetMenu';
import MenuItem from './MenuItem/MenuItem';
import Logo from './Logo/Logo';
import { useAppSelector } from '../../hooks/redux';
import SelectEnvironment from './SelectInstance/SelectInstance';
import { useGetPokemonByNameQuery } from '../../store/services/testings';
import { ThemeContext } from '../../context/ThemeContext';

if (process.env.NODE_ENV !== 'test') ReactModal.setAppElement('#root');

const GeneralMenu = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const location = useLocation();
  const { isOpen } = useAppSelector((state) => state.menu);
  const fleet = useAppSelector((state) => state.fleet);

  const { data, error, isLoading } = useGetPokemonByNameQuery('bulbasaur');
  /* 
  useEffect(() => {
    console.log(data);
  }, [data]); */

  return (
    <div
      className="flex flex-col fixed top-0 left-0 overflow-hidden h-[100vh] bg-light-100 dark:bg-layer-200 border-r border-light-300 dark:border-layer-600 shadow-md"
      style={isOpen ? { width: '270px' } : { width: '65px' }}
    >
      <Logo isOpen={isOpen} />

      {/* HANLE MENU STATUS (OPEN / CLOSE) */}
      {/* <div className="menu__setmenu" onClick={handleMenuStatus} role="none">
        <img
          src="/icons/arrow.svg"
          alt="menu"
          width="8px"
          style={
            isOpen
              ? { transition: 'var(--transition)' }
              : { transition: 'var(--transition)', transform: 'rotate(180deg)' }
          }
        />
      </div> */}
      <div className="relative">
        <ul className="absolute top-0 bottom-0 left-0 -right-3 overflow-y-scroll overflow-x-hidden min-h-[87vh]">
          <MenuItem
            isOpen={isOpen}
            path="/"
            text="General Dashboard"
            img={`${theme}/menu/dashboard.svg`}
            active={
              location.pathname.split('/').length === 2 &&
              location.pathname.split('/')[1].length < 2
            }
          />
          {/* ENVIRONMENT SELECTION */}
          <SelectEnvironment isOpen={isOpen} />
          <div className="w-full h-[2px] my-2 bg-light-300 dark:bg-layer-600"></div>

          <p className="text-lowContrast uppercase font-bold text-sm ml-2 ">Fleet - {fleet.name}</p>
          {/* FLEET INNER MENU */}
          <FleetMenu isOpen={isOpen} />
          <div className="w-full h-[2px] my-2 bg-light-300 dark:bg-layer-600"></div>

          {/* MAIN MENU CONTINUED */}
          <MenuItem
            isOpen={isOpen}
            path="/marketplace"
            text="Marketplace"
            img={`${theme}/menu/marketplace.svg`}
            active={location.pathname.split('/')[1] === 'marketplace'}
          />
          <MenuItem
            isOpen={isOpen}
            path="/user-role-management"
            text="User Role Management"
            img={`${theme}/menu/users.svg`}
            active={location.pathname.split('/')[1] === 'user-role-management'}
          />
          <MenuItem
            isOpen={isOpen}
            path="/accounting"
            text="Accounting"
            img={`${theme}/menu/accounting.svg`}
            active={location.pathname.split('/')[1] === 'accounting'}
          />
          <MenuItem
            isOpen={isOpen}
            path="/performance"
            text="Performance"
            img={`${theme}/menu/performance.svg`}
            active={location.pathname.split('/')[1] === 'performance'}
          />
        </ul>
      </div>
    </div>
  );
};

export default GeneralMenu;
