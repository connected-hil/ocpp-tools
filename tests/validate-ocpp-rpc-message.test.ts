/* eslint-disable @typescript-eslint/no-unused-vars */
import { ocppVersion } from "src/message/common";
import { validateOCPPMessage } from "src/validation";

interface TestCase {
  data: unknown[]
  expected: {
    valid: boolean
    messageType: string
  }
}

describe("validate OCPP v1.6 RPC messages", () => {
  const version = ocppVersion.ocpp16;
  test("returns false for undefined message type", () => {
    expect(validateOCPPMessage(version, [6])).toBe(false);
  });

  const tests: TestCase[] = [
    {
      data: [2, "abc123", "BootNotification", { chargePointVendor: "VendorX" }],
      expected: { messageType: "CALL", valid: true }
    },
    {
      data: [3, "abc123", { status: "Accepted" }],
      expected: { messageType: "CALL_RESULT", valid: true }
    },
    {
      // v2.0.1 message
      data: [
        2,
        "abc123",
        "NotifyChargingLimit",
        { chargingLimit: { chargingLimitSource: "Other" } }
      ],
      expected: { messageType: "CALL", valid: false }
    },
    {
      data: [4, "abc123", "NoSuchError", "Error description", {}],
      expected: {
        messageType: "CALL_ERROR",
        valid: false
      }
    },
    {
      data: [4, "abc123", "GenericError", "Error description", { detail: 123 }],
      expected: {
        messageType: "CALL_ERROR",
        valid: true
      }
    }
  ];

  test.each(tests)("validates $expected.messageType", ({ data, expected }) => {
    expect(validateOCPPMessage(version, data)).toBe(expected.valid);
  });
});

describe("validate OCPP v2.0.1 RPC messages", () => {
  const version = ocppVersion.ocpp201;
  test("returns false for undefined message type", () => {
    expect(validateOCPPMessage(version, [6])).toBe(false);
  });

  const tests: TestCase[] = [
    {
      data: [2, "abc123", "BootNotification", { chargePointVendor: "VendorX" }],
      expected: { messageType: "CALL", valid: true }
    },
    {
      data: [3, "abc123", { status: "Accepted" }],
      expected: { messageType: "CALL_RESULT", valid: true }
    },
    {
      // v2.0.1 message
      data: [
        2,
        "abc13",
        "NotifyChargingLimit",
        { chargingLimit: { chargingLimitSource: "Other" } }
      ],
      expected: { messageType: "CALL", valid: true }
    },
    {
      data: [4, "abc123", "NoSuchError", "Error description", {}],
      expected: {
        messageType: "CALL_ERROR",
        valid: false
      }
    },
    {
      data: [4, "abc123", "GenericError", "Error description", { detail: 123 }],
      expected: {
        messageType: "CALL_ERROR",
        valid: true
      }
    }
  ];

  test.each(tests)("validates $expected.messageType", ({ data, expected }) => {
    expect(validateOCPPMessage(version, data)).toBe(expected.valid);
  });
});
