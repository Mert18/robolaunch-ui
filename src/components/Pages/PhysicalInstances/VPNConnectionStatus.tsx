import React from 'react';

const VPNConnectionStatus = ({values}) => {
  return (
    <div className="flex items-center">
      <div
        className={
          values === 'pending' ? 'bg-yellow-300' : values === 'passive' ? 'bg-red-200' : values === "active" ? "bg-green-300" : 'bg-skyblue'
        }
        style={{ width: '15px', height: '15px', borderRadius: '50%', marginRight: '.2rem' }}
      ></div>
      <p>{values}</p>
    </div>
  );
};

export default VPNConnectionStatus;
