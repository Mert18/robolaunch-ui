import { useKeycloak } from "@react-keycloak/ssr";
import { KeycloakInstance, KeycloakTokenParsed } from "keycloak-js";
import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { Button, Container, Icon } from "semantic-ui-react";
import withAuth from "../components/auth/withAuth";
import CreateLaunch from "../components/launch/createLaunch";

const Launches: NextPage = () => {
  const { keycloak, initialized } = useKeycloak<KeycloakInstance>();
  const [username, setUsername] = useState<string>("");
  useEffect(() => {
    if (initialized && keycloak) {
      // @ts-ignore
      setUsername(keycloak.idTokenParsed?.preferred_username);
    }
  });
  const [open, setOpen] = useState(false);

  return (
    <>
      <Container>
        <CreateLaunch namespace={username} />
      </Container>
      {/* Launch table will be on that part  */}
    </>
  );
};

export default withAuth(Launches);
