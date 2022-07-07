import React from 'react';
import { Link } from 'react-router-dom';

const RobotName = ({ value }) => {
  return (
    <div>
      <Link className="underline" to={`/robots/${value}`}>
        {value}
      </Link>
    </div>
  );
};

export default RobotName;
