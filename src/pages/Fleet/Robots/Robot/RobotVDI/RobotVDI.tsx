/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';
import Stream from '../../../../../components/Pages/Fleet/Robots/Robot/VDI/Stream/Stream';

const RobotVDI = () => {
  const [port, setPort] = useState(31031);
  const [ip, setIp] = useState('192.168.104.11');
  return <Stream port={port} ip={ip} />;
};

export default RobotVDI;
