/* eslint-disable react/require-default-props */
/* eslint-disable no-promise-executor-return */
/* eslint-disable @typescript-eslint/await-thenable */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-useless-escape */
import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import Button from '../Button/Button';

interface IModal {
  handleClose: any;
  children: any;
  title: string;
  loading?: boolean;
  handleSubmit?: any;
  info?: string;
  buttonStyle?: string;
  icon?: string;
  formik?: any;
}

const Modal = ({
  handleClose,
  children,
  title,
  loading,
  handleSubmit,
  info,
  buttonStyle,
  icon,
  formik
}: IModal) => {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <div className="flex flex-col z-50 text-sm bg-light-100 dark:bg-layer-100 p-4 overflow-auto text-layer-100 dark:text-white">
      <div className="flex flex-row-reverse">
        <button
          type="button"
          onClick={handleClose}
          className="bg-transparent p-4 border-none outline-none"
        >
          <img src={`/icons/${theme}/cross.svg`} alt="close" />
        </button>
      </div>
      <div className="flex flex-col justify-center items-center">
        <p className="font-semibold uppercase text-base p-4">{title}</p>
      </div>
      <div className="text-center">
        <p className="font-medium">{info}</p>
      </div>

      <div className="flex flex-col items-center justify-evenly min-h-[15vh] pt-4 pb-4 ">
        {children}
      </div>
      {handleSubmit ||
        (formik && (
          <div className="flex flex-row-reverse w-full">
            <Button
              type="submit"
              handleClick={handleSubmit}
              disabled={loading}
              style={buttonStyle || 'primary'}
              icon={icon}
              text={title}
            />
          </div>
        ))}
    </div>
  );
};
export default Modal;
