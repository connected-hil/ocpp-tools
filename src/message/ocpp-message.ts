import { OCPPCallV16, OCPPCallV201 } from "./ocpp-call";
import { OCPPCallResultV16, OCPPCallResultV201 } from "./ocpp-call-result";
import { OCPPCallErrorV16, OCPPCallErrorV201 } from "./ocpp-call-error";
import { OCPPMessageType, ocppVersion } from "./types";
import { validateOCPPMessage } from "./../validation";

interface OCPPMessageParserOptions {
  validateMessage?: boolean
  validatePayload?: boolean
  version: ocppVersion
}

type ReturnType = OCPPCallV16 | OCPPCallErrorV16 | OCPPCallResultV16 | OCPPCallV201 | OCPPCallResultV201 | OCPPCallErrorV201

/**
 * Parse and optionally validate a string JSON object as OCPP RPC.
 * @param {string }rawMessage JSON message to parse as OCPPMessage
 * @param {Object} options Parsing options
 * @param { ocppVersion } options.version OCPP version to to use
 * @param { boolean } options.validateMessage validate OCPP RPC message against schema
 * @param { boolean } options.validatePayload validate OCPP payload ( Only applicable to RPC type CALL)
 * @returns
 */
export const parseOCPPMessage = (
  rawMessage: string,
  options: OCPPMessageParserOptions = {
    version: ocppVersion.ocpp16,
    validateMessage: true,
    validatePayload: false
  }
): ReturnType => {
  const parsed = JSON.parse(rawMessage);
  const [messageTypeId, messageId, ...attributes] = parsed;
  const { version, validateMessage, validatePayload } = options;
  if (validateMessage === true) {
    if (!validateOCPPMessage(version, parsed as unknown[])) {
      throw new Error("Invalid OCPP message");
    }
  }

  switch (messageTypeId) {
    case OCPPMessageType.CALL: {
      const attr = {
        messageId,
        action: attributes[0],
        payload: attributes[1]
      };
      const call = version === ocppVersion.ocpp16
        ? new OCPPCallV16(attr)
        : new OCPPCallV201(attr);
      if (validatePayload === true && !call.validatePayload()) {
        throw new Error("Invalid OCPP Call payload")
      }
      return call
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
        errorDetails: attributes[2] ?? {}
      };
      return version === ocppVersion.ocpp16
        ? new OCPPCallErrorV16(attr)
        : new OCPPCallErrorV201(attr);
    }
    default:
      throw new Error(`Unknown message type: ${messageTypeId}`);
  }
};
