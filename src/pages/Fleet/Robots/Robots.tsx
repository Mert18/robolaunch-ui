import React, { useState } from 'react';

import { useTable, useSortBy, useFilters } from 'react-table';
import RobotsTable from '../../../components/Table/RobotsTable';
import BatteryData from '../../../components/Pages/Fleet/Robots/BatteryData';
import StatusData from '../../../components/Pages/Fleet/Robots/StatusData';
import { useAppSelector } from '../../../hooks/redux';
import robots from '../../../mock/mockRobots.json';
import ToggleOrGo from '../../../components/ToggleOrGo/ToggleOrGo';
import RobotName from '../../../components/Pages/Fleet/Robots/RobotName';

const Robots = () => {
  const [filterInput, setFilterInput] = useState('');
  const handleFilterChange = (e) => {
    const value = e.target.value || undefined;
    tableInstance.setFilter('robotName', value);
    setFilterInput(value);
  };
  const fleet = useAppSelector((state) => state.fleet);

  const [loading, setLoading] = useState(false);

  const data = React.useMemo(() => {
    if (fleet.name === 'all') {
      return robots.map((robot) => {
        return {
          key: robot.robotName,
          robotName: robot.robotName,
          status: robot.status,
          fleet: robot.fleet,
          distro: robot.distro,
          cloudIDE: robot.cloudIDE,
          router: robot.router,
          VDI: robot.VDI,
          battery: robot.battery
        };
      });
    } else {
      return robots
        .filter((robot) => robot.fleet === fleet.name)
        .map((robot) => {
          return {
            key: robot.robotName,
            robotName: robot.robotName,
            status: robot.status,
            fleet: robot.fleet,
            distro: robot.distro,
            teleoperation: robot.teleoperation,
            cloudIDE: robot.cloudIDE,
            router: robot.router,
            VDI: robot.VDI,
            battery: robot.battery
          };
        });
    }
  }, [fleet]);

  const columns = React.useMemo(
    () => [
      {
        Header: 'Robot Name',
        accessor: 'robotName',
        Cell: ({ cell: { value } }) => <RobotName value={value} />
      },
      {
        Header: 'Status',
        accessor: 'status',
        Cell: ({ cell: { value } }) => <StatusData value={value} />
      },
      {
        Header: 'Fleet',
        accessor: 'fleet'
      },
      {
        Header: 'Distro',
        accessor: 'distro'
      },
      {
        Header: 'Teleoperation',
        accessor: 'teleoperation',
        Cell: ({ cell: { value, row } }) => (
          <ToggleOrGo
            value={value}
            link={`${row.original.robotName}/teleoperation`}
            kind="teleoperation"
          />
        )
      },
      {
        Header: 'VDI',
        accessor: 'VDI',
        Cell: ({ cell: { value, row } }) => (
          <ToggleOrGo value={value} link={`${row.original.robotName}/vdi`} kind="VDI" />
        )
      },
      {
        Header: 'CloudIDE',
        accessor: 'cloudIDE',
        Cell: ({ cell: { value, row } }) => (
          <ToggleOrGo value={value} link={`${row.original.robotName}/cloudide`} kind="Cloud IDE" />
        )
      },
      {
        Header: 'Router',
        accessor: 'router'
      },

      {
        Header: 'Battery',
        accessor: 'battery',
        Cell: ({ cell: { value } }) => <BatteryData value={value} />
      }
    ],
    []
  );

  const tableInstance = useTable(
    {
      columns,
      data
    },
    useFilters,
    useSortBy
  );

  return (
    <div>
      <div className="flex flex-col items-center justify-center p-8 text-sm relative min-h-[30vh]">
        <RobotsTable
          tableInstance={tableInstance}
          loading={loading}
          filterInput={filterInput}
          handleFilterChange={handleFilterChange}
          title="Robots"
          placeholderSearch="Search Robot"
          details="robots"
          createType="button"
        />
      </div>
    </div>
  );
};

export default Robots;
