import { describe, expect, it } from "@jest/globals";
import {
  type CPActionV201,
  type CSMSActionV201,
  type ActionV201,
  type CPRequestTypeV201,
  type CSMSRequestTypeV201,
  type OCPPRequestTypeV201,
  type CPResponseTypeV201,
  type CSMSResponseTypeV201,
  type OCPPResponseTypeV201,
  type AuthorizeRequestV201,
  type BootNotificationRequestV201,
  type HeartbeatRequestV201,
  type ChangeAvailabilityRequestV201,
  type RequestStartTransactionRequestV201,
  type ResetRequestV201,
  type AuthorizeResponseV201,
  type BootNotificationResponseV201,
  type ChangeAvailabilityResponseV201,
} from "../src/types";

describe("OCPP 2.0.1 Directional Types", () => {
  describe("CP Action Types", () => {
    it("should allow valid CP-initiated actions", () => {
      const cpActions: CPActionV201[] = [
        "Authorize",
        "BootNotification",
        "Heartbeat",
        "StatusNotification",
        "TransactionEvent",
        "MeterValues",
        "NotifyEvent",
        "NotifyReport",
        "FirmwareStatusNotification",
        "LogStatusNotification",
        "SecurityEventNotification",
        "SignCertificate",
      ];

      cpActions.forEach((action) => {
        expect(typeof action).toBe("string");
      });
    });

    it("CP actions should be subset of all actions", () => {
      const cpAction: CPActionV201 = "Authorize";
      const allAction: ActionV201 = cpAction;
      expect(allAction).toBe("Authorize");
    });
  });

  describe("CSMS Action Types", () => {
    it("should allow valid CSMS-initiated actions", () => {
      const csmsActions: CSMSActionV201[] = [
        "CancelReservation",
        "ChangeAvailability",
        "ClearCache",
        "GetVariables",
        "SetVariables",
        "StartTransactionRequest",
        "StopTransactionRequest",
        "Reset",
        "UnlockConnector",
        "UpdateFirmware",
        "ReserveNow",
        "SetChargingProfile",
        "ClearChargingProfile",
        "GetCompositeSchedule",
        "TriggerMessage",
        "DataTransfer",
      ];

      csmsActions.forEach((action) => {
        expect(typeof action).toBe("string");
      });
    });

    it("CSMS actions should be subset of all actions", () => {
      const csmsAction: CSMSActionV201 = "Reset";
      const allAction: ActionV201 = csmsAction;
      expect(allAction).toBe("Reset");
    });
  });

  describe("CP Request Types", () => {
    it("should allow valid CP request types", () => {
      const authorizeRequest: AuthorizeRequestV201 = {
        idToken: {
          idToken: "ABCD1234",
          type: "ISO14443",
        },
      };

      const cpRequest: CPRequestTypeV201 = authorizeRequest;
      expect(cpRequest).toHaveProperty("idToken");
    });

    it("should allow BootNotification request", () => {
      const bootRequest: BootNotificationRequestV201 = {
        reason: "PowerUp",
        chargingStation: {
          model: "ModelX",
          vendorName: "VendorY",
        },
      };

      const cpRequest: CPRequestTypeV201 = bootRequest;
      expect(cpRequest).toHaveProperty("chargingStation");
      expect(cpRequest).toHaveProperty("reason");
    });

    it("should allow Heartbeat request", () => {
      const heartbeatRequest: HeartbeatRequestV201 = {};
      const cpRequest: CPRequestTypeV201 = heartbeatRequest;
      expect(cpRequest).toBeDefined();
    });

    it("CP request should be assignable to general request type", () => {
      const cpRequest: CPRequestTypeV201 = {
        idToken: {
          idToken: "TEST123",
          type: "ISO14443",
        },
      } as AuthorizeRequestV201;

      const generalRequest: OCPPRequestTypeV201 = cpRequest;
      expect(generalRequest).toHaveProperty("idToken");
    });
  });

  describe("CSMS Request Types", () => {
    it("should allow valid CSMS request types", () => {
      const changeAvailabilityRequest: ChangeAvailabilityRequestV201 = {
        operationalStatus: "Operative",
      };

      const csmsRequest: CSMSRequestTypeV201 = changeAvailabilityRequest;
      expect(csmsRequest).toHaveProperty("operationalStatus");
    });

    it("should allow RequestStartTransaction request", () => {
      const remoteStartRequest: RequestStartTransactionRequestV201 = {
        idToken: {
          idToken: "USER001",
          type: "ISO14443",
        },
        remoteStartId: 12345,
      };

      const csmsRequest: CSMSRequestTypeV201 = remoteStartRequest;
      expect(csmsRequest).toHaveProperty("idToken");
      expect(csmsRequest).toHaveProperty("remoteStartId");
    });

    it("should allow Reset request", () => {
      const resetRequest: ResetRequestV201 = {
        type: "Immediate",
      };

      const csmsRequest: CSMSRequestTypeV201 = resetRequest;
      expect(csmsRequest).toHaveProperty("type");
    });

    it("CSMS request should be assignable to general request type", () => {
      const csmsRequest: CSMSRequestTypeV201 = {
        type: "Immediate",
      } as ResetRequestV201;

      const generalRequest: OCPPRequestTypeV201 = csmsRequest;
      expect(generalRequest).toHaveProperty("type");
    });
  });

  describe("CP Response Types", () => {
    it("should allow valid CP response types", () => {
      const authorizeResponse: AuthorizeResponseV201 = {
        idTokenInfo: {
          status: "Accepted",
        },
      };

      const cpResponse: CPResponseTypeV201 = authorizeResponse;
      expect(cpResponse).toHaveProperty("idTokenInfo");
    });

    it("should allow BootNotification response", () => {
      const bootResponse: BootNotificationResponseV201 = {
        status: "Accepted",
        currentTime: "2024-01-01T00:00:00Z",
        interval: 300,
      };

      const cpResponse: CPResponseTypeV201 = bootResponse;
      expect(cpResponse).toHaveProperty("status");
      expect(cpResponse).toHaveProperty("currentTime");
    });

    it("CP response should be assignable to general response type", () => {
      const cpResponse: CPResponseTypeV201 = {
        idTokenInfo: {
          status: "Accepted",
        },
      } as AuthorizeResponseV201;

      const generalResponse: OCPPResponseTypeV201 = cpResponse;
      expect(generalResponse).toHaveProperty("idTokenInfo");
    });
  });

  describe("CSMS Response Types", () => {
    it("should allow valid CSMS response types", () => {
      const changeAvailabilityResponse: ChangeAvailabilityResponseV201 = {
        status: "Accepted",
      };

      const csmsResponse: CSMSResponseTypeV201 = changeAvailabilityResponse;
      expect(csmsResponse).toHaveProperty("status");
    });

    it("CSMS response should be assignable to general response type", () => {
      const csmsResponse: CSMSResponseTypeV201 = {
        status: "Accepted",
      } as ChangeAvailabilityResponseV201;

      const generalResponse: OCPPResponseTypeV201 = csmsResponse;
      expect(generalResponse).toHaveProperty("status");
    });
  });

  describe("Type Safety and Directionality", () => {
    it("should enforce correct message direction at compile time", () => {
      // CP to CSMS request
      const cpRequest: CPRequestTypeV201 = {
        idToken: {
          idToken: "ABC123",
          type: "ISO14443",
        },
      } as AuthorizeRequestV201;

      // This should compile fine
      const generalRequest: OCPPRequestTypeV201 = cpRequest;
      expect(generalRequest).toBeDefined();
    });

    it("should support bidirectional messages like DataTransfer", () => {
      // DataTransfer is in CSMS actions (can be initiated by both in practice)
      const csmsAction: CSMSActionV201 = "DataTransfer";
      expect(csmsAction).toBe("DataTransfer");
    });

    it("should maintain backward compatibility", () => {
      // Old code using general types should still work
      const action: ActionV201 = "Authorize";
      const request: OCPPRequestTypeV201 = {
        idToken: {
          idToken: "TEST",
          type: "ISO14443",
        },
      } as AuthorizeRequestV201;
      const response: OCPPResponseTypeV201 = {
        idTokenInfo: { status: "Accepted" },
      } as AuthorizeResponseV201;

      expect(action).toBe("Authorize");
      expect(request).toHaveProperty("idToken");
      expect(response).toHaveProperty("idTokenInfo");
    });
  });

  describe("Type Narrowing", () => {
    it("should allow type narrowing from general to specific", () => {
      const generalAction: ActionV201 = "Authorize";

      // Type guard example
      const isCPAction = (action: ActionV201): action is CPActionV201 => {
        const cpActions: CPActionV201[] = [
          "Authorize",
          "BootNotification",
          "ClearedChargingLimit",
          "FirmwareStatusNotification",
          "Get15118EVCertificate",
          "GetCertificateStatus",
          "Heartbeat",
          "LogStatusNotification",
          "MeterValues",
          "NotifyChargingLimit",
          "NotifyCustomerInformation",
          "NotifyDisplayMessages",
          "NotifyEVChargingNeeds",
          "NotifyEVChargingSchedule",
          "NotifyEvent",
          "NotifyMonitoringReport",
          "NotifyReport",
          "PublishFirmwareStatusNotification",
          "ReportChargingProfiles",
          "ReservationStatusUpdate",
          "SecurityEventNotification",
          "SignCertificate",
          "StatusNotification",
          "TransactionEvent",
        ];
        return cpActions.includes(action as CPActionV201);
      };

      if (isCPAction(generalAction)) {
        const cpSpecific: CPActionV201 = generalAction;
        expect(cpSpecific).toBe("Authorize");
      }
    });

    it("should distinguish between CP and CSMS initiated actions", () => {
      const cpInitiated: CPActionV201 = "Heartbeat";
      const csmsInitiated: CSMSActionV201 = "Reset";

      expect(cpInitiated).not.toBe(csmsInitiated);
    });
  });

  describe("Real-world Usage Scenarios", () => {
    it("should support CP sending Authorize request", () => {
      const request: CPRequestTypeV201 = {
        idToken: {
          idToken: "USER12345",
          type: "ISO14443",
        },
      } as AuthorizeRequestV201;

      const response: CPResponseTypeV201 = {
        idTokenInfo: {
          status: "Accepted",
        },
      } as AuthorizeResponseV201;

      expect(request).toHaveProperty("idToken");
      expect(response).toHaveProperty("idTokenInfo");
    });

    it("should support CSMS sending RequestStartTransaction request", () => {
      const request: CSMSRequestTypeV201 = {
        idToken: {
          idToken: "ADMIN001",
          type: "ISO14443",
        },
        remoteStartId: 99999,
      } as RequestStartTransactionRequestV201;

      const response: CSMSResponseTypeV201 = {
        status: "Accepted",
      };

      expect(request).toHaveProperty("idToken");
      expect(request).toHaveProperty("remoteStartId");
      expect(response).toHaveProperty("status");
    });

    it("should support CSMS sending GetVariables request", () => {
      const request: CSMSRequestTypeV201 = {
        getVariableData: [
          {
            component: {
              name: "ChargingStation",
            },
            variable: {
              name: "AvailabilityState",
            },
          },
        ],
      };

      expect(request).toHaveProperty("getVariableData");
    });
  });

  describe("OCPP 2.0.1 Specific Features", () => {
    it("should support TransactionEvent (CP initiated)", () => {
      const action: CPActionV201 = "TransactionEvent";
      expect(action).toBe("TransactionEvent");
    });

    it("should support NotifyEvent (CP initiated)", () => {
      const action: CPActionV201 = "NotifyEvent";
      expect(action).toBe("NotifyEvent");
    });

    it("should support SetVariables (CSMS initiated)", () => {
      const action: CSMSActionV201 = "SetVariables";
      expect(action).toBe("SetVariables");
    });

    it("should support GetVariables (CSMS initiated)", () => {
      const action: CSMSActionV201 = "GetVariables";
      expect(action).toBe("GetVariables");
    });
  });
});

