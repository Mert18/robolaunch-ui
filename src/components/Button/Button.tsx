/* eslint-disable react/require-default-props */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-nested-ternary */
/* eslint-disable react/button-has-type */
import React from 'react';

interface IButton {
  text?: string;
  disabled: boolean;
  handleClick?: any;
  type: any;
  style: string;
  icon?: string;
}

const Button = ({ icon, text, disabled, handleClick, type, style }: IButton) => {
  return (
    <span>
      <button
        type={type}
        onClick={handleClick}
        disabled={disabled}
        className={
          style === 'primary'
            ? 'flex justify-center items-center bg-primary-100 hover:bg-primary-200 transition-all px-3 py-1 text-sm font-bold rounded outline-none text-white disabled:bg-black-500'
            : style === 'default'
            ? 'flex justify-center items-center bg-lowContrast dark:bg-layer-300 hover:bg-light-300 dark:hover:bg-layer-400 transition-all px-3 py-1 text-sm font-bold rounded outline-none text-white disabled:bg-black-500'
            : style === 'green'
            ? 'flex justify-center items-center bg-green-100 hover:bg-green-200 transition-all px-3 py-1 text-sm font-bold rounded outline-none text-white disabled:bg-black-500'
            : style === 'delete'
            ? 'flex justify-center items-center bg-red-100 hover:bg-red-200 transition-all px-3 py-1 text-sm font-bold rounded outline-none text-white disabled:bg-black-500'
            : ''
        }
      >
        {icon && <img src={`/icons/${icon}.svg`} alt={icon} />}
        {text && <span className="text-white">{text}</span>}
      </button>
    </span>
  );
};

export default Button;
