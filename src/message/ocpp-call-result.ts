import { OCPPMessageType } from "./types";
import { OCPPResponseTypeV16 } from "./../generated/v16"
import { OCPPCallResultV16 } from "src/generated/v16/types/ocpp-call-result";



export class OCPPCallResult {
  public messageTypeId: OCPPMessageType
  public messageId: string;


  public payload: OCPPResponseTypeV16;

  public toRPCObject(): OCPPCallResultV16 {
    return [OCPPMessageType.CALL_RESULT, this.messageId, this.payload as Record<string, unknown>]
  }

  public constructor({messageId, payload}: { messageId: string, payload: OCPPResponseTypeV16}) {
    this.messageTypeId = OCPPMessageType.CALL_RESULT
    this.messageId = messageId
    this.payload = payload
  }
}