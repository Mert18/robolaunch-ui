import React, { useContext, useState } from 'react';
import ReactModal from 'react-modal';
import { ThemeContext } from '../../context/ThemeContext';
import CloudInstanceDetails from '../Pages/CloudInstances/CloudInstanceDetails';

const modalStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    maxHeight: '80%',
    minHeight: '70vh',
    overflow: 'auto',
    padding: 0,
    color: 'var(--text-color)',
    zIndex: '9999',
    border: '1px solid var(--dark-400)'
  },
  overlay: {
    background: 'rgba(0, 0, 0, 0.75)',
    zIndex: '9999'
  }
};

const CloudInstancesTableRow = ({ row }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useContext(ThemeContext);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <ReactModal
        isOpen={isOpen}
        // eslint-disable-next-line
        onRequestClose={handleClose}
        shouldCloseOnOverlayClick={false}
        style={modalStyles}
        contentLabel="Cloud Instance"
      >
        <CloudInstanceDetails handleClose={handleClose} instance={row} />
      </ReactModal>

      <tr className="odd:bg-light-300 dark:odd:bg-layer-300 relative" {...row.getRowProps()}>
        {row.cells.map((cell, index) => (
          <td className="p-4" key={index} {...cell.getCellProps()}>
            {cell.render('Cell')}
          </td>
        ))}
        <td onClick={handleOpen} className="cursor-pointer">
          <img src={`/icons/${theme}/dots.svg`} />
        </td>
      </tr>
    </>
  );
};

export default CloudInstancesTableRow;
