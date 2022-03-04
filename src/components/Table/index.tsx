import React from "react";
import { TableType } from "./types";

const Table = ({
  list,
  colNames,
  width = "auto",
  height = "auto",
}: TableType) => {
  return (
    <div>
      {list.length > 0 ? (
        <table
          cellSpacing="0"
          style={{ width: width, height: height, padding: "50px 10px" }}
          className="border-2 border-collapse"
        >
          <thead className="border-2 border-collapse">
            <tr className="border-2 ">
              {colNames.map((colName: string, index: number) => {
                return <th key={index}>{colName.toUpperCase()}</th>;
              })}
            </tr>
          </thead>
          <tbody className="border-2 border-collapse">
            {Object.values(list).map((obj: any, index: number) => {
              return (
                <tr key={index} className="border-2 ">
                  {Object.values(obj.array).map((value: any, index2) => {
                    return <td key={index2}>{value}</td>;
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Table;
