import { useKeycloak } from "@react-keycloak/ssr";
import { KeycloakInstance } from "keycloak-js";
import getConfig from "next/config";
import React, { useEffect, useState } from "react";
import { Container, Icon, Table } from "semantic-ui-react";
import { LaunchClient } from "../../api/launch/launch_grpc_web_pb";
import { Empty, LaunchView, OperateRequest } from "../../api/launch/launch_pb";

const LaunchTable: React.FC = () => {
  const { publicRuntimeConfig } = getConfig();
  const { keycloak, initialized } = useKeycloak<KeycloakInstance>();

  const client = new LaunchClient(publicRuntimeConfig.launch);
  const [launches, setLaunches] = useState<LaunchView[]>([]);

  useEffect(() => {
    if (keycloak?.idToken && initialized) {
      const stream = client.listLaunch(new Empty(), {
        authorization: "Bearer " + keycloak?.idToken,
      });
      stream.on("data", function (response) {
        let listObj = response.getLaunchesList();
        setLaunches(listObj);
      });
    }
  }, [initialized]);

  const updateLaunch = (
    workflowID: string,
    runID: string,
    operation: string
  ) => {
    const operateLaunchRequest = new OperateRequest();
    operateLaunchRequest.setWorkflowId(workflowID);
    operateLaunchRequest.setRunId(runID);
    operateLaunchRequest.setOperation(operation);
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
          // setResult(true);
          console.log("Launch updated");
        }
      );
    }
  };

  return (
    <Container>
      <Table>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Namespace</Table.HeaderCell>
            <Table.HeaderCell>Status</Table.HeaderCell>

            <Table.HeaderCell>Operations</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {launches.map((e) => (
            <Table.Row>
              <Table.Cell>{e.getName()}</Table.Cell>
              <Table.Cell>{e.getNamespace()}</Table.Cell>
              <Table.Cell>{e.getWorkloadStatus()}</Table.Cell>
              <Table.Cell>
                <Icon
                  onClick={() =>
                    updateLaunch(e.getWorkflowId(), e.getRunId(), "DELETE")
                  }
                  name="delete"
                />
                <Icon
                  onClick={() =>
                    updateLaunch(e.getWorkflowId(), e.getRunId(), "START")
                  }
                  name="play"
                />
                <Icon
                  onClick={() =>
                    updateLaunch(e.getWorkflowId(), e.getRunId(), "STOP")
                  }
                  name="stop"
                />
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </Container>
  );
};

export default LaunchTable;
