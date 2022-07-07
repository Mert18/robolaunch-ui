import React from 'react';
import Button from '../Button/Button';
import Loader from '../Loader/Loader';

interface ITable {
  tableInstance: any;
  loading: boolean;
  filterInput: string;
  handleFilterChange: any;
  title: string;
  placeholderSearch: string;
  details?: string;
  textCreateButton?: string;
  createType: string;
  createLink?: string;
  handleOpenModal: any;
}

const Table = ({
  tableInstance,
  loading,
  filterInput,
  handleFilterChange,
  title,
  placeholderSearch,
  details,
  handleOpenModal
}: ITable) => {
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="flex flex-col w-full border border-layer-600 rounded">
          <div className="flex items-center justify-between p-2 rounded-t bg-layer-200 border-b border-layer-600">
            <p className="text-base uppercase font-semibold p-2">{title}</p>
            <div className="flex items-center">
              <span className="flex justify-center p-2 mr-4 ">
                <div className="bg-layer-100 p-1 rounded-tl rounded-bl border-t border-b border-l border-layer-600"></div>
                <img
                  src="/icons/search.svg"
                  width="20px"
                  className="border-t border-b border-layer-600 bg-layer-100"
                />
                <input
                  type="text"
                  value={filterInput}
                  onChange={handleFilterChange}
                  placeholder={placeholderSearch}
                  className="bg-layer-100 border-t border-r border-b border-layer-600 max-w-[200px] p-2 rounded outline-none focus:outline-1 focus:outline-black-500"
                />
              </span>
              <div>
                <Button
                  disabled={false}
                  style="primary"
                  icon="plus"
                  type="button"
                  text={`Create ${details}`}
                  handleClick={handleOpenModal}
                />
              </div>
            </div>
          </div>

          <table className="rounded-b bg-layer-200" {...tableInstance.getTableProps()}>
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
                return (
                  <tr
                    key={row.id}
                    {...row.getRowProps()}
                    className="odd:bg-layer-300 border border-layer-600"
                  >
                    {row.cells.map((cell, index) => (
                      <td className="select-none p-4" key={index} {...cell.getCellProps()}>
                        {cell.render('Cell')}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default Table;
