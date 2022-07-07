import React, { useState, useRef, useEffect, useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

const RobotOptions = () => {
  const ref = useRef<HTMLUListElement>();
  const [isOptionsOpen, setIsOptionsOpen] = useState(false);
  const { theme, setTheme } = useContext(ThemeContext);

  const handleToggleOptions = (e) => {
    e.stopPropagation();
    setIsOptionsOpen(!isOptionsOpen);
  };

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      // If the menu is open and the clicked target is not within the menu,
      // then close the menu
      if (isOptionsOpen && ref.current && !ref.current.contains(e.target)) {
        setIsOptionsOpen(false);
      }
    };

    document.addEventListener('mousedown', checkIfClickedOutside);

    return () => {
      // Cleanup the event listener
      document.removeEventListener('mousedown', checkIfClickedOutside);
    };
  }, [isOptionsOpen]);
  return (
    <div className="relative">
      <div onClick={handleToggleOptions} className="cursor-pointer">
        <img src={`/icons/${theme}/dots.svg`} />
      </div>
      {isOptionsOpen && (
        <ul
          ref={ref}
          className="absolute top-100 left-full w-[120px] rounded bg-light-300 dark:bg-layer-300"
        >
          <li className="flex items-center font-semibold hover:bg-light-200 dark:hover:bg-layer-400 p-3 cursor-pointer">
            <img src={`/icons/${theme}/build.svg`} className="mr-2" />
            <p>Build</p>
          </li>
          <li className="flex items-center font-semibold hover:bg-light-200 dark:hover:bg-layer-400 p-3 cursor-pointer">
            <img src={`/icons/${theme}/play.svg`} className="mr-2" />
            <p>Start</p>
          </li>
          <li className="flex items-center font-semibold hover:bg-light-200 dark:hover:bg-layer-400 p-3 cursor-pointer">
            <img src={`/icons/${theme}/edit.svg`} className="mr-2" />
            <p>Edit</p>
          </li>
          <li className="flex items-center font-semibold hover:bg-light-200 dark:hover:bg-layer-400 p-3 cursor-pointer">
            <img src={`/icons/${theme}/clone.svg`} className="mr-2" />
            <p>Clone</p>
          </li>
          <li className="flex items-center bg-red-100 hover:bg-red-200 text-white font-semibold p-3 cursor-pointer">
            <img src="/icons/trash.svg" className="mr-2" />
            <p>Delete</p>
          </li>
        </ul>
      )}
    </div>
  );
};

export default RobotOptions;
