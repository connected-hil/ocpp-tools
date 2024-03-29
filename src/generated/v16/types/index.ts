import { type AuthorizeResponseV16 } from 'src/generated/v16/types/authorize-response'
import { type AuthorizeRequestV16 } from 'src/generated/v16/types/authorize'
import { type BootNotificationResponseV16 } from 'src/generated/v16/types/boot-notification-response'
import { type BootNotificationRequestV16 } from 'src/generated/v16/types/boot-notification'
import { type CancelReservationResponseV16 } from 'src/generated/v16/types/cancel-reservation-response'
import { type CancelReservationRequestV16 } from 'src/generated/v16/types/cancel-reservation'
import { type ChangeAvailabilityResponseV16 } from 'src/generated/v16/types/change-availability-response'
import { type ChangeAvailabilityRequestV16 } from 'src/generated/v16/types/change-availability'
import { type ChangeConfigurationResponseV16 } from 'src/generated/v16/types/change-configuration-response'
import { type ChangeConfigurationRequestV16 } from 'src/generated/v16/types/change-configuration'
import { type ClearCacheResponseV16 } from 'src/generated/v16/types/clear-cache-response'
import { type ClearCacheRequestV16 } from 'src/generated/v16/types/clear-cache'
import { type ClearChargingProfileResponseV16 } from 'src/generated/v16/types/clear-charging-profile-response'
import { type ClearChargingProfileRequestV16 } from 'src/generated/v16/types/clear-charging-profile'
import { type DataTransferResponseV16 } from 'src/generated/v16/types/data-transfer-response'
import { type DataTransferRequestV16 } from 'src/generated/v16/types/data-transfer'
import { type DiagnosticsStatusNotificationResponseV16 } from 'src/generated/v16/types/diagnostics-status-notification-response'
import { type DiagnosticsStatusNotificationRequestV16 } from 'src/generated/v16/types/diagnostics-status-notification'
import { type FirmwareStatusNotificationResponseV16 } from 'src/generated/v16/types/firmware-status-notification-response'
import { type FirmwareStatusNotificationRequestV16 } from 'src/generated/v16/types/firmware-status-notification'
import { type GetCompositeScheduleResponseV16 } from 'src/generated/v16/types/get-composite-schedule-response'
import { type GetCompositeScheduleRequestV16 } from 'src/generated/v16/types/get-composite-schedule'
import { type GetConfigurationResponseV16 } from 'src/generated/v16/types/get-configuration-response'
import { type GetConfigurationRequestV16 } from 'src/generated/v16/types/get-configuration'
import { type GetDiagnosticsResponseV16 } from 'src/generated/v16/types/get-diagnostics-response'
import { type GetDiagnosticsRequestV16 } from 'src/generated/v16/types/get-diagnostics'
import { type GetLocalListVersionResponseV16 } from 'src/generated/v16/types/get-local-list-version-response'
import { type GetLocalListVersionRequestV16 } from 'src/generated/v16/types/get-local-list-version'
import { type HeartbeatResponseV16 } from 'src/generated/v16/types/heartbeat-response'
import { type HeartbeatRequestV16 } from 'src/generated/v16/types/heartbeat'
import { type MeterValuesResponseV16 } from 'src/generated/v16/types/meter-values-response'
import { type MeterValuesRequestV16 } from 'src/generated/v16/types/meter-values'
import { type OCPPCallErrorV16 } from 'src/generated/v16/types/ocpp-call-error'
import { type OCPPCallResultV16 } from 'src/generated/v16/types/ocpp-call-result'
import { type OCPPCallV16 } from 'src/generated/v16/types/ocpp-call'
import { type RemoteStartTransactionResponseV16 } from 'src/generated/v16/types/remote-start-transaction-response'
import { type RemoteStartTransactionRequestV16 } from 'src/generated/v16/types/remote-start-transaction'
import { type RemoteStopTransactionResponseV16 } from 'src/generated/v16/types/remote-stop-transaction-response'
import { type RemoteStopTransactionRequestV16 } from 'src/generated/v16/types/remote-stop-transaction'
import { type ReserveNowResponseV16 } from 'src/generated/v16/types/reserve-now-response'
import { type ReserveNowRequestV16 } from 'src/generated/v16/types/reserve-now'
import { type ResetResponseV16 } from 'src/generated/v16/types/reset-response'
import { type ResetRequestV16 } from 'src/generated/v16/types/reset'
import { type SendLocalListResponseV16 } from 'src/generated/v16/types/send-local-list-response'
import { type SendLocalListRequestV16 } from 'src/generated/v16/types/send-local-list'
import { type SetChargingProfileResponseV16 } from 'src/generated/v16/types/set-charging-profile-response'
import { type SetChargingProfileRequestV16 } from 'src/generated/v16/types/set-charging-profile'
import { type StartTransactionResponseV16 } from 'src/generated/v16/types/start-transaction-response'
import { type StartTransactionRequestV16 } from 'src/generated/v16/types/start-transaction'
import { type StatusNotificationResponseV16 } from 'src/generated/v16/types/status-notification-response'
import { type StatusNotificationRequestV16 } from 'src/generated/v16/types/status-notification'
import { type StopTransactionResponseV16 } from 'src/generated/v16/types/stop-transaction-response'
import { type StopTransactionRequestV16 } from 'src/generated/v16/types/stop-transaction'
import { type TriggerMessageResponseV16 } from 'src/generated/v16/types/trigger-message-response'
import { type TriggerMessageRequestV16 } from 'src/generated/v16/types/trigger-message'
import { type UnlockConnectorResponseV16 } from 'src/generated/v16/types/unlock-connector-response'
import { type UnlockConnectorRequestV16 } from 'src/generated/v16/types/unlock-connector'
import { type UpdateFirmwareResponseV16 } from 'src/generated/v16/types/update-firmware-response'
import { type UpdateFirmwareRequestV16 } from 'src/generated/v16/types/update-firmware'

export type ActionV16 = 'Authorize' | 'BootNotification' | 'CancelReservation' | 'ChangeAvailability' | 'ChangeConfiguration' | 'ClearCache' | 'ClearChargingProfile' | 'DataTransfer' | 'DiagnosticsStatusNotification' | 'FirmwareStatusNotification' | 'GetCompositeSchedule' | 'GetConfiguration' | 'GetDiagnostics' | 'GetLocalListVersion' | 'Heartbeat' | 'MeterValues' | 'RemoteStartTransaction' | 'RemoteStopTransaction' | 'ReserveNow' | 'Reset' | 'SendLocalList' | 'SetChargingProfile' | 'StartTransaction' | 'StatusNotification' | 'StopTransaction' | 'TriggerMessage' | 'UnlockConnector' | 'UpdateFirmware'
export type OCPPRequestTypeV16 = AuthorizeRequestV16 | BootNotificationRequestV16 | CancelReservationRequestV16 | ChangeAvailabilityRequestV16 | ChangeConfigurationRequestV16 | ClearCacheRequestV16 | ClearChargingProfileRequestV16 | DataTransferRequestV16 | DiagnosticsStatusNotificationRequestV16 | FirmwareStatusNotificationRequestV16 | GetCompositeScheduleRequestV16 | GetConfigurationRequestV16 | GetDiagnosticsRequestV16 | GetLocalListVersionRequestV16 | HeartbeatRequestV16 | MeterValuesRequestV16 | RemoteStartTransactionRequestV16 | RemoteStopTransactionRequestV16 | ReserveNowRequestV16 | ResetRequestV16 | SendLocalListRequestV16 | SetChargingProfileRequestV16 | StartTransactionRequestV16 | StatusNotificationRequestV16 | StopTransactionRequestV16 | TriggerMessageRequestV16 | UnlockConnectorRequestV16 | UpdateFirmwareRequestV16
export type OCPPResponseTypeV16 = AuthorizeResponseV16 | BootNotificationResponseV16 | CancelReservationResponseV16 | ChangeAvailabilityResponseV16 | ChangeConfigurationResponseV16 | ClearCacheResponseV16 | ClearChargingProfileResponseV16 | DataTransferResponseV16 | DiagnosticsStatusNotificationResponseV16 | FirmwareStatusNotificationResponseV16 | GetCompositeScheduleResponseV16 | GetConfigurationResponseV16 | GetDiagnosticsResponseV16 | GetLocalListVersionResponseV16 | HeartbeatResponseV16 | MeterValuesResponseV16 | RemoteStartTransactionResponseV16 | RemoteStopTransactionResponseV16 | ReserveNowResponseV16 | ResetResponseV16 | SendLocalListResponseV16 | SetChargingProfileResponseV16 | StartTransactionResponseV16 | StatusNotificationResponseV16 | StopTransactionResponseV16 | TriggerMessageResponseV16 | UnlockConnectorResponseV16 | UpdateFirmwareResponseV16
export enum OCPPErrorCodeV16 {
  NotImplemented = 'NotImplemented',
  NotSupported = 'NotSupported',
  InternalError = 'InternalError',
  ProtocolError = 'ProtocolError',
  SecurityError = 'SecurityError',
  FormationViolation = 'FormationViolation',
  PropertyConstraintViolation = 'PropertyConstraintViolation',
  OccurenceConstraintViolation = 'OccurenceConstraintViolation',
  TypeConstraintViolation = 'TypeConstraintViolation',
  GenericError = 'GenericError'
}
export type OCPPRPCMessageV16 = OCPPCallV16 | OCPPCallResultV16 | OCPPCallErrorV16
