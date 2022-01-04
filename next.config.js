/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    keycloak: {
      realm: "kubernetes-platform",
      clientId: "kubernetes-platform",
      url: "https://keycloaktest.provedge.cloud/auth/",
    },
  },
};
