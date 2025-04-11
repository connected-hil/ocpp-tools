import { validateOCPPMessage } from "src/validation";
import { parseOCPPMessage } from "../src/message/ocpp-message";
import { type OCPPCall, OCPPCallV201 } from "src/message/ocpp-call";
import { OCPPMessageType, ocppVersion } from "src/message/common";
import { type OCPPCallResultV201 } from "src/message/ocpp-call-result";
import { OCPPCallErrorV201 } from "src/message/ocpp-call-error";
import { type OCPPRequestTypeV201 } from "../src/types";
import {
  type AuthorizeResponseV201,
  type BootNotificationRequestV201,
  Action,
  ErrorCode,
} from "src/types/v201";
import { BootReasonEnumType } from "src/types/v201/boot-notification";
import { AuthorizationStatusEnumType } from "src/types/v201/authorize-response";
import { RegistrationStatusEnumType } from "src/types/v201/boot-notification-response";

interface TestCase<T> {
  input: string;
  expected: Partial<T>;
}

const currentTime = new Date().toTimeString();
const exampleRequests: Array<TestCase<OCPPCallV201>> = [
  {
    input: JSON.stringify([
      2,
      "1234",
      "BootNotification",
      {
        reason: "Triggered",
        chargingStation: { vendorName: "Denso", model: "SingleSocketCharger" },
      },
    ]),
    expected: {
      messageId: "1234",
      messageTypeId: 2,
      action: Action.BootNotification,
      payload: {
        reason: BootReasonEnumType.Triggered,
        chargingStation: { vendorName: "Denso", model: "SingleSocketCharger" },
      },
    },
  },
  {
    input: JSON.stringify([2, "1234", "Heartbeat", {}]),
    expected: {
      messageId: "1234",
      messageTypeId: 2,
      action: Action.Heartbeat,
      payload: {},
    },
  },
];

const exampleResults: Array<TestCase<OCPPCallResultV201>> = [
  {
    input: JSON.stringify([
      3,
      "1234",
      { status: "Accepted", currentTime, interval: 900 },
    ]),
    expected: {
      messageId: "1234",
      messageTypeId: 3,
      payload: {
        status: RegistrationStatusEnumType.Accepted,
        currentTime,
        interval: 900,
      },
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

const exampleErrors: Array<TestCase<OCPPCallErrorV201>> = [
  {
    input: JSON.stringify([
      4,
      "1234",
      "GenericError",
      "Some description",
      { foo: "bar" },
    ]),
    expected: {
      messageId: "1234",
      messageTypeId: 4,
      errorCode: ErrorCode.GenericError,
      errorDescription: "Some description",
      errorDetails: { foo: "bar" },
    },
  },
  {
    input: JSON.stringify([4, "1234", "InternalError", "", { details: 123 }]),
    expected: {
      messageId: "1234",
      messageTypeId: 4,
      errorCode: ErrorCode.InternalError,
      errorDescription: "",
      errorDetails: { details: 123 },
    },
  },
];

describe("OCPP CALL V201", () => {
  test.each(exampleRequests)(
    ".parseOCPPMessage parses a $expected.action into OCPP CALL",
    ({ input, expected }) => {
      const m = parseOCPPMessage(input) as OCPPCall<
        OCPPRequestTypeV201,
        Action
      >;
      expect(m.action).toEqual(expected.action);
      expect(m.messageId).toEqual(expected.messageId);
      expect(m.messageTypeId).toEqual(expected.messageTypeId);
      expect(m.payload).toEqual(expected.payload);
    }
  );

  test("Can create CALL_RESULT from CALL", () => {
    const input = exampleRequests[0].input;
    const m = parseOCPPMessage(input) as OCPPCallV201;

    const result = m
      .toCallResponse<AuthorizeResponseV201>({
        idTokenInfo: { status: AuthorizationStatusEnumType.Accepted },
      })
      .toRPCObject();

    expect(result).toEqual([
      3,
      JSON.parse(input)[1],
      { idTokenInfo: { status: "Accepted" } },
    ]);
  });

  test.each(exampleRequests)(
    "Returns RPC format for $expected.action",
    ({ input, expected }) => {
      const m = (parseOCPPMessage(input) as OCPPCallV201).toRPCObject();
      console.info(m);
      console.info(expected);
    }
  );

  test("Construct CALL via constructor", () => {
    const m = new OCPPCallV201({
      action: Action.BootNotification,
      payload: {
        reason: BootReasonEnumType.Triggered,
        chargingStation: { vendorName: "Denso", model: "SingleSocketCharger" },
      },
    });
    expect(m.messageId).toBeDefined();
    expect(m.messageTypeId).toEqual(OCPPMessageType.CALL);
    expect(m.action).toEqual("BootNotification");
    expect(m.payload).toEqual({
      reason: "Triggered",
      chargingStation: { vendorName: "Denso", model: "SingleSocketCharger" },
    });
  });

  describe("Validating call payloads", () => {
    test("Detects invalid payload for action", () => {
      expect(() =>
        parseOCPPMessage(JSON.stringify([2, "abv13", "Authorize", {}]), {
          version: ocppVersion.ocpp201,
          validatePayload: true,
        })
      ).toThrow(Error);
      expect(1).toBe(1);
    });

    test("Accepts valid payload for action", () => {
      const payload: BootNotificationRequestV201 = {
        reason: BootReasonEnumType.Triggered,
        chargingStation: { vendorName: "Denso", model: "Charger-X" },
      };
      expect(() =>
        parseOCPPMessage(
          JSON.stringify([2, "abc", "BootNotification", payload]),
          { version: ocppVersion.ocpp201, validatePayload: true }
        )
      ).not.toThrow(Error);
    });
  });
});

describe("OCPP CALL_RESULT V201", () => {
  test.each(exampleResults)(
    "constructs $expected.action",
    ({ input, expected }) => {
      const m = parseOCPPMessage(input) as OCPPCallResultV201;
      expect(m.messageId).toEqual(expected.messageId);
      expect(m.messageTypeId).toEqual(expected.messageTypeId);
      expect(m.payload).toEqual(expected.payload);
    }
  );
  test.each(exampleRequests)(
    "Returns RPC format for $expected.input",
    ({ input, expected }) => {
      const m = (parseOCPPMessage(input) as OCPPCallV201).toRPCObject();
      console.info(m);
      console.info(expected);
    }
  );
});

describe("OCPP CALL_ERROR V201", () => {
  test.each(exampleErrors)(
    "constructs $expected.errorCode",
    ({ input, expected }) => {
      const m = parseOCPPMessage(input) as OCPPCallErrorV201;
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
      const m = (parseOCPPMessage(input) as OCPPCallErrorV201).toRPCObject();
      expect(m[0]).toEqual(expected.messageTypeId);
      expect(m[1]).toEqual(expected.messageId);
      expect(m[2]).toEqual(expected.errorCode);
      expect(m[3]).toEqual(expected.errorDescription);
      expect(m[4]).toEqual(expected.errorDetails);
    }
  );
  test("Construct CALL_ERROR via constructor can omit messageId and errorDetails", () => {
    const m = new OCPPCallErrorV201({
      errorCode: ErrorCode.GenericError,
      errorDescription: "Some description",
    });
    expect(m.messageId).toBeDefined();
    expect(m.messageTypeId).toEqual(OCPPMessageType.CALL_ERROR);
    expect(m.errorCode).toEqual(ErrorCode.GenericError);
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
