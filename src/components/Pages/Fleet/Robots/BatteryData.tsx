import React from 'react';

const BatteryData = ({ value }) => {
  return (
    <div>
      <div className="flex items-center">
        <div
          className={value > 0 && value < 15 ? 'bg-red-300' : value >= 15 && value < 50 ? "bg-yellow-400" : value >= 50 ? "bg-green-300" : "bg-green-300"}
          style={{ width: '15px', height: '15px', borderRadius: '50%', marginRight: '0.2rem' }}
        ></div>
        <p>{value}%</p>
      </div>
    </div>
  );
};

export default BatteryData;
