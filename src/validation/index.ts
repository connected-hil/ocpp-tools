import ajv, { type Schema } from "ajv";
import addFormats from "ajv-formats";
import { schemas } from "../schemas";
import { OCPPMessageType, ocppVersion } from "../message/common";

const validator = new ajv({
  allErrors: true,
  strict: false,
  strictSchema: false,
});
addFormats(validator);

/**
 *
 * @param schema JSON schema
 * @param data Object to validate against the schema
 * @returns boolean indicating if the data is valid against the schema
 */
export const validateOCPPPayload = (schema: Schema, data: unknown): boolean => {
  if (data == null) {
    return false;
  }

  const validate = validator.compile(schema);
  return validate(data);
};

/**
 *
 * @param schema JSON schema
 * @param data Object to validate against the schema
 * @returns [String] array of schema validation errors
 */
export const validationErrors = (schema: Schema, data: unknown): string[] => {
  const validate = validator.compile(schema);
  return validate(data)
    ? []
    : (validate.errors ?? [])?.map((e) => [e.schemaPath, e.message].join(": "));
};

const resolveSchema = (
  ocppversion: ocppVersion,
  messageType: OCPPMessageType
): Schema => {
  if (ocppversion === ocppVersion.ocpp16) {
    switch (messageType) {
      case OCPPMessageType.CALL:
        return schemas.v16.rpcCallV16;
      case OCPPMessageType.CALL_RESULT:
        return schemas.v16.rpcCallResultV16;
      case OCPPMessageType.CALL_ERROR:
        return schemas.v16.rpcCallErrorV16;
    }
  } else {
    switch (messageType) {
      case OCPPMessageType.CALL:
        return schemas.v201.rpcCallV201;
      case OCPPMessageType.CALL_RESULT:
        return schemas.v201.rpcCallResultV201;
      case OCPPMessageType.CALL_ERROR:
        return schemas.v201.rpcCallErrorV201;
    }
  }
};

export const validateOCPPMessage = (
  ocppversion: ocppVersion,
  data: unknown[]
): boolean => {
  if (!Object.values(OCPPMessageType).includes(Number(data[0]))) {
    return false;
  }

  const schema = resolveSchema(ocppversion, data[0] as OCPPMessageType);
  const validate = validator.compile(schema);
  // TODO remove
  return validate(data);
};
