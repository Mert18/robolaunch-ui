import React, { useState } from 'react';
import { useFilters, useSortBy, useTable } from 'react-table';
import ConnectionHubStatus from '../../components/Pages/CloudInstances/ConnectionHubStatus';
import InstanceStatus from '../../components/Pages/CloudInstances/InstanceStatus';
import ResourceData from '../../components/Pages/CloudInstances/ResourceData';
import CloudInstancesTable from '../../components/Table/CloudInstancesTable';
import cloudInstances from '../../mock/mockCloudInstances.json';

const CloudInstances = () => {
  const [loading, setLoading] = useState(false);
  const [filterInput, setFilterInput] = useState('');
  const handleFilterChange = (e) => {
    const value = e.target.value || undefined;
    tableInstance.setFilter('cloudInstanceName', value);
    setFilterInput(value);
  };

  const data = React.useMemo(
    () =>
      cloudInstances.map((cloudInstance) => {
        return {
          key: cloudInstance.cloudInstanceName,
          regionName: cloudInstance.regionName,
          cloudInstanceName: cloudInstance.cloudInstanceName,
          numberOfFleets: cloudInstance.numberOfFleets,
          numberOfRobots: cloudInstance.numberOfRobots,
          numberOfPhysicalInstances: cloudInstance.numberOfPhysicalInstances,
          provisionedResource: cloudInstance.provisionedResource,
          connectionHubStatus: cloudInstance.connectionHubStatus,
          instanceStatus: cloudInstance.instanceStatus
        };
      }),
    []
  );

  const columns = React.useMemo(
    () => [
      {
        Header: 'Instance Name',
        accessor: 'cloudInstanceName'
      },
      {
        Header: 'Region',
        accessor: 'regionName'
      },
      {
        Header: '# of Fleets',
        accessor: 'numberOfFleets'
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
        Header: 'Connection Hub Status',
        accessor: 'connectionHubStatus',
        Cell: ({ cell: { value } }) => <ConnectionHubStatus values={value} />
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
      <CloudInstancesTable
        tableInstance={tableInstance}
        loading={loading}
        filterInput={filterInput}
        handleFilterChange={handleFilterChange}
        title="Cloud Instances"
        placeholderSearch="Search Instance"
        textCreateButton="Create Cloud Instance"
        createType="link"
        createLink="/create-cloud-instance"
      />
    </div>
  );
};

export default CloudInstances;
