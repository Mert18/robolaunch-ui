/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useContext, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard/Dashboard';
import Robots from './pages/Fleet/Robots/Robots';
import Rosbag from './pages/Fleet/Rosbag/Rosbag';
import TaskScheduling from './pages/Fleet/TaskScheduling/TaskScheduling';
import Simulation from './pages/Fleet/Simulation/Simulation';
import MapNavigation from './pages/Fleet/MapNavigation/MapNavigation';
import PerformanceManagement from './pages/Fleet/PerformanceManagement/PerformanceManagement';
import FaultManagement from './pages/Fleet/FaultManagement/FaultManagement';
import SecurityManagement from './pages/Fleet/SecurityManagement/SecurityManagement';
import ManagerDevelopment from './pages/Fleet/ManagerDevelopment/ManagerDevelopment';
import K8sComponents from './pages/Fleet/K8sComponents/K8sComponents';
import Marketplace from './pages/Marketplace/Marketplace';
import Accounting from './pages/Accounting/Accounting';
import Performance from './pages/Performance/Performance';
import Robot from './pages/Fleet/Robots/Robot/Robot';
import NotFound from './pages/NotFound/NotFound';
import RobotConfiguration from './pages/Fleet/Robots/Robot/RobotConfiguration/RobotConfiguration';
import RobotDevelopment from './pages/Fleet/Robots/Robot/RobotDevelopment/RobotDevelopment';
import RobotTeleoperation from './pages/Fleet/Robots/Robot/RobotTeleoperation/RobotTeleoperation';
import RobotTasks from './pages/Fleet/Robots/Robot/RobotTasks/RobotTasks';
import RobotROSBAG from './pages/Fleet/Robots/Robot/RobotRosbag/RobotRosbag';
import RobotPerformance from './pages/Fleet/Robots/Robot/RobotPerformance/RobotPerformance';
import RobotFault from './pages/Fleet/Robots/Robot/RobotFault/RobotFault';
import RobotSecurity from './pages/Fleet/Robots/Robot/RobotSecurity/RobotSecurity';
import FleetSettings from './pages/Fleet/FleetSettings/FleetSettings';
import GeneralMenu from './components/GeneralMenu/GeneralMenu';
import Header from './components/Layout/Header';
import RobotVDI from './pages/Fleet/Robots/Robot/RobotVDI/RobotVDI';
import CloudInstances from './pages/CloudInstances/CloudInstances';
import PhysicalInstances from './pages/PhysicalInstances/PhysicalInstances';
import CreatePhysicalInstance from './pages/CreatePhysicalInstance/CreatePhysicalInstance';
import CreateCloudInstance from './pages/CreateCloudInstance/CreateCloudInstance';
import UserRoleManagement from './pages/UserRoleManagement/UserRoleManagement';
import { useAppSelector } from './hooks/redux';
import DeployRobot from './pages/DeployRobot/DeployRobot';
import { useLocation } from 'react-router';

const App = () => {
  const { isOpen } = useAppSelector((state) => state.menu);
  const location = useLocation();

  const [currentPath, setCurrentPath] = useState(
    location.pathname.split('/')[location.pathname.split('/').length - 1]
  );

  useEffect(() => {
    setCurrentPath(location.pathname.split('/')[location.pathname.split('/').length - 1]);
  }, [location.pathname, currentPath]);

  return (
    <div className="flex text-layer-100 bg-light-100 dark:text-white dark:bg-layer-100">
      {currentPath === 'vdi' ? (
        <Routes>
          <Route path={`robots/:id/vdi`} element={<RobotVDI />} />
        </Routes>
      ) : (
        <>
          <div className="z-50" style={isOpen ? { width: '315px' } : { width: '68px' }}>
            <GeneralMenu />
          </div>
          <div className="w-full min-h-[100vh] bg-light-100 dark:bg-layer-100">
            <Header />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/deploy-robot" element={<DeployRobot />} />

              <Route path={`instances/cloud-instances`} element={<CloudInstances />} />
              <Route path={`/create-cloud-instance`} element={<CreateCloudInstance />} />

              <Route path={`instances/physical-instances`} element={<PhysicalInstances />} />
              <Route path={`/create-physical-instance`} element={<CreatePhysicalInstance />} />

              <Route path={`robots`} element={<Robots />} />
              <Route path={`robots/:id/*`} element={<Robot />} />

              <Route path={`robots/:id/development`} element={<RobotDevelopment />} />
              <Route path={`robots/:id/teleoperation`} element={<RobotTeleoperation />} />
              <Route path={`robots/:id/tasks`} element={<RobotTasks />} />
              <Route path={`robots/:id/rosbag`} element={<RobotROSBAG />} />
              <Route path={`robots/:id/performance`} element={<RobotPerformance />} />
              <Route path={`robots/:id/fault`} element={<RobotFault />} />
              <Route path={`robots/:id/security`} element={<RobotSecurity />} />
              <Route path={`robots/:id/configuration`} element={<RobotConfiguration />} />

              <Route path={`rosbag`} element={<Rosbag />} />
              <Route path={`task-scheduling`} element={<TaskScheduling />} />
              <Route path={`simulation`} element={<Simulation />} />
              <Route path={`map-navigation`} element={<MapNavigation />} />
              <Route path={`performance-management`} element={<PerformanceManagement />} />
              <Route path={`fault-management`} element={<FaultManagement />} />
              <Route path={`security-management`} element={<SecurityManagement />} />
              <Route path={`manager-development`} element={<ManagerDevelopment />} />
              <Route path={`k8s-components`} element={<K8sComponents />} />
              <Route path={`fleet-settings`} element={<FleetSettings />} />

              <Route path="/marketplace" element={<Marketplace />} />
              <Route path="/user-role-management" element={<UserRoleManagement />} />
              <Route path="/accounting" element={<Accounting />} />
              <Route path="/performance" element={<Performance />} />
              <Route path="*" element={<NotFound />} />

              {/* <Route */}
              {/*   path="/adminroute" */}
              {/*   element={ */}
              {/*     <RolesRoute groups={['platform-admin']}> */}
              {/*       <Dashboard /> */}
              {/*     </RolesRoute> */}
              {/*   } */}
              {/* /> */}
            </Routes>
          </div>
        </>
      )}
    </div>
  );
};

export default App;
