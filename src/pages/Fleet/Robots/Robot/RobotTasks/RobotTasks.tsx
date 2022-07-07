import React from 'react';
import { useParams } from 'react-router-dom';
import RobotInnerLayout from '../../../../../components/Layout/Robot/Robot';

const RobotTasks = () => {
  const params = useParams();
  return (
    <div>
      <RobotInnerLayout id={params.id}>Robot Tasks</RobotInnerLayout>
    </div>
  );
};

export default RobotTasks;
