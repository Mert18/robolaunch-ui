import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import RobotInnerLayout from '../../../../components/Layout/Robot/Robot';
import RobotHero from '../../../../components/Pages/Fleet/Robots/Robot/RobotHero/RobotHero';
import { ThemeContext } from '../../../../context/ThemeContext';

const Robot = () => {
  const params = useParams();
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <RobotInnerLayout id={params.id}>
      <div>
        {/* Robot Hero Component */}
        <div className="flex justify-center">
          <div className="flex flex-col items-center justify-center w-[80%] border border-lowContrast shadow-md dark:border-layer-600 rounded mb-4">
            <div className="flex items-start justify-start w-full bg-light-200 dark:bg-layer-200 border-b border-lowContrast dark:border-layer-600">
              <div className="flex justify-start items-center w-full">
                <img src={`/icons/${theme}/robot/robotInfo.svg`} alt="info" />
                <p className="text-lowContrast text-sm font-bold uppercase">Robot Info</p>
              </div>
            </div>
            <RobotHero />
          </div>
        </div>

        {/* Robot Chart Component */}
        <div className="flex justify-center">
          <div className="flex flex-wrap w-[80%]">
            <div className="m-2 shadow-lg">
              <iframe
                src={`http://54.174.183.235:31294/d-solo/r6lloPJmz/ceph-cluster?orgId=1&from=1656904797450&to=1656947997450&theme=${theme}&panelId=1`}
                width="450"
                height="200"
                frameBorder="0"
              ></iframe>
            </div>
            <div className="m-2 shadow-lg">
              <iframe
                src={`http://54.174.183.235:31294/d-solo/r6lloPJmz/ceph-cluster?orgId=1&refresh=1m&from=1657021472890&to=1657064672890&theme=${theme}&panelId=102`}
                width="450"
                height="200"
                frameBorder="0"
              ></iframe>
            </div>
            <div className="m-2 shadow-lg">
              <iframe
                src={`http://54.174.183.235:31294/d-solo/r6lloPJmz/ceph-cluster?orgId=1&from=1657033151636&to=1657044144002&theme=${theme}&panelId=18`}
                width="450"
                height="200"
                frameBorder="0"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </RobotInnerLayout>
  );
};

export default Robot;
