import { ErrorMessage } from 'formik';
import React from 'react';
import LabelWithInfo from '../LabelWithInfo/LabelWithInfo';

interface IInputField {
  id: string;
  label: string;
  info: string;
  children: any;
}

const InputField = ({ id, label, info, children }: IInputField) => {
  return (
    <label className="flex flex-col py-2" htmlFor={id} id={id}>
      <LabelWithInfo label={label} info={info} />
      {children}
      <ErrorMessage name={id} render={(msg) => <div className="form__error">{msg}</div>} />
    </label>
  );
};

export default InputField;
