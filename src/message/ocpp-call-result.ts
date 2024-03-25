import { OCPPResponseTypeV16 } from "src/generated/v16";
import { OCPPMessageType } from "./types";
import { OCPPResponsePayloadType } from "./types";
import { OCPPResponseTypeV201 } from "src/generated/v201/types";

export class OCPPCallResult<ResponseType extends OCPPResponsePayloadType> {
  public messageTypeId: OCPPMessageType.CALL_RESULT;
  public messageId: string;

  public payload: ResponseType;

  public toRPCObject() {
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
    messageId: string;
    payload: ResponseType;
  }) {
    this.messageTypeId = OCPPMessageType.CALL_RESULT
    this.messageId = messageId
    this.payload = payload
  }
}

export class OCPPCallResultV16 extends OCPPCallResult<OCPPResponseTypeV16> {}
export class OCPPCallResultV201 extends OCPPCallResult<OCPPResponseTypeV201> {}
