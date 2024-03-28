import {
  OCPPMessageType,
  OCPPRequestPayloadType,
  CallActionType,
  OCPPResponsePayloadType,
  ocppVersion,
} from "./types";
import { ActionV16, OCPPRequestTypeV16, actionValidatorV16 } from "src/generated/v16";
import { ActionV201, OCPPRequestTypeV201, actionValidatorV201 } from "src/generated/v201";

import { randomUUID } from "crypto";
import { OCPPCallResult } from "./ocpp-call-result";


export interface iOCPPCall<
  RequestPayloadType extends OCPPRequestPayloadType,
  ActionType extends CallActionType
> {
  version: ocppVersion;
  messageId?: string;
  action: ActionType;
  payload: RequestPayloadType;
}

export class OCPPCall<
  RequestPayloadType extends OCPPRequestPayloadType,
  ActionType extends CallActionType
> {
  public messageTypeId: OCPPMessageType.CALL;
  public messageId: string;

  public action: ActionType;

  public payload: RequestPayloadType;

  private version: ocppVersion;

  public toCallResponse<T extends OCPPResponsePayloadType>(
    payload: T
  ): OCPPCallResult<T> {
    return new OCPPCallResult<T>({
      messageId: this.messageId,
      payload
    })
  }

  public toRPCObject() {
    return [
      OCPPMessageType.CALL,
      this.messageId,
      this.action,
      this.payload as Record<string, unknown>
    ]
  }

  public validatePayload(): boolean {
    const validator = this.version === ocppVersion.ocpp16 ?
      actionValidatorV16[this.action] : actionValidatorV201[this.action]
    return validator(this.payload);
  }

  constructor({
    version,
    messageId,
    action,
    payload,
  }: iOCPPCall<RequestPayloadType, ActionType>) {
    this.version = version;
    this.messageId = messageId ?? randomUUID();
    this.messageTypeId = OCPPMessageType.CALL;
    this.action = action;
    this.payload = payload;
  }
}

export class OCPPCallV16 extends OCPPCall<OCPPRequestTypeV16, ActionV16> {
  constructor({
    messageId,
    action,
    payload
  }: Omit<iOCPPCall<OCPPRequestTypeV16, ActionV16>, "version">) {
    super({version: ocppVersion.ocpp16, messageId, action, payload})
  }
}
export class OCPPCallV201 extends OCPPCall<OCPPRequestTypeV201, ActionV201> {
  constructor({
    messageId,
    action,
    payload
  }: Omit<iOCPPCall<OCPPRequestTypeV201, ActionV201>, "version">) {
    super({version: ocppVersion.ocpp201, messageId, action, payload})
  }
}
