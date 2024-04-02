import { schemas } from "../../generated/v16/schemas";
import { validateOCPPPayload } from "../../validation";
import {
//
  type AuthorizeResponseV16,
  //
  type AuthorizeRequestV16,
  //
  type BootNotificationResponseV16,
  //
  type BootNotificationRequestV16,
  //
  type CancelReservationResponseV16,
  //
  type CancelReservationRequestV16,
  //
  type ChangeAvailabilityResponseV16,
  //
  type ChangeAvailabilityRequestV16,
  //
  type ChangeConfigurationResponseV16,
  //
  type ChangeConfigurationRequestV16,
  //
  type ClearCacheResponseV16,
  //
  type ClearCacheRequestV16,
  //
  type ClearChargingProfileResponseV16,
  //
  type ClearChargingProfileRequestV16,
  //
  type DataTransferResponseV16,
  //
  type DataTransferRequestV16,
  //
  type DiagnosticsStatusNotificationResponseV16,
  //
  type DiagnosticsStatusNotificationRequestV16,
  //
  type FirmwareStatusNotificationResponseV16,
  //
  type FirmwareStatusNotificationRequestV16,
  //
  type GetCompositeScheduleResponseV16,
  //
  type GetCompositeScheduleRequestV16,
  //
  type GetConfigurationResponseV16,
  //
  type GetConfigurationRequestV16,
  //
  type GetDiagnosticsResponseV16,
  //
  type GetDiagnosticsRequestV16,
  //
  type GetLocalListVersionResponseV16,
  //
  type GetLocalListVersionRequestV16,
  //
  type HeartbeatResponseV16,
  //
  type HeartbeatRequestV16,
  //
  type MeterValuesResponseV16,
  //
  type MeterValuesRequestV16,
  //
  type RemoteStartTransactionResponseV16,
  //
  type RemoteStartTransactionRequestV16,
  //
  type RemoteStopTransactionResponseV16,
  //
  type RemoteStopTransactionRequestV16,
  //
  type ReserveNowResponseV16,
  //
  type ReserveNowRequestV16,
  //
  type ResetResponseV16,
  //
  type ResetRequestV16,
  //
  type RpcCallErrorV16,
  //
  type RpcCallResultV16,
  //
  type RpcCallV16,
  //
  type SendLocalListResponseV16,
  //
  type SendLocalListRequestV16,
  //
  type SetChargingProfileResponseV16,
  //
  type SetChargingProfileRequestV16,
  //
  type StartTransactionResponseV16,
  //
  type StartTransactionRequestV16,
  //
  type StatusNotificationResponseV16,
  //
  type StatusNotificationRequestV16,
  //
  type StopTransactionResponseV16,
  //
  type StopTransactionRequestV16,
  //
  type TriggerMessageResponseV16,
  //
  type TriggerMessageRequestV16,
  //
  type UnlockConnectorResponseV16,
  //
  type UnlockConnectorRequestV16,
  //
  type UpdateFirmwareResponseV16,
  //
  type UpdateFirmwareRequestV16
} from "./index";

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
 * Validation function for RpcCallErrorV16 using JSON included schema.
 *  @param { unknown } data JSON decoded payload to validate
 *  @returns { boolean } true if payload is valid against schema, false otherwise
 *  */
export const isValidRpcCallErrorV16 = (data: unknown): data is RpcCallErrorV16 => validateOCPPPayload(schemas.v16.rpcCallErrorV16, data);

/**
 * Validation function for RpcCallResultV16 using JSON included schema.
 *  @param { unknown } data JSON decoded payload to validate
 *  @returns { boolean } true if payload is valid against schema, false otherwise
 *  */
export const isValidRpcCallResultV16 = (data: unknown): data is RpcCallResultV16 => validateOCPPPayload(schemas.v16.rpcCallResultV16, data);

/**
 * Validation function for RpcCallV16 using JSON included schema.
 *  @param { unknown } data JSON decoded payload to validate
 *  @returns { boolean } true if payload is valid against schema, false otherwise
 *  */
export const isValidRpcCallV16 = (data: unknown): data is RpcCallV16 => validateOCPPPayload(schemas.v16.rpcCallV16, data);

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

export const actionValidatorV16: Record<string, (data: unknown) => boolean> = {
  Authorize: isValidAuthorizeRequestV16,
  BootNotification: isValidBootNotificationRequestV16,
  CancelReservation: isValidCancelReservationRequestV16,
  ChangeAvailability: isValidChangeAvailabilityRequestV16,
  ChangeConfiguration: isValidChangeConfigurationRequestV16,
  ClearCache: isValidClearCacheRequestV16,
  ClearChargingProfile: isValidClearChargingProfileRequestV16,
  DataTransfer: isValidDataTransferRequestV16,
  DiagnosticsStatusNotification: isValidDiagnosticsStatusNotificationRequestV16,
  FirmwareStatusNotification: isValidFirmwareStatusNotificationRequestV16,
  GetCompositeSchedule: isValidGetCompositeScheduleRequestV16,
  GetConfiguration: isValidGetConfigurationRequestV16,
  GetDiagnostics: isValidGetDiagnosticsRequestV16,
  GetLocalListVersion: isValidGetLocalListVersionRequestV16,
  Heartbeat: isValidHeartbeatRequestV16,
  MeterValues: isValidMeterValuesRequestV16,
  RemoteStartTransaction: isValidRemoteStartTransactionRequestV16,
  RemoteStopTransaction: isValidRemoteStopTransactionRequestV16,
  ReserveNow: isValidReserveNowRequestV16,
  Reset: isValidResetRequestV16,
  SendLocalList: isValidSendLocalListRequestV16,
  SetChargingProfile: isValidSetChargingProfileRequestV16,
  StartTransaction: isValidStartTransactionRequestV16,
  StatusNotification: isValidStatusNotificationRequestV16,
  StopTransaction: isValidStopTransactionRequestV16,
  TriggerMessage: isValidTriggerMessageRequestV16,
  UnlockConnector: isValidUnlockConnectorRequestV16,
  UpdateFirmware: isValidUpdateFirmwareRequestV16
};
