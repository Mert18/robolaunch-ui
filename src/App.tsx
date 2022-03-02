import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./containers/Home";
import Instances from "./containers/Instances";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/instances" element={<Instances />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
