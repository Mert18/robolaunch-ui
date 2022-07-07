export const fleets = [
  {
    name: 'Default',
  },
  {
    name: 'X-Fleet',
  },
  {
    name: 'Y-Fleet',
  },
];

export const robots = [
  {
    robot_name: 'defaultrobot1',
    robot_distro: 'foxy',
    cloud_ide: true,
    fleet: 'Default',
    workspaces: [
      {
        name: 'gfdg',
      },
    ],
    cluster_name: 'cluster23',
  },
  {
    robot_name: 'defaultrobot2',
    robot_distro: 'foxy',
    cloud_ide: false,
    workspaces: [
      {
        name: 'gfdg',
      },
    ],
    fleet: 'Default',
    cluster_name: 'cluster23',
  },
  {
    robot_name: 'Dall-E',
    robot_distro: 'foxy',
    cloud_ide: true,
    fleet: 'X-Fleet',
    workspaces: [
      {
        name: 'gfdg',
      },
    ],
    cluster_name: 'cluster02',
  },
  {
    robot_name: 'Terminator',
    robot_distro: 'galactic',
    cloud_ide: true,
    fleet: 'X-Fleet',
    workspaces: [
      {
        name: 'gfdg',
      },
    ],
    cluster_name: 'cluster02',
  },
  {
    robot_name: 'Chappie',
    robot_distro: 'foxy',
    cloud_ide: true,
    fleet: 'Y-Fleet',
    workspaces: [
      {
        name: 'gfdg',
      },
    ],
    cluster_name: 'cluster04',
  },
  {
    robot_name: 'Blitzcrank',
    robot_distro: 'foxy',
    cloud_ide: false,
    fleet: 'X-Fleet',
    workspaces: [
      {
        name: 'gfdg',
      },
    ],
    cluster_name: 'cluster01',
  },
];
