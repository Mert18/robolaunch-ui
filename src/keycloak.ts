import Keycloak from "keycloak-js";

type KeycloakConfig = {
  realm: string;
  url: string;
  clientId: string;
};

const keycloakCfg: KeycloakConfig = {
  realm: process.env.REACT_APP_KEYCLOAK_REALM as string,
  url: process.env.REACT_APP_KEYCLOAK_URL as string,
  clientId: process.env.REACT_APP_KEYCLOAK_CLIENT_ID as string,
};
// Setup Keycloak instance as needed
// Pass initialization options as required or leave blank to load from 'keycloak.json'
//
// @ts-ignore
const keycloak = new Keycloak(keycloakCfg);

export default keycloak;
