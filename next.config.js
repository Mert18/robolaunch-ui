/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    launch: "http://23.88.62.179:31384",

    keycloak: {
      realm: "kubernetes-platform",
      clientId: "kubernetes-platform",
      url: "https://keycloaktest.provedge.cloud/auth/",
    },
  },
};
