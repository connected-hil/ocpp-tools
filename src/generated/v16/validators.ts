import { schemas } from "src/generated/schemas";
import { validateOCPPPayload } from "src/validation";
import { AuthorizeResponseV16 } from "src/generated/v16/types/authorize-response";
import { AuthorizeRequestV16 } from "src/generated/v16/types/authorize";
import { BootNotificationResponseV16 } from "src/generated/v16/types/boot-notification-response";
import { BootNotificationRequestV16 } from "src/generated/v16/types/boot-notification";
import { CancelReservationResponseV16 } from "src/generated/v16/types/cancel-reservation-response";
import { CancelReservationRequestV16 } from "src/generated/v16/types/cancel-reservation";
import { ChangeAvailabilityResponseV16 } from "src/generated/v16/types/change-availability-response";
import { ChangeAvailabilityRequestV16 } from "src/generated/v16/types/change-availability";
import { ChangeConfigurationResponseV16 } from "src/generated/v16/types/change-configuration-response";
import { ChangeConfigurationRequestV16 } from "src/generated/v16/types/change-configuration";
import { ClearCacheResponseV16 } from "src/generated/v16/types/clear-cache-response";
import { ClearCacheRequestV16 } from "src/generated/v16/types/clear-cache";
import { ClearChargingProfileResponseV16 } from "src/generated/v16/types/clear-charging-profile-response";
import { ClearChargingProfileRequestV16 } from "src/generated/v16/types/clear-charging-profile";
import { DataTransferResponseV16 } from "src/generated/v16/types/data-transfer-response";
import { DataTransferRequestV16 } from "src/generated/v16/types/data-transfer";
import { DiagnosticsStatusNotificationResponseV16 } from "src/generated/v16/types/diagnostics-status-notification-response";
import { DiagnosticsStatusNotificationRequestV16 } from "src/generated/v16/types/diagnostics-status-notification";
import { FirmwareStatusNotificationResponseV16 } from "src/generated/v16/types/firmware-status-notification-response";
import { FirmwareStatusNotificationRequestV16 } from "src/generated/v16/types/firmware-status-notification";
import { GetCompositeScheduleResponseV16 } from "src/generated/v16/types/get-composite-schedule-response";
import { GetCompositeScheduleRequestV16 } from "src/generated/v16/types/get-composite-schedule";
import { GetConfigurationResponseV16 } from "src/generated/v16/types/get-configuration-response";
import { GetConfigurationRequestV16 } from "src/generated/v16/types/get-configuration";
import { GetDiagnosticsResponseV16 } from "src/generated/v16/types/get-diagnostics-response";
import { GetDiagnosticsRequestV16 } from "src/generated/v16/types/get-diagnostics";
import { GetLocalListVersionResponseV16 } from "src/generated/v16/types/get-local-list-version-response";
import { GetLocalListVersionRequestV16 } from "src/generated/v16/types/get-local-list-version";
import { HeartbeatResponseV16 } from "src/generated/v16/types/heartbeat-response";
import { HeartbeatRequestV16 } from "src/generated/v16/types/heartbeat";
import { MeterValuesResponseV16 } from "src/generated/v16/types/meter-values-response";
import { MeterValuesRequestV16 } from "src/generated/v16/types/meter-values";
import { OCPPCallErrorV16 } from "src/generated/v16/types/ocpp-call-error";
import { OCPPCallResultV16 } from "src/generated/v16/types/ocpp-call-result";
import { OCPPCallV16 } from "src/generated/v16/types/ocpp-call";
import { RemoteStartTransactionResponseV16 } from "src/generated/v16/types/remote-start-transaction-response";
import { RemoteStartTransactionRequestV16 } from "src/generated/v16/types/remote-start-transaction";
import { RemoteStopTransactionResponseV16 } from "src/generated/v16/types/remote-stop-transaction-response";
import { RemoteStopTransactionRequestV16 } from "src/generated/v16/types/remote-stop-transaction";
import { ReserveNowResponseV16 } from "src/generated/v16/types/reserve-now-response";
import { ReserveNowRequestV16 } from "src/generated/v16/types/reserve-now";
import { ResetResponseV16 } from "src/generated/v16/types/reset-response";
import { ResetRequestV16 } from "src/generated/v16/types/reset";
import { SendLocalListResponseV16 } from "src/generated/v16/types/send-local-list-response";
import { SendLocalListRequestV16 } from "src/generated/v16/types/send-local-list";
import { SetChargingProfileResponseV16 } from "src/generated/v16/types/set-charging-profile-response";
import { SetChargingProfileRequestV16 } from "src/generated/v16/types/set-charging-profile";
import { StartTransactionResponseV16 } from "src/generated/v16/types/start-transaction-response";
import { StartTransactionRequestV16 } from "src/generated/v16/types/start-transaction";
import { StatusNotificationResponseV16 } from "src/generated/v16/types/status-notification-response";
import { StatusNotificationRequestV16 } from "src/generated/v16/types/status-notification";
import { StopTransactionResponseV16 } from "src/generated/v16/types/stop-transaction-response";
import { StopTransactionRequestV16 } from "src/generated/v16/types/stop-transaction";
import { TriggerMessageResponseV16 } from "src/generated/v16/types/trigger-message-response";
import { TriggerMessageRequestV16 } from "src/generated/v16/types/trigger-message";
import { UnlockConnectorResponseV16 } from "src/generated/v16/types/unlock-connector-response";
import { UnlockConnectorRequestV16 } from "src/generated/v16/types/unlock-connector";
import { UpdateFirmwareResponseV16 } from "src/generated/v16/types/update-firmware-response";
import { UpdateFirmwareRequestV16 } from "src/generated/v16/types/update-firmware";

/**
 * Validation function for AuthorizeResponseV16 using JSON included schema.
 *  @param { unknown } data JSON decoded payload to validate
 *  @returns { boolean } true if payload is valid against schema, false otherwise
 *  */
export const isValidAuthorizeResponseV16 = (data: unknown): data is AuthorizeResponseV16 => validateOCPPPayload(schemas.v16.authorizeResponseV16, data);

/**
 * Validation function for AuthorizeRequestV16 using JSON included schema.
 *  @param { unknown } data JSON decoded payload to validate
 *  @returns { boolean } true if payload is valid against schema, false otherwise
 *  */
export const isValidAuthorizeRequestV16 = (data: unknown): data is AuthorizeRequestV16 => validateOCPPPayload(schemas.v16.authorizeRequestV16, data);

/**
 * Validation function for BootNotificationResponseV16 using JSON included schema.
 *  @param { unknown } data JSON decoded payload to validate
 *  @returns { boolean } true if payload is valid against schema, false otherwise
 *  */
export const isValidBootNotificationResponseV16 = (data: unknown): data is BootNotificationResponseV16 => validateOCPPPayload(schemas.v16.bootNotificationResponseV16, data);

/**
 * Validation function for BootNotificationRequestV16 using JSON included schema.
 *  @param { unknown } data JSON decoded payload to validate
 *  @returns { boolean } true if payload is valid against schema, false otherwise
 *  */
export const isValidBootNotificationRequestV16 = (data: unknown): data is BootNotificationRequestV16 => validateOCPPPayload(schemas.v16.bootNotificationRequestV16, data);

/**
 * Validation function for CancelReservationResponseV16 using JSON included schema.
 *  @param { unknown } data JSON decoded payload to validate
 *  @returns { boolean } true if payload is valid against schema, false otherwise
 *  */
export const isValidCancelReservationResponseV16 = (data: unknown): data is CancelReservationResponseV16 => validateOCPPPayload(schemas.v16.cancelReservationResponseV16, data);

/**
 * Validation function for CancelReservationRequestV16 using JSON included schema.
 *  @param { unknown } data JSON decoded payload to validate
 *  @returns { boolean } true if payload is valid against schema, false otherwise
 *  */
export const isValidCancelReservationRequestV16 = (data: unknown): data is CancelReservationRequestV16 => validateOCPPPayload(schemas.v16.cancelReservationRequestV16, data);

/**
 * Validation function for ChangeAvailabilityResponseV16 using JSON included schema.
 *  @param { unknown } data JSON decoded payload to validate
 *  @returns { boolean } true if payload is valid against schema, false otherwise
 *  */
export const isValidChangeAvailabilityResponseV16 = (data: unknown): data is ChangeAvailabilityResponseV16 => validateOCPPPayload(schemas.v16.changeAvailabilityResponseV16, data);

/**
 * Validation function for ChangeAvailabilityRequestV16 using JSON included schema.
 *  @param { unknown } data JSON decoded payload to validate
 *  @returns { boolean } true if payload is valid against schema, false otherwise
 *  */
export const isValidChangeAvailabilityRequestV16 = (data: unknown): data is ChangeAvailabilityRequestV16 => validateOCPPPayload(schemas.v16.changeAvailabilityRequestV16, data);

/**
 * Validation function for ChangeConfigurationResponseV16 using JSON included schema.
 *  @param { unknown } data JSON decoded payload to validate
 *  @returns { boolean } true if payload is valid against schema, false otherwise
 *  */
export const isValidChangeConfigurationResponseV16 = (data: unknown): data is ChangeConfigurationResponseV16 => validateOCPPPayload(schemas.v16.changeConfigurationResponseV16, data);

/**
 * Validation function for ChangeConfigurationRequestV16 using JSON included schema.
 *  @param { unknown } data JSON decoded payload to validate
 *  @returns { boolean } true if payload is valid against schema, false otherwise
 *  */
export const isValidChangeConfigurationRequestV16 = (data: unknown): data is ChangeConfigurationRequestV16 => validateOCPPPayload(schemas.v16.changeConfigurationRequestV16, data);

/**
 * Validation function for ClearCacheResponseV16 using JSON included schema.
 *  @param { unknown } data JSON decoded payload to validate
 *  @returns { boolean } true if payload is valid against schema, false otherwise
 *  */
export const isValidClearCacheResponseV16 = (data: unknown): data is ClearCacheResponseV16 => validateOCPPPayload(schemas.v16.clearCacheResponseV16, data);

/**
 * Validation function for ClearCacheRequestV16 using JSON included schema.
 *  @param { unknown } data JSON decoded payload to validate
 *  @returns { boolean } true if payload is valid against schema, false otherwise
 *  */
export const isValidClearCacheRequestV16 = (data: unknown): data is ClearCacheRequestV16 => validateOCPPPayload(schemas.v16.clearCacheRequestV16, data);

/**
 * Validation function for ClearChargingProfileResponseV16 using JSON included schema.
 *  @param { unknown } data JSON decoded payload to validate
 *  @returns { boolean } true if payload is valid against schema, false otherwise
 *  */
export const isValidClearChargingProfileResponseV16 = (data: unknown): data is ClearChargingProfileResponseV16 => validateOCPPPayload(schemas.v16.clearChargingProfileResponseV16, data);

/**
 * Validation function for ClearChargingProfileRequestV16 using JSON included schema.
 *  @param { unknown } data JSON decoded payload to validate
 *  @returns { boolean } true if payload is valid against schema, false otherwise
 *  */
export const isValidClearChargingProfileRequestV16 = (data: unknown): data is ClearChargingProfileRequestV16 => validateOCPPPayload(schemas.v16.clearChargingProfileRequestV16, data);

/**
 * Validation function for DataTransferResponseV16 using JSON included schema.
 *  @param { unknown } data JSON decoded payload to validate
 *  @returns { boolean } true if payload is valid against schema, false otherwise
 *  */
export const isValidDataTransferResponseV16 = (data: unknown): data is DataTransferResponseV16 => validateOCPPPayload(schemas.v16.dataTransferResponseV16, data);

/**
 * Validation function for DataTransferRequestV16 using JSON included schema.
 *  @param { unknown } data JSON decoded payload to validate
 *  @returns { boolean } true if payload is valid against schema, false otherwise
 *  */
export const isValidDataTransferRequestV16 = (data: unknown): data is DataTransferRequestV16 => validateOCPPPayload(schemas.v16.dataTransferRequestV16, data);

/**
 * Validation function for DiagnosticsStatusNotificationResponseV16 using JSON included schema.
 *  @param { unknown } data JSON decoded payload to validate
 *  @returns { boolean } true if payload is valid against schema, false otherwise
 *  */
export const isValidDiagnosticsStatusNotificationResponseV16 = (data: unknown): data is DiagnosticsStatusNotificationResponseV16 => validateOCPPPayload(schemas.v16.diagnosticsStatusNotificationResponseV16, data);

/**
 * Validation function for DiagnosticsStatusNotificationRequestV16 using JSON included schema.
 *  @param { unknown } data JSON decoded payload to validate
 *  @returns { boolean } true if payload is valid against schema, false otherwise
 *  */
export const isValidDiagnosticsStatusNotificationRequestV16 = (data: unknown): data is DiagnosticsStatusNotificationRequestV16 => validateOCPPPayload(schemas.v16.diagnosticsStatusNotificationRequestV16, data);

/**
 * Validation function for FirmwareStatusNotificationResponseV16 using JSON included schema.
 *  @param { unknown } data JSON decoded payload to validate
 *  @returns { boolean } true if payload is valid against schema, false otherwise
 *  */
export const isValidFirmwareStatusNotificationResponseV16 = (data: unknown): data is FirmwareStatusNotificationResponseV16 => validateOCPPPayload(schemas.v16.firmwareStatusNotificationResponseV16, data);

/**
 * Validation function for FirmwareStatusNotificationRequestV16 using JSON included schema.
 *  @param { unknown } data JSON decoded payload to validate
 *  @returns { boolean } true if payload is valid against schema, false otherwise
 *  */
export const isValidFirmwareStatusNotificationRequestV16 = (data: unknown): data is FirmwareStatusNotificationRequestV16 => validateOCPPPayload(schemas.v16.firmwareStatusNotificationRequestV16, data);

/**
 * Validation function for GetCompositeScheduleResponseV16 using JSON included schema.
 *  @param { unknown } data JSON decoded payload to validate
 *  @returns { boolean } true if payload is valid against schema, false otherwise
 *  */
export const isValidGetCompositeScheduleResponseV16 = (data: unknown): data is GetCompositeScheduleResponseV16 => validateOCPPPayload(schemas.v16.getCompositeScheduleResponseV16, data);

/**
 * Validation function for GetCompositeScheduleRequestV16 using JSON included schema.
 *  @param { unknown } data JSON decoded payload to validate
 *  @returns { boolean } true if payload is valid against schema, false otherwise
 *  */
export const isValidGetCompositeScheduleRequestV16 = (data: unknown): data is GetCompositeScheduleRequestV16 => validateOCPPPayload(schemas.v16.getCompositeScheduleRequestV16, data);

/**
 * Validation function for GetConfigurationResponseV16 using JSON included schema.
 *  @param { unknown } data JSON decoded payload to validate
 *  @returns { boolean } true if payload is valid against schema, false otherwise
 *  */
export const isValidGetConfigurationResponseV16 = (data: unknown): data is GetConfigurationResponseV16 => validateOCPPPayload(schemas.v16.getConfigurationResponseV16, data);

/**
 * Validation function for GetConfigurationRequestV16 using JSON included schema.
 *  @param { unknown } data JSON decoded payload to validate
 *  @returns { boolean } true if payload is valid against schema, false otherwise
 *  */
export const isValidGetConfigurationRequestV16 = (data: unknown): data is GetConfigurationRequestV16 => validateOCPPPayload(schemas.v16.getConfigurationRequestV16, data);

/**
 * Validation function for GetDiagnosticsResponseV16 using JSON included schema.
 *  @param { unknown } data JSON decoded payload to validate
 *  @returns { boolean } true if payload is valid against schema, false otherwise
 *  */
export const isValidGetDiagnosticsResponseV16 = (data: unknown): data is GetDiagnosticsResponseV16 => validateOCPPPayload(schemas.v16.getDiagnosticsResponseV16, data);

/**
 * Validation function for GetDiagnosticsRequestV16 using JSON included schema.
 *  @param { unknown } data JSON decoded payload to validate
 *  @returns { boolean } true if payload is valid against schema, false otherwise
 *  */
export const isValidGetDiagnosticsRequestV16 = (data: unknown): data is GetDiagnosticsRequestV16 => validateOCPPPayload(schemas.v16.getDiagnosticsRequestV16, data);

/**
 * Validation function for GetLocalListVersionResponseV16 using JSON included schema.
 *  @param { unknown } data JSON decoded payload to validate
 *  @returns { boolean } true if payload is valid against schema, false otherwise
 *  */
export const isValidGetLocalListVersionResponseV16 = (data: unknown): data is GetLocalListVersionResponseV16 => validateOCPPPayload(schemas.v16.getLocalListVersionResponseV16, data);

/**
 * Validation function for GetLocalListVersionRequestV16 using JSON included schema.
 *  @param { unknown } data JSON decoded payload to validate
 *  @returns { boolean } true if payload is valid against schema, false otherwise
 *  */
export const isValidGetLocalListVersionRequestV16 = (data: unknown): data is GetLocalListVersionRequestV16 => validateOCPPPayload(schemas.v16.getLocalListVersionRequestV16, data);

/**
 * Validation function for HeartbeatResponseV16 using JSON included schema.
 *  @param { unknown } data JSON decoded payload to validate
 *  @returns { boolean } true if payload is valid against schema, false otherwise
 *  */
export const isValidHeartbeatResponseV16 = (data: unknown): data is HeartbeatResponseV16 => validateOCPPPayload(schemas.v16.heartbeatResponseV16, data);

/**
 * Validation function for HeartbeatRequestV16 using JSON included schema.
 *  @param { unknown } data JSON decoded payload to validate
 *  @returns { boolean } true if payload is valid against schema, false otherwise
 *  */
export const isValidHeartbeatRequestV16 = (data: unknown): data is HeartbeatRequestV16 => validateOCPPPayload(schemas.v16.heartbeatRequestV16, data);

/**
 * Validation function for MeterValuesResponseV16 using JSON included schema.
 *  @param { unknown } data JSON decoded payload to validate
 *  @returns { boolean } true if payload is valid against schema, false otherwise
 *  */
export const isValidMeterValuesResponseV16 = (data: unknown): data is MeterValuesResponseV16 => validateOCPPPayload(schemas.v16.meterValuesResponseV16, data);

/**
 * Validation function for MeterValuesRequestV16 using JSON included schema.
 *  @param { unknown } data JSON decoded payload to validate
 *  @returns { boolean } true if payload is valid against schema, false otherwise
 *  */
export const isValidMeterValuesRequestV16 = (data: unknown): data is MeterValuesRequestV16 => validateOCPPPayload(schemas.v16.meterValuesRequestV16, data);

/**
 * Validation function for OCPPCallErrorV16 using JSON included schema.
 *  @param { unknown } data JSON decoded payload to validate
 *  @returns { boolean } true if payload is valid against schema, false otherwise
 *  */
export const isValidOCPPCallErrorV16 = (data: unknown): data is OCPPCallErrorV16 => validateOCPPPayload(schemas.v16.oCPPCallErrorV16, data);

/**
 * Validation function for OCPPCallResultV16 using JSON included schema.
 *  @param { unknown } data JSON decoded payload to validate
 *  @returns { boolean } true if payload is valid against schema, false otherwise
 *  */
export const isValidOCPPCallResultV16 = (data: unknown): data is OCPPCallResultV16 => validateOCPPPayload(schemas.v16.oCPPCallResultV16, data);

/**
 * Validation function for OCPPCallV16 using JSON included schema.
 *  @param { unknown } data JSON decoded payload to validate
 *  @returns { boolean } true if payload is valid against schema, false otherwise
 *  */
export const isValidOCPPCallV16 = (data: unknown): data is OCPPCallV16 => validateOCPPPayload(schemas.v16.oCPPCallV16, data);

/**
 * Validation function for RemoteStartTransactionResponseV16 using JSON included schema.
 *  @param { unknown } data JSON decoded payload to validate
 *  @returns { boolean } true if payload is valid against schema, false otherwise
 *  */
export const isValidRemoteStartTransactionResponseV16 = (data: unknown): data is RemoteStartTransactionResponseV16 => validateOCPPPayload(schemas.v16.remoteStartTransactionResponseV16, data);

/**
 * Validation function for RemoteStartTransactionRequestV16 using JSON included schema.
 *  @param { unknown } data JSON decoded payload to validate
 *  @returns { boolean } true if payload is valid against schema, false otherwise
 *  */
export const isValidRemoteStartTransactionRequestV16 = (data: unknown): data is RemoteStartTransactionRequestV16 => validateOCPPPayload(schemas.v16.remoteStartTransactionRequestV16, data);

/**
 * Validation function for RemoteStopTransactionResponseV16 using JSON included schema.
 *  @param { unknown } data JSON decoded payload to validate
 *  @returns { boolean } true if payload is valid against schema, false otherwise
 *  */
export const isValidRemoteStopTransactionResponseV16 = (data: unknown): data is RemoteStopTransactionResponseV16 => validateOCPPPayload(schemas.v16.remoteStopTransactionResponseV16, data);

/**
 * Validation function for RemoteStopTransactionRequestV16 using JSON included schema.
 *  @param { unknown } data JSON decoded payload to validate
 *  @returns { boolean } true if payload is valid against schema, false otherwise
 *  */
export const isValidRemoteStopTransactionRequestV16 = (data: unknown): data is RemoteStopTransactionRequestV16 => validateOCPPPayload(schemas.v16.remoteStopTransactionRequestV16, data);

/**
 * Validation function for ReserveNowResponseV16 using JSON included schema.
 *  @param { unknown } data JSON decoded payload to validate
 *  @returns { boolean } true if payload is valid against schema, false otherwise
 *  */
export const isValidReserveNowResponseV16 = (data: unknown): data is ReserveNowResponseV16 => validateOCPPPayload(schemas.v16.reserveNowResponseV16, data);

/**
 * Validation function for ReserveNowRequestV16 using JSON included schema.
 *  @param { unknown } data JSON decoded payload to validate
 *  @returns { boolean } true if payload is valid against schema, false otherwise
 *  */
export const isValidReserveNowRequestV16 = (data: unknown): data is ReserveNowRequestV16 => validateOCPPPayload(schemas.v16.reserveNowRequestV16, data);

/**
 * Validation function for ResetResponseV16 using JSON included schema.
 *  @param { unknown } data JSON decoded payload to validate
 *  @returns { boolean } true if payload is valid against schema, false otherwise
 *  */
export const isValidResetResponseV16 = (data: unknown): data is ResetResponseV16 => validateOCPPPayload(schemas.v16.resetResponseV16, data);

/**
 * Validation function for ResetRequestV16 using JSON included schema.
 *  @param { unknown } data JSON decoded payload to validate
 *  @returns { boolean } true if payload is valid against schema, false otherwise
 *  */
export const isValidResetRequestV16 = (data: unknown): data is ResetRequestV16 => validateOCPPPayload(schemas.v16.resetRequestV16, data);

/**
 * Validation function for SendLocalListResponseV16 using JSON included schema.
 *  @param { unknown } data JSON decoded payload to validate
 *  @returns { boolean } true if payload is valid against schema, false otherwise
 *  */
export const isValidSendLocalListResponseV16 = (data: unknown): data is SendLocalListResponseV16 => validateOCPPPayload(schemas.v16.sendLocalListResponseV16, data);

/**
 * Validation function for SendLocalListRequestV16 using JSON included schema.
 *  @param { unknown } data JSON decoded payload to validate
 *  @returns { boolean } true if payload is valid against schema, false otherwise
 *  */
export const isValidSendLocalListRequestV16 = (data: unknown): data is SendLocalListRequestV16 => validateOCPPPayload(schemas.v16.sendLocalListRequestV16, data);

/**
 * Validation function for SetChargingProfileResponseV16 using JSON included schema.
 *  @param { unknown } data JSON decoded payload to validate
 *  @returns { boolean } true if payload is valid against schema, false otherwise
 *  */
export const isValidSetChargingProfileResponseV16 = (data: unknown): data is SetChargingProfileResponseV16 => validateOCPPPayload(schemas.v16.setChargingProfileResponseV16, data);

/**
 * Validation function for SetChargingProfileRequestV16 using JSON included schema.
 *  @param { unknown } data JSON decoded payload to validate
 *  @returns { boolean } true if payload is valid against schema, false otherwise
 *  */
export const isValidSetChargingProfileRequestV16 = (data: unknown): data is SetChargingProfileRequestV16 => validateOCPPPayload(schemas.v16.setChargingProfileRequestV16, data);

/**
 * Validation function for StartTransactionResponseV16 using JSON included schema.
 *  @param { unknown } data JSON decoded payload to validate
 *  @returns { boolean } true if payload is valid against schema, false otherwise
 *  */
export const isValidStartTransactionResponseV16 = (data: unknown): data is StartTransactionResponseV16 => validateOCPPPayload(schemas.v16.startTransactionResponseV16, data);

/**
 * Validation function for StartTransactionRequestV16 using JSON included schema.
 *  @param { unknown } data JSON decoded payload to validate
 *  @returns { boolean } true if payload is valid against schema, false otherwise
 *  */
export const isValidStartTransactionRequestV16 = (data: unknown): data is StartTransactionRequestV16 => validateOCPPPayload(schemas.v16.startTransactionRequestV16, data);

/**
 * Validation function for StatusNotificationResponseV16 using JSON included schema.
 *  @param { unknown } data JSON decoded payload to validate
 *  @returns { boolean } true if payload is valid against schema, false otherwise
 *  */
export const isValidStatusNotificationResponseV16 = (data: unknown): data is StatusNotificationResponseV16 => validateOCPPPayload(schemas.v16.statusNotificationResponseV16, data);

/**
 * Validation function for StatusNotificationRequestV16 using JSON included schema.
 *  @param { unknown } data JSON decoded payload to validate
 *  @returns { boolean } true if payload is valid against schema, false otherwise
 *  */
export const isValidStatusNotificationRequestV16 = (data: unknown): data is StatusNotificationRequestV16 => validateOCPPPayload(schemas.v16.statusNotificationRequestV16, data);

/**
 * Validation function for StopTransactionResponseV16 using JSON included schema.
 *  @param { unknown } data JSON decoded payload to validate
 *  @returns { boolean } true if payload is valid against schema, false otherwise
 *  */
export const isValidStopTransactionResponseV16 = (data: unknown): data is StopTransactionResponseV16 => validateOCPPPayload(schemas.v16.stopTransactionResponseV16, data);

/**
 * Validation function for StopTransactionRequestV16 using JSON included schema.
 *  @param { unknown } data JSON decoded payload to validate
 *  @returns { boolean } true if payload is valid against schema, false otherwise
 *  */
export const isValidStopTransactionRequestV16 = (data: unknown): data is StopTransactionRequestV16 => validateOCPPPayload(schemas.v16.stopTransactionRequestV16, data);

/**
 * Validation function for TriggerMessageResponseV16 using JSON included schema.
 *  @param { unknown } data JSON decoded payload to validate
 *  @returns { boolean } true if payload is valid against schema, false otherwise
 *  */
export const isValidTriggerMessageResponseV16 = (data: unknown): data is TriggerMessageResponseV16 => validateOCPPPayload(schemas.v16.triggerMessageResponseV16, data);

/**
 * Validation function for TriggerMessageRequestV16 using JSON included schema.
 *  @param { unknown } data JSON decoded payload to validate
 *  @returns { boolean } true if payload is valid against schema, false otherwise
 *  */
export const isValidTriggerMessageRequestV16 = (data: unknown): data is TriggerMessageRequestV16 => validateOCPPPayload(schemas.v16.triggerMessageRequestV16, data);

/**
 * Validation function for UnlockConnectorResponseV16 using JSON included schema.
 *  @param { unknown } data JSON decoded payload to validate
 *  @returns { boolean } true if payload is valid against schema, false otherwise
 *  */
export const isValidUnlockConnectorResponseV16 = (data: unknown): data is UnlockConnectorResponseV16 => validateOCPPPayload(schemas.v16.unlockConnectorResponseV16, data);

/**
 * Validation function for UnlockConnectorRequestV16 using JSON included schema.
 *  @param { unknown } data JSON decoded payload to validate
 *  @returns { boolean } true if payload is valid against schema, false otherwise
 *  */
export const isValidUnlockConnectorRequestV16 = (data: unknown): data is UnlockConnectorRequestV16 => validateOCPPPayload(schemas.v16.unlockConnectorRequestV16, data);

/**
 * Validation function for UpdateFirmwareResponseV16 using JSON included schema.
 *  @param { unknown } data JSON decoded payload to validate
 *  @returns { boolean } true if payload is valid against schema, false otherwise
 *  */
export const isValidUpdateFirmwareResponseV16 = (data: unknown): data is UpdateFirmwareResponseV16 => validateOCPPPayload(schemas.v16.updateFirmwareResponseV16, data);

/**
 * Validation function for UpdateFirmwareRequestV16 using JSON included schema.
 *  @param { unknown } data JSON decoded payload to validate
 *  @returns { boolean } true if payload is valid against schema, false otherwise
 *  */
export const isValidUpdateFirmwareRequestV16 = (data: unknown): data is UpdateFirmwareRequestV16 => validateOCPPPayload(schemas.v16.updateFirmwareRequestV16, data);