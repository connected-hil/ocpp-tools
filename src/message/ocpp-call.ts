import {
  OCPPMessageType,
  type OCPPRequestPayloadType,
  type CallActionType,
  type OCPPResponsePayloadType,
  ocppVersion
} from "./types";
import {
  type ActionV16,
  type OCPPRequestTypeV16,
  type OCPPRpcMessageV16,
  type RpcCallV16,
  actionValidatorV16
} from "./../generated/v16";
import {
  type ActionV201,
  type OCPPRequestTypeV201,
  type OCPPRpcMessageV201,
  type RpcCallV201,
  actionValidatorV201
} from "./../generated/v201";

import { randomUUID } from "crypto";
import { OCPPCallResult } from "./ocpp-call-result";

export interface iOCPPCall<
  RequestPayloadType extends OCPPRequestPayloadType,
  ActionType extends CallActionType
> {
  version: ocppVersion
  messageId?: string
  action: ActionType
  payload: RequestPayloadType
}

export class OCPPCall<
  RequestPayloadType extends OCPPRequestPayloadType,
  ActionType extends CallActionType
> {
  public messageTypeId: OCPPMessageType.CALL;
  public messageId: string;

  public action: ActionType;

  public payload: RequestPayloadType;

  private readonly version: ocppVersion;

  /**
   * Create a OCPPCallResult for this call.
   * @param payload A OCPPResponse type
   * @returns OCPPCallResult
   */
  public toCallResponse<T extends OCPPResponsePayloadType>(
    payload: T
  ): OCPPCallResult<T> {
    return new OCPPCallResult<T>({
      messageId: this.messageId,
      payload
    })
  }

  /*
   * Return RPC object for OCPP CALL
   */
  public toRPCObject (): OCPPRpcMessageV16 | OCPPRpcMessageV201 {
    const rpc = [
      OCPPMessageType.CALL,
      this.messageId,
      this.action,
      this.payload as Record<string, unknown>
    ];
    return this.version === ocppVersion.ocpp16
      ? (rpc as RpcCallV16)
      : (rpc as RpcCallV201);
  }

  constructor ({
    version,
    messageId,
    action,
    payload
  }: iOCPPCall<RequestPayloadType, ActionType>) {
    this.version = version;
    this.messageId = messageId ?? randomUUID();
    this.messageTypeId = OCPPMessageType.CALL;
    this.action = action;
    this.payload = payload;
  }
}

export class OCPPCallV16 extends OCPPCall<OCPPRequestTypeV16, ActionV16> {
  /**
   * Create a new OCPP RPC Call version 1.6
   *
   * @param {Object} param0
   * @param {string=} param0.messageId optional message Identifier for CALL
   * @param {ActionV16} param0.action OCPP action for CALL
   * @param {OCPPRequestTypeV16} param0.payload OCPP message for RPC Call
   */
  constructor ({
    messageId,
    action,
    payload
  }: Omit<iOCPPCall<OCPPRequestTypeV16, ActionV16>, "version">) {
    super({ version: ocppVersion.ocpp16, messageId, action, payload });
  }

  /**
   * Validates RPC message format for action
   * @returns {boolean} validation result
   */
  public validatePayload (): boolean {
    return actionValidatorV16[this.action](this.payload);
  }
}
export class OCPPCallV201 extends OCPPCall<OCPPRequestTypeV201, ActionV201> {
  /**
   * Create a new OCPP RPC Call version 2.0.1
   *
   * @param {Object} param0
   * @param {string} [param0.messageId] optional message Identifier for CALL
   * @param {ActionV201} param0.action OCPP action for CALL
   * @param {OCPPRequestTypeV201} param0.payload OCPP message for RPC Call
   */
  constructor ({
    messageId,
    action,
    payload
  }: Omit<iOCPPCall<OCPPRequestTypeV201, ActionV201>, "version">) {
    super({ version: ocppVersion.ocpp201, messageId, action, payload });
  }

  /**
   * Validates RPC message format for action
   * @returns {boolean} validation result
   */
  public validatePayload (): boolean {
    return actionValidatorV201[this.action](this.payload);
  }
}
