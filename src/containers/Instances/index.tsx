import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout/Layout";
import { LaunchClient } from "../../api/launch/launch_grpc_web_pb";
import { Empty, LaunchView, OperateRequest } from "../../api/launch/launch_pb";
import { Env } from "../../constants";
import { KeycloakInstance } from "keycloak-js";
import { useKeycloak } from "@react-keycloak/web";
import InstanceList from "../../components/Instance/InstanceList";

const Instances = () => {
  const client = new LaunchClient(Env.LAUNCH!);
  const [launches, setLaunches] = useState<LaunchView[]>([]);

  //@ts-ignore
  const { keycloak, initialized } = useKeycloak<KeycloakInstance>();

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
  }, [initialized, keycloak]);

  return (
    <Layout>
      <InstanceList instances={launches} />
    </Layout>
  );
};

export default Instances;
