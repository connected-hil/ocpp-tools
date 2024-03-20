import ajv, { Schema } from "ajv";
import addFormats from "ajv-formats";
import callSchemav16 from "src/schemas/v16/ocpp-call.json";
import callResponseSchemav16 from "src/schemas/v16/ocpp-call-result.json";
import callErrorSchemav16 from "src/schemas/v16/ocpp-call-error.json";
import { OCPPMessageType, ocppVersion } from "src/message/types";

const validator = new ajv({ allErrors: true });
addFormats(validator);

const ocppMessageSchemasV16 = {
  [OCPPMessageType.CALL]: callSchemav16,
  [OCPPMessageType.CALL_RESULT]: callResponseSchemav16,
  [OCPPMessageType.CALL_ERROR]: callErrorSchemav16,
};
/**
 *
 * @param schema JSON schema
 * @param data Object to validate against the schema
 * @returns boolean indicating if the data is valid against the schema
 */
export const validateOCPPPayload = (schema: Schema, data: unknown) => {
  if (!data) {
    return false;
  }

  const validate = validator.compile(schema);
  const valid = validate(data);
  if (!valid) {
    console.warn(validate.errors);
  }

  return valid;
};

const getSchemaForMessage = (
  version: ocppVersion,
  messageTypeId: OCPPMessageType
) => {
  switch (version) {
    case ocppVersion.ocpp16:
      return ocppMessageSchemasV16[messageTypeId];
    case ocppVersion.ocpp20:
    case ocppVersion.ocpp201:
      throw new Error(`ocpp version not supported`);
  }
};

export const validateOCPPMessage = (
  ocppversion: ocppVersion,
  data: Array<unknown>
) => {
  if (!data) {
    return false;
  }

  if (Object.values(OCPPMessageType).includes(Number(data[0])) === false) {
    return false;
  }

  const schema = getSchemaForMessage(ocppversion, data[0] as OCPPMessageType);
  const validate = validator.compile(schema);
  const valid = validate(data);
  if (!valid) {
    console.warn(validate.errors);
  }

  return valid;
};
