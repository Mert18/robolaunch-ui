import EnvVariables from './constants/EnvVariables';

type KeycloakConfig = {
  realm: string;
  url: string;
  clientId: string;
  publicClient: boolean;
  sslRequired: string;
};

const keycloakJson: KeycloakConfig = {
  realm: EnvVariables.KEYCLOAK_REALM as string,
  url: EnvVariables.KEYCLOAK_URL as string,
  clientId: EnvVariables.KEYCLOAK_CLIENT_ID as string,
  publicClient: true,
  sslRequired: 'external',
};

export default keycloakJson;
