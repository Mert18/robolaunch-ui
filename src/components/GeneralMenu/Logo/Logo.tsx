import React, { useContext } from 'react';
import { ThemeContext } from '../../../context/ThemeContext';
import { useAppDispatch } from '../../../hooks/redux';
import { setIsOpen } from '../../../store/features/menu/menuSlice';

interface ILogo {
  isOpen: boolean;
}

const Logo = ({ isOpen }: ILogo) => {
  const dispatch = useAppDispatch();
  const { theme, setTheme } = useContext(ThemeContext);

  const handleMenuStatus = () => {
    dispatch(setIsOpen());
  };
  return (
    <div className="flex items-center justify-center h-[128px] relative">
      <div
        className="absolute bottom-0 right-0 z-50 bg-light-300 hover:bg-light-400 dark:bg-layer-600 dark:hover:bg-layer-400 cursor-pointer"
        onClick={handleMenuStatus}
        role="none"
      >
        <img
          src={`/icons/${theme}/arrow.svg`}
          alt="menu"
          className={isOpen ? 'rotate-90 transition-all' : '-rotate-90 transition-all'}
        />
      </div>
      {isOpen ? (
        <div className="menu__logo__open">
          <img src={`/icons/${theme}/menu/robolaunch.svg`} alt="robolaunch" />
        </div>
      ) : (
        <div className="menu__logo__closed">
          <img src={`/icons/${theme}/menu/robolaunch-mini.svg`} alt="robolaunch" />
        </div>
      )}
    </div>
  );
};

export default Logo;
