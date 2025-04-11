import { validateOCPPMessage } from "src/validation";
import { parseOCPPMessage } from "../src/message/ocpp-message";
import { type OCPPCall, OCPPCallV16 } from "src/message/ocpp-call";
import { OCPPMessageType, ocppVersion } from "src/message/common";
import { type OCPPCallResultV16 } from "src/message/ocpp-call-result";
import { OCPPCallErrorV16 } from "src/message/ocpp-call-error";

import {
  Action as ActionV16,
  ErrorCode as OCPPErrorCodeV16,
  type AuthorizeResponseV16,
  type BootNotificationRequestV16,
  type RpcCallV16,
  type RpcCallErrorV16,
} from "src/types/v16";
import { OCPPRequestTypeV16 } from "src/types";
import { AuthorizationStatus } from "src/types/v16/authorize-response";

interface TestCase<T> {
  input: string;
  expected: Partial<T>;
}

const currentTime = new Date().toTimeString();
const exampleRequests: Array<TestCase<OCPPCallV16>> = [
  {
    input: JSON.stringify([
      2,
      "1234",
      "BootNotification",
      { chargePointVendor: "VendorX", chargePointModel: "SingleSocketCharger" },
    ]),
    expected: {
      messageId: "1234",
      messageTypeId: 2,
      action: ActionV16.BootNotification,
      payload: {
        chargePointVendor: "VendorX",
        chargePointModel: "SingleSocketCharger",
      },
    },
  },
  {
    input: JSON.stringify([2, "1234", "Heartbeat", {}]),
    expected: {
      messageId: "1234",
      messageTypeId: 2,
      action: ActionV16.Heartbeat,
      payload: {},
    },
  },
  {
    input:
      '[2,"5","SecurityEventNotification",{"timestamp":"2024-04-25T23:04:15Z","type":"InvalidMessages"}]',
    expected: {
      messageId: "5",
      messageTypeId: 2,
      action: ActionV16.SecurityEventNotification,
      payload: { timestamp: "2024-04-25T23:04:15Z", type: "InvalidMessages" },
    },
  },
  {
    input:
      '[2,"829cc6c0-25c8-4a8c-a7fb-ad31fb25d66b","StatusNotification",{"connectorId":2,"status":"Available","errorCode":"NoError"}]',
    expected: {
      messageId: "829cc6c0-25c8-4a8c-a7fb-ad31fb25d66b",
      messageTypeId: 2,
      action: ActionV16.StatusNotification,
      payload: { connectorId: 2, status: "Available", errorCode: "NoError" },
    },
  },
];

const exampleResults: Array<TestCase<OCPPCallResultV16>> = [
  {
    input: JSON.stringify([3, "1234", { status: "Accepted" }]),
    expected: {
      messageId: "1234",
      messageTypeId: 3,
      payload: { status: "Accepted" },
    },
  },
  {
    input: JSON.stringify([3, "1234", { currentTime }]),
    expected: {
      messageId: "1234",
      messageTypeId: 3,
      payload: { currentTime },
    },
  },
];

const exampleErrors: Array<TestCase<OCPPCallErrorV16>> = [
  {
    input: JSON.stringify([4, "1234", "GenericError", "Some description", {}]),
    expected: {
      messageId: "1234",
      messageTypeId: 4,
      errorCode: OCPPErrorCodeV16.GenericError,
      errorDescription: "Some description",
      errorDetails: {},
    },
  },
  {
    input: JSON.stringify([4, "1234", "InternalError", "", { details: 123 }]),
    expected: {
      messageId: "1234",
      messageTypeId: 4,
      errorCode: OCPPErrorCodeV16.InternalError,
      errorDescription: "",
      errorDetails: { details: 123 },
    },
  },
];

describe("OCPP CALL V16", () => {
  test.each(exampleRequests)(
    ".parseOCPPMessage parses a $expected.action into OCPP CALL",
    ({ input, expected }) => {
      const m = parseOCPPMessage(input) as OCPPCall<
        OCPPRequestTypeV16,
        ActionV16
      >;
      expect(m.action).toEqual(expected.action);
      expect(m.messageId).toEqual(expected.messageId);
      expect(m.messageTypeId).toEqual(expected.messageTypeId);
      expect(m.payload).toEqual(expected.payload);
    }
  );

  test("Can create CALL_RESULT from CALL", () => {
    const input = exampleRequests[0].input;
    const m = parseOCPPMessage(input) as OCPPCallV16;

    const result = m
      .toCallResponse<AuthorizeResponseV16>({
        idTagInfo: { status: AuthorizationStatus.Accepted },
      })
      .toRPCObject();

    expect(result).toEqual([
      3,
      JSON.parse(input)[1],
      { idTagInfo: { status: "Accepted" } },
    ]);
  });

  test.each(exampleRequests)(
    "Returns RPC format for $expected.action",
    ({ input, expected }) => {
      const m = (
        parseOCPPMessage(input) as OCPPCallV16
      ).toRPCObject() as RpcCallV16;
      expect(m[0]).toEqual(expected.messageTypeId);
      expect(m[1]).toEqual(expected.messageId);
      expect(m[2]).toEqual(expected.action?.toString());
      expect(m[3]).toEqual(expected.payload);
    }
  );

  test("Construct CALL via constructor", () => {
    const m = new OCPPCallV16({
      action: ActionV16.BootNotification,
      payload: {
        chargePointVendor: "VendorX",
        chargePointModel: "SingleSocketCharger",
      },
    });
    expect(m.messageId).toBeDefined();
    expect(m.messageTypeId).toEqual(OCPPMessageType.CALL);
    expect(m.action).toEqual("BootNotification");
    expect(m.payload).toEqual({
      chargePointVendor: "VendorX",
      chargePointModel: "SingleSocketCharger",
    });
  });

  describe("Validating call payloads", () => {
    test("Detects invalid payload for action", () => {
      expect(() =>
        parseOCPPMessage(JSON.stringify([2, "abv13", "Authorize", {}]), {
          version: ocppVersion.ocpp16,
          validatePayload: true,
        })
      ).toThrow(Error);
      expect(1).toBe(1);
    });

    test("Accepts valid payload for action", () => {
      const payload: BootNotificationRequestV16 = {
        chargePointModel: "Model1",
        chargePointVendor: "Vendor1",
      };
      expect(() =>
        parseOCPPMessage(
          JSON.stringify([2, "abc", "BootNotification", payload]),
          { version: ocppVersion.ocpp16, validatePayload: true }
        )
      ).not.toThrow(Error);
    });
  });
});

describe("OCPP CALL_RESULT V16", () => {
  test.each(exampleResults)("constructs $input", ({ input, expected }) => {
    const m = parseOCPPMessage(input) as OCPPCallResultV16;
    expect(m.messageId).toEqual(expected.messageId);
    expect(m.messageTypeId).toEqual(expected.messageTypeId);
    expect(m.payload).toEqual(expected.payload);
  });
  test.each(exampleRequests)(
    "Returns RPC format for $expected.input",
    ({ input, expected }) => {
      const m = (
        parseOCPPMessage(input) as OCPPCallV16
      ).toRPCObject() as RpcCallV16;
      expect(m[0]).toEqual(expected.messageTypeId);
      expect(m[1]).toEqual(expected.messageId);
      expect(m[3]).toEqual(expected.payload);
    }
  );
});

describe("OCPP CALL_ERROR V16", () => {
  test.each(exampleErrors)(
    "constructs $expected.errorCode",
    ({ input, expected }) => {
      const m = parseOCPPMessage(input) as OCPPCallErrorV16;
      expect(m.messageId).toEqual(expected.messageId);
      expect(m.messageTypeId).toEqual(expected.messageTypeId);
      expect(m.errorCode).toEqual(expected.errorCode);
      expect(m.errorDescription).toEqual(expected.errorDescription);
      expect(m.errorDetails).toEqual(expected.errorDetails);
    }
  );
  test.each(exampleErrors)(
    "Returns RPC format for $expected.input",
    ({ input, expected }) => {
      const m = (
        parseOCPPMessage(input) as OCPPCallErrorV16
      ).toRPCObject() as RpcCallErrorV16;
      expect(m[0]).toEqual(expected.messageTypeId);
      expect(m[1]).toEqual(expected.messageId);
      expect(m[2]).toEqual(expected.errorCode);
      expect(m[3]).toEqual(expected.errorDescription);
      expect(m[4]).toEqual(expected.errorDetails);
    }
  );
  test("Construct CALL_ERROR via constructor can omit messageId and errorDetails", () => {
    const m = new OCPPCallErrorV16({
      errorCode: OCPPErrorCodeV16.GenericError,
      errorDescription: "Some description",
    });
    expect(m.messageId).toBeDefined();
    expect(m.messageTypeId).toEqual(OCPPMessageType.CALL_ERROR);
    expect(m.errorCode).toEqual(OCPPErrorCodeV16.GenericError);
    expect(m.errorDescription).toEqual("Some description");
  });
});

describe("OCPPMessage validation", () => {
  test.each(exampleRequests)(
    "validate RPC message $expected.action",
    ({ input }) => {
      expect(
        validateOCPPMessage(ocppVersion.ocpp16, JSON.parse(input) as unknown[])
      ).toBe(true);
    }
  );
});
