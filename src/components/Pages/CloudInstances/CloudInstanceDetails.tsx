import React, { useState } from 'react';
import Modal from '../../Modal/Modal';
import BatteryData from '../Fleet/Robots/BatteryData';
import StatusData from '../Fleet/Robots/StatusData';
import { useTable, useSortBy, useFilters } from 'react-table';
import RobotsTable from '../../Table/RobotsTable';
import robots from '../../../mock/mockRobots.json';
import cloudInstances from '../../../mock/mockCloudInstances.json';
import physicalInstances from '../../../mock/mockPhysicalInstances.json';
import ResourceData from './ResourceData';

const CloudInstanceDetails = ({ handleClose, instance }: any) => {
  const [filterInput, setFilterInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [selectedFleet, setSelectedFleet] = useState('all');

  const handleChangeFleet = (name) => {
    setSelectedFleet(name);
  };

  const handleFilterChange = (e) => {
    const value = e.target.value || undefined;
    tableInstance.setFilter('robotName', value);
    setFilterInput(value);
  };
  const data = React.useMemo(() => {
    if (selectedFleet === 'all') {
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
        .filter((robot) => robot.fleet === selectedFleet)
        .map((robot) => {
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
    }
  }, [selectedFleet]);

  const columns = React.useMemo(
    () => [
      {
        Header: 'Robot Name',
        accessor: 'robotName'
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
    <Modal
      loading={false}
      handleClose={handleClose}
      title="Cloud Instance"
      info={`Detailed information about ${instance.values.cloudInstanceName}`}
    >
      <div className="flex w-[90%] min-h-[40vh]">
        <div className="w-64">
          <div className="bg-light-200 dark:bg-layer-200 dark:border shadow-md dark:border-layer-600 rounded">
            <div className="mb-4 p-2 border-b border-lowContrast dark:border-layer-600 font-semibold uppercase">
              <p>Fleets</p>
            </div>
            <div>
              <div
                className={`  p-2 hover:bg-light-300 dark:hover:bg-layer-300 cursor-pointer rounded ${
                  selectedFleet === 'all'
                    ? 'bg-light-300 dark:bg-layer-300'
                    : 'bg-light-200 dark:bg-layer-200'
                }`}
                onClick={() => setSelectedFleet('all')}
              >
                <p>All</p>
              </div>
              {cloudInstances
                .find((is) => is.cloudInstanceName === instance.values.cloudInstanceName)
                .fleets.map((fleet) => (
                  <div
                    key={fleet.name}
                    onClick={() => handleChangeFleet(fleet.name)}
                    className={` p-2 hover:bg-light-300 dark:hover:bg-layer-300 cursor-pointer rounded ${
                      selectedFleet === fleet.name
                        ? 'bg-light-300 dark:bg-layer-300'
                        : 'bg-light-200 dark:bg-layer-200'
                    }`}
                  >
                    <p>{fleet.name}</p>
                  </div>
                ))}
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center pl-2">
          <RobotsTable
            tableInstance={tableInstance}
            loading={loading}
            filterInput={filterInput}
            handleFilterChange={handleFilterChange}
            title="Robots"
            placeholderSearch="Search Robot"
            createType="button"
          />
        </div>
      </div>
      <div className="m-4 dark:border shadow-lg dark:border-layer-600 rounded bg-light-200 dark:bg-layer-200 w-[90%]">
        <div className="p-2 border-b border-black-400 uppercase font-semibold">
          <p>Physical Instances</p>
        </div>
        <div className="flex flex-wrap py-6">
          {physicalInstances
            .filter((ins) => ins.connectionHub === instance.values.cloudInstanceName)
            .map((ins) => (
              <div className="mr-12 w-[230px] p-2" key={ins.physicalInstanceName}>
                <div>
                  <p>{ins.physicalInstanceName}</p>
                </div>
                <ResourceData values={ins.provisionedResource} />
              </div>
            ))}
        </div>
      </div>
    </Modal>
  );
};

export default CloudInstanceDetails;
