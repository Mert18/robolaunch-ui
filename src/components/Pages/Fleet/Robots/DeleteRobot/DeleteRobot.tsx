import { useFormik } from 'formik';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import Modal from '../../../../Modal/Modal';
import { useAppSelector } from '../../../../../hooks/redux';

const RobotDelete = ({ handleClose, id }: any) => {
  const fleet = useAppSelector((state) => state.fleet);

  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: ''
    },
    validationSchema: Yup.object({}),
    onSubmit: async (values) => {
      console.log(values);
    }
  });
  return (
    <Modal
      loading={formik.values.name !== id}
      handleClose={handleClose}
      handleSubmit={formik.handleSubmit}
      title="Delete Robot"
      info={`Please type the name of the robot you want to delete. ( ${id} )`}
      buttonStyle="delete"
      icon=""
    >
      <form className="flex flex-col justify-center items-center">
        <div className="w-full">
          <label className="flex flex-col justify-center items-start">
            Robot Name
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Robot Name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
              className="h-input p-4 bg-black-200 rounded outline-none border border-black-400 focus:outline-1 focus:outline-black-500"
            />
          </label>
        </div>
      </form>
    </Modal>
  );
};

export default RobotDelete;
