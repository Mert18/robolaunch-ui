import React from 'react';
import { Link } from 'react-router-dom';
import './RobotMenuItem.css';

const RobotMenuItem = ({ path, text, img, active }: any) => {
  return (
    <li className={`flex items-center justify-center`}>
      <Link
        to={path}
        className={`${
          active ? ' bg-light-400 dark:bg-layer-400' : ''
        } flex items-center justify-center w-full h-4/5 hover:bg-light-300 dark:hover:bg-layer-400 p-3`}
      >
        <img src={`/icons/${img}`} alt={img} className="pr-2" />
        <p>{text}</p>
      </Link>
    </li>
  );
};

export default RobotMenuItem;
