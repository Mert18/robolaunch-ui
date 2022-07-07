import React from 'react';

const InstanceStatus = ({ values }) => {
  return (
    <div className="flex items-center">
      <div
        className={
          values === 'Pending' ? 'bg-yellow-300' : values === 'Active' ? 'bg-green-300' : ''
        }
        style={{ width: '15px', height: '15px', borderRadius: '50%', marginRight: '.2rem' }}
      ></div>
      <p>{values}</p>
    </div>
  );
};

export default InstanceStatus;
