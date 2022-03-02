import React, { Fragment } from "react";
import Header from "./Header";
import Footer from "./Footer";
import GeneralMenu from "../Menu/GeneralMenu";

const Layout: React.FC = ({ children }) => {
  return (
    <div className="grid grid-cols-12 grid-rows-12 gap-0">
      <div className="col-start-1 col-end-2 row-start-1 row-end-12">
        <GeneralMenu />
      </div>
      <div className="col-start-2 col-end-13 row-start-1 row-end-12 flex flex-col">
        <div className="w-full border-2 border-black">
          <Header />
        </div>
        <main>{children}</main>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Layout;
