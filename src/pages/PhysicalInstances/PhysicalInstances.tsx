import React, { useState } from 'react';
import { useFilters, useSortBy, useTable } from 'react-table';
import InstanceStatus from '../../components/Pages/CloudInstances/InstanceStatus';
import ResourceData from '../../components/Pages/CloudInstances/ResourceData';
import VPNConnectionStatus from '../../components/Pages/PhysicalInstances/VPNConnectionStatus';
import PhysicalInstancesTable from '../../components/Table/PhysicalInstancesTable';
import physicalInstances from '../../mock/mockPhysicalInstances.json';

const PhysicalInstances = () => {
  const [loading, setLoading] = useState(false);
  const [filterInput, setFilterInput] = useState('');
  const handleFilterChange = (e) => {
    const value = e.target.value || undefined;
    tableInstance.setFilter('physicalInstanceName', value);
    setFilterInput(value);
  };

  const data = React.useMemo(
    () =>
      physicalInstances.map((cluster) => {
        return {
          key: cluster.physicalInstanceName,
          physicalInstanceName: cluster.physicalInstanceName,
          regionName: cluster.regionName,
          numberOfRobots: cluster.numberOfRobots,
          vpnConnectionStatus: cluster.vpnConnectionStatus,
          provisionedResource: cluster.provisionedResource,
          instanceStatus: cluster.instanceStatus
        };
      }),
    []
  );

  const columns = React.useMemo(
    () => [
      {
        Header: 'Instance Name',
        accessor: 'physicalInstanceName'
      },
      {
        Header: 'Region',
        accessor: 'regionName'
      },
      {
        Header: '# of Robots',
        accessor: 'numberOfRobots'
      },
      {
        Header: 'Provisioned Resource',
        accessor: 'provisionedResource',
        Cell: ({ cell: { value } }) => <ResourceData values={value} />
      },
      {
        Header: 'VPN Connection Status',
        accessor: 'vpnConnectionStatus',
        Cell: ({ cell: { value } }) => <VPNConnectionStatus values={value} />
      },
      {
        Header: 'Instance Status',
        accessor: 'instanceStatus',
        Cell: ({ cell: { value } }) => <InstanceStatus values={value} />
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
    <div className="flex flex-col items-center justify-center p-8 text-sm relative min-h-[30vh]">
      <PhysicalInstancesTable
        tableInstance={tableInstance}
        loading={loading}
        filterInput={filterInput}
        handleFilterChange={handleFilterChange}
        title="Physical Instances"
        placeholderSearch="Search Instance"
        textCreateButton="Create Physical Instance"
        createType="link"
        createLink="/create-physical-instance"
      />
    </div>
  );
};

export default PhysicalInstances;
