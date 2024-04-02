import { type OCPPResponseTypeV16, type RpcCallResultV16 } from "./../generated/v16";
import { type RpcCallResultV201, type OCPPResponseTypeV201 } from "..//generated/v201";
import { OCPPMessageType, type OCPPResponsePayloadType } from "./types";

export class OCPPCallResult<ResponseType extends OCPPResponsePayloadType> {
  public messageTypeId: OCPPMessageType.CALL_RESULT;
  public messageId: string;

  public payload: ResponseType;

  public toRPCObject (): RpcCallResultV16 | RpcCallResultV201 {
    return [
      OCPPMessageType.CALL_RESULT,
      this.messageId,
      this.payload as Record<string, unknown>
    ]
  }

  public constructor ({
    messageId,
    payload
  }: {
    messageId: string
    payload: ResponseType
  }) {
    this.messageTypeId = OCPPMessageType.CALL_RESULT
    this.messageId = messageId
    this.payload = payload
  }
}

export class OCPPCallResultV16 extends OCPPCallResult<OCPPResponseTypeV16> {}
export class OCPPCallResultV201 extends OCPPCallResult<OCPPResponseTypeV201> {}
