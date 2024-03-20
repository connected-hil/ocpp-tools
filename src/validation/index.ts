import ajv, { Schema } from "ajv";
import addFormats from "ajv-formats";

const validator = new ajv({ allErrors: true });
addFormats(validator);

export const validateOCPPMessage = (schema: Schema, data: unknown) => {
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
