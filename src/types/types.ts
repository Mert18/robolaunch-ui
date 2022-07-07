export interface IRobot {
  robot_name: string;
  cluster_name: string;
  cloud_ide: boolean;
  fleet: string;
  workspaces: [IWorkspace];
}

export interface IFleet {
  name: string;
}

export interface IWorkspace {
  workspace_name: string;
  workspace_sub_path: string;
  workspace_build: string;
  build_steps: any;

  repositories: [IRepository];
}

export interface IRepository {
  repository_name: string;
  repository_url: string;
  repository_branch: string;
  repository_launch: string;
  env: [IEnv];
}

export interface IEnv {
  env_name: string;
  env_value: string;
}

export interface IBuildSteps {
  step_name: string;
  step_command: string;
  step_script: string;
}
