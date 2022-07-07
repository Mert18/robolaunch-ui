import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import ReactModal from 'react-modal';
import Modal from '../Modal/Modal';
import Button from '../Button/Button';

const modalStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '40%',
    maxHeight: '40%',
    overflow: 'auto',
    padding: 0,
    color: 'var(--text-color)',
    border: '1px solid var(--layer-500)',
    zIndex: '9999',
    borderRadius: 'var(--border-radius-md)'
  },
  overlay: {
    background: 'rgba(0, 0, 0, 0.75)',
    zIndex: '9999'
  }
};

const ToggleOrGo = ({ value, link, kind }) => {
  const [isOn, setIsOn] = useState(value);
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };
  const handleToggle = () => {
    setIsOn(!isOn);
    handleClose();
  };

  return (
    <div className="flex items-center justify-start">
      <ReactModal
        isOpen={isOpen}
        // eslint-disable-next-line
        onRequestClose={handleClose}
        shouldCloseOnOverlayClick={false}
        style={modalStyles}
        contentLabel="Cloud Instance"
      >
        <Modal
          loading={false}
          handleClose={handleClose}
          title={`Toggle ${kind}`}
          info={`Do you want to ${isOn ? 'Turn off' : 'Turn on'} the ${kind}?`}
        >
          <div className="flex justify-between w-[40%]">
            <Button
              disabled={false}
              style="default"
              type="button"
              handleClick={handleClose}
              text="Back"
            />
            <Button
              disabled={false}
              style="primary"
              type="button"
              handleClick={handleToggle}
              text={isOn ? 'Turn off' : 'Turn on'}
            />
          </div>
        </Modal>
      </ReactModal>
      <div
        onClick={handleOpen}
        className={
          isOn
            ? 'bg-primary-100 relative w-12 h-6 rounded cursor-pointer'
            : 'bg-layer-500 relative w-12 h-6 rounded cursor-pointer'
        }
      >
        <div
          className={
            isOn
              ? 'absolute right-0 m-1 bg-white w-4 h-4 rounded'
              : 'absolute left-0 m-1 bg-light-400 dark:bg-layer-300 w-4 h-4 rounded'
          }
        ></div>
      </div>
      {isOn && (
        <div className="ml-2">
          <Link to={link}>
            <img src="/icons/external.svg" width="20px" />
          </Link>
        </div>
      )}
    </div>
  );
};

export default ToggleOrGo;
