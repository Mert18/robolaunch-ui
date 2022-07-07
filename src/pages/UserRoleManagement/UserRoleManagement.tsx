import React, { useState } from 'react';

import { useTable, useSortBy, useFilters } from 'react-table';
import Table from '../../components/Table/Table';
import organizations from '../../mock/mockOrganization.json';
import users from '../../mock/mockUsers.json';
import groups from '../../mock/mockGroups.json';
import ReactModal from 'react-modal';
import { modalStyles } from '../../utils/css/modalStyles';
import CreateUser from './CreateUser/CreateUser';
import CreateOrganization from './CreateOrganization/CreateOrganization';
import CreateGroup from './CreateGroup/CreateGroup';

const UserRoleManagement = () => {
  const [loadingOrganization, setLoadingOrganization] = useState(false);
  const [loadingUser, setLoadingUser] = useState(false);
  const [loadingGroup, setLoadingGroup] = useState(false);

  const [isUserCreateModalOpen, setIsUserCreateModalOpen] = useState(false);
  const [isOrganizationCreateModalOpen, setIsOrganizationCreateModalOpen] = useState(false);
  const [isGroupCreateModalOpen, setIsGroupCreateModalOpen] = useState(false);

  const [isUserEditModalOpen, setIsUserEditModalOpen] = useState(false);
  const [isOrganizationEditModalOpen, setIsOrganizationEditModalOpen] = useState(false);
  const [isGroupEditModalOpen, setIsGroupEditModalOpen] = useState(false);

  const [filterInputOrganization, setFilterInputOrganization] = useState('');
  const [filterInputUser, setFilterInputUser] = useState('');
  const [filterInputGroup, setFilterInputGroup] = useState('');

  const handleOpenUserCreateModal = () => {
    setIsUserCreateModalOpen(true);
  };
  const handleCloseUserCreateModal = () => {
    setIsUserCreateModalOpen(false);
  };
  const handleOpenOrganizationCreateModal = () => {
    setIsOrganizationCreateModalOpen(true);
  };
  const handleCloseOrganizationCreateModal = () => {
    setIsOrganizationCreateModalOpen(false);
  };
  const handleOpenGroupCreateModal = () => {
    setIsGroupCreateModalOpen(true);
  };
  const handleCloseGroupCreateModal = () => {
    setIsGroupCreateModalOpen(false);
  };

  const handleFilterChangeOrganization = (e) => {
    const value = e.target.value || undefined;
    tableInstanceOrganization.setFilter('name', value);
    setFilterInputOrganization(value);
  };

  const handleFilterChangeUser = (e) => {
    const value = e.target.value || undefined;
    tableInstanceUser.setFilter('name', value);
    setFilterInputUser(value);
  };

  const handleFilterChangeGroup = (e) => {
    const value = e.target.value || undefined;
    tableInstanceGroup.setFilter('name', value);
    setFilterInputGroup(value);
  };

  /* Organization data and column */
  const dataOrganization = React.useMemo(() => {
    return organizations.map((organization) => {
      return {
        key: organization.id,
        name: organization.name,
        members: organization.members,
        physicalInstances: organization.physicalInstances,
        cloudInstances: organization.cloudInstances,
        fleets: organization.fleets,
        robots: organization.robots,
        owner: organization.owner,
        createdAt: organization.createdAt
      };
    });
  }, []);

  const columnOrganization = React.useMemo(
    () => [
      {
        Header: 'Name',
        accessor: 'name'
      },
      {
        Header: 'Members',
        accessor: 'members'
      },
      {
        Header: 'Physical Instances',
        accessor: 'physicalInstances'
      },
      {
        Header: 'Cloud Instances',
        accessor: 'cloudInstances'
      },
      {
        Header: 'Fleets',
        accessor: 'fleets'
      },
      {
        Header: 'Robots',
        accessor: 'robots'
      },
      {
        Header: 'Owner',
        accessor: 'owner'
      },
      {
        Header: 'Created At',
        accessor: 'createdAt'
      }
    ],
    []
  );

  /* User data and column */
  const dataUser = React.useMemo(() => {
    return users.map((user) => {
      return {
        key: user.id,
        name: user.name,
        organization: user.organization,
        role: user.role,
        email: user.email
      };
    });
  }, []);

  const columnUser = React.useMemo(
    () => [
      {
        Header: 'Name',
        accessor: 'name'
      },
      {
        Header: 'Organization',
        accessor: 'organization'
      },
      {
        Header: 'Role',
        accessor: 'role'
      },
      {
        Header: 'Email',
        accessor: 'email'
      }
    ],
    []
  );

  /* Group data and column */
  const dataGroup = React.useMemo(() => {
    return groups.map((group) => {
      return {
        key: group.id,
        organization: group.organization,
        name: group.name,
        members: group.members
      };
    });
  }, []);

  const columnGroup = React.useMemo(
    () => [
      {
        Header: 'Name',
        accessor: 'name'
      },
      {
        Header: 'Organization',
        accessor: 'organization'
      },
      {
        Header: 'Members',
        accessor: 'members'
      }
    ],
    []
  );

  /* Table Instances */
  const tableInstanceOrganization = useTable(
    {
      columns: columnOrganization,
      data: dataOrganization
    },
    useFilters,
    useSortBy
  );

  const tableInstanceUser = useTable(
    {
      columns: columnUser,
      data: dataUser
    },
    useFilters,
    useSortBy
  );

  const tableInstanceGroup = useTable(
    {
      columns: columnGroup,
      data: dataGroup
    },
    useFilters,
    useSortBy
  );

  return (
    <div className="flex justify-center mt-8">
      <div className="grid grid-cols-2 2xl:grid-rows-2 grid-rows-3 gap-6 text-sm w-[80%] min-h-[30vh]">
        <div className="col-start-1 col-end-3 self-start row-start-1 row-end-2">
          {/* ORGANIZATION TABLE */}
          <Table
            createType="button"
            filterInput={filterInputOrganization}
            handleFilterChange={handleFilterChangeOrganization}
            loading={loadingOrganization}
            placeholderSearch="Search Organization"
            tableInstance={tableInstanceOrganization}
            title="Organizations"
            details="Organization"
            handleOpenModal={handleOpenOrganizationCreateModal}
          />
        </div>

        {/* USER TABLE */}
        <div className="self-start col-start-1 col-end-3 2xl:col-end-2 row-start-2 row-end-3">
          <Table
            createType="button"
            filterInput={filterInputUser}
            handleFilterChange={handleFilterChangeUser}
            loading={loadingUser}
            placeholderSearch="Search User"
            tableInstance={tableInstanceUser}
            title="Users"
            details="User"
            handleOpenModal={handleOpenUserCreateModal}
          />
        </div>
        <div className="self-start 2xl:col-start-2 2xl:col-end-3 col-start-1 col-end-3 2xl:row-start-2 2xl:row-end-3 row-start-3 row-end-4">
          {/* GROUP TABLE */}
          <Table
            createType="button"
            filterInput={filterInputGroup}
            handleFilterChange={handleFilterChangeGroup}
            loading={loadingGroup}
            placeholderSearch="Search Group"
            tableInstance={tableInstanceGroup}
            title="Groups"
            details="Group"
            handleOpenModal={handleOpenGroupCreateModal}
          />
        </div>
      </div>
      <ReactModal
        isOpen={isUserCreateModalOpen}
        // eslint-disable-next-line
        onRequestClose={handleCloseUserCreateModal}
        shouldCloseOnOverlayClick={false}
        style={modalStyles}
        contentLabel="Create User"
      >
        <CreateUser handleClose={handleCloseUserCreateModal} />
      </ReactModal>

      <ReactModal
        isOpen={isOrganizationCreateModalOpen}
        // eslint-disable-next-line
        onRequestClose={handleCloseOrganizationCreateModal}
        shouldCloseOnOverlayClick={false}
        style={modalStyles}
        contentLabel="Create Organization"
      >
        <CreateOrganization handleClose={handleCloseOrganizationCreateModal} />
      </ReactModal>

      <ReactModal
        isOpen={isGroupCreateModalOpen}
        // eslint-disable-next-line
        onRequestClose={handleCloseGroupCreateModal}
        shouldCloseOnOverlayClick={false}
        style={modalStyles}
        contentLabel="Create Group"
      >
        <CreateGroup handleClose={handleCloseGroupCreateModal} />
      </ReactModal>
    </div>
  );
};

export default UserRoleManagement;
