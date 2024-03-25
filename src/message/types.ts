import {
  ActionV16,
  OCPPErrorCodeV16,
  OCPPRequestTypeV16,
  OCPPResponseTypeV16,
} from "src/generated/v16";
import {
  ActionV201,
  OCPPErrorCodeV201,
  OCPPRequestTypeV201,
  OCPPResponseTypeV201,
} from "src/generated/v201";

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
