import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Drawer from "../components/sidebar/sidebar";
import { Header, Container, Button, Icon } from "semantic-ui-react";
import { useKeycloak } from "@react-keycloak/ssr";
import { KeycloakInstance } from "keycloak-js";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const router = useRouter()
  const { keycloak, initialized } = useKeycloak<KeycloakInstance>();

  const login = () => {
    if (keycloak) window.location.href = keycloak?.createLoginUrl();
  };
  return (
    <div>
      <Container style={{ marginTop: "2em" }}>
        <Header as="h2">Test Zone</Header>
        <p>
          <Button animated onClick={() => login()}>
            <Button.Content visible>Login</Button.Content>
            <Button.Content hidden>
              <Icon name="arrow right" />
            </Button.Content>
          </Button>
        </p>
        <p>
          <Button animated onClick={() => router.push("/protected")}>
            <Button.Content visible>Protected Page</Button.Content>
            <Button.Content hidden>
              <Icon name="arrow right" />
            </Button.Content>
          </Button>
        </p>
      </Container>
    </div>
  );
};

export default Home;
