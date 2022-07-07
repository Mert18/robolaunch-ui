import React from 'react';
import { Link } from 'react-router-dom';

interface ICustomLink {
  icon?: string;
  text: string;
  to: string;
}

const CustomLink = ({ icon, text, to }: ICustomLink) => {
  return (
    <span>
      <Link
        to={to}
        className="flex items-center justify-center text-white bg-primary-100 py-2 px-4 rounded hover:bg-primary-200 transition-all font-semibold"
      >
        {icon && <img src={`/icons/${icon}.svg`} alt={icon} className="mr-2" />}
        <span>{text}</span>
      </Link>
    </span>
  );
};

export default CustomLink;
