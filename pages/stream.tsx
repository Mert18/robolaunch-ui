import { useKeycloak } from "@react-keycloak/ssr";
import { KeycloakInstance } from "keycloak-js";
import { NextPage } from "next";
import getConfig from "next/config";
import { useEffect, useState } from "react";
import { Container } from "semantic-ui-react";
import withAuth from "../components/auth/withAuth";
import Stream from "../components/stream/stream";

const StreamPage: NextPage = () => {
  //   const url = new URL(window.location.href);
  //   const name = url.searchParams.get("name");
  //   const namespace = url.searchParams.get("namespace");
  const { publicRuntimeConfig } = getConfig();

  const { keycloak, initialized } = useKeycloak<KeycloakInstance>();
  const [port, setPort] = useState(30444);
  const [ip, setIp] = useState("23.88.52.37");

  return (
    <Container>
      {port === 0 || ip === "" ? (
        <p>Wait for it...</p>
      ) : (
        <>
          <Stream port={port} ip={ip} />
        </>
      )}
    </Container>
  );
};

export default StreamPage;
