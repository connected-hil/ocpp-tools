import { OCPPMessageType } from "./types";
import {
  ActionV16,
  OCPPRequestTypeV16,
  OCPPResponseTypeV16,
} from "./../generated/v16";
import { randomUUID } from "crypto";
import { OCPPCallResult } from "./ocpp-call-result";
import { OCPPCallV16 } from "src/generated/v16/types/ocpp-call";

export class OCPPCall {
  public messageTypeId: OCPPMessageType.CALL;
  public messageId: string;

  public action: ActionV16;

  public payload: OCPPRequestTypeV16;

  public toCallResponse<T extends OCPPResponseTypeV16>(
    payload: T
  ): OCPPCallResult {
    return new OCPPCallResult({
      messageId: this.messageId,
      payload,
    });
  }

  public toRPCObject(): OCPPCallV16 {
    return [
      OCPPMessageType.CALL,
      this.messageId,
      this.action,
      this.payload as Record<string, unknown>,
    ];
  }

  constructor({
    messageId,
    action,
    payload,
  }: {
    messageId?: string;
    action: ActionV16;
    payload: OCPPRequestTypeV16;
  }) {
    this.messageId = messageId ?? randomUUID();
    this.messageTypeId = OCPPMessageType.CALL;
    this.action = action;
    this.payload = payload;
  }
}
