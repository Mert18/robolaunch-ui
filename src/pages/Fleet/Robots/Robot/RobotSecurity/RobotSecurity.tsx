import React from 'react';
import { useParams } from 'react-router-dom';
import RobotInnerLayout from '../../../../../components/Layout/Robot/Robot';

const RobotSecurity = () => {
  const params = useParams();
  return (
    <div>
      <RobotInnerLayout id={params.id}>Robot Security</RobotInnerLayout>
    </div>
  );
};

export default RobotSecurity;
