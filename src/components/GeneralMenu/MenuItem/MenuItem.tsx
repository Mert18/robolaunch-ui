import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../../context/ThemeContext';

interface IMenuItem {
  isOpen: boolean;
  path: string;
  text: string;
  img: string;
  active: boolean;
}

const MenuItem = ({ isOpen, path, text, img, active }: IMenuItem) => {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <li className="flex justify-center select-none text-sm my-1">
      <Link
        to={path}
        className={`${
          theme === 'dark' ? 'text-white bg-layer-200' : 'text-layer-100 bg-light-100'
        } flex ${
          isOpen ? 'justify-start' : 'justify-center'
        } items-center transition-all rounded w-full hover:bg-light-200 dark:hover:bg-layer-300 ${
          active
            ? theme === 'dark'
              ? 'text-white bg-layer-400'
              : 'text-layer-100 bg-light-300'
            : ''
        }`}
      >
        <img src={`/icons/${img}`} alt={img} />
        <p
          className={isOpen ? 'whitespace-nowrap text-sm font-medium' : 'whitespace-nowrap hidden'}
        >
          {text}
        </p>
      </Link>
    </li>
  );
};

export default MenuItem;
