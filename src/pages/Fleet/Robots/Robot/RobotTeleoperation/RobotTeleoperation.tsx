import React from 'react';
import { useParams } from 'react-router-dom';
import RobotInnerLayout from '../../../../../components/Layout/Robot/Robot';

const RobotTeleoperation = () => {
  const params = useParams();
  return (
    <div>
      <RobotInnerLayout id={params.id}>Robot Teleoperation</RobotInnerLayout>
    </div>
  );
};

export default RobotTeleoperation;
