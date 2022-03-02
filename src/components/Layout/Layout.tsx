import React, { Fragment } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import GeneralMenu from "../Menu/GeneralMenu";

const Layout: React.FC = ({ children }) => {
  return (
    <div className="grid grid-cols-12 grid-rows-12">
      <div className="col-start-1 col-end-4 row-start-1 row-end-12 fixed">
        <GeneralMenu />
        <Sidebar />
      </div>

      <div className="col-start-4 col-end-13 row-start-1 row-end-12">
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
