import Keycloak from "keycloak-js";
import { Env } from "./constants";

type KeycloakConfig = {
  realm: string;
  url: string;
  clientId: string;
};

const keycloakCfg: KeycloakConfig = {
  realm: Env.KEYCLOAK_REALM as string,
  url: Env.KEYCLOAK_URL as string,
  clientId: Env.KEYCLOAK_CLIENT_ID as string,
};
// Setup Keycloak instance as needed
// Pass initialization options as required or leave blank to load from 'keycloak.json'
//
// @ts-ignore
const keycloak = new Keycloak(keycloakCfg);

export default keycloak;
