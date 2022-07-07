import React, { useState } from 'react';
import ReactModal from 'react-modal';
import FleetDelete from '../../../components/Pages/Fleet/FleetSettings/DeleteFleet';
import Button from '../../../components/Button/Button';
import { modalStyles } from '../../../utils/css/modalStyles';

const FleetSettings = () => {
  const [isDeleteFleetOpen, setIsDeleteFleetOpen] = useState(false);
  const openDeleteFleet = () => {
    setIsDeleteFleetOpen(true);
  };

  const closeDeleteFleet = () => {
    setIsDeleteFleetOpen(false);
  };

  return (
    <div>
      <Button
        text="Delete Fleet"
        type="button"
        disabled={false}
        handleClick={openDeleteFleet}
        style="default"
      />
      <ReactModal
        isOpen={isDeleteFleetOpen}
        // eslint-disable-next-line
        onRequestClose={closeDeleteFleet}
        shouldCloseOnOverlayClick={false}
        style={modalStyles}
        contentLabel="Fleet Delete Modal"
      >
        <FleetDelete handleClose={closeDeleteFleet} />
      </ReactModal>
    </div>
  );
};

export default FleetSettings;
