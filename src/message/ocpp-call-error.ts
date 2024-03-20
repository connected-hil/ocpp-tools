import { OCPPMessageType } from "./types";
import { OCPPErrorCodeV16 } from "./../generated/v16";
import { randomUUID } from "crypto";
import { OCPPCallErrorV16 } from "src/generated/v16/types/ocpp-call-error";

interface iOCPPCallError {
  messageId?: string;
  errorCode: OCPPErrorCodeV16;
  errorDescription: string;
  errorDetails?: Record<string, unknown>;
}

export class OCPPCallError {
  public messageTypeId: OCPPMessageType;
  public messageId: string;

  public errorCode: OCPPErrorCodeV16;
  public errorDescription: string;
  public errorDetails: Record<string, unknown>;

  public toRPCObject(): OCPPCallErrorV16 {
    return [
      OCPPMessageType.CALL_ERROR,
      this.messageId,
      this.errorCode,
      this.errorDescription,
      this.errorDetails,
    ];
  }

  public constructor({
    messageId,
    errorCode,
    errorDescription,
    errorDetails,
  }: iOCPPCallError) {
    this.messageTypeId = OCPPMessageType.CALL_ERROR;
    this.messageId = messageId ?? randomUUID();
    this.errorCode = errorCode;
    this.errorDescription = errorDescription;
    this.errorDetails = errorDetails ?? {};
  }
}
