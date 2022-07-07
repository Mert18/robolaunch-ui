import React from 'react';
import { useParams } from 'react-router-dom';
import RobotInnerLayout from '../../../../../components/Layout/Robot/Robot';

const RobotConfiguration = () => {
  const params = useParams();
  return (
    <div>
      <RobotInnerLayout id={params.id}>Robot Configuration</RobotInnerLayout>
    </div>
  );
};

export default RobotConfiguration;
