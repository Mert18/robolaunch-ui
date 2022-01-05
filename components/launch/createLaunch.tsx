import { useKeycloak } from "@react-keycloak/ssr";
import { KeycloakInstance } from "keycloak-js";
import getConfig from "next/config";
import React, { useEffect, useState } from "react";
import {
  Modal,
  ModalDescription,
  Header,
  Input,
  Button,
  Icon,
} from "semantic-ui-react";
import { LaunchClient } from "../../api/launch/launch_grpc_web_pb";
import { CreateRequest } from "../../api/launch/launch_pb";

interface Props {
  namespace: string;
}

const CreateLaunch: React.FC<Props> = ({ namespace }) => {
  const { publicRuntimeConfig } = getConfig();
  const { keycloak, initialized } = useKeycloak<KeycloakInstance>();
  const client = new LaunchClient(publicRuntimeConfig.launch);
  const launchRequest = new CreateRequest();
  const [open, setOpen] = useState(false);
  const [operation, setOperation] = useState("");
  const [name, setName] = useState("");
  const [type, setType] = useState("");

  const postLaunch = () => {
    if (namespace === "" || name === "") {
      console.error("Operation failed");
      return;
    }
    launchRequest.setName(name);
    launchRequest.setNamespace(namespace);
    launchRequest.setOperation("create");
    launchRequest.setLaunchType(type);

    launchRequest.setUsername(namespace);
    if (initialized && keycloak?.idToken) {
      console.log(keycloak?.idToken);
      client.createLaunch(
        launchRequest,
        {
          authorization: keycloak?.idToken,
        },
        (err, response) => {
          if (err !== null) {
            console.log(err);
            return;
          }
          // setResult(true);
          console.log("Launch created");
          setTimeout(() => {
            setOpen(false);

            // setResult(false);
            setName("");
          }, 500);
        }
      );
    }
  };
  return (
    <>
      <Button animated onClick={() => setOpen(true)}>
        <Button.Content visible>Add Launch</Button.Content>
        <Button.Content hidden>
          <Icon name="add" />
        </Button.Content>
      </Button>

      <Modal
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
      >
        <Modal.Header>Create Launch</Modal.Header>
        <Modal.Content>
          {/* <Modal.Description> */}
          <p>
            <Input
              placeholder="Launch Name"
              onChange={(e) => setName(e.target.value)}
            />
          </p>
          <p>
            <Input placeholder="Namespace" defaultValue={namespace} disabled />
          </p>
          <p>
            <Input
              placeholder="Launch Type"
              onChange={(e) => setType(e.target.value)}
            />
          </p>
          {/* </Modal.Description> */}
        </Modal.Content>
        <Modal.Actions>
          <Button color="black" onClick={() => setOpen(false)}>
            Nope
          </Button>
          <Button
            content="Create Launch"
            labelPosition="right"
            icon="checkmark"
            onClick={() => postLaunch()}
            positive
          />
        </Modal.Actions>
      </Modal>
    </>
  );
};

export default CreateLaunch;
