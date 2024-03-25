import { OCPPCallV16, OCPPCallV201 } from "./ocpp-call";
import { OCPPCallResultV16, OCPPCallResultV201 } from "./ocpp-call-result";
import { OCPPCallErrorV16, OCPPCallErrorV201 } from "./ocpp-call-error";
import { OCPPMessageType, ocppVersion } from "./types";
import { validateOCPPMessage } from "src/validation";

type OCPPMessageParserOptions = {
  validateMessage?: boolean;
  validatePayload?: boolean;
  version: ocppVersion;
};

export const parseOCPPMessage = (
  rawMessage: string,
  options: OCPPMessageParserOptions = {
    version: ocppVersion.ocpp16,
    validateMessage: true,
    validatePayload: false
  }
) => {
  const parsed = JSON.parse(rawMessage);
  const [messageTypeId, messageId, ...attributes] = parsed;
  const { version } = options;
  if (options.validateMessage) {
    if (validateOCPPMessage(version, parsed) === false) {
      throw new Error("Invalid OCPP message");
    }
  }

  switch (messageTypeId) {
    case OCPPMessageType.CALL: {
      const attr = {
        messageId,
        action: attributes[0],
        payload: attributes[1],
      };
      return version === ocppVersion.ocpp16
        ? new OCPPCallV16(attr)
        : new OCPPCallV201(attr);
    }
    case OCPPMessageType.CALL_RESULT: {
      const attr = { messageId, payload: attributes[0] };
      return version === ocppVersion.ocpp16
        ? new OCPPCallResultV16(attr)
        : new OCPPCallResultV201(attr);
    }
    case OCPPMessageType.CALL_ERROR: {
      const attr = {
        messageId,
        errorCode: attributes[0],
        errorDescription: attributes[1],
        errorDetails: attributes[2] ?? {},
      };
      return version === ocppVersion.ocpp16
        ? new OCPPCallErrorV16(attr)
        : new OCPPCallErrorV201(attr);
    }
    default:
      throw new Error(`Unknown message type: ${messageTypeId}`);
  }
};
