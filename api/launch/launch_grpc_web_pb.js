/**
 * @fileoverview gRPC-Web generated client stub for launch
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.launch = require('./launch_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.launch.LaunchClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.launch.LaunchPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.launch.Empty,
 *   !proto.launch.LaunchList>}
 */
const methodDescriptor_Launch_ListLaunch = new grpc.web.MethodDescriptor(
  '/launch.Launch/ListLaunch',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.launch.Empty,
  proto.launch.LaunchList,
  /**
   * @param {!proto.launch.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.launch.LaunchList.deserializeBinary
);


/**
 * @param {!proto.launch.Empty} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.launch.LaunchList>}
 *     The XHR Node Readable Stream
 */
proto.launch.LaunchClient.prototype.listLaunch =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/launch.Launch/ListLaunch',
      request,
      metadata || {},
      methodDescriptor_Launch_ListLaunch);
};


/**
 * @param {!proto.launch.Empty} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.launch.LaunchList>}
 *     The XHR Node Readable Stream
 */
proto.launch.LaunchPromiseClient.prototype.listLaunch =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/launch.Launch/ListLaunch',
      request,
      metadata || {},
      methodDescriptor_Launch_ListLaunch);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.launch.CreateRequest,
 *   !proto.launch.LaunchState>}
 */
const methodDescriptor_Launch_CreateLaunch = new grpc.web.MethodDescriptor(
  '/launch.Launch/CreateLaunch',
  grpc.web.MethodType.UNARY,
  proto.launch.CreateRequest,
  proto.launch.LaunchState,
  /**
   * @param {!proto.launch.CreateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.launch.LaunchState.deserializeBinary
);


/**
 * @param {!proto.launch.CreateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.launch.LaunchState)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.launch.LaunchState>|undefined}
 *     The XHR Node Readable Stream
 */
proto.launch.LaunchClient.prototype.createLaunch =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/launch.Launch/CreateLaunch',
      request,
      metadata || {},
      methodDescriptor_Launch_CreateLaunch,
      callback);
};


/**
 * @param {!proto.launch.CreateRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.launch.LaunchState>}
 *     Promise that resolves to the response
 */
proto.launch.LaunchPromiseClient.prototype.createLaunch =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/launch.Launch/CreateLaunch',
      request,
      metadata || {},
      methodDescriptor_Launch_CreateLaunch);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.launch.OperateRequest,
 *   !proto.launch.LaunchState>}
 */
const methodDescriptor_Launch_OperateLaunch = new grpc.web.MethodDescriptor(
  '/launch.Launch/OperateLaunch',
  grpc.web.MethodType.UNARY,
  proto.launch.OperateRequest,
  proto.launch.LaunchState,
  /**
   * @param {!proto.launch.OperateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.launch.LaunchState.deserializeBinary
);


/**
 * @param {!proto.launch.OperateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.launch.LaunchState)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.launch.LaunchState>|undefined}
 *     The XHR Node Readable Stream
 */
proto.launch.LaunchClient.prototype.operateLaunch =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/launch.Launch/OperateLaunch',
      request,
      metadata || {},
      methodDescriptor_Launch_OperateLaunch,
      callback);
};


/**
 * @param {!proto.launch.OperateRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.launch.LaunchState>}
 *     Promise that resolves to the response
 */
proto.launch.LaunchPromiseClient.prototype.operateLaunch =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/launch.Launch/OperateLaunch',
      request,
      metadata || {},
      methodDescriptor_Launch_OperateLaunch);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.launch.OperateRequest,
 *   !proto.launch.LaunchState>}
 */
const methodDescriptor_Launch_GetLaunch = new grpc.web.MethodDescriptor(
  '/launch.Launch/GetLaunch',
  grpc.web.MethodType.UNARY,
  proto.launch.OperateRequest,
  proto.launch.LaunchState,
  /**
   * @param {!proto.launch.OperateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.launch.LaunchState.deserializeBinary
);


/**
 * @param {!proto.launch.OperateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.launch.LaunchState)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.launch.LaunchState>|undefined}
 *     The XHR Node Readable Stream
 */
proto.launch.LaunchClient.prototype.getLaunch =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/launch.Launch/GetLaunch',
      request,
      metadata || {},
      methodDescriptor_Launch_GetLaunch,
      callback);
};


/**
 * @param {!proto.launch.OperateRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.launch.LaunchState>}
 *     Promise that resolves to the response
 */
proto.launch.LaunchPromiseClient.prototype.getLaunch =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/launch.Launch/GetLaunch',
      request,
      metadata || {},
      methodDescriptor_Launch_GetLaunch);
};


module.exports = proto.launch;

