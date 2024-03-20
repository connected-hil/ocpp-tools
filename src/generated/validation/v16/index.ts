// This file is generated with schema compilation
import { schemas } from "src/schemas";
import { validateOCPPMessage } from "src/validation";

import { AuthorizeResponseV16 } from "src/generated/types/v16/authorize-response";
import { AuthorizeRequestV16 } from "src/generated/types/v16/authorize";
import { BootNotificationResponseV16 } from "src/generated/types/v16/boot-notification-response";
import { BootNotificationRequestV16 } from "src/generated/types/v16/boot-notification";
import { CancelReservationResponseV16 } from "src/generated/types/v16/cancel-reservation-response";
import { CancelReservationRequestV16 } from "src/generated/types/v16/cancel-reservation";
import { ChangeAvailabilityResponseV16 } from "src/generated/types/v16/change-availability-response";
import { ChangeAvailabilityRequestV16 } from "src/generated/types/v16/change-availability";
import { ChangeConfigurationResponseV16 } from "src/generated/types/v16/change-configuration-response";
import { ChangeConfigurationRequestV16 } from "src/generated/types/v16/change-configuration";
import { ClearCacheResponseV16 } from "src/generated/types/v16/clear-cache-response";
import { ClearCacheRequestV16 } from "src/generated/types/v16/clear-cache";
import { ClearChargingProfileResponseV16 } from "src/generated/types/v16/clear-charging-profile-response";
import { ClearChargingProfileRequestV16 } from "src/generated/types/v16/clear-charging-profile";
import { DataTransferResponseV16 } from "src/generated/types/v16/data-transfer-response";
import { DataTransferRequestV16 } from "src/generated/types/v16/data-transfer";
import { DiagnosticsStatusNotificationResponseV16 } from "src/generated/types/v16/diagnostics-status-notification-response";
import { DiagnosticsStatusNotificationRequestV16 } from "src/generated/types/v16/diagnostics-status-notification";
import { FirmwareStatusNotificationResponseV16 } from "src/generated/types/v16/firmware-status-notification-response";
import { FirmwareStatusNotificationRequestV16 } from "src/generated/types/v16/firmware-status-notification";
import { GetCompositeScheduleResponseV16 } from "src/generated/types/v16/get-composite-schedule-response";
import { GetCompositeScheduleRequestV16 } from "src/generated/types/v16/get-composite-schedule";
import { GetConfigurationResponseV16 } from "src/generated/types/v16/get-configuration-response";
import { GetConfigurationRequestV16 } from "src/generated/types/v16/get-configuration";
import { GetDiagnosticsResponseV16 } from "src/generated/types/v16/get-diagnostics-response";
import { GetDiagnosticsRequestV16 } from "src/generated/types/v16/get-diagnostics";
import { GetLocalListVersionResponseV16 } from "src/generated/types/v16/get-local-list-version-response";
import { GetLocalListVersionRequestV16 } from "src/generated/types/v16/get-local-list-version";
import { HeartbeatResponseV16 } from "src/generated/types/v16/heartbeat-response";
import { HeartbeatRequestV16 } from "src/generated/types/v16/heartbeat";
import { MeterValuesResponseV16 } from "src/generated/types/v16/meter-values-response";
import { MeterValuesRequestV16 } from "src/generated/types/v16/meter-values";
import { RemoteStartTransactionResponseV16 } from "src/generated/types/v16/remote-start-transaction-response";
import { RemoteStartTransactionRequestV16 } from "src/generated/types/v16/remote-start-transaction";
import { RemoteStopTransactionResponseV16 } from "src/generated/types/v16/remote-stop-transaction-response";
import { RemoteStopTransactionRequestV16 } from "src/generated/types/v16/remote-stop-transaction";
import { ReserveNowResponseV16 } from "src/generated/types/v16/reserve-now-response";
import { ReserveNowRequestV16 } from "src/generated/types/v16/reserve-now";
import { ResetResponseV16 } from "src/generated/types/v16/reset-response";
import { ResetRequestV16 } from "src/generated/types/v16/reset";
import { SendLocalListResponseV16 } from "src/generated/types/v16/send-local-list-response";
import { SendLocalListRequestV16 } from "src/generated/types/v16/send-local-list";
import { SetChargingProfileResponseV16 } from "src/generated/types/v16/set-charging-profile-response";
import { SetChargingProfileRequestV16 } from "src/generated/types/v16/set-charging-profile";
import { StartTransactionResponseV16 } from "src/generated/types/v16/start-transaction-response";
import { StartTransactionRequestV16 } from "src/generated/types/v16/start-transaction";
import { StatusNotificationResponseV16 } from "src/generated/types/v16/status-notification-response";
import { StatusNotificationRequestV16 } from "src/generated/types/v16/status-notification";
import { StopTransactionResponseV16 } from "src/generated/types/v16/stop-transaction-response";
import { StopTransactionRequestV16 } from "src/generated/types/v16/stop-transaction";
import { TriggerMessageResponseV16 } from "src/generated/types/v16/trigger-message-response";
import { TriggerMessageRequestV16 } from "src/generated/types/v16/trigger-message";
import { UnlockConnectorResponseV16 } from "src/generated/types/v16/unlock-connector-response";
import { UnlockConnectorRequestV16 } from "src/generated/types/v16/unlock-connector";
import { UpdateFirmwareResponseV16 } from "src/generated/types/v16/update-firmware-response";
import { UpdateFirmwareRequestV16 } from "src/generated/types/v16/update-firmware";

export const isValidAuthorizeResponseV16 = (data: unknown): data is AuthorizeResponseV16 => validateOCPPMessage(schemas.v16.authorizeResponseV16, data);

export const isValidAuthorizeRequestV16 = (data: unknown): data is AuthorizeRequestV16 => validateOCPPMessage(schemas.v16.authorizeV16, data);

export const isValidBootNotificationResponseV16 = (data: unknown): data is BootNotificationResponseV16 => validateOCPPMessage(schemas.v16.bootNotificationResponseV16, data);

export const isValidBootNotificationRequestV16 = (data: unknown): data is BootNotificationRequestV16 => validateOCPPMessage(schemas.v16.bootNotificationV16, data);

export const isValidCancelReservationResponseV16 = (data: unknown): data is CancelReservationResponseV16 => validateOCPPMessage(schemas.v16.cancelReservationResponseV16, data);

export const isValidCancelReservationRequestV16 = (data: unknown): data is CancelReservationRequestV16 => validateOCPPMessage(schemas.v16.cancelReservationV16, data);

export const isValidChangeAvailabilityResponseV16 = (data: unknown): data is ChangeAvailabilityResponseV16 => validateOCPPMessage(schemas.v16.changeAvailabilityResponseV16, data);

export const isValidChangeAvailabilityRequestV16 = (data: unknown): data is ChangeAvailabilityRequestV16 => validateOCPPMessage(schemas.v16.changeAvailabilityV16, data);

export const isValidChangeConfigurationResponseV16 = (data: unknown): data is ChangeConfigurationResponseV16 => validateOCPPMessage(schemas.v16.changeConfigurationResponseV16, data);

export const isValidChangeConfigurationRequestV16 = (data: unknown): data is ChangeConfigurationRequestV16 => validateOCPPMessage(schemas.v16.changeConfigurationV16, data);

export const isValidClearCacheResponseV16 = (data: unknown): data is ClearCacheResponseV16 => validateOCPPMessage(schemas.v16.clearCacheResponseV16, data);

export const isValidClearCacheRequestV16 = (data: unknown): data is ClearCacheRequestV16 => validateOCPPMessage(schemas.v16.clearCacheV16, data);

export const isValidClearChargingProfileResponseV16 = (data: unknown): data is ClearChargingProfileResponseV16 => validateOCPPMessage(schemas.v16.clearChargingProfileResponseV16, data);

export const isValidClearChargingProfileRequestV16 = (data: unknown): data is ClearChargingProfileRequestV16 => validateOCPPMessage(schemas.v16.clearChargingProfileV16, data);

export const isValidDataTransferResponseV16 = (data: unknown): data is DataTransferResponseV16 => validateOCPPMessage(schemas.v16.dataTransferResponseV16, data);

export const isValidDataTransferRequestV16 = (data: unknown): data is DataTransferRequestV16 => validateOCPPMessage(schemas.v16.dataTransferV16, data);

export const isValidDiagnosticsStatusNotificationResponseV16 = (data: unknown): data is DiagnosticsStatusNotificationResponseV16 => validateOCPPMessage(schemas.v16.diagnosticsStatusNotificationResponseV16, data);

export const isValidDiagnosticsStatusNotificationRequestV16 = (data: unknown): data is DiagnosticsStatusNotificationRequestV16 => validateOCPPMessage(schemas.v16.diagnosticsStatusNotificationV16, data);

export const isValidFirmwareStatusNotificationResponseV16 = (data: unknown): data is FirmwareStatusNotificationResponseV16 => validateOCPPMessage(schemas.v16.firmwareStatusNotificationResponseV16, data);

export const isValidFirmwareStatusNotificationRequestV16 = (data: unknown): data is FirmwareStatusNotificationRequestV16 => validateOCPPMessage(schemas.v16.firmwareStatusNotificationV16, data);

export const isValidGetCompositeScheduleResponseV16 = (data: unknown): data is GetCompositeScheduleResponseV16 => validateOCPPMessage(schemas.v16.getCompositeScheduleResponseV16, data);

export const isValidGetCompositeScheduleRequestV16 = (data: unknown): data is GetCompositeScheduleRequestV16 => validateOCPPMessage(schemas.v16.getCompositeScheduleV16, data);

export const isValidGetConfigurationResponseV16 = (data: unknown): data is GetConfigurationResponseV16 => validateOCPPMessage(schemas.v16.getConfigurationResponseV16, data);

export const isValidGetConfigurationRequestV16 = (data: unknown): data is GetConfigurationRequestV16 => validateOCPPMessage(schemas.v16.getConfigurationV16, data);

export const isValidGetDiagnosticsResponseV16 = (data: unknown): data is GetDiagnosticsResponseV16 => validateOCPPMessage(schemas.v16.getDiagnosticsResponseV16, data);

export const isValidGetDiagnosticsRequestV16 = (data: unknown): data is GetDiagnosticsRequestV16 => validateOCPPMessage(schemas.v16.getDiagnosticsV16, data);

export const isValidGetLocalListVersionResponseV16 = (data: unknown): data is GetLocalListVersionResponseV16 => validateOCPPMessage(schemas.v16.getLocalListVersionResponseV16, data);

export const isValidGetLocalListVersionRequestV16 = (data: unknown): data is GetLocalListVersionRequestV16 => validateOCPPMessage(schemas.v16.getLocalListVersionV16, data);

export const isValidHeartbeatResponseV16 = (data: unknown): data is HeartbeatResponseV16 => validateOCPPMessage(schemas.v16.heartbeatResponseV16, data);

export const isValidHeartbeatRequestV16 = (data: unknown): data is HeartbeatRequestV16 => validateOCPPMessage(schemas.v16.heartbeatV16, data);

export const isValidMeterValuesResponseV16 = (data: unknown): data is MeterValuesResponseV16 => validateOCPPMessage(schemas.v16.meterValuesResponseV16, data);

export const isValidMeterValuesRequestV16 = (data: unknown): data is MeterValuesRequestV16 => validateOCPPMessage(schemas.v16.meterValuesV16, data);

export const isValidRemoteStartTransactionResponseV16 = (data: unknown): data is RemoteStartTransactionResponseV16 => validateOCPPMessage(schemas.v16.remoteStartTransactionResponseV16, data);

export const isValidRemoteStartTransactionRequestV16 = (data: unknown): data is RemoteStartTransactionRequestV16 => validateOCPPMessage(schemas.v16.remoteStartTransactionV16, data);

export const isValidRemoteStopTransactionResponseV16 = (data: unknown): data is RemoteStopTransactionResponseV16 => validateOCPPMessage(schemas.v16.remoteStopTransactionResponseV16, data);

export const isValidRemoteStopTransactionRequestV16 = (data: unknown): data is RemoteStopTransactionRequestV16 => validateOCPPMessage(schemas.v16.remoteStopTransactionV16, data);

export const isValidReserveNowResponseV16 = (data: unknown): data is ReserveNowResponseV16 => validateOCPPMessage(schemas.v16.reserveNowResponseV16, data);

export const isValidReserveNowRequestV16 = (data: unknown): data is ReserveNowRequestV16 => validateOCPPMessage(schemas.v16.reserveNowV16, data);

export const isValidResetResponseV16 = (data: unknown): data is ResetResponseV16 => validateOCPPMessage(schemas.v16.resetResponseV16, data);

export const isValidResetRequestV16 = (data: unknown): data is ResetRequestV16 => validateOCPPMessage(schemas.v16.resetV16, data);

export const isValidSendLocalListResponseV16 = (data: unknown): data is SendLocalListResponseV16 => validateOCPPMessage(schemas.v16.sendLocalListResponseV16, data);

export const isValidSendLocalListRequestV16 = (data: unknown): data is SendLocalListRequestV16 => validateOCPPMessage(schemas.v16.sendLocalListV16, data);

export const isValidSetChargingProfileResponseV16 = (data: unknown): data is SetChargingProfileResponseV16 => validateOCPPMessage(schemas.v16.setChargingProfileResponseV16, data);

export const isValidSetChargingProfileRequestV16 = (data: unknown): data is SetChargingProfileRequestV16 => validateOCPPMessage(schemas.v16.setChargingProfileV16, data);

export const isValidStartTransactionResponseV16 = (data: unknown): data is StartTransactionResponseV16 => validateOCPPMessage(schemas.v16.startTransactionResponseV16, data);

export const isValidStartTransactionRequestV16 = (data: unknown): data is StartTransactionRequestV16 => validateOCPPMessage(schemas.v16.startTransactionV16, data);

export const isValidStatusNotificationResponseV16 = (data: unknown): data is StatusNotificationResponseV16 => validateOCPPMessage(schemas.v16.statusNotificationResponseV16, data);

export const isValidStatusNotificationRequestV16 = (data: unknown): data is StatusNotificationRequestV16 => validateOCPPMessage(schemas.v16.statusNotificationV16, data);

export const isValidStopTransactionResponseV16 = (data: unknown): data is StopTransactionResponseV16 => validateOCPPMessage(schemas.v16.stopTransactionResponseV16, data);

export const isValidStopTransactionRequestV16 = (data: unknown): data is StopTransactionRequestV16 => validateOCPPMessage(schemas.v16.stopTransactionV16, data);

export const isValidTriggerMessageResponseV16 = (data: unknown): data is TriggerMessageResponseV16 => validateOCPPMessage(schemas.v16.triggerMessageResponseV16, data);

export const isValidTriggerMessageRequestV16 = (data: unknown): data is TriggerMessageRequestV16 => validateOCPPMessage(schemas.v16.triggerMessageV16, data);

export const isValidUnlockConnectorResponseV16 = (data: unknown): data is UnlockConnectorResponseV16 => validateOCPPMessage(schemas.v16.unlockConnectorResponseV16, data);

export const isValidUnlockConnectorRequestV16 = (data: unknown): data is UnlockConnectorRequestV16 => validateOCPPMessage(schemas.v16.unlockConnectorV16, data);

export const isValidUpdateFirmwareResponseV16 = (data: unknown): data is UpdateFirmwareResponseV16 => validateOCPPMessage(schemas.v16.updateFirmwareResponseV16, data);

export const isValidUpdateFirmwareRequestV16 = (data: unknown): data is UpdateFirmwareRequestV16 => validateOCPPMessage(schemas.v16.updateFirmwareV16, data);

