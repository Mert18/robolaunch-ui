import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Development from "./containers/Development";
import Fleet from "./containers/Fleet";

import Home from "./containers/Home";
import Instances from "./containers/Instances";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/instances" element={<Instances />} />
        <Route path="/fleet" element={<Fleet />} />
        <Route path="/development" element={<Development />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
