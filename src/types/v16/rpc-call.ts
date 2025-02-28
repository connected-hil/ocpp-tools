/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * @minItems 4
 * @maxItems 4
 */
export type RpcCallV16 = [
  2,
  string,
  (
    | "Authorize"
    | "BootNotification"
    | "CancelReservation"
    | "CertificateSigned"
    | "ChangeAvailability"
    | "ChangeConfiguration"
    | "ClearCache"
    | "ClearChargingProfile"
    | "DataTransfer"
    | "DeleteCertificate"
    | "DiagnosticsStatusNotification"
    | "ExtendedTriggerMessage"
    | "FirmwareStatusNotification"
    | "GetCompositeSchedule"
    | "GetConfiguration"
    | "GetDiagnostics"
    | "GetInstalledCertificateIds"
    | "GetLocalListVersion"
    | "GetLog"
    | "Heartbeat"
    | "InstallCertificate"
    | "LogStatusNotification"
    | "MeterValues"
    | "RemoteStartTransaction"
    | "RemoteStopTransaction"
    | "ReserveNow"
    | "Reset"
    | "SecurityEventNotification"
    | "SendLocalList"
    | "SetChargingProfile"
    | "SignCertificate"
    | "SignedFirmwareStatusNotification"
    | "SignedUpdateFirmware"
    | "StartTransaction"
    | "StatusNotification"
    | "StopTransaction"
    | "TriggerMessage"
    | "UnlockConnector"
    | "UpdateFirmware"
  ),
  {
    [k: string]: unknown;
  }
];
