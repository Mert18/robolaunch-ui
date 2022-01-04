import type { AppProps } from "next/app";
import "semantic-ui-css/semantic.min.css";
import { SSRCookies, SSRKeycloakProvider } from "@react-keycloak/ssr";
import getConfig from "next/config";
import { KeycloakConfig } from "keycloak-js";

import Drawer from "../components/sidebar/sidebar";

interface AppPropsWithCookies extends AppProps {
  cookies: unknown;
}

function MyApp({ Component, pageProps, cookies }: AppPropsWithCookies) {
  const { publicRuntimeConfig } = getConfig();
  const keycloakCfg: KeycloakConfig = {
    realm: publicRuntimeConfig.keycloak.realm,
    url: publicRuntimeConfig.keycloak.url,
    clientId: publicRuntimeConfig.keycloak.clientId,
  };
  const keycloakInitOptions = {
    onLoad: "check-sso",
    silentCheckSsoRedirectUri: `${publicRuntimeConfig.baseUrl}/silent-check-sso.html`,
    pkceMethod: "S256",
  };
  return (
    <SSRKeycloakProvider
      keycloakConfig={keycloakCfg}
      persistor={SSRCookies(cookies)}
      initOptions={keycloakInitOptions}
    >
      <Drawer>
        <Component {...pageProps} />
      </Drawer>
    </SSRKeycloakProvider>
  );
}

export default MyApp;
