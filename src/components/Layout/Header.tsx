import React from "react";
import { useKeycloak } from "@react-keycloak/web";
import { KeycloakInstance } from "keycloak-js";

const Header = () => {
  // @ts-ignore
  const { keycloak, initialized } = useKeycloak<KeycloakInstance>();

  const login = () => {
    if (keycloak) window.location.href = keycloak?.createLoginUrl();
  };

  return (
    <header>
      <div>{`User is ${
        !keycloak.authenticated ? "NOT " : ""
      }authenticated`}</div>
      {!keycloak.authenticated && (
        <button onClick={() => login()}>Log In</button>
      )}

      {!!keycloak.authenticated && (
        <button type="button" onClick={() => keycloak.logout()}>
          Logout
        </button>
      )}
    </header>
  );
};

export default Header;
