import { type RpcCallErrorV16 } from "./../types/v16";
import { OCPPMessageType } from "./common";
import { v4 as uuidv4 } from "uuid";
import { type RpcCallErrorV201 } from "./../types/v201";
import { ErrorCode } from "./../types/v16";
import { ErrorCode as ErrorCodeV201 } from "./../types/v201";

export class OCPPCallError<T extends ErrorCode | ErrorCodeV201> {
  public messageTypeId: OCPPMessageType.CALL_ERROR;
  public messageId: string;

  public errorCode: T;
  public errorDescription: string;
  public errorDetails: Record<string, unknown>;

  public toRPCObject(): T extends ErrorCode
    ? RpcCallErrorV16
    : RpcCallErrorV201 {
    return [
      OCPPMessageType.CALL_ERROR,
      this.messageId,
      this.errorCode,
      this.errorDescription,
      this.errorDetails,
    ] as T extends ErrorCode ? RpcCallErrorV16 : RpcCallErrorV201;
  }

  public constructor({
    messageId,
    errorCode,
    errorDescription,
    errorDetails,
  }: {
    messageId?: string;
    errorCode: T;
    errorDescription: string;
    errorDetails?: Record<string, unknown>;
  }) {
    this.messageTypeId = OCPPMessageType.CALL_ERROR;
    this.messageId = messageId ?? uuidv4();
    this.errorCode = errorCode;
    this.errorDescription = errorDescription;
    this.errorDetails = errorDetails ?? {};
  }
}

export class OCPPCallErrorV16 extends OCPPCallError<ErrorCode> {}
export class OCPPCallErrorV201 extends OCPPCallError<ErrorCodeV201> {}
