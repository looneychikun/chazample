// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// Syntax is always proto3
'use strict';
var grpc = require('grpc');
var chatpb_chatservice_pb = require('../chatpb/chatservice_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');

function serialize_chat_ChatHistoryRequest(arg) {
  if (!(arg instanceof chatpb_chatservice_pb.ChatHistoryRequest)) {
    throw new Error('Expected argument of type chat.ChatHistoryRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_chat_ChatHistoryRequest(buffer_arg) {
  return chatpb_chatservice_pb.ChatHistoryRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_chat_ChatHistoryResponse(arg) {
  if (!(arg instanceof chatpb_chatservice_pb.ChatHistoryResponse)) {
    throw new Error('Expected argument of type chat.ChatHistoryResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_chat_ChatHistoryResponse(buffer_arg) {
  return chatpb_chatservice_pb.ChatHistoryResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_chat_ChatRequest(arg) {
  if (!(arg instanceof chatpb_chatservice_pb.ChatRequest)) {
    throw new Error('Expected argument of type chat.ChatRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_chat_ChatRequest(buffer_arg) {
  return chatpb_chatservice_pb.ChatRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_chat_ChatResponse(arg) {
  if (!(arg instanceof chatpb_chatservice_pb.ChatResponse)) {
    throw new Error('Expected argument of type chat.ChatResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_chat_ChatResponse(buffer_arg) {
  return chatpb_chatservice_pb.ChatResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_chat_LoginRequest(arg) {
  if (!(arg instanceof chatpb_chatservice_pb.LoginRequest)) {
    throw new Error('Expected argument of type chat.LoginRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_chat_LoginRequest(buffer_arg) {
  return chatpb_chatservice_pb.LoginRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_chat_LoginResponse(arg) {
  if (!(arg instanceof chatpb_chatservice_pb.LoginResponse)) {
    throw new Error('Expected argument of type chat.LoginResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_chat_LoginResponse(buffer_arg) {
  return chatpb_chatservice_pb.LoginResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_chat_UserListRequest(arg) {
  if (!(arg instanceof chatpb_chatservice_pb.UserListRequest)) {
    throw new Error('Expected argument of type chat.UserListRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_chat_UserListRequest(buffer_arg) {
  return chatpb_chatservice_pb.UserListRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_chat_UserListResponse(arg) {
  if (!(arg instanceof chatpb_chatservice_pb.UserListResponse)) {
    throw new Error('Expected argument of type chat.UserListResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_chat_UserListResponse(buffer_arg) {
  return chatpb_chatservice_pb.UserListResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_chat_UserUpdatesRequest(arg) {
  if (!(arg instanceof chatpb_chatservice_pb.UserUpdatesRequest)) {
    throw new Error('Expected argument of type chat.UserUpdatesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_chat_UserUpdatesRequest(buffer_arg) {
  return chatpb_chatservice_pb.UserUpdatesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_chat_UserUpdatesResponse(arg) {
  if (!(arg instanceof chatpb_chatservice_pb.UserUpdatesResponse)) {
    throw new Error('Expected argument of type chat.UserUpdatesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_chat_UserUpdatesResponse(buffer_arg) {
  return chatpb_chatservice_pb.UserUpdatesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// Define our service and it's interface
var ChatServiceService = exports.ChatServiceService = {
  // Login and Logout - Unary
  login: {
    path: '/chat.ChatService/Login',
    requestStream: false,
    responseStream: false,
    requestType: chatpb_chatservice_pb.LoginRequest,
    responseType: chatpb_chatservice_pb.LoginResponse,
    requestSerialize: serialize_chat_LoginRequest,
    requestDeserialize: deserialize_chat_LoginRequest,
    responseSerialize: serialize_chat_LoginResponse,
    responseDeserialize: deserialize_chat_LoginResponse,
  },
  // Get a list of users - Unary
  userList: {
    path: '/chat.ChatService/UserList',
    requestStream: false,
    responseStream: false,
    requestType: chatpb_chatservice_pb.UserListRequest,
    responseType: chatpb_chatservice_pb.UserListResponse,
    requestSerialize: serialize_chat_UserListRequest,
    requestDeserialize: deserialize_chat_UserListRequest,
    responseSerialize: serialize_chat_UserListResponse,
    responseDeserialize: deserialize_chat_UserListResponse,
  },
  // Attach to list of users - Server Streaming
  userUpdates: {
    path: '/chat.ChatService/UserUpdates',
    requestStream: false,
    responseStream: true,
    requestType: chatpb_chatservice_pb.UserUpdatesRequest,
    responseType: chatpb_chatservice_pb.UserUpdatesResponse,
    requestSerialize: serialize_chat_UserUpdatesRequest,
    requestDeserialize: deserialize_chat_UserUpdatesRequest,
    responseSerialize: serialize_chat_UserUpdatesResponse,
    responseDeserialize: deserialize_chat_UserUpdatesResponse,
  },
  // Load our history - Unary
  chatHistory: {
    path: '/chat.ChatService/ChatHistory',
    requestStream: false,
    responseStream: false,
    requestType: chatpb_chatservice_pb.ChatHistoryRequest,
    responseType: chatpb_chatservice_pb.ChatHistoryResponse,
    requestSerialize: serialize_chat_ChatHistoryRequest,
    requestDeserialize: deserialize_chat_ChatHistoryRequest,
    responseSerialize: serialize_chat_ChatHistoryResponse,
    responseDeserialize: deserialize_chat_ChatHistoryResponse,
  },
  // Our main chat interface - BiDi Streaming
  chat: {
    path: '/chat.ChatService/Chat',
    requestStream: true,
    responseStream: true,
    requestType: chatpb_chatservice_pb.ChatRequest,
    responseType: chatpb_chatservice_pb.ChatResponse,
    requestSerialize: serialize_chat_ChatRequest,
    requestDeserialize: deserialize_chat_ChatRequest,
    responseSerialize: serialize_chat_ChatResponse,
    responseDeserialize: deserialize_chat_ChatResponse,
  },
};

exports.ChatServiceClient = grpc.makeGenericClientConstructor(ChatServiceService);
