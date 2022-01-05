import * as grpcWeb from 'grpc-web';

import * as launch_pb from './launch_pb';


export class LaunchClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  listLaunch(
    request: launch_pb.Empty,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<launch_pb.LaunchList>;

  createLaunch(
    request: launch_pb.CreateRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: launch_pb.LaunchState) => void
  ): grpcWeb.ClientReadableStream<launch_pb.LaunchState>;

  operateLaunch(
    request: launch_pb.OperateRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: launch_pb.LaunchState) => void
  ): grpcWeb.ClientReadableStream<launch_pb.LaunchState>;

}

export class LaunchPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  listLaunch(
    request: launch_pb.Empty,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<launch_pb.LaunchList>;

  createLaunch(
    request: launch_pb.CreateRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<launch_pb.LaunchState>;

  operateLaunch(
    request: launch_pb.OperateRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<launch_pb.LaunchState>;

}

