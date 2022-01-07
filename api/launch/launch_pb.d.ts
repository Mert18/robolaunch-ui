import * as jspb from 'google-protobuf'



export class Empty extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Empty.AsObject;
  static toObject(includeInstance: boolean, msg: Empty): Empty.AsObject;
  static serializeBinaryToWriter(message: Empty, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Empty;
  static deserializeBinaryFromReader(message: Empty, reader: jspb.BinaryReader): Empty;
}

export namespace Empty {
  export type AsObject = {
  }
}

export class CreateRequest extends jspb.Message {
  getUsername(): string;
  setUsername(value: string): CreateRequest;

  getName(): string;
  setName(value: string): CreateRequest;

  getNamespace(): string;
  setNamespace(value: string): CreateRequest;

  getLaunchType(): string;
  setLaunchType(value: string): CreateRequest;

  getOperation(): string;
  setOperation(value: string): CreateRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateRequest): CreateRequest.AsObject;
  static serializeBinaryToWriter(message: CreateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateRequest;
  static deserializeBinaryFromReader(message: CreateRequest, reader: jspb.BinaryReader): CreateRequest;
}

export namespace CreateRequest {
  export type AsObject = {
    username: string,
    name: string,
    namespace: string,
    launchType: string,
    operation: string,
  }
}

export class OperateRequest extends jspb.Message {
  getWorkflowId(): string;
  setWorkflowId(value: string): OperateRequest;

  getRunId(): string;
  setRunId(value: string): OperateRequest;

  getOperation(): string;
  setOperation(value: string): OperateRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OperateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: OperateRequest): OperateRequest.AsObject;
  static serializeBinaryToWriter(message: OperateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OperateRequest;
  static deserializeBinaryFromReader(message: OperateRequest, reader: jspb.BinaryReader): OperateRequest;
}

export namespace OperateRequest {
  export type AsObject = {
    workflowId: string,
    runId: string,
    operation: string,
  }
}

export class LaunchState extends jspb.Message {
  getUsername(): string;
  setUsername(value: string): LaunchState;

  getName(): string;
  setName(value: string): LaunchState;

  getNamespace(): string;
  setNamespace(value: string): LaunchState;

  getLaunchType(): string;
  setLaunchType(value: string): LaunchState;

  getWorkloadStatus(): string;
  setWorkloadStatus(value: string): LaunchState;

  getTheiaPort(): number;
  setTheiaPort(value: number): LaunchState;

  getWebrtcPort(): number;
  setWebrtcPort(value: number): LaunchState;

  getNodeIp(): string;
  setNodeIp(value: string): LaunchState;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LaunchState.AsObject;
  static toObject(includeInstance: boolean, msg: LaunchState): LaunchState.AsObject;
  static serializeBinaryToWriter(message: LaunchState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LaunchState;
  static deserializeBinaryFromReader(message: LaunchState, reader: jspb.BinaryReader): LaunchState;
}

export namespace LaunchState {
  export type AsObject = {
    username: string,
    name: string,
    namespace: string,
    launchType: string,
    workloadStatus: string,
    theiaPort: number,
    webrtcPort: number,
    nodeIp: string,
  }
}

export class LaunchView extends jspb.Message {
  getName(): string;
  setName(value: string): LaunchView;

  getNamespace(): string;
  setNamespace(value: string): LaunchView;

  getLaunchType(): string;
  setLaunchType(value: string): LaunchView;

  getWorkloadStatus(): string;
  setWorkloadStatus(value: string): LaunchView;

  getWorkflowId(): string;
  setWorkflowId(value: string): LaunchView;

  getRunId(): string;
  setRunId(value: string): LaunchView;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LaunchView.AsObject;
  static toObject(includeInstance: boolean, msg: LaunchView): LaunchView.AsObject;
  static serializeBinaryToWriter(message: LaunchView, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LaunchView;
  static deserializeBinaryFromReader(message: LaunchView, reader: jspb.BinaryReader): LaunchView;
}

export namespace LaunchView {
  export type AsObject = {
    name: string,
    namespace: string,
    launchType: string,
    workloadStatus: string,
    workflowId: string,
    runId: string,
  }
}

export class LaunchList extends jspb.Message {
  getLaunchesList(): Array<LaunchView>;
  setLaunchesList(value: Array<LaunchView>): LaunchList;
  clearLaunchesList(): LaunchList;
  addLaunches(value?: LaunchView, index?: number): LaunchView;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LaunchList.AsObject;
  static toObject(includeInstance: boolean, msg: LaunchList): LaunchList.AsObject;
  static serializeBinaryToWriter(message: LaunchList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LaunchList;
  static deserializeBinaryFromReader(message: LaunchList, reader: jspb.BinaryReader): LaunchList;
}

export namespace LaunchList {
  export type AsObject = {
    launchesList: Array<LaunchView.AsObject>,
  }
}

