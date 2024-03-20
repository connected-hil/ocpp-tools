import {
  isValidAuthorizeResponseV16,
  isValidAuthorizeRequestV16,
  isValidBootNotificationResponseV16,
  isValidBootNotificationRequestV16,
  isValidCancelReservationResponseV16,
  isValidCancelReservationRequestV16,
  isValidChangeAvailabilityResponseV16,
  isValidChangeAvailabilityRequestV16,
  isValidChangeConfigurationResponseV16,
  isValidChangeConfigurationRequestV16,
  isValidClearCacheResponseV16,
  isValidClearCacheRequestV16,
  isValidClearChargingProfileResponseV16,
  isValidClearChargingProfileRequestV16,
  isValidDataTransferResponseV16,
  isValidDataTransferRequestV16,
  isValidDiagnosticsStatusNotificationResponseV16,
  isValidDiagnosticsStatusNotificationRequestV16,
  isValidFirmwareStatusNotificationResponseV16,
  isValidFirmwareStatusNotificationRequestV16,
  isValidGetCompositeScheduleResponseV16,
  isValidGetCompositeScheduleRequestV16,
  isValidGetConfigurationResponseV16,
  isValidGetConfigurationRequestV16,
  isValidGetDiagnosticsResponseV16,
  isValidGetDiagnosticsRequestV16,
  isValidGetLocalListVersionResponseV16,
  isValidGetLocalListVersionRequestV16,
  isValidHeartbeatResponseV16,
  isValidHeartbeatRequestV16,
  isValidMeterValuesResponseV16,
  isValidMeterValuesRequestV16,
  isValidRemoteStartTransactionResponseV16,
  isValidRemoteStartTransactionRequestV16,
  isValidRemoteStopTransactionResponseV16,
  isValidRemoteStopTransactionRequestV16,
  isValidReserveNowResponseV16,
  isValidReserveNowRequestV16,
  isValidResetResponseV16,
  isValidResetRequestV16,
  isValidSendLocalListResponseV16,
  isValidSendLocalListRequestV16,
  isValidSetChargingProfileResponseV16,
  isValidSetChargingProfileRequestV16,
  isValidStartTransactionResponseV16,
  isValidStartTransactionRequestV16,
  isValidStatusNotificationResponseV16,
  isValidStatusNotificationRequestV16,
  isValidStopTransactionResponseV16,
  isValidStopTransactionRequestV16,
  isValidTriggerMessageResponseV16,
  isValidTriggerMessageRequestV16,
  isValidUnlockConnectorResponseV16,
  isValidUnlockConnectorRequestV16,
  isValidUpdateFirmwareResponseV16,
  isValidUpdateFirmwareRequestV16,
} from "../src/generated/validation/v16/index";

interface TestCase {
  fun: (data: unknown) => data is any;
  validData: unknown;
  invalidData: unknown;
}

const tests: TestCase[] = [
  {
    fun: isValidAuthorizeResponseV16,
    validData: { idTagInfo: { status: "Accepted" } },
    invalidData: { idTagInfo: { status: "Accepted", parentIdTag: 123 } },
  },

  {
    fun: isValidAuthorizeRequestV16,
    validData: { idTag: "12345" },
    invalidData: { idTag: "", status: "Accepted" },
  },
  {
    fun: isValidBootNotificationResponseV16,
    validData: {
      status: "Accepted",
      currentTime: "2020-01-01T00:00:00Z",
      interval: 60,
    },
    invalidData: { status: "Accepted", currentTime: 123 },
  },
  {
    fun: isValidBootNotificationRequestV16,
    validData: { chargePointVendor: "vendor", chargePointModel: "model" },
    invalidData: { chargePointVendor: "vendor", chargePointModel: 123 },
  },
  {
    fun: isValidCancelReservationResponseV16,
    validData: { status: "Rejected" },
    invalidData: { status: "Rejected", statusInfo: 123 },
  },
  {
    fun: isValidCancelReservationRequestV16,
    validData: { reservationId: 123 },
    invalidData: { reservationId: "123" },
  },
  {
    fun: isValidChangeAvailabilityResponseV16,
    validData: { status: "Scheduled" },
    invalidData: { status: "Accepted", statusInfo: 123 },
  },
  {
    fun: isValidChangeAvailabilityRequestV16,
    validData: { connectorId: 1, type: "Inoperative" },
    invalidData: { connectorId: "1", type: "Inoperative" },
  },
  {
    fun: isValidChangeConfigurationResponseV16,
    validData: { status: "Accepted" },
    invalidData: { status: "Accepted", statusInfo: 123 },
  },
  {
    fun: isValidChangeConfigurationRequestV16,
    validData: { key: "key", value: "value" },
    invalidData: { key: "key", value: "value", unknown: "unknown" },
  },
  {
    fun: isValidClearCacheResponseV16,
    validData: { status: "Accepted" },
    invalidData: { status: "Accepted", statusInfo: 123 },
  },
  {
    fun: isValidClearCacheRequestV16,
    validData: {},
    invalidData: { unknown: "unknown" },
  },
  {
    fun: isValidClearChargingProfileResponseV16,
    validData: { status: "Accepted" },
    invalidData: { status: "Accepted", statusInfo: 123 },
  },
  {
    fun: isValidClearChargingProfileRequestV16,
    validData: { id: 123 },
    invalidData: { id: "123" },
  },
  {
    fun: isValidDataTransferResponseV16,
    validData: { status: "Accepted" },
    invalidData: { status: "Accepted", data: 123 },
  },
  {
    fun: isValidDataTransferRequestV16,
    validData: { vendorId: "vendor", messageId: "message" },
    invalidData: { vendorId: "vendor", messageId: "message", data: 123 },
  },
  {
    fun: isValidDiagnosticsStatusNotificationResponseV16,
    validData: {},
    invalidData: { status: "Uploaded", statusInfo: 123 },
  },
  {
    fun: isValidDiagnosticsStatusNotificationRequestV16,
    validData: { status: "Uploaded" },
    invalidData: { status: "Uploaded", statusInfo: 123 },
  },
  {
    fun: isValidFirmwareStatusNotificationResponseV16,
    validData: {},
    invalidData: { status: "Downloaded", statusInfo: 123 },
  },
  {
    fun: isValidFirmwareStatusNotificationRequestV16,
    validData: { status: "Downloaded" },
    invalidData: { status: "Downloaded", statusInfo: 123 },
  },
  {
    fun: isValidGetCompositeScheduleResponseV16,
    validData: { status: "Accepted" },
    invalidData: { status: "Accepted", chargingSchedule: 123 },
  },
  {
    fun: isValidGetCompositeScheduleRequestV16,
    validData: { connectorId: 1, duration: 60 },
    invalidData: { connectorId: "1" },
  },
  {
    fun: isValidGetConfigurationResponseV16,
    validData: {
      configurationKey: [{ key: "key1", readonly: true, value: "13" }],
    },
    invalidData: { unknown: "unknown" },
  },
  {
    fun: isValidGetConfigurationRequestV16,
    validData: { key: ["key"] },
    invalidData: { key: 123 },
  },
  {
    fun: isValidGetDiagnosticsResponseV16,
    validData: { fileName: "file" },
    invalidData: { fileName: 123 },
  },
  {
    fun: isValidGetDiagnosticsRequestV16,
    validData: { location: "ftp://location.com/file", retries: 2 },
    invalidData: { location: 123 },
  },
  {
    fun: isValidGetLocalListVersionResponseV16,
    validData: { listVersion: 1 },
    invalidData: { listVersion: "1" },
  },
  {
    fun: isValidGetLocalListVersionRequestV16,
    validData: {},
    invalidData: { unknown: "unknown" },
  },
  {
    fun: isValidHeartbeatResponseV16,
    validData: { currentTime: "2020-01-01T00:00:00Z" },
    invalidData: {},
  },
  {
    fun: isValidHeartbeatRequestV16,
    validData: {},
    invalidData: { unknown: "unknown" },
  },
  {
    fun: isValidMeterValuesResponseV16,
    validData: {},
    invalidData: { unknown: "unknown" },
  },
  {
    fun: isValidRemoteStartTransactionResponseV16,
    validData: { status: "Accepted" },
    invalidData: { status: "Accepted", statusInfo: 123 },
  },
  {
    fun: isValidRemoteStartTransactionRequestV16,
    validData: { idTag: "12345", connectorId: 1 },
    invalidData: { idTag: 12345, connectorId: 1 },
  },
  {
    fun: isValidRemoteStopTransactionResponseV16,
    validData: { status: "Accepted" },
    invalidData: { status: "Accepted", statusInfo: 123 },
  },
  {
    fun: isValidRemoteStopTransactionRequestV16,
    validData: { transactionId: 123 },
    invalidData: { transactionId: "123" },
  },
  {
    fun: isValidReserveNowResponseV16,
    validData: { status: "Accepted" },
    invalidData: { status: "Accepted", id: 123 },
  },
  {
    fun: isValidReserveNowRequestV16,
    validData: {
      connectorId: 1,
      expiryDate: "2020-01-01T00:00:00Z",
      idTag: "12345",
      reservationId: 123,
    },
    invalidData: { connectorId: "1", expiryDate: "2020-01-01T00:00:00Z" },
  },
  {
    fun: isValidResetResponseV16,
    validData: { status: "Accepted" },
    invalidData: { status: "Accepted", statusInfo: 123 },
  },
  {
    fun: isValidResetRequestV16,
    validData: { type: "Hard" },
    invalidData: { type: "Hard", unknown: "unknown" },
  },
  {
    fun: isValidSendLocalListResponseV16,
    validData: { status: "Accepted" },
    invalidData: { status: "Accepted", statusInfo: 123 },
  },
  {
    fun: isValidSendLocalListRequestV16,
    validData: { listVersion: 1, updateType: "Full" },
    invalidData: { version: "1", updateType: "Full" },
  },
  {
    fun: isValidSetChargingProfileResponseV16,
    validData: { status: "Accepted" },
    invalidData: { status: "Accepted", statusInfo: 123 },
  },
  {
    fun: isValidSetChargingProfileRequestV16,
    validData: {
      connectorId: 1,
      csChargingProfiles: {
        chargingProfileId: 1,
        stackLevel: 1,
        chargingProfilePurpose: "TxProfile",
        chargingProfileKind: "Absolute",
        chargingSchedule: {
          chargingRateUnit: "W",
          chargingSchedulePeriod: [{ startPeriod: 0, limit: 100 }],
        },
      },
    },
    invalidData: { connectorId: "1", chargingProfile: { id: 1 } },
  },
  {
    fun: isValidStartTransactionResponseV16,
    validData: { transactionId: 123, idTagInfo: { status: "Accepted" } },
    invalidData: { transactionId: "123" },
  },
  {
    fun: isValidStartTransactionRequestV16,
    validData: {
      connectorId: 1,
      idTag: "12345",
      meterStart: 123,
      timestamp: "2020-01-01T00:00:00Z",
    },
    invalidData: { connectorId: "1", idTag: 12345, meterStart: 123 },
  },
  {
    fun: isValidStatusNotificationResponseV16,
    validData: {},
    invalidData: { status: "Available", errorCode: 123 },
  },
  {
    fun: isValidStatusNotificationRequestV16,
    validData: { connectorId: 1, errorCode: "NoError", status: "Available" },
    invalidData: { connectorId: "1", errorCode: "NoError" },
  },
  {
    fun: isValidStopTransactionResponseV16,
    validData: { idTagInfo: { status: "Accepted" } },
    invalidData: { idTagInfo: { status: "Accepted", parentIdTag: 123 } },
  },
  {
    fun: isValidStopTransactionRequestV16,
    validData: {
      transactionId: 123,
      timestamp: "2020-01-01T00:00:00Z",
      meterStop: 123,
    },
    invalidData: { transactionId: "123", meterStop: 123 },
  },
  {
    fun: isValidTriggerMessageResponseV16,
    validData: { status: "Accepted" },
    invalidData: { status: "Accepted", statusInfo: 123 },
  },
  {
    fun: isValidTriggerMessageRequestV16,
    validData: { requestedMessage: "BootNotification" },
    invalidData: { requestedMessage: 123 },
  },
  {
    fun: isValidUnlockConnectorResponseV16,
    validData: { status: "Unlocked" },
    invalidData: { status: "Unlocked", statusInfo: 123 },
  },
  {
    fun: isValidUnlockConnectorRequestV16,
    validData: { connectorId: 1 },
    invalidData: { connectorId: "1" },
  },
  {
    fun: isValidUpdateFirmwareResponseV16,
    validData: {},
    invalidData: { status: "Accepted" },
  },
  {
    fun: isValidUpdateFirmwareRequestV16,
    validData: {
      location: "ftp://location.com/file",
      retrieveDate: "2020-01-01T00:00:00Z",
    },
    invalidData: { location: "foo", retrieveDate: "2020-01-01T00:00:00Z" },
  },
  {
    fun: isValidMeterValuesRequestV16,
    validData: {
      connectorId: 1,
      meterValue: [
        {
          timestamp: "2020-01-01T00:00:00Z",
          sampledValue: [
            { value: "value", measurand: "Energy.Active.Export.Register" },
          ],
        },
      ],
    },
    invalidData: { connectorId: "1", meterValue: [{ value: "value" }] },
  },
];

describe("Validation for OCPP v1.6 payloads", () => {
  test.each(tests)("$fun", ({ fun, validData, invalidData }) => {
    expect(fun(validData)).toBe(true);
    expect(fun(invalidData)).toBe(false);
  });
});
