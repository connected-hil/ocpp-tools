import {
  type ActionV16,
  type OCPPErrorCodeV16,
  type OCPPRequestTypeV16,
  type OCPPResponseTypeV16,
  type ActionV201,
  type OCPPErrorCodeV201,
  type OCPPRequestTypeV201,
  type OCPPResponseTypeV201,
  type OCPPRpcMessageV16,
  type OCPPRpcMessageV201,
  type RpcCallV16,
  type RpcCallV201,
  type RpcCallErrorV16,
  type RpcCallErrorV201,
  type RpcCallResultV201,
  type RpcCallResultV16,
} from "../types";

export enum OCPPMessageType {
  CALL = 2,
  CALL_RESULT = 3,
  CALL_ERROR = 4,
}
export enum ocppVersion {
  ocpp16 = "ocpp1.6",
  ocpp201 = "ocpp2.0.1",
}

export type CallActionType = ActionV16 | ActionV201;
export type OCPPRequestPayloadType = OCPPRequestTypeV16 | OCPPRequestTypeV201;
export type OCPPResponsePayloadType =
  | OCPPResponseTypeV16
  | OCPPResponseTypeV201;
export type OCPPErrorCodeType = OCPPErrorCodeV16 | OCPPErrorCodeV201;
export type OCPPRpcMessage = OCPPRpcMessageV16 | OCPPRpcMessageV201;
export type RpcCall = RpcCallV16 | RpcCallV201;
export type RpcCallResult = RpcCallResultV16 | RpcCallResultV201;
export type RpcCallError = RpcCallErrorV16 | RpcCallErrorV201;

export function getMessageType(message: OCPPRpcMessage): OCPPMessageType {
  return message[0] as OCPPMessageType;
}

export function isCall(message: OCPPRpcMessage): message is RpcCall {
  return getMessageType(message) === OCPPMessageType.CALL;
}

export function isCallResult(message: OCPPRpcMessage): message is RpcCallResult {
  return getMessageType(message) === OCPPMessageType.CALL_RESULT;
}

export function isCallError(message: OCPPRpcMessage): message is RpcCallError {
  return getMessageType(message) === OCPPMessageType.CALL_ERROR;
}

export function getMessageId(message: OCPPRpcMessage): string {
  return message[1];
}

export function getAction(message: RpcCall): string {
  return message[2];
}

export function getError(message: RpcCallError): OCPPErrorCodeType {
  return message[2] as OCPPErrorCodeType;
}
