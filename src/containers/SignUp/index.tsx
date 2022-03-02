import React from "react";
import { useKeycloak } from "@react-keycloak/web";
import { KeycloakInstance } from "keycloak-js";

const SignUp = () => {
  //@ts-ignore
  const { keycloak, initialized } = useKeycloak<KeycloakInstance>();

  const login = () => {
    if (keycloak) window.location.href = keycloak?.createLoginUrl();
  };

  return (
    <div>
      <div>
        SIGNUP PAGE, DO WE NEED TO MAKE THIS? KEYCLOAK PROVIDES A
        SELF-REGISTRATION FOR USERS.
      </div>
    </div>
  );
};

export default SignUp;
