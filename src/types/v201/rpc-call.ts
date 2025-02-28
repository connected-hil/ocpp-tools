/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * @minItems 4
 * @maxItems 4
 */
export type RpcCallV201 = [
  2,
  string,
  (
    | "Authorize"
    | "BootNotification"
    | "CancelReservation"
    | "CertificateSigned"
    | "ChangeAvailability"
    | "ClearCache"
    | "ClearChargingProfile"
    | "ClearDisplayMessage"
    | "ClearVariableMonitoring"
    | "ClearedChargingLimit"
    | "CostUpdated"
    | "CustomerInformation"
    | "DataTransfer"
    | "DeleteCertificate"
    | "FirmwareStatusNotification"
    | "GetBaseReport"
    | "GetCertificateStatus"
    | "GetChargingProfiles"
    | "GetCompositeSchedule"
    | "GetDisplayMessages"
    | "GetInstalledCertificateIds"
    | "GetLocalListVersion"
    | "GetLog"
    | "GetMonitoringReport"
    | "GetReport"
    | "GetTransactionStatus"
    | "GetVariables"
    | "Get15118EVCertificate"
    | "Heartbeat"
    | "InstallCertificate"
    | "LogStatusNotification"
    | "MeterValues"
    | "NotifyChargingLimit"
    | "NotifyCustomerInformation"
    | "NotifyDisplayMessages"
    | "NotifyEVChargingNeeds"
    | "NotifyEVChargingSchedule"
    | "NotifyEvent"
    | "NotifyMonitoringReport"
    | "NotifyReport"
    | "PublishFirmwareStatusNotification"
    | "PublishFirmware"
    | "ReportChargingProfiles"
    | "ReservationStatusUpdate"
    | "ReserveNow"
    | "Reset"
    | "SecurityEventNotification"
    | "SendLocalList"
    | "SetChargingProfile"
    | "SetDisplayMessage"
    | "SetMonitoringBase"
    | "SetMonitoringLevel"
    | "SetNetworkProfile"
    | "SetVariableMonitoring"
    | "SetVariables"
    | "SignCertificate"
    | "StartTransactionResponse"
    | "StartTransactionRequest"
    | "StatusNotification"
    | "StopTransactionResponse"
    | "StopTransactionRequest"
    | "TransactionEvent"
    | "TriggerMessage"
    | "UnlockConnector"
    | "UnpublishFirmware"
    | "UpdateFirmware"
  ),
  {
    [k: string]: unknown;
  }
];
