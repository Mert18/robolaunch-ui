import React from "react";
import { LaunchView } from "../../../api/launch/launch_pb";
import Table from "../../Table";

const colNames = ["column 1", "column 2", "column 3", "column 4", "column 5"];

const InstanceList = ({ instances }: any) => {
  console.log(instances);
  return (
    <Table list={instances} colNames={colNames} width="auto" height="auto" />
  );
};

export default InstanceList;
