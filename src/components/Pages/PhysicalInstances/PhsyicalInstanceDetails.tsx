import React, { useState } from 'react';
import Modal from '../../Modal/Modal';
import RobotsTable from '../../Table/RobotsTable';
import physicalInstances from '../../../mock/mockPhysicalInstances.json';
import StatusData from '../Fleet/Robots/StatusData';
import BatteryData from '../Fleet/Robots/BatteryData';
import { useTable, useSortBy, useFilters } from 'react-table';

const PhsyicalInstanceDetails = ({ handleClose, instance }) => {
  const [filterInput, setFilterInput] = useState('');
  const [loading, setLoading] = useState(false);
  const handleFilterChange = (e) => {
    const value = e.target.value || undefined;
    tableInstance.setFilter('robotName', value);
    setFilterInput(value);
  };
  const data = React.useMemo(() => {
    return physicalInstances
      .find((ins) => ins.physicalInstanceName === instance.values.physicalInstanceName)
      .robots.map((robot) => {
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
  }, []);

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
      title="Physical Instance"
      info="Detailed information about physical istance #1"
    >
      <div className="flex w-[90%] min-h-[60vh]">
        <div className="w-full flex justify-center pl-2">
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
    </Modal>
  );
};

export default PhsyicalInstanceDetails;
