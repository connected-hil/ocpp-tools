import { OCPPCall } from "./ocpp-call";
import { OCPPCallResult } from "./ocpp-call-result";
import { OCPPCallError } from "./ocpp-call-error";
import { OCPPMessageType, ocppVersion } from "./types";
import { validateOCPPMessage } from "src/validation";

type OCPPMessageParserOptions = {
  validateMessage?: boolean;
  validatePayload?: boolean;
  ocppVersion: ocppVersion;
};

export const parseOCPPMessage = (
  rawMessage: string,
  options: OCPPMessageParserOptions = {
    ocppVersion: ocppVersion.ocpp16,
    validateMessage: true,
    validatePayload: false,
  }
): OCPPCallError | OCPPCallResult | OCPPCall => {
  const parsed = JSON.parse(rawMessage);
  const [messageTypeId, messageId, ...attributes] = parsed;

  if (options.validateMessage) {
    if (validateOCPPMessage(options.ocppVersion, parsed) === false) {
      throw new Error("Invalid OCPP message");
    }
  }
  switch (messageTypeId) {
    case OCPPMessageType.CALL: {
      return new OCPPCall({
        messageId,
        action: attributes[0],
        payload: attributes[1],
      });
    }
    case OCPPMessageType.CALL_RESULT: {
      return new OCPPCallResult({ messageId, payload: attributes[0] });
    }
    case OCPPMessageType.CALL_ERROR: {
      return new OCPPCallError({
        messageId,
        errorCode: attributes[0],
        errorDescription: attributes[1],
        errorDetails: attributes[2] ?? {},
      });
    }
    default:
      throw new Error(`Unknown message type: ${messageTypeId}`);
  }
};