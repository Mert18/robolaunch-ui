import { useKeycloak } from "@react-keycloak/ssr";
import { KeycloakInstance } from "keycloak-js";
import { NextPage } from "next";
import getConfig from "next/config";
import { useEffect, useState } from "react";
import { Container } from "semantic-ui-react";
import { LaunchClient } from "../api/launch/launch_grpc_web_pb";
import { OperateRequest } from "../api/launch/launch_pb";
import withAuth from "../components/auth/withAuth";
import Stream from "../components/stream/stream";

const StreamPage: NextPage = () => {
  //   const url = new URL(window.location.href);
  //   const name = url.searchParams.get("name");
  //   const namespace = url.searchParams.get("namespace");
  const url = new URL(window.location.href);
  const workflowID = url.searchParams.get("workflowid");
  const runID = url.searchParams.get("runid");
  const { publicRuntimeConfig } = getConfig();
  const client = new LaunchClient(publicRuntimeConfig.launch);

  const { keycloak, initialized } = useKeycloak<KeycloakInstance>();
  const operateLaunchRequest = new OperateRequest();
  const [port, setPort] = useState(0);
  const [ip, setIp] = useState("23.88.52.37");
  useEffect(() => {
    if (workflowID) operateLaunchRequest.setWorkflowId(workflowID);
    if (runID) operateLaunchRequest.setRunId(runID);
    operateLaunchRequest.setOperation("GET");
    if (initialized && keycloak?.idToken) {
      client.operateLaunch(
        operateLaunchRequest,
        {
          authorization: "Bearer " + keycloak?.idToken,
        },
        (err, response) => {
          if (err !== null) {
            console.log(err);
            return;
          }
          setPort(response.getWebrtcPort());
          // setResult(true);
          console.log("Launch updated");
        }
      );
    }
  }, [initialized]);

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
