import { validateOCPPMessage } from "src/validation";
import { parseOCPPMessage } from "../src/message/ocpp-message";
import { OCPPCall } from "src/message/ocpp-call";
import { OCPPMessageType, ocppVersion } from "src/message/types";
import { OCPPCallResult } from "src/message/ocpp-call-result";
import { OCPPCallError } from "src/message/ocpp-call-error";
import { OCPPErrorCodeV16 } from "src/generated/v16";
type TestCase<T> = {
  input: string;
  expected: Partial<T>;
};

const currentTime = new Date().toTimeString();
const exampleRequests: TestCase<OCPPCall>[] = [
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
      action: "BootNotification",
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
      action: "Heartbeat",
      payload: {},
    },
  },
];

const exampleResults: TestCase<OCPPCallResult>[] = [
  {
    input: JSON.stringify([3, "1234", { status: "Accepted" }]),
    expected: {
      messageId: "1234",
      messageTypeId: 3,
      payload: { status: "Accepted" },
    },
  },
  {
    input: JSON.stringify([3, "1234", { currentTime: currentTime }]),
    expected: {
      messageId: "1234",
      messageTypeId: 3,
      payload: { currentTime: currentTime },
    },
  },
];

const exampleErrors: TestCase<OCPPCallError>[] = [
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

describe("OCPP CALL", () => {
  test.each(exampleRequests)(
    ".parseOCPPMessage parses a $expected.action into OCPP CALL",
    ({ input, expected }) => {
      const m = parseOCPPMessage(input) as OCPPCall;
      expect(m.action).toEqual(expected.action);
      expect(m.messageId).toEqual(expected.messageId);
      expect(m.messageTypeId).toEqual(expected.messageTypeId);
      expect(m.payload).toEqual(expected.payload);
    }
  );

  test("Can create CALL_RESULT from CALL", () => {
    const input = exampleRequests[0].input;
    const m = parseOCPPMessage(input) as OCPPCall;

    const result = m.toCallResponse({ status: "Accepted" }).toRPCObject();

    expect(result).toEqual([3, JSON.parse(input)[1], { status: "Accepted" }]);
  });

  test.each(exampleRequests)(
    "Returns RPC format for $expected.action",
    ({ input, expected }) => {
      const m = (parseOCPPMessage(input) as OCPPCall).toRPCObject();
      expect(m[0]).toEqual(expected.messageTypeId);
      expect(m[1]).toEqual(expected.messageId);
      expect(m[2]).toEqual(expected.action?.toString());
      expect(m[3]).toEqual(expected.payload);
    }
  );

  test("Construct CALL via constructor", () => {
    const m = new OCPPCall({
      action: "BootNotification",
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
});

describe("OCPP CALL_RESULT", () => {
  test.each(exampleResults)(
    "constructs $expected.action",
    ({ input, expected }) => {
      const m = parseOCPPMessage(input) as OCPPCallResult;
      expect(m.messageId).toEqual(expected.messageId);
      expect(m.messageTypeId).toEqual(expected.messageTypeId);
      expect(m.payload).toEqual(expected.payload);
    }
  );
  test.each(exampleRequests)(
    "Returns RPC format for $expected.input",
    ({ input, expected }) => {
      const m = (parseOCPPMessage(input) as OCPPCall).toRPCObject();
      expect(m[0]).toEqual(expected.messageTypeId);
      expect(m[1]).toEqual(expected.messageId);
      expect(m[3]).toEqual(expected.payload);
    }
  );
});

describe("OCPP CALL_ERROR", () => {
  test.each(exampleErrors)(
    "constructs $expected.errorCode",
    ({ input, expected }) => {
      const m = parseOCPPMessage(input) as OCPPCallError;
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
      const m = (parseOCPPMessage(input) as OCPPCallError).toRPCObject();
      expect(m[0]).toEqual(expected.messageTypeId);
      expect(m[1]).toEqual(expected.messageId);
      expect(m[2]).toEqual(expected.errorCode);
      expect(m[3]).toEqual(expected.errorDescription);
      expect(m[4]).toEqual(expected.errorDetails);
    }
  );
  test("Construct CALL_ERROR via constructor can omit messageId and errorDetails", () => {
    const m = new OCPPCallError({
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
      expect(validateOCPPMessage(ocppVersion.ocpp16, JSON.parse(input))).toBe(
        true
      );
    }
  );
});
