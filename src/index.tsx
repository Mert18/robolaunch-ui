import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./store/configureStore";
import { ReactKeycloakProvider } from "@react-keycloak/web";
import keycloak from "./keycloak";

ReactDOM.render(
  <ReactKeycloakProvider authClient={keycloak}>
    <Provider store={store}>
      <App />
    </Provider>
  </ReactKeycloakProvider>,
  document.getElementById("root")
);
