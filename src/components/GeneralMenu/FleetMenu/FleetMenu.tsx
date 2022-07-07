/* eslint-disable react/jsx-curly-brace-presence */
import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { ThemeContext } from '../../../context/ThemeContext';
import MenuItem from '../MenuItem/MenuItem';

interface IFleetMenu {
  isOpen: boolean;
}

const FleetMenu = ({ isOpen }: IFleetMenu) => {
  const { theme, setTheme } = useContext(ThemeContext);
  const location = useLocation();
  return (
    <li>
      <ul>
        <MenuItem
          isOpen={isOpen}
          path={`/robots`}
          text="Robots"
          img={`${theme}/menu/robots.svg`}
          active={location.pathname.split('/')[1] === 'robots'}
        />
        <MenuItem
          isOpen={isOpen}
          path={`/rosbag`}
          text="ROSBAG Management"
          img={`${theme}/menu/rosbag.svg`}
          active={location.pathname.split('/')[1] === 'rosbag'}
        />
        <MenuItem
          isOpen={isOpen}
          path={`/task-scheduling`}
          text="Task Scheduling"
          img={`${theme}/menu/task.svg`}
          active={location.pathname.split('/')[1] === 'task-scheduling'}
        />
        <MenuItem
          isOpen={isOpen}
          path={`/simulation`}
          text="Simulation"
          img={`${theme}/menu/simulation.svg`}
          active={location.pathname.split('/')[1] === 'simulation'}
        />
        <MenuItem
          isOpen={isOpen}
          path={`/map-navigation`}
          text="Map & Navigation"
          img={`${theme}/menu/map.svg`}
          active={location.pathname.split('/')[1] === 'map-navigation'}
        />
        <MenuItem
          isOpen={isOpen}
          path={`/performance-management`}
          text="Performance Management"
          img={`${theme}/menu/performancemanagement.svg`}
          active={location.pathname.split('/')[1] === 'performance-management'}
        />
        <MenuItem
          isOpen={isOpen}
          path={`/fault-management`}
          text="Fault Management"
          img={`${theme}/menu/fault.svg`}
          active={location.pathname.split('/')[1] === 'fault-management'}
        />
        <MenuItem
          isOpen={isOpen}
          path={`/security-management`}
          text="Security Management"
          img={`${theme}/menu/security.svg`}
          active={location.pathname.split('/')[1] === 'security-management'}
        />
        <MenuItem
          isOpen={isOpen}
          path={`/dds-router-observer`}
          text="DDS Router & Observer"
          img={`${theme}/menu/router.svg`}
          active={location.pathname.split('/')[1] === 'dds-router-observer'}
        />
        <MenuItem
          isOpen={isOpen}
          path={`/manager-development`}
          text="Manager Development"
          img={`${theme}/menu/managerdevelopment.svg`}
          active={location.pathname.split('/')[1] === 'manager-development'}
        />
        <MenuItem
          isOpen={isOpen}
          path={`/k8s-components`}
          text="K8S Components"
          img={`${theme}/menu/k8s.svg`}
          active={location.pathname.split('/')[1] === 'k8s-components'}
        />
        <MenuItem
          isOpen={isOpen}
          path={`/fleet-settings`}
          text="Fleet Settings"
          img={`${theme}/menu/settings.svg`}
          active={location.pathname.split('/')[1] === 'fleet-settings'}
        />
      </ul>
    </li>
  );
};

export default FleetMenu;
