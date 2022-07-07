import Keycloak from 'keycloak-js';
import keycloakJson from '../keycloak';

// @ts-ignore
const _kc = new Keycloak(keycloakJson);
/**
 * Initializes Keycloak instance and calls the provided callback function if successfully authenticated.
 *
 * @param onAuthenticatedCallback
 */
const initKeycloak = (onAuthenticatedCallback: any) => {
  _kc
    .init({
      onLoad: 'check-sso',
      silentCheckSsoRedirectUri: window.location.origin + '/silent-check-sso.html',
      pkceMethod: 'S256'
    })
    .then((authenticated: any) => {
      if (authenticated) {
        onAuthenticatedCallback();
      } else {
        doLogin();
      }
    })
    .catch(console.error);
};

const doLogin = _kc.login;

const doLogout = _kc.logout;

const getToken = () => _kc.token;

//
const isLoggedIn = () => !!_kc.token;

const updateToken = (successCallback: any) =>
  _kc.updateToken(5).then(successCallback).catch(doLogin);

const getUsername = () => _kc.tokenParsed?.preferred_username;

const hasGroup = (groups: string[]) =>
  groups.some((group: string) => _kc.tokenParsed.groups.includes(group));

const UserService = {
  initKeycloak,
  doLogin,
  doLogout,
  isLoggedIn,
  getToken,
  updateToken,
  getUsername,
  hasGroup
};

export default UserService;
