import React from 'react';

const StatusData = ({ value }) => {
  return (
    <div className="flex items-center">
      <div
        className={value === "Active" ? 'bg-green-300' : 'bg-red-300'}
        style={{ width: '15px', height: '15px', borderRadius: '50%', marginRight: '0.2rem' }}
      ></div>
      <p>{value === "Active" ? 'Active' : 'Passive'}</p>
    </div>
  );
};

export default StatusData;
