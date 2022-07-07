/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import ReactModal from 'react-modal';
import CreateFleet from '../CreateFleet/CreateFleet';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { setIsOpen } from '../../../store/features/menu/menuSlice';
import { setFleet } from '../../../store/features/fleet/fleetSlice';
import { useFleets } from '../../../context/FleetsContext';

interface IFleetSelect {
  isOpen: boolean;
  openFleetCreate: React.MouseEventHandler<HTMLButtonElement>;
  closeFleetCreate: any;
  isFleetCreateOpen: any;
  modalStyles: any;
}

const FleetSelect = ({
  isOpen,
  openFleetCreate,
  closeFleetCreate,
  isFleetCreateOpen,
  modalStyles
}: IFleetSelect) => {
  const dispatch = useAppDispatch();
  const fleet = useAppSelector((state) => state.fleet);
  const [isFleetsOpen, setIsFleetsOpen] = useState(false);
  const { fleets } = useFleets();

  const handleOpenFleets = () => {
    setIsFleetsOpen(!isFleetsOpen);
    if (!isOpen) {
      dispatch(setIsOpen());
    }
  };

  return (
    <li className="relative">
      <div className="flex flex-col items-start justify-center">
        <div
          className="flex items-center w-full rounded hover:bg-black-200 z-40 cursor-pointer"
          onClick={() => handleOpenFleets()}
          style={!isOpen ? { justifyContent: 'center' } : {}}
        >
          <div className="flex items-center justify-center">
            <img src="/icons/menu/fleet.svg" alt="dot" />
          </div>
          {isOpen && (
            <div className="flex justify-around items-center w-full select-none">
              <p className="overflow-ellipsis whitespace-nowrap overflow-hidden">{fleet.name}</p>
              <button
                type="button"
                style={
                  isFleetsOpen
                    ? {
                        transition: 'var(--transition)'
                      }
                    : {
                        transform: 'rotate(180deg)',
                        transition: 'var(--transition)'
                      }
                }
              >
                <img src="/icons/arrow.svg" alt="open/close" width="12px" />
              </button>
            </div>
          )}
        </div>

        {isFleetsOpen && isOpen && (
          <ul
            className={`
            ${
              isFleetsOpen ? 'absolute top-full left-0' : ''
            } overflow-y-auto max-h-[73vh] transition-all bg-black-200 w-full`}
          >
            <li className="p-3 flex justify-start items-center max-w-full overflow-ellipsis whitespace-nowrap overflow-hidden hover:bg-black-200 cursor-pointer">
              <button
                className="block w-full h-full bg-transparent border-none outline-none py-4 px-2"
                onClick={openFleetCreate}
                type="button"
              >
                Create Fleet
              </button>
            </li>
            {fleets.map((key: any, val: any) => (
              <li
                className="flex p-2 hover:bg-black-200 cursor-pointer"
                key={val}
                onClick={() => {
                  dispatch(setFleet(key[0]));
                  setIsFleetsOpen(false);
                }}
              >
                <img className="" src="/icons/menu/fleet.svg" alt="fleet" width="35px" />
                <p className="flex items-center">{key[0]}</p>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* <select onChange={handleChange} value={defaultFleet}>
        {fleets.map((key: any, val: any) => (
          <option key={val}>{key[0]}</option>
        ))}
      </select> */}
      <ReactModal
        isOpen={isFleetCreateOpen}
        // eslint-disable-next-line
        onRequestClose={closeFleetCreate}
        shouldCloseOnOverlayClick={false}
        style={modalStyles}
        contentLabel="Fleet Create Modal"
      >
        <CreateFleet handleClose={closeFleetCreate} />
      </ReactModal>
    </li>
  );
};

export default FleetSelect;
