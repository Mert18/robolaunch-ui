import Link from "next/link";
import React from "react";
import { Header, Icon, Image, Menu, Segment, Sidebar } from "semantic-ui-react";

const Drawer: React.FC = ({ children }) => {
  return (
    <>
      <Sidebar
        as={Menu}
        animation="overlay"
        icon="labeled"
        vertical
        visible
        width="thin"
      >
        <Header as="h2">robolaunch</Header>
        <Link href="/">
          <Menu.Item as="a">
            <Icon name="home" />
            Home
          </Menu.Item>
        </Link>
        <Link href="/launches">
          <Menu.Item as="a">
            <Icon name="gamepad" />
            Launches
          </Menu.Item>
        </Link>

        <Menu.Item as="a">
          <Icon name="camera" />
          Readme
        </Menu.Item>
      </Sidebar>
      {children}
    </>
  );
};

export default Drawer;
