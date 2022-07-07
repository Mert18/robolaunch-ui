import React from 'react';
import { useParams } from 'react-router-dom';
import RobotInnerLayout from '../../../../../components/Layout/Robot/Robot';

const RobotDevelopment = () => {
  const params = useParams();
  return (
    <div>
      <RobotInnerLayout id={params.id}>Robot Development</RobotInnerLayout>
    </div>
  );
};

export default RobotDevelopment;
