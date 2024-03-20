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

export type ActionV16 = "Authorize" | "BootNotification" | "CancelReservation" | "ChangeAvailability" | "ChangeConfiguration" | "ClearCache" | "ClearChargingProfile" | "DataTransfer" | "DiagnosticsStatusNotification" | "FirmwareStatusNotification" | "GetCompositeSchedule" | "GetConfiguration" | "GetDiagnostics" | "GetLocalListVersion" | "Heartbeat" | "MeterValues" | "RemoteStartTransaction" | "RemoteStopTransaction" | "ReserveNow" | "Reset" | "SendLocalList" | "SetChargingProfile" | "StartTransaction" | "StatusNotification" | "StopTransaction" | "TriggerMessage" | "UnlockConnector" | "UpdateFirmware";
export type OCPPRequestTypeV16 = AuthorizeRequestV16 | BootNotificationRequestV16 | CancelReservationRequestV16 | ChangeAvailabilityRequestV16 | ChangeConfigurationRequestV16 | ClearCacheRequestV16 | ClearChargingProfileRequestV16 | DataTransferRequestV16 | DiagnosticsStatusNotificationRequestV16 | FirmwareStatusNotificationRequestV16 | GetCompositeScheduleRequestV16 | GetConfigurationRequestV16 | GetDiagnosticsRequestV16 | GetLocalListVersionRequestV16 | HeartbeatRequestV16 | MeterValuesRequestV16 | RemoteStartTransactionRequestV16 | RemoteStopTransactionRequestV16 | ReserveNowRequestV16 | ResetRequestV16 | SendLocalListRequestV16 | SetChargingProfileRequestV16 | StartTransactionRequestV16 | StatusNotificationRequestV16 | StopTransactionRequestV16 | TriggerMessageRequestV16 | UnlockConnectorRequestV16 | UpdateFirmwareRequestV16;
export type OCPPResponseTypeV16 = AuthorizeResponseV16 | BootNotificationResponseV16 | CancelReservationResponseV16 | ChangeAvailabilityResponseV16 | ChangeConfigurationResponseV16 | ClearCacheResponseV16 | ClearChargingProfileResponseV16 | DataTransferResponseV16 | DiagnosticsStatusNotificationResponseV16 | FirmwareStatusNotificationResponseV16 | GetCompositeScheduleResponseV16 | GetConfigurationResponseV16 | GetDiagnosticsResponseV16 | GetLocalListVersionResponseV16 | HeartbeatResponseV16 | MeterValuesResponseV16 | RemoteStartTransactionResponseV16 | RemoteStopTransactionResponseV16 | ReserveNowResponseV16 | ResetResponseV16 | SendLocalListResponseV16 | SetChargingProfileResponseV16 | StartTransactionResponseV16 | StatusNotificationResponseV16 | StopTransactionResponseV16 | TriggerMessageResponseV16 | UnlockConnectorResponseV16 | UpdateFirmwareResponseV16;
export enum OCPPErrorCodeV16 {
    NotImplemented = "NotImplemented",
    NotSupported = "NotSupported",
    InternalError = "InternalError",
    ProtocolError = "ProtocolError",
    SecurityError = "SecurityError",
    FormationViolation = "FormationViolation",
    PropertyConstraintViolation = "PropertyConstraintViolation",
    OccurenceConstraintViolation = "OccurenceConstraintViolation",
    TypeConstraintViolation = "TypeConstraintViolation",
    GenericError = "GenericError"
}
export type OCPPRPCMessageV16 = OCPPCallV16 | OCPPCallResultV16 | OCPPCallErrorV16;