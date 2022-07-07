import React from 'react';
import { useParams } from 'react-router-dom';
import RobotInnerLayout from '../../../../../components/Layout/Robot/Robot';

const RobotFault = () => {
  const params = useParams();
  return (
    <div>
      <RobotInnerLayout id={params.id}>Robot Fault</RobotInnerLayout>
    </div>
  );
};

export default RobotFault;
