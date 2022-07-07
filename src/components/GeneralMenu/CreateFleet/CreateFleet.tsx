/* eslint-disable no-promise-executor-return */
/* eslint-disable @typescript-eslint/await-thenable */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-useless-escape */
import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Modal from '../../Modal/Modal';
import { useNavigate } from 'react-router-dom';

const CreateFleet = ({ handleClose }: any) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const formik = useFormik({
    initialValues: {
      name: ''
    },
    validationSchema: Yup.object({}),
    onSubmit: (values) => {
      setLoading(true);
      handleClose();
    }
  });

  return (
    <Modal
      handleClose={handleClose}
      title="Create Namespace"
      loading={loading}
      handleSubmit={formik.handleSubmit}
      icon="plus"
      buttonStyle="primary"
    >
      <form className="flex flex-col justify-center items-center">
        <div className="w-full">
          <div className="flex flex-col justify-center items-start">
            <label className="flex flex-col">
              Namespace
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Namespace"
                className="h-input rounded bg-black-200 p-2 border border-black-400 outline-none focus:outline-1 focus:outline-black-500 focus:border-none "
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
              />
            </label>
          </div>
        </div>
      </form>
    </Modal>
  );
};
export default CreateFleet;
