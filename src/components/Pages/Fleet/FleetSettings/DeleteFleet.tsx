/* eslint-disable @typescript-eslint/await-thenable */
/* eslint-disable no-promise-executor-return */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import Modal from '../../../Modal/Modal';
import { useAppDispatch } from '../../../../hooks/redux';
import { setFleet } from '../../../../store/features/fleet/fleetSlice';
import { useAppSelector } from '../../../../hooks/redux';
import UserService from '../../../../services/UserService';

const FleetDelete = ({ handleClose }: any) => {
  const fleet = useAppSelector((state) => state.fleet);
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: ''
    },
    validationSchema: Yup.object({}),
    onSubmit: (values) => {
      setLoading(true);
    }
  });
  return (
    <Modal
      loading={formik.values.name !== fleet.name || loading}
      handleClose={handleClose}
      handleSubmit={formik.handleSubmit}
      title="Delete Fleet"
      info={`Please type the name of the fleet you want to delete. ( ${fleet.name} )`}
    >
      <form className="flex flex-col justify-center items-center">
        <div className="w-full">
          <label className="flex flex-col justify-center items-start">
            Fleet Name
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Fleet Name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
              className="h-input p-4 bg-black-300 rounded outline-none border-none focus:outline-1 focus:outline-black-500"
            />
          </label>
        </div>
      </form>
    </Modal>
  );
};

export default FleetDelete;
