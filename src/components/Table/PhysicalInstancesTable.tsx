import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import Loader from '../Loader/Loader';
import PhysicalInstancesTableRow from './PhysicalInstanceTableRow';

interface IPhysicalInstancesTable {
  tableInstance: any;
  loading: boolean;
  filterInput: string;
  handleFilterChange: any;
  openCreateModal?: any;
  title: string;
  placeholderSearch: string;
  textCreateButton: string;
  createType: string;
  createLink?: string;
}

const ClusterTable = ({
  tableInstance,
  loading,
  filterInput,
  handleFilterChange,
  openCreateModal,
  title,
  placeholderSearch,
  textCreateButton,
  createType,
  createLink
}: IPhysicalInstancesTable) => {
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="flex flex-col w-[90%] rounded dark:border dark:border-layer-600">
          <div className="flex items-center justify-between p-4 rounded-t bg-light-200 dark:bg-layer-200 border-b border-lowContrast dark:border-layer-600">
            <p className="text-base uppercase font-bold tracking-wide">{title}</p>
            <div className="flex items-center">
              <span className="flex justify-center p-2 mr-4">
                <div className="bg-light-100 dark:bg-layer-100 p-1 rounded-tl rounded-bl border-t border-b border-l border-lowContrast dark:border-layer-600"></div>
                <img
                  src="/icons/search.svg"
                  width="20px"
                  className="border-t border-b border-lowContrast dark:border-layer-600 bg-light-100 dark:bg-layer-100"
                />
                <input
                  type="text"
                  value={filterInput}
                  onChange={handleFilterChange}
                  placeholder={placeholderSearch}
                  className="dark:bg-layer-100 border-t border-r border-b border-lowContrast dark:border-layer-600 max-w-[200px] p-2 rounded outline-none focus:outline-1 focus:outline-black-500"
                />
              </span>

              <span className="mr-4"></span>
              {createType === 'button' ? (
                <Button
                  type="button"
                  handleClick={openCreateModal}
                  disabled={false}
                  icon="plus"
                  style="primary"
                  text={textCreateButton}
                />
              ) : (
                <Link
                  className="flex justify-center items-center text-white bg-primary-100 hover:bg-primary-200 font-semibold py-2 px-4 transition-all rounded"
                  to={createLink}
                >
                  <img src="/icons/plus.svg" className="mr-2" />
                  {textCreateButton}
                </Link>
              )}
            </div>
          </div>

          <table
            className="rounded-b bg-light-200 dark:bg-layer-200"
            {...tableInstance.getTableProps()}
          >
            <thead>
              {tableInstance.headerGroups.map((headerGroup) => (
                <tr key={headerGroup.id} {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                    <th
                      className="text-left p-4"
                      key={column.id}
                      {...column.getHeaderProps(column.getSortByToggleProps())}
                    >
                      {column.render('Header')}
                      <span>{column.isSorted ? (column.isSortedDesc ? '🔽' : '🔼') : ''}</span>
                    </th>
                  ))}
                </tr>
              ))}
            </thead>

            <tbody {...tableInstance.getTableBodyProps()} className="font-normal">
              {tableInstance.rows.map((row) => {
                tableInstance.prepareRow(row);
                return <PhysicalInstancesTableRow key={row.id} row={row} />;
              })}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default ClusterTable;
