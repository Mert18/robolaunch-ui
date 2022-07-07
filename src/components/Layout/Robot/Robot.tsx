/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ThemeContext } from '../../../context/ThemeContext';
import MenuItem from '../../Pages/Fleet/Robots/Robot/RobotMenuItem/RobotMenuItem';

const RobotInnerLayout = ({ children, id }: any) => {
  const { theme, setTheme } = useContext(ThemeContext);
  const [path, setPath] = useState('');
  const location = useLocation();

  useEffect(() => {
    setPath(location.pathname.split('/').reverse()[0]);
  }, [location]);
  return (
    <div className="flex flex-col items-center min-h-[90vh]">
      <div className="bg-light-200 dark:bg-layer-200 rounded border border-lowContrast dark:border-layer-600 mt-4">
        <ul className="flex flex-wrap flex-row justify-center items-center font-semibold w-full">
          <MenuItem
            path={`/robots/${id}`}
            text="Overview"
            img={`${theme}/robot/dashboard.svg`}
            active={location.pathname.split('/').reverse()[1] === 'robots'}
          />

          <Link
            target="_blank"
            to={`/robots/${id}/vdi`}
            className={`flex items-center justify-center ${
              path === 'vdi' ? 'bg-light-400 dark:bg-layer-500' : ''
            } py-3 px-3  hover:bg-light-400 dark:hover:bg-layer-500 h-full`}
          >
            <img src={`/icons/${theme}/robot/vdi.svg`} />
            <p>VDI</p>
          </Link>

          <MenuItem
            path={`/robots/${id}/development`}
            text="Development"
            img={`${theme}/robot/development.svg`}
            active={path === 'development'}
          />

          <MenuItem
            path={`/robots/${id}/teleoperation`}
            text="Teleoperation"
            img={`${theme}/robot/teleoperation.svg`}
            active={path === 'teleoperation'}
          />

          <MenuItem
            path={`/robots/${id}/tasks`}
            text="Tasks"
            img={`${theme}/robot/tasks.svg`}
            active={path === 'tasks'}
          />

          <MenuItem
            path={`/robots/${id}/rosbag`}
            text="Rosbag"
            img={`${theme}/robot/rosbag.svg`}
            active={path === 'rosbag'}
          />

          {/*           <MenuItem
            path={`/robots/${id}/performance`}
            text="Performance"
            img="performance"
            active={path === 'performance'}
          />

          <MenuItem
            path={`/robots/${id}/fault`}
            text="Fault"
            img="fault"
            active={path === 'fault'}
          />

          <MenuItem
            path={`/robots/${id}/security`}
            text="Security"
            img="security"
            active={path === 'security'}
          /> */}

          <MenuItem
            path={`/robots/${id}/configuration`}
            text="Configuration"
            img={`${theme}/robot/configuration.svg`}
            active={path === 'configuration'}
          />
        </ul>
      </div>
      <div className="min-h-[80vh] mt-4 w-full">{children}</div>
    </div>
  );
};

export default RobotInnerLayout;
