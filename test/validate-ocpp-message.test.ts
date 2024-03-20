import { validateOCPPMessage } from "src/validation";

describe("validateOCPPMessage", () => {
  test("should return false if data is not provided", () => {
    const schema = {};
    const data = undefined;
    const result = validateOCPPMessage(schema, data);
    expect(result).toBe(false);
  });
});
