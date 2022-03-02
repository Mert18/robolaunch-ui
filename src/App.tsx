import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Development from "./containers/Development";
import Fleet from "./containers/Fleet";

import Home from "./containers/Home";
import Instances from "./containers/Instances";
import SignUp from "./containers/SignUp";
import { useKeycloak } from "@react-keycloak/web";
import { KeycloakInstance } from "keycloak-js";

const App: React.FC = () => {
  //@ts-ignore
  const { keycloak, initialized } = useKeycloak<KeycloakInstance>();

  const login = () => {
    if (keycloak) window.location.href = keycloak?.createLoginUrl();
  };

  return keycloak.authenticated ? (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/instances" element={<Instances />} />
        <Route path="/fleet" element={<Fleet />} />
        <Route path="/development" element={<Development />} />
      </Routes>
    </BrowserRouter>
  ) : (
    <SignUp />
  );
};

export default App;
