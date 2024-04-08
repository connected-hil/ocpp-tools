import {
  type ActionV16,
  type OCPPErrorCodeV16,
  type OCPPRequestTypeV16,
  type OCPPResponseTypeV16,
  type ActionV201,
  type OCPPErrorCodeV201,
  type OCPPRequestTypeV201,
  type OCPPResponseTypeV201
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
