import { describe, expect, it } from "@jest/globals";
import {
  type CPActionV16,
  type CSMSActionV16,
  type ActionV16,
  type CPRequestTypeV16,
  type CSMSRequestTypeV16,
  type OCPPRequestTypeV16,
  type CPResponseTypeV16,
  type CSMSResponseTypeV16,
  type OCPPResponseTypeV16,
  type AuthorizeRequestV16,
  type BootNotificationRequestV16,
  type HeartbeatRequestV16,
  type ChangeAvailabilityRequestV16,
  type RemoteStartTransactionRequestV16,
  type ResetRequestV16,
  type AuthorizeResponseV16,
  type BootNotificationResponseV16,
  type ChangeAvailabilityResponseV16,
} from "../src/types";

describe("OCPP 1.6 Directional Types", () => {
  describe("CP Action Types", () => {
    it("should allow valid CP-initiated actions", () => {
      const cpActions: CPActionV16[] = [
        "Authorize",
        "BootNotification",
        "Heartbeat",
        "StartTransaction",
        "StopTransaction",
        "MeterValues",
        "StatusNotification",
        "DiagnosticsStatusNotification",
        "FirmwareStatusNotification",
        "LogStatusNotification",
        "SecurityEventNotification",
        "SignCertificate",
        "SignedFirmwareStatusNotification",
      ];

      cpActions.forEach((action) => {
        expect(typeof action).toBe("string");
      });
    });

    it("CP actions should be subset of all actions", () => {
      const cpAction: CPActionV16 = "Authorize";
      const allAction: ActionV16 = cpAction;
      expect(allAction).toBe("Authorize");
    });
  });

  describe("CSMS Action Types", () => {
    it("should allow valid CSMS-initiated actions", () => {
      const csmsActions: CSMSActionV16[] = [
        "CancelReservation",
        "ChangeAvailability",
        "ChangeConfiguration",
        "ClearCache",
        "GetConfiguration",
        "RemoteStartTransaction",
        "RemoteStopTransaction",
        "Reset",
        "UnlockConnector",
        "UpdateFirmware",
        "ReserveNow",
        "SetChargingProfile",
        "ClearChargingProfile",
        "GetCompositeSchedule",
        "GetDiagnostics",
        "TriggerMessage",
        "DataTransfer",
      ];

      csmsActions.forEach((action) => {
        expect(typeof action).toBe("string");
      });
    });

    it("CSMS actions should be subset of all actions", () => {
      const csmsAction: CSMSActionV16 = "Reset";
      const allAction: ActionV16 = csmsAction;
      expect(allAction).toBe("Reset");
    });
  });

  describe("CP Request Types", () => {
    it("should allow valid CP request types", () => {
      const authorizeRequest: AuthorizeRequestV16 = {
        idTag: "ABCD1234",
      };

      const cpRequest: CPRequestTypeV16 = authorizeRequest;
      expect(cpRequest).toHaveProperty("idTag");
    });

    it("should allow BootNotification request", () => {
      const bootRequest: BootNotificationRequestV16 = {
        chargePointVendor: "VendorX",
        chargePointModel: "ModelY",
      };

      const cpRequest: CPRequestTypeV16 = bootRequest;
      expect(cpRequest).toHaveProperty("chargePointVendor");
      expect(cpRequest).toHaveProperty("chargePointModel");
    });

    it("should allow Heartbeat request", () => {
      const heartbeatRequest: HeartbeatRequestV16 = {};
      const cpRequest: CPRequestTypeV16 = heartbeatRequest;
      expect(cpRequest).toBeDefined();
    });

    it("CP request should be assignable to general request type", () => {
      const cpRequest: CPRequestTypeV16 = {
        idTag: "TEST123",
      } as AuthorizeRequestV16;

      const generalRequest: OCPPRequestTypeV16 = cpRequest;
      expect(generalRequest).toHaveProperty("idTag");
    });
  });

  describe("CSMS Request Types", () => {
    it("should allow valid CSMS request types", () => {
      const changeAvailabilityRequest: ChangeAvailabilityRequestV16 = {
        connectorId: 1,
        type: "Operative",
      };

      const csmsRequest: CSMSRequestTypeV16 = changeAvailabilityRequest;
      expect(csmsRequest).toHaveProperty("connectorId");
      expect(csmsRequest).toHaveProperty("type");
    });

    it("should allow RemoteStartTransaction request", () => {
      const remoteStartRequest: RemoteStartTransactionRequestV16 = {
        idTag: "USER001",
      };

      const csmsRequest: CSMSRequestTypeV16 = remoteStartRequest;
      expect(csmsRequest).toHaveProperty("idTag");
    });

    it("should allow Reset request", () => {
      const resetRequest: ResetRequestV16 = {
        type: "Soft",
      };

      const csmsRequest: CSMSRequestTypeV16 = resetRequest;
      expect(csmsRequest).toHaveProperty("type");
    });

    it("CSMS request should be assignable to general request type", () => {
      const csmsRequest: CSMSRequestTypeV16 = {
        type: "Soft",
      } as ResetRequestV16;

      const generalRequest: OCPPRequestTypeV16 = csmsRequest;
      expect(generalRequest).toHaveProperty("type");
    });
  });

  describe("CP Response Types", () => {
    it("should allow valid CP response types", () => {
      const authorizeResponse: AuthorizeResponseV16 = {
        idTagInfo: {
          status: "Accepted",
        },
      };

      const cpResponse: CPResponseTypeV16 = authorizeResponse;
      expect(cpResponse).toHaveProperty("idTagInfo");
    });

    it("should allow BootNotification response", () => {
      const bootResponse: BootNotificationResponseV16 = {
        status: "Accepted",
        currentTime: "2024-01-01T00:00:00Z",
        interval: 300,
      };

      const cpResponse: CPResponseTypeV16 = bootResponse;
      expect(cpResponse).toHaveProperty("status");
      expect(cpResponse).toHaveProperty("currentTime");
    });

    it("CP response should be assignable to general response type", () => {
      const cpResponse: CPResponseTypeV16 = {
        idTagInfo: {
          status: "Accepted",
        },
      } as AuthorizeResponseV16;

      const generalResponse: OCPPResponseTypeV16 = cpResponse;
      expect(generalResponse).toHaveProperty("idTagInfo");
    });
  });

  describe("CSMS Response Types", () => {
    it("should allow valid CSMS response types", () => {
      const changeAvailabilityResponse: ChangeAvailabilityResponseV16 = {
        status: "Accepted",
      };

      const csmsResponse: CSMSResponseTypeV16 = changeAvailabilityResponse;
      expect(csmsResponse).toHaveProperty("status");
    });

    it("CSMS response should be assignable to general response type", () => {
      const csmsResponse: CSMSResponseTypeV16 = {
        status: "Accepted",
      } as ChangeAvailabilityResponseV16;

      const generalResponse: OCPPResponseTypeV16 = csmsResponse;
      expect(generalResponse).toHaveProperty("status");
    });
  });

  describe("Type Safety and Directionality", () => {
    it("should enforce correct message direction at compile time", () => {
      // CP to CSMS request
      const cpRequest: CPRequestTypeV16 = {
        idTag: "ABC123",
      } as AuthorizeRequestV16;

      // This should compile fine
      const generalRequest: OCPPRequestTypeV16 = cpRequest;
      expect(generalRequest).toBeDefined();
    });

    it("should support bidirectional messages like DataTransfer", () => {
      // DataTransfer is in CSMS actions (can be initiated by both)
      const csmsAction: CSMSActionV16 = "DataTransfer";
      expect(csmsAction).toBe("DataTransfer");
    });

    it("should maintain backward compatibility", () => {
      // Old code using general types should still work
      const action: ActionV16 = "Authorize";
      const request: OCPPRequestTypeV16 = {
        idTag: "TEST",
      } as AuthorizeRequestV16;
      const response: OCPPResponseTypeV16 = {
        idTagInfo: { status: "Accepted" },
      } as AuthorizeResponseV16;

      expect(action).toBe("Authorize");
      expect(request).toHaveProperty("idTag");
      expect(response).toHaveProperty("idTagInfo");
    });
  });

  describe("Type Narrowing", () => {
    it("should allow type narrowing from general to specific", () => {
      const generalAction: ActionV16 = "Authorize";

      // Type guard example
      const isCPAction = (action: ActionV16): action is CPActionV16 => {
        const cpActions: CPActionV16[] = [
          "Authorize",
          "BootNotification",
          "Heartbeat",
          "StartTransaction",
          "StopTransaction",
          "MeterValues",
          "StatusNotification",
          "DiagnosticsStatusNotification",
          "FirmwareStatusNotification",
          "LogStatusNotification",
          "SecurityEventNotification",
          "SignCertificate",
          "SignedFirmwareStatusNotification",
        ];
        return cpActions.includes(action as CPActionV16);
      };

      if (isCPAction(generalAction)) {
        const cpSpecific: CPActionV16 = generalAction;
        expect(cpSpecific).toBe("Authorize");
      }
    });

    it("should distinguish between CP and CSMS initiated actions", () => {
      const cpInitiated: CPActionV16 = "Heartbeat";
      const csmsInitiated: CSMSActionV16 = "Reset";

      expect(cpInitiated).not.toBe(csmsInitiated);
    });
  });

  describe("Real-world Usage Scenarios", () => {
    it("should support CP sending Authorize request", () => {
      const request: CPRequestTypeV16 = {
        idTag: "USER12345",
      } as AuthorizeRequestV16;

      const response: CPResponseTypeV16 = {
        idTagInfo: {
          status: "Accepted",
          expiryDate: "2025-12-31T23:59:59Z",
        },
      } as AuthorizeResponseV16;

      expect(request).toHaveProperty("idTag");
      expect(response).toHaveProperty("idTagInfo");
    });

    it("should support CSMS sending RemoteStartTransaction request", () => {
      const request: CSMSRequestTypeV16 = {
        idTag: "ADMIN001",
        connectorId: 1,
      } as RemoteStartTransactionRequestV16;

      const response: CSMSResponseTypeV16 = {
        status: "Accepted",
      };

      expect(request).toHaveProperty("idTag");
      expect(response).toHaveProperty("status");
    });
  });
});

