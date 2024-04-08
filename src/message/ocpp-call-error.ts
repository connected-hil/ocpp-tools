import { type RpcCallErrorV16 } from "./../types/v16";
import { OCPPMessageType, type OCPPErrorCodeType } from "./common";

import { randomUUID } from "crypto";
import { type RpcCallErrorV201 } from "./../types/v201";
import { type OCPPErrorCodeV16, type OCPPErrorCodeV201 } from "./../types";

export class OCPPCallError<T extends OCPPErrorCodeType> {
  public messageTypeId: OCPPMessageType.CALL_ERROR;
  public messageId: string;

  public errorCode: T;
  public errorDescription: string;
  public errorDetails: Record<string, unknown>;

  public toRPCObject (): RpcCallErrorV16 | RpcCallErrorV201 {
    return [
      OCPPMessageType.CALL_ERROR,
      this.messageId,
      this.errorCode,
      this.errorDescription,
      this.errorDetails
    ];
  }

  public constructor ({
    messageId,
    errorCode,
    errorDescription,
    errorDetails
  }: {
    messageId?: string
    errorCode: T
    errorDescription: string
    errorDetails?: Record<string, unknown>
  }) {
    this.messageTypeId = OCPPMessageType.CALL_ERROR;
    this.messageId = messageId ?? randomUUID();
    this.errorCode = errorCode;
    this.errorDescription = errorDescription;
    this.errorDetails = errorDetails ?? {};
  }
}

export class OCPPCallErrorV16 extends OCPPCallError<OCPPErrorCodeV16> {}
export class OCPPCallErrorV201 extends OCPPCallError<OCPPErrorCodeV201> {}
