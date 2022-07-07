import React, { useState, useContext } from 'react';
import { useAppSelector } from '../../../../../hooks/redux';

const RobotDelete = ({ handleClose }: any) => {
  const [deleteFleetName, setDeleteFleetName] = useState('');
  const { fleetName } = useAppSelector((state) => state.fleet);
  return (
    <div className="fleetdelete">
      <div className="fleetdelete__text">
        <p>
          Please enter the name of the fleet you want to delete below. (<b>{fleetName}</b>)
        </p>
      </div>
      <div className="fleetdelete__input">
        <input type="text" onChange={(e) => setDeleteFleetName(String(e.target.value))} />
      </div>
      <div className="fleetdelete__bottom">
        <button type="button">Close</button>
        <button type="button" disabled={deleteFleetName !== fleetName}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default RobotDelete;
