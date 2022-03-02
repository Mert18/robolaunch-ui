import React from "react";
import { Link } from "react-router-dom";

const GeneralMenu = () => {
  return (
    <div className="flex flex-col justify-between items-center h-screen shadow-xl fixed">
      <div className="">
        <img src="./robolaunch-square.png" alt="Robolaunch" width="120px" />
      </div>
      <ul className="flex flex-col justify-center items-center text-[13px]  w-full">
        <li className="mt-4 mb-4 flex flex-col items-center justify-center font-bold  w-full">
          <Link
            to="/instances"
            className="w-full flex flex-col justify-center items-center hover:text-purple transition-all"
          >
            <img src="./robot.svg" alt="Single robot" width="50px" />
            <p>INSTANCES</p>
          </Link>
        </li>
        <li className="mb-4 flex flex-col items-center justify-center font-bold  w-full">
          <Link
            to="/fleet"
            className="w-full flex flex-col justify-center items-center hover:text-purple transition-all"
          >
            <img src="./robots.svg" alt="Multiple robots" width="50px" />
            <p>FLEET</p>
          </Link>
        </li>
        <li className="mb-4 flex flex-col items-center justify-center font-bold  w-full">
          <Link
            to="/development"
            className="w-full flex flex-col justify-center items-center hover:text-purple transition-all"
          >
            <img src="./dev.svg" alt="Development Environment" width="50px" />
            <p>DEVELOPMENT</p>
          </Link>
        </li>
      </ul>
      <ul>
        <li className="mb-4 mt-4">
          <img src="./dark-mode.svg" width="30px" alt="Change theme" />
        </li>
        <li className="mb-4">
          <img src="./full-screen.svg" width="30px" alt="Change theme" />
        </li>
        <div></div>
      </ul>
    </div>
  );
};

export default GeneralMenu;
