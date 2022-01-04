import { useKeycloak } from "@react-keycloak/ssr";
import { KeycloakInstance, KeycloakTokenParsed } from "keycloak-js";
import { NextPage } from "next";
import { useEffect, useState } from "react";
import { Button, Container, Header, Icon } from "semantic-ui-react";
import withAuth from "../components/auth/withAuth";

const ProtectedPage: NextPage = () => {
  const { keycloak, initialized } = useKeycloak<KeycloakInstance>();
  const [username, setUsername] = useState<KeycloakTokenParsed>();
  useEffect(() => {
    if (initialized && keycloak) {
      // @ts-ignore
      setUsername(keycloak.idTokenParsed?.preferred_username);
    }
  });
  return (
    <>
      <Container style={{ marginTop: "2em" }}>
        <Header as="h2">{username}</Header>
        <p>User logged in</p>
        <p>
          <Button animated onClick={() => keycloak?.logout()}>
            <Button.Content visible>Logout</Button.Content>
            <Button.Content hidden>
              <Icon name="delete" />
            </Button.Content>
          </Button>
        </p>
      </Container>
    </>
  );
};

export default withAuth(ProtectedPage);
