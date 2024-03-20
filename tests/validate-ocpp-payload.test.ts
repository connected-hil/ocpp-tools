import { validateOCPPPayload } from "src/validation";

describe("validateOCPPMessage", () => {
  test("should return false if data is not provided", () => {
    const schema = {};
    const data = undefined;
    const result = validateOCPPPayload(schema, data);
    expect(result).toBe(false);
  });
  test("should validate anything with given schema", () => {
    const schema = {
      type: "object",
      properties: {
        name: { type: "string" },
      },
      required: ["name"],
    };
    const data = { name: "John" };
    const result = validateOCPPPayload(schema, data);
    expect(result).toBe(true);
  });
});
