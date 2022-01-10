import { useKeycloak } from "@react-keycloak/ssr";
import { KeycloakInstance } from "keycloak-js";
import getConfig from "next/config";
import React, { useEffect, useState } from "react";
import { Container, Table } from "semantic-ui-react";
import { LaunchClient } from "../../api/launch/launch_grpc_web_pb";
import { Empty, LaunchList, LaunchView } from "../../api/launch/launch_pb";

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

  return (
    <Container>
      <Table>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Namespace</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {launches.map((e) => (
            <Table.Row>
              <Table.Cell>{e.getName()}</Table.Cell>
              <Table.Cell>{e.getNamespace()}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </Container>
  );
};

export default LaunchTable;
