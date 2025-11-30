/**
 * Defines the directionality of OCPP messages
 * CP = Charge Point (Charging Station)
 * CSMS = Central System Management System (formerly Central System)
 */

export interface MessageDirectionConfig {
  /** Messages initiated by Charge Point and sent to CSMS */
  cpToCSMS: string[];
  /** Messages initiated by CSMS and sent to Charge Point */
  csmsToCp: string[];
}

/**
 * OCPP 1.6 Message Direction Configuration
 * Based on OCPP 1.6 Edition 2 specification
 */
export const messageDirectionV16: MessageDirectionConfig = {
  cpToCSMS: [
    "Authorize",
    "BootNotification",
    "DiagnosticsStatusNotification",
    "FirmwareStatusNotification",
    "Heartbeat",
    "LogStatusNotification",
    "MeterValues",
    "SecurityEventNotification",
    "SignCertificate",
    "SignedFirmwareStatusNotification",
    "StartTransaction",
    "StatusNotification",
    "StopTransaction",
  ],
  csmsToCp: [
    "CancelReservation",
    "CertificateSigned",
    "ChangeAvailability",
    "ChangeConfiguration",
    "ClearCache",
    "ClearChargingProfile",
    "DataTransfer", // Can be bidirectional, but typically CSMS-initiated
    "DeleteCertificate",
    "ExtendedTriggerMessage",
    "GetCompositeSchedule",
    "GetConfiguration",
    "GetDiagnostics",
    "GetInstalledCertificateIds",
    "GetLocalListVersion",
    "GetLog",
    "InstallCertificate",
    "RemoteStartTransaction",
    "RemoteStopTransaction",
    "ReserveNow",
    "Reset",
    "SendLocalList",
    "SetChargingProfile",
    "SignedUpdateFirmware",
    "TriggerMessage",
    "UnlockConnector",
    "UpdateFirmware",
  ],
};

/**
 * OCPP 2.0.1 Message Direction Configuration
 * Based on OCPP 2.0.1 specification
 */
export const messageDirectionV201: MessageDirectionConfig = {
  cpToCSMS: [
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
  ],
  csmsToCp: [
    "CancelReservation",
    "CertificateSigned",
    "ChangeAvailability",
    "ClearCache",
    "ClearChargingProfile",
    "ClearDisplayMessage",
    "ClearVariableMonitoring",
    "CostUpdated",
    "CustomerInformation",
    "DataTransfer", // Can be bidirectional, but typically CSMS-initiated
    "DeleteCertificate",
    "GetBaseReport",
    "GetChargingProfiles",
    "GetCompositeSchedule",
    "GetDisplayMessages",
    "GetInstalledCertificateIds",
    "GetLocalListVersion",
    "GetLog",
    "GetMonitoringReport",
    "GetReport",
    "GetTransactionStatus",
    "GetVariables",
    "InstallCertificate",
    "PublishFirmware",
    "StartTransactionRequest", // Request* prefix in v2.0.1
    "StopTransactionRequest",
    "ReserveNow",
    "Reset",
    "SendLocalList",
    "SetChargingProfile",
    "SetDisplayMessage",
    "SetMonitoringBase",
    "SetMonitoringLevel",
    "SetNetworkProfile",
    "SetVariableMonitoring",
    "SetVariables",
    "TriggerMessage",
    "UnlockConnector",
    "UnpublishFirmware",
    "UpdateFirmware",
  ],
};

export const messageDirections: Record<string, MessageDirectionConfig> = {
  v16: messageDirectionV16,
  v201: messageDirectionV201,
};

