import {
  getAction,
  getError,
  getMessageId,
  getMessageType,
  isCall,
  isCallError, isCallResult,
  OCPPErrorCodeType,
  OCPPMessageType,
  OCPPRpcMessage,
} from "src/message/common";
import {OCPPErrorCodeV16, OCPPErrorCodeV201} from "../src";

interface TestCase {
  data: OCPPRpcMessage
  expected: {
    messageType: OCPPMessageType,
    action?: string,
    error?: OCPPErrorCodeType,
  }
}

describe("validate helper functions with OCPP v1.6 RPC messages", () => {
  const tests: TestCase[] = [
    {
      data: [2, "abc123", "BootNotification", { chargePointVendor: "VendorX" }],
      expected: { messageType: OCPPMessageType.CALL, action: "BootNotification" }
    },
    {
      data: [3, "abc123", { status: "Accepted" }],
      expected: { messageType: OCPPMessageType.CALL_RESULT }
    },
    {
      // v2.0.1 message
      data: [
        2,
        "abc123",
        "NotifyChargingLimit",
        { chargingLimit: { chargingLimitSource: "Other" } }
      ],
      expected: { messageType: OCPPMessageType.CALL, action: "NotifyChargingLimit" }
    },
    {
      data: [4, "abc123", "GenericError", "Error description", { detail: 123 }],
      expected: {
        messageType: OCPPMessageType.CALL_ERROR,
        error: OCPPErrorCodeV16.GenericError,
      }
    }
  ];

  test.each(tests)("validates getMessageType $expected.messageType", ({ data, expected }) => {
    expect(getMessageType(data)).toBe(expected.messageType);
  });

  test.each(tests)("validates isXxx $expected.messageType", ({ data, expected }) => {
    if (expected.messageType === OCPPMessageType.CALL) {
      expect(isCall(data)).toBe(true);
      expect(isCallResult(data)).toBe(false);
      expect(isCallError(data)).toBe(false);
    } else if (expected.messageType === OCPPMessageType.CALL_RESULT) {
      expect(isCall(data)).toBe(false);
      expect(isCallResult(data)).toBe(true);
      expect(isCallError(data)).toBe(false);
    } else if (expected.messageType === OCPPMessageType.CALL_ERROR) {
      expect(isCall(data)).toBe(false);
      expect(isCallResult(data)).toBe(false);
      expect(isCallError(data)).toBe(true);
    }
  });

  test.each(tests)("validates getMessageId", ({ data }) => {
    expect(getMessageId(data)).toBe("abc123");
  });

  test.each(tests)("validates getAction", ({ data, expected }) => {
    if (isCall(data)) {
      expect(getAction(data)).toBe(expected.action);
    }
  });

  test.each(tests)("validates getError", ({ data, expected }) => {
    if (isCallError(data)) {
      expect(getError(data)).toBe(expected.error);
    }
  });
});

describe("validate helper functions with OCPP v2.0.1 RPC messages", () => {
  const tests: TestCase[] = [
    {
      data: [2, "abc123", "BootNotification", { chargePointVendor: "VendorX" }],
      expected: { messageType: OCPPMessageType.CALL, action: "BootNotification" }
    },
    {
      data: [3, "abc123", { status: "Accepted" }],
      expected: { messageType: OCPPMessageType.CALL_RESULT }
    },
    {
      // v2.0.1 message
      data: [
        2,
        "abc123",
        "NotifyChargingLimit",
        { chargingLimit: { chargingLimitSource: "Other" } }
      ],
      expected: { messageType: OCPPMessageType.CALL, action: "NotifyChargingLimit" }
    },
    {
      data: [4, "abc123", "GenericError", "Error description", { detail: 123 }],
      expected: {
        messageType: OCPPMessageType.CALL_ERROR,
        error: OCPPErrorCodeV201.GenericError,
      }
    }
  ];

  test.each(tests)("validates getMessageType $expected.messageType", ({ data, expected }) => {
    expect(getMessageType(data)).toBe(expected.messageType);
  });

  test.each(tests)("validates isXxx $expected.messageType", ({ data, expected }) => {
    if (expected.messageType === OCPPMessageType.CALL) {
      expect(isCall(data)).toBe(true);
      expect(isCallResult(data)).toBe(false);
      expect(isCallError(data)).toBe(false);
    } else if (expected.messageType === OCPPMessageType.CALL_RESULT) {
      expect(isCall(data)).toBe(false);
      expect(isCallResult(data)).toBe(true);
      expect(isCallError(data)).toBe(false);
    } else if (expected.messageType === OCPPMessageType.CALL_ERROR) {
      expect(isCall(data)).toBe(false);
      expect(isCallResult(data)).toBe(false);
      expect(isCallError(data)).toBe(true);
    }
  });

  test.each(tests)("validates getMessageId", ({ data }) => {
    expect(getMessageId(data)).toBe("abc123");
  });

  test.each(tests)("validates getAction", ({ data, expected }) => {
    if (isCall(data)) {
      expect(getAction(data)).toBe(expected.action);
    }
  });

  test.each(tests)("validates getError", ({ data, expected }) => {
    if (isCallError(data)) {
      expect(getError(data)).toBe(expected.error);
    }
  });
});
