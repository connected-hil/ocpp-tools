import {
  OCPPMessageType,
  OCPPRequestPayloadType,
  CallActionType,
  OCPPResponsePayloadType,
} from "./types";
import { ActionV16, OCPPRequestTypeV16 } from "src/generated/v16";
import { ActionV201, OCPPRequestTypeV201 } from "src/generated/v201";

import { randomUUID } from "crypto";
import { OCPPCallResult } from "./ocpp-call-result";

export interface iOCPPCall<
  RequestPayloadType extends OCPPRequestPayloadType,
  ActionType extends CallActionType
> {
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

  constructor ({
    messageId,
    action,
    payload,
  }: iOCPPCall<RequestPayloadType, ActionType>) {
    this.messageId = messageId ?? randomUUID();
    this.messageTypeId = OCPPMessageType.CALL;
    this.action = action;
    this.payload = payload;
  }
}

export class OCPPCallV16 extends OCPPCall<OCPPRequestTypeV16, ActionV16> {}
export class OCPPCallV201 extends OCPPCall<OCPPRequestTypeV201, ActionV201> {}
