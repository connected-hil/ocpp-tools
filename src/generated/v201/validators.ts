import { schemas } from "src/generated/v201/schemas";
import { validateOCPPPayload } from "src/validation";
import { AuthorizeResponseV201 } from "src/generated/v201/types/authorize-response";
import { AuthorizeRequestV201 } from "src/generated/v201/types/authorize";
import { BootNotificationResponseV201 } from "src/generated/v201/types/boot-notification-response";
import { BootNotificationRequestV201 } from "src/generated/v201/types/boot-notification";
import { CancelReservationResponseV201 } from "src/generated/v201/types/cancel-reservation-response";
import { CancelReservationRequestV201 } from "src/generated/v201/types/cancel-reservation";
import { CertificateSignedResponseV201 } from "src/generated/v201/types/certificate-signed-response";
import { CertificateSignedRequestV201 } from "src/generated/v201/types/certificate-signed";
import { ChangeAvailabilityResponseV201 } from "src/generated/v201/types/change-availability-response";
import { ChangeAvailabilityRequestV201 } from "src/generated/v201/types/change-availability";
import { ClearCacheResponseV201 } from "src/generated/v201/types/clear-cache-response";
import { ClearCacheRequestV201 } from "src/generated/v201/types/clear-cache";
import { ClearChargingProfileResponseV201 } from "src/generated/v201/types/clear-charging-profile-response";
import { ClearChargingProfileRequestV201 } from "src/generated/v201/types/clear-charging-profile";
import { ClearDisplayMessageResponseV201 } from "src/generated/v201/types/clear-display-message-response";
import { ClearDisplayMessageRequestV201 } from "src/generated/v201/types/clear-display-message";
import { ClearVariableMonitoringResponseV201 } from "src/generated/v201/types/clear-variable-monitoring-response";
import { ClearVariableMonitoringRequestV201 } from "src/generated/v201/types/clear-variable-monitoring";
import { ClearedChargingLimitResponseV201 } from "src/generated/v201/types/cleared-charging-limit-response";
import { ClearedChargingLimitRequestV201 } from "src/generated/v201/types/cleared-charging-limit";
import { CostUpdatedResponseV201 } from "src/generated/v201/types/cost-updated-response";
import { CostUpdatedRequestV201 } from "src/generated/v201/types/cost-updated";
import { CustomerInformationResponseV201 } from "src/generated/v201/types/customer-information-response";
import { CustomerInformationRequestV201 } from "src/generated/v201/types/customer-information";
import { DataTransferResponseV201 } from "src/generated/v201/types/data-transfer-response";
import { DataTransferRequestV201 } from "src/generated/v201/types/data-transfer";
import { DeleteCertificateResponseV201 } from "src/generated/v201/types/delete-certificate-response";
import { DeleteCertificateRequestV201 } from "src/generated/v201/types/delete-certificate";
import { FirmwareStatusNotificationResponseV201 } from "src/generated/v201/types/firmware-status-notification-response";
import { FirmwareStatusNotificationRequestV201 } from "src/generated/v201/types/firmware-status-notification";
import { GetBaseReportResponseV201 } from "src/generated/v201/types/get-base-report-response";
import { GetBaseReportRequestV201 } from "src/generated/v201/types/get-base-report";
import { GetCertificateStatusResponseV201 } from "src/generated/v201/types/get-certificate-status-response";
import { GetCertificateStatusRequestV201 } from "src/generated/v201/types/get-certificate-status";
import { GetChargingProfilesResponseV201 } from "src/generated/v201/types/get-charging-profiles-response";
import { GetChargingProfilesRequestV201 } from "src/generated/v201/types/get-charging-profiles";
import { GetCompositeScheduleResponseV201 } from "src/generated/v201/types/get-composite-schedule-response";
import { GetCompositeScheduleRequestV201 } from "src/generated/v201/types/get-composite-schedule";
import { GetDisplayMessagesResponseV201 } from "src/generated/v201/types/get-display-messages-response";
import { GetDisplayMessagesRequestV201 } from "src/generated/v201/types/get-display-messages";
import { GetInstalledCertificateIdsResponseV201 } from "src/generated/v201/types/get-installed-certificate-ids-response";
import { GetInstalledCertificateIdsRequestV201 } from "src/generated/v201/types/get-installed-certificate-ids";
import { GetLocalListVersionResponseV201 } from "src/generated/v201/types/get-local-list-version-response";
import { GetLocalListVersionRequestV201 } from "src/generated/v201/types/get-local-list-version";
import { GetLogResponseV201 } from "src/generated/v201/types/get-log-response";
import { GetLogRequestV201 } from "src/generated/v201/types/get-log";
import { GetMonitoringReportResponseV201 } from "src/generated/v201/types/get-monitoring-report-response";
import { GetMonitoringReportRequestV201 } from "src/generated/v201/types/get-monitoring-report";
import { GetReportResponseV201 } from "src/generated/v201/types/get-report-response";
import { GetReportRequestV201 } from "src/generated/v201/types/get-report";
import { GetTransactionStatusResponseV201 } from "src/generated/v201/types/get-transaction-status-response";
import { GetTransactionStatusRequestV201 } from "src/generated/v201/types/get-transaction-status";
import { GetVariablesResponseV201 } from "src/generated/v201/types/get-variables-response";
import { GetVariablesRequestV201 } from "src/generated/v201/types/get-variables";
import { Get15118EVCertificateResponseV201 } from "src/generated/v201/types/get15118-e-v-certificate-response";
import { Get15118EVCertificateRequestV201 } from "src/generated/v201/types/get15118-e-v-certificate";
import { HeartbeatResponseV201 } from "src/generated/v201/types/heartbeat-response";
import { HeartbeatRequestV201 } from "src/generated/v201/types/heartbeat";
import { InstallCertificateResponseV201 } from "src/generated/v201/types/install-certificate-response";
import { InstallCertificateRequestV201 } from "src/generated/v201/types/install-certificate";
import { LogStatusNotificationResponseV201 } from "src/generated/v201/types/log-status-notification-response";
import { LogStatusNotificationRequestV201 } from "src/generated/v201/types/log-status-notification";
import { MeterValuesResponseV201 } from "src/generated/v201/types/meter-values-response";
import { MeterValuesRequestV201 } from "src/generated/v201/types/meter-values";
import { NotifyChargingLimitResponseV201 } from "src/generated/v201/types/notify-charging-limit-response";
import { NotifyChargingLimitRequestV201 } from "src/generated/v201/types/notify-charging-limit";
import { NotifyCustomerInformationResponseV201 } from "src/generated/v201/types/notify-customer-information-response";
import { NotifyCustomerInformationRequestV201 } from "src/generated/v201/types/notify-customer-information";
import { NotifyDisplayMessagesResponseV201 } from "src/generated/v201/types/notify-display-messages-response";
import { NotifyDisplayMessagesRequestV201 } from "src/generated/v201/types/notify-display-messages";
import { NotifyEVChargingNeedsResponseV201 } from "src/generated/v201/types/notify-e-v-charging-needs-response";
import { NotifyEVChargingNeedsRequestV201 } from "src/generated/v201/types/notify-e-v-charging-needs";
import { NotifyEVChargingScheduleResponseV201 } from "src/generated/v201/types/notify-e-v-charging-schedule-response";
import { NotifyEVChargingScheduleRequestV201 } from "src/generated/v201/types/notify-e-v-charging-schedule";
import { NotifyEventResponseV201 } from "src/generated/v201/types/notify-event-response";
import { NotifyEventRequestV201 } from "src/generated/v201/types/notify-event";
import { NotifyMonitoringReportResponseV201 } from "src/generated/v201/types/notify-monitoring-report-response";
import { NotifyMonitoringReportRequestV201 } from "src/generated/v201/types/notify-monitoring-report";
import { NotifyReportResponseV201 } from "src/generated/v201/types/notify-report-response";
import { NotifyReportRequestV201 } from "src/generated/v201/types/notify-report";
import { PublishFirmwareResponseV201 } from "src/generated/v201/types/publish-firmware-response";
import { PublishFirmwareStatusNotificationResponseV201 } from "src/generated/v201/types/publish-firmware-status-notification-response";
import { PublishFirmwareStatusNotificationRequestV201 } from "src/generated/v201/types/publish-firmware-status-notification";
import { PublishFirmwareRequestV201 } from "src/generated/v201/types/publish-firmware";
import { ReportChargingProfilesResponseV201 } from "src/generated/v201/types/report-charging-profiles-response";
import { ReportChargingProfilesRequestV201 } from "src/generated/v201/types/report-charging-profiles";
import { ReservationStatusUpdateResponseV201 } from "src/generated/v201/types/reservation-status-update-response";
import { ReservationStatusUpdateRequestV201 } from "src/generated/v201/types/reservation-status-update";
import { ReserveNowResponseV201 } from "src/generated/v201/types/reserve-now-response";
import { ReserveNowRequestV201 } from "src/generated/v201/types/reserve-now";
import { ResetResponseV201 } from "src/generated/v201/types/reset-response";
import { ResetRequestV201 } from "src/generated/v201/types/reset";
import { RpcCallErrorV201 } from "src/generated/v201/types/rpc-call-error";
import { RpcCallResultV201 } from "src/generated/v201/types/rpc-call-result";
import { RpcCallV201 } from "src/generated/v201/types/rpc-call";
import { SecurityEventNotificationResponseV201 } from "src/generated/v201/types/security-event-notification-response";
import { SecurityEventNotificationRequestV201 } from "src/generated/v201/types/security-event-notification";
import { SendLocalListResponseV201 } from "src/generated/v201/types/send-local-list-response";
import { SendLocalListRequestV201 } from "src/generated/v201/types/send-local-list";
import { SetChargingProfileResponseV201 } from "src/generated/v201/types/set-charging-profile-response";
import { SetChargingProfileRequestV201 } from "src/generated/v201/types/set-charging-profile";
import { SetDisplayMessageResponseV201 } from "src/generated/v201/types/set-display-message-response";
import { SetDisplayMessageRequestV201 } from "src/generated/v201/types/set-display-message";
import { SetMonitoringBaseResponseV201 } from "src/generated/v201/types/set-monitoring-base-response";
import { SetMonitoringBaseRequestV201 } from "src/generated/v201/types/set-monitoring-base";
import { SetMonitoringLevelResponseV201 } from "src/generated/v201/types/set-monitoring-level-response";
import { SetMonitoringLevelRequestV201 } from "src/generated/v201/types/set-monitoring-level";
import { SetNetworkProfileResponseV201 } from "src/generated/v201/types/set-network-profile-response";
import { SetNetworkProfileRequestV201 } from "src/generated/v201/types/set-network-profile";
import { SetVariableMonitoringResponseV201 } from "src/generated/v201/types/set-variable-monitoring-response";
import { SetVariableMonitoringRequestV201 } from "src/generated/v201/types/set-variable-monitoring";
import { SetVariablesResponseV201 } from "src/generated/v201/types/set-variables-response";
import { SetVariablesRequestV201 } from "src/generated/v201/types/set-variables";
import { SignCertificateResponseV201 } from "src/generated/v201/types/sign-certificate-response";
import { SignCertificateRequestV201 } from "src/generated/v201/types/sign-certificate";
import { RequestStartTransactionResponseV201 } from "src/generated/v201/types/start-transaction-response";
import { RequestStartTransactionRequestV201 } from "src/generated/v201/types/start-transaction";
import { StatusNotificationResponseV201 } from "src/generated/v201/types/status-notification-response";
import { StatusNotificationRequestV201 } from "src/generated/v201/types/status-notification";
import { RequestStopTransactionResponseV201 } from "src/generated/v201/types/stop-transaction-response";
import { RequestStopTransactionRequestV201 } from "src/generated/v201/types/stop-transaction";
import { TransactionEventResponseV201 } from "src/generated/v201/types/transaction-event-response";
import { TransactionEventRequestV201 } from "src/generated/v201/types/transaction-event";
import { TriggerMessageResponseV201 } from "src/generated/v201/types/trigger-message-response";
import { TriggerMessageRequestV201 } from "src/generated/v201/types/trigger-message";
import { UnlockConnectorResponseV201 } from "src/generated/v201/types/unlock-connector-response";
import { UnlockConnectorRequestV201 } from "src/generated/v201/types/unlock-connector";
import { UnpublishFirmwareResponseV201 } from "src/generated/v201/types/unpublish-firmware-response";
import { UnpublishFirmwareRequestV201 } from "src/generated/v201/types/unpublish-firmware";
import { UpdateFirmwareResponseV201 } from "src/generated/v201/types/update-firmware-response";
import { UpdateFirmwareRequestV201 } from "src/generated/v201/types/update-firmware";

/**
 * Validation function for AuthorizeResponseV201 using JSON included schema.
 *  @param { unknown } data JSON decoded payload to validate
 *  @returns { boolean } true if payload is valid against schema, false otherwise
 *  */
export const isValidAuthorizeResponseV201 = (data: unknown): data is AuthorizeResponseV201 => validateOCPPPayload(schemas.v201.authorizeResponseV201, data);

/**
 * Validation function for AuthorizeRequestV201 using JSON included schema.
 *  @param { unknown } data JSON decoded payload to validate
 *  @returns { boolean } true if payload is valid against schema, false otherwise
 *  */
export const isValidAuthorizeRequestV201 = (data: unknown): data is AuthorizeRequestV201 => validateOCPPPayload(schemas.v201.authorizeRequestV201, data);

/**
 * Validation function for BootNotificationResponseV201 using JSON included schema.
 *  @param { unknown } data JSON decoded payload to validate
 *  @returns { boolean } true if payload is valid against schema, false otherwise
 *  */
export const isValidBootNotificationResponseV201 = (data: unknown): data is BootNotificationResponseV201 => validateOCPPPayload(schemas.v201.bootNotificationResponseV201, data);

/**
 * Validation function for BootNotificationRequestV201 using JSON included schema.
 *  @param { unknown } data JSON decoded payload to validate
 *  @returns { boolean } true if payload is valid against schema, false otherwise
 *  */
export const isValidBootNotificationRequestV201 = (data: unknown): data is BootNotificationRequestV201 => validateOCPPPayload(schemas.v201.bootNotificationRequestV201, data);

/**
 * Validation function for CancelReservationResponseV201 using JSON included schema.
 *  @param { unknown } data JSON decoded payload to validate
 *  @returns { boolean } true if payload is valid against schema, false otherwise
 *  */
export const isValidCancelReservationResponseV201 = (data: unknown): data is CancelReservationResponseV201 => validateOCPPPayload(schemas.v201.cancelReservationResponseV201, data);

/**
 * Validation function for CancelReservationRequestV201 using JSON included schema.
 *  @param { unknown } data JSON decoded payload to validate
 *  @returns { boolean } true if payload is valid against schema, false otherwise
 *  */
export const isValidCancelReservationRequestV201 = (data: unknown): data is CancelReservationRequestV201 => validateOCPPPayload(schemas.v201.cancelReservationRequestV201, data);

/**
 * Validation function for CertificateSignedResponseV201 using JSON included schema.
 *  @param { unknown } data JSON decoded payload to validate
 *  @returns { boolean } true if payload is valid against schema, false otherwise
 *  */
export const isValidCertificateSignedResponseV201 = (data: unknown): data is CertificateSignedResponseV201 => validateOCPPPayload(schemas.v201.certificateSignedResponseV201, data);

/**
 * Validation function for CertificateSignedRequestV201 using JSON included schema.
 *  @param { unknown } data JSON decoded payload to validate
 *  @returns { boolean } true if payload is valid against schema, false otherwise
 *  */
export const isValidCertificateSignedRequestV201 = (data: unknown): data is CertificateSignedRequestV201 => validateOCPPPayload(schemas.v201.certificateSignedRequestV201, data);

/**
 * Validation function for ChangeAvailabilityResponseV201 using JSON included schema.
 *  @param { unknown } data JSON decoded payload to validate
 *  @returns { boolean } true if payload is valid against schema, false otherwise
 *  */
export const isValidChangeAvailabilityResponseV201 = (data: unknown): data is ChangeAvailabilityResponseV201 => validateOCPPPayload(schemas.v201.changeAvailabilityResponseV201, data);

/**
 * Validation function for ChangeAvailabilityRequestV201 using JSON included schema.
 *  @param { unknown } data JSON decoded payload to validate
 *  @returns { boolean } true if payload is valid against schema, false otherwise
 *  */
export const isValidChangeAvailabilityRequestV201 = (data: unknown): data is ChangeAvailabilityRequestV201 => validateOCPPPayload(schemas.v201.changeAvailabilityRequestV201, data);

/**
 * Validation function for ClearCacheResponseV201 using JSON included schema.
 *  @param { unknown } data JSON decoded payload to validate
 *  @returns { boolean } true if payload is valid against schema, false otherwise
 *  */
export const isValidClearCacheResponseV201 = (data: unknown): data is ClearCacheResponseV201 => validateOCPPPayload(schemas.v201.clearCacheResponseV201, data);

/**
 * Validation function for ClearCacheRequestV201 using JSON included schema.
 *  @param { unknown } data JSON decoded payload to validate
 *  @returns { boolean } true if payload is valid against schema, false otherwise
 *  */
export const isValidClearCacheRequestV201 = (data: unknown): data is ClearCacheRequestV201 => validateOCPPPayload(schemas.v201.clearCacheRequestV201, data);

/**
 * Validation function for ClearChargingProfileResponseV201 using JSON included schema.
 *  @param { unknown } data JSON decoded payload to validate
 *  @returns { boolean } true if payload is valid against schema, false otherwise
 *  */
export const isValidClearChargingProfileResponseV201 = (data: unknown): data is ClearChargingProfileResponseV201 => validateOCPPPayload(schemas.v201.clearChargingProfileResponseV201, data);

/**
 * Validation function for ClearChargingProfileRequestV201 using JSON included schema.
 *  @param { unknown } data JSON decoded payload to validate
 *  @returns { boolean } true if payload is valid against schema, false otherwise
 *  */
export const isValidClearChargingProfileRequestV201 = (data: unknown): data is ClearChargingProfileRequestV201 => validateOCPPPayload(schemas.v201.clearChargingProfileRequestV201, data);

/**
 * Validation function for ClearDisplayMessageResponseV201 using JSON included schema.
 *  @param { unknown } data JSON decoded payload to validate
 *  @returns { boolean } true if payload is valid against schema, false otherwise
 *  */
export const isValidClearDisplayMessageResponseV201 = (data: unknown): data is ClearDisplayMessageResponseV201 => validateOCPPPayload(schemas.v201.clearDisplayMessageResponseV201, data);

/**
 * Validation function for ClearDisplayMessageRequestV201 using JSON included schema.
 *  @param { unknown } data JSON decoded payload to validate
 *  @returns { boolean } true if payload is valid against schema, false otherwise
 *  */
export const isValidClearDisplayMessageRequestV201 = (data: unknown): data is ClearDisplayMessageRequestV201 => validateOCPPPayload(schemas.v201.clearDisplayMessageRequestV201, data);

/**
 * Validation function for ClearVariableMonitoringResponseV201 using JSON included schema.
 *  @param { unknown } data JSON decoded payload to validate
 *  @returns { boolean } true if payload is valid against schema, false otherwise
 *  */
export const isValidClearVariableMonitoringResponseV201 = (data: unknown): data is ClearVariableMonitoringResponseV201 => validateOCPPPayload(schemas.v201.clearVariableMonitoringResponseV201, data);

/**
 * Validation function for ClearVariableMonitoringRequestV201 using JSON included schema.
 *  @param { unknown } data JSON decoded payload to validate
 *  @returns { boolean } true if payload is valid against schema, false otherwise
 *  */
export const isValidClearVariableMonitoringRequestV201 = (data: unknown): data is ClearVariableMonitoringRequestV201 => validateOCPPPayload(schemas.v201.clearVariableMonitoringRequestV201, data);

/**
 * Validation function for ClearedChargingLimitResponseV201 using JSON included schema.
 *  @param { unknown } data JSON decoded payload to validate
 *  @returns { boolean } true if payload is valid against schema, false otherwise
 *  */
export const isValidClearedChargingLimitResponseV201 = (data: unknown): data is ClearedChargingLimitResponseV201 => validateOCPPPayload(schemas.v201.clearedChargingLimitResponseV201, data);

/**
 * Validation function for ClearedChargingLimitRequestV201 using JSON included schema.
 *  @param { unknown } data JSON decoded payload to validate
 *  @returns { boolean } true if payload is valid against schema, false otherwise
 *  */
export const isValidClearedChargingLimitRequestV201 = (data: unknown): data is ClearedChargingLimitRequestV201 => validateOCPPPayload(schemas.v201.clearedChargingLimitRequestV201, data);

/**
 * Validation function for CostUpdatedResponseV201 using JSON included schema.
 *  @param { unknown } data JSON decoded payload to validate
 *  @returns { boolean } true if payload is valid against schema, false otherwise
 *  */
export const isValidCostUpdatedResponseV201 = (data: unknown): data is CostUpdatedResponseV201 => validateOCPPPayload(schemas.v201.costUpdatedResponseV201, data);

/**
 * Validation function for CostUpdatedRequestV201 using JSON included schema.
 *  @param { unknown } data JSON decoded payload to validate
 *  @returns { boolean } true if payload is valid against schema, false otherwise
 *  */
export const isValidCostUpdatedRequestV201 = (data: unknown): data is CostUpdatedRequestV201 => validateOCPPPayload(schemas.v201.costUpdatedRequestV201, data);

/**
 * Validation function for CustomerInformationResponseV201 using JSON included schema.
 *  @param { unknown } data JSON decoded payload to validate
 *  @returns { boolean } true if payload is valid against schema, false otherwise
 *  */
export const isValidCustomerInformationResponseV201 = (data: unknown): data is CustomerInformationResponseV201 => validateOCPPPayload(schemas.v201.customerInformationResponseV201, data);

/**
 * Validation function for CustomerInformationRequestV201 using JSON included schema.
 *  @param { unknown } data JSON decoded payload to validate
 *  @returns { boolean } true if payload is valid against schema, false otherwise
 *  */
export const isValidCustomerInformationRequestV201 = (data: unknown): data is CustomerInformationRequestV201 => validateOCPPPayload(schemas.v201.customerInformationRequestV201, data);

/**
 * Validation function for DataTransferResponseV201 using JSON included schema.
 *  @param { unknown } data JSON decoded payload to validate
 *  @returns { boolean } true if payload is valid against schema, false otherwise
 *  */
export const isValidDataTransferResponseV201 = (data: unknown): data is DataTransferResponseV201 => validateOCPPPayload(schemas.v201.dataTransferResponseV201, data);

/**
 * Validation function for DataTransferRequestV201 using JSON included schema.
 *  @param { unknown } data JSON decoded payload to validate
 *  @returns { boolean } true if payload is valid against schema, false otherwise
 *  */
export const isValidDataTransferRequestV201 = (data: unknown): data is DataTransferRequestV201 => validateOCPPPayload(schemas.v201.dataTransferRequestV201, data);

/**
 * Validation function for DeleteCertificateResponseV201 using JSON included schema.
 *  @param { unknown } data JSON decoded payload to validate
 *  @returns { boolean } true if payload is valid against schema, false otherwise
 *  */
export const isValidDeleteCertificateResponseV201 = (data: unknown): data is DeleteCertificateResponseV201 => validateOCPPPayload(schemas.v201.deleteCertificateResponseV201, data);

/**
 * Validation function for DeleteCertificateRequestV201 using JSON included schema.
 *  @param { unknown } data JSON decoded payload to validate
 *  @returns { boolean } true if payload is valid against schema, false otherwise
 *  */
export const isValidDeleteCertificateRequestV201 = (data: unknown): data is DeleteCertificateRequestV201 => validateOCPPPayload(schemas.v201.deleteCertificateRequestV201, data);

/**
 * Validation function for FirmwareStatusNotificationResponseV201 using JSON included schema.
 *  @param { unknown } data JSON decoded payload to validate
 *  @returns { boolean } true if payload is valid against schema, false otherwise
 *  */
export const isValidFirmwareStatusNotificationResponseV201 = (data: unknown): data is FirmwareStatusNotificationResponseV201 => validateOCPPPayload(schemas.v201.firmwareStatusNotificationResponseV201, data);

/**
 * Validation function for FirmwareStatusNotificationRequestV201 using JSON included schema.
 *  @param { unknown } data JSON decoded payload to validate
 *  @returns { boolean } true if payload is valid against schema, false otherwise
 *  */
export const isValidFirmwareStatusNotificationRequestV201 = (data: unknown): data is FirmwareStatusNotificationRequestV201 => validateOCPPPayload(schemas.v201.firmwareStatusNotificationRequestV201, data);

/**
 * Validation function for GetBaseReportResponseV201 using JSON included schema.
 *  @param { unknown } data JSON decoded payload to validate
 *  @returns { boolean } true if payload is valid against schema, false otherwise
 *  */
export const isValidGetBaseReportResponseV201 = (data: unknown): data is GetBaseReportResponseV201 => validateOCPPPayload(schemas.v201.getBaseReportResponseV201, data);

/**
 * Validation function for GetBaseReportRequestV201 using JSON included schema.
 *  @param { unknown } data JSON decoded payload to validate
 *  @returns { boolean } true if payload is valid against schema, false otherwise
 *  */
export const isValidGetBaseReportRequestV201 = (data: unknown): data is GetBaseReportRequestV201 => validateOCPPPayload(schemas.v201.getBaseReportRequestV201, data);

/**
 * Validation function for GetCertificateStatusResponseV201 using JSON included schema.
 *  @param { unknown } data JSON decoded payload to validate
 *  @returns { boolean } true if payload is valid against schema, false otherwise
 *  */
export const isValidGetCertificateStatusResponseV201 = (data: unknown): data is GetCertificateStatusResponseV201 => validateOCPPPayload(schemas.v201.getCertificateStatusResponseV201, data);

/**
 * Validation function for GetCertificateStatusRequestV201 using JSON included schema.
 *  @param { unknown } data JSON decoded payload to validate
 *  @returns { boolean } true if payload is valid against schema, false otherwise
 *  */
export const isValidGetCertificateStatusRequestV201 = (data: unknown): data is GetCertificateStatusRequestV201 => validateOCPPPayload(schemas.v201.getCertificateStatusRequestV201, data);

/**
 * Validation function for GetChargingProfilesResponseV201 using JSON included schema.
 *  @param { unknown } data JSON decoded payload to validate
 *  @returns { boolean } true if payload is valid against schema, false otherwise
 *  */
export const isValidGetChargingProfilesResponseV201 = (data: unknown): data is GetChargingProfilesResponseV201 => validateOCPPPayload(schemas.v201.getChargingProfilesResponseV201, data);

/**
 * Validation function for GetChargingProfilesRequestV201 using JSON included schema.
 *  @param { unknown } data JSON decoded payload to validate
 *  @returns { boolean } true if payload is valid against schema, false otherwise
 *  */
export const isValidGetChargingProfilesRequestV201 = (data: unknown): data is GetChargingProfilesRequestV201 => validateOCPPPayload(schemas.v201.getChargingProfilesRequestV201, data);

/**
 * Validation function for GetCompositeScheduleResponseV201 using JSON included schema.
 *  @param { unknown } data JSON decoded payload to validate
 *  @returns { boolean } true if payload is valid against schema, false otherwise
 *  */
export const isValidGetCompositeScheduleResponseV201 = (data: unknown): data is GetCompositeScheduleResponseV201 => validateOCPPPayload(schemas.v201.getCompositeScheduleResponseV201, data);

/**
 * Validation function for GetCompositeScheduleRequestV201 using JSON included schema.
 *  @param { unknown } data JSON decoded payload to validate
 *  @returns { boolean } true if payload is valid against schema, false otherwise
 *  */
export const isValidGetCompositeScheduleRequestV201 = (data: unknown): data is GetCompositeScheduleRequestV201 => validateOCPPPayload(schemas.v201.getCompositeScheduleRequestV201, data);

/**
 * Validation function for GetDisplayMessagesResponseV201 using JSON included schema.
 *  @param { unknown } data JSON decoded payload to validate
 *  @returns { boolean } true if payload is valid against schema, false otherwise
 *  */
export const isValidGetDisplayMessagesResponseV201 = (data: unknown): data is GetDisplayMessagesResponseV201 => validateOCPPPayload(schemas.v201.getDisplayMessagesResponseV201, data);

/**
 * Validation function for GetDisplayMessagesRequestV201 using JSON included schema.
 *  @param { unknown } data JSON decoded payload to validate
 *  @returns { boolean } true if payload is valid against schema, false otherwise
 *  */
export const isValidGetDisplayMessagesRequestV201 = (data: unknown): data is GetDisplayMessagesRequestV201 => validateOCPPPayload(schemas.v201.getDisplayMessagesRequestV201, data);

/**
 * Validation function for GetInstalledCertificateIdsResponseV201 using JSON included schema.
 *  @param { unknown } data JSON decoded payload to validate
 *  @returns { boolean } true if payload is valid against schema, false otherwise
 *  */
export const isValidGetInstalledCertificateIdsResponseV201 = (data: unknown): data is GetInstalledCertificateIdsResponseV201 => validateOCPPPayload(schemas.v201.getInstalledCertificateIdsResponseV201, data);

/**
 * Validation function for GetInstalledCertificateIdsRequestV201 using JSON included schema.
 *  @param { unknown } data JSON decoded payload to validate
 *  @returns { boolean } true if payload is valid against schema, false otherwise
 *  */
export const isValidGetInstalledCertificateIdsRequestV201 = (data: unknown): data is GetInstalledCertificateIdsRequestV201 => validateOCPPPayload(schemas.v201.getInstalledCertificateIdsRequestV201, data);

/**
 * Validation function for GetLocalListVersionResponseV201 using JSON included schema.
 *  @param { unknown } data JSON decoded payload to validate
 *  @returns { boolean } true if payload is valid against schema, false otherwise
 *  */
export const isValidGetLocalListVersionResponseV201 = (data: unknown): data is GetLocalListVersionResponseV201 => validateOCPPPayload(schemas.v201.getLocalListVersionResponseV201, data);

/**
 * Validation function for GetLocalListVersionRequestV201 using JSON included schema.
 *  @param { unknown } data JSON decoded payload to validate
 *  @returns { boolean } true if payload is valid against schema, false otherwise
 *  */
export const isValidGetLocalListVersionRequestV201 = (data: unknown): data is GetLocalListVersionRequestV201 => validateOCPPPayload(schemas.v201.getLocalListVersionRequestV201, data);

/**
 * Validation function for GetLogResponseV201 using JSON included schema.
 *  @param { unknown } data JSON decoded payload to validate
 *  @returns { boolean } true if payload is valid against schema, false otherwise
 *  */
export const isValidGetLogResponseV201 = (data: unknown): data is GetLogResponseV201 => validateOCPPPayload(schemas.v201.getLogResponseV201, data);

/**
 * Validation function for GetLogRequestV201 using JSON included schema.
 *  @param { unknown } data JSON decoded payload to validate
 *  @returns { boolean } true if payload is valid against schema, false otherwise
 *  */
export const isValidGetLogRequestV201 = (data: unknown): data is GetLogRequestV201 => validateOCPPPayload(schemas.v201.getLogRequestV201, data);

/**
 * Validation function for GetMonitoringReportResponseV201 using JSON included schema.
 *  @param { unknown } data JSON decoded payload to validate
 *  @returns { boolean } true if payload is valid against schema, false otherwise
 *  */
export const isValidGetMonitoringReportResponseV201 = (data: unknown): data is GetMonitoringReportResponseV201 => validateOCPPPayload(schemas.v201.getMonitoringReportResponseV201, data);

/**
 * Validation function for GetMonitoringReportRequestV201 using JSON included schema.
 *  @param { unknown } data JSON decoded payload to validate
 *  @returns { boolean } true if payload is valid against schema, false otherwise
 *  */
export const isValidGetMonitoringReportRequestV201 = (data: unknown): data is GetMonitoringReportRequestV201 => validateOCPPPayload(schemas.v201.getMonitoringReportRequestV201, data);

/**
 * Validation function for GetReportResponseV201 using JSON included schema.
 *  @param { unknown } data JSON decoded payload to validate
 *  @returns { boolean } true if payload is valid against schema, false otherwise
 *  */
export const isValidGetReportResponseV201 = (data: unknown): data is GetReportResponseV201 => validateOCPPPayload(schemas.v201.getReportResponseV201, data);

/**
 * Validation function for GetReportRequestV201 using JSON included schema.
 *  @param { unknown } data JSON decoded payload to validate
 *  @returns { boolean } true if payload is valid against schema, false otherwise
 *  */
export const isValidGetReportRequestV201 = (data: unknown): data is GetReportRequestV201 => validateOCPPPayload(schemas.v201.getReportRequestV201, data);

/**
 * Validation function for GetTransactionStatusResponseV201 using JSON included schema.
 *  @param { unknown } data JSON decoded payload to validate
 *  @returns { boolean } true if payload is valid against schema, false otherwise
 *  */
export const isValidGetTransactionStatusResponseV201 = (data: unknown): data is GetTransactionStatusResponseV201 => validateOCPPPayload(schemas.v201.getTransactionStatusResponseV201, data);

/**
 * Validation function for GetTransactionStatusRequestV201 using JSON included schema.
 *  @param { unknown } data JSON decoded payload to validate
 *  @returns { boolean } true if payload is valid against schema, false otherwise
 *  */
export const isValidGetTransactionStatusRequestV201 = (data: unknown): data is GetTransactionStatusRequestV201 => validateOCPPPayload(schemas.v201.getTransactionStatusRequestV201, data);

/**
 * Validation function for GetVariablesResponseV201 using JSON included schema.
 *  @param { unknown } data JSON decoded payload to validate
 *  @returns { boolean } true if payload is valid against schema, false otherwise
 *  */
export const isValidGetVariablesResponseV201 = (data: unknown): data is GetVariablesResponseV201 => validateOCPPPayload(schemas.v201.getVariablesResponseV201, data);

/**
 * Validation function for GetVariablesRequestV201 using JSON included schema.
 *  @param { unknown } data JSON decoded payload to validate
 *  @returns { boolean } true if payload is valid against schema, false otherwise
 *  */
export const isValidGetVariablesRequestV201 = (data: unknown): data is GetVariablesRequestV201 => validateOCPPPayload(schemas.v201.getVariablesRequestV201, data);

/**
 * Validation function for Get15118EVCertificateResponseV201 using JSON included schema.
 *  @param { unknown } data JSON decoded payload to validate
 *  @returns { boolean } true if payload is valid against schema, false otherwise
 *  */
export const isValidGet15118EVCertificateResponseV201 = (data: unknown): data is Get15118EVCertificateResponseV201 => validateOCPPPayload(schemas.v201.get15118EVCertificateResponseV201, data);

/**
 * Validation function for Get15118EVCertificateRequestV201 using JSON included schema.
 *  @param { unknown } data JSON decoded payload to validate
 *  @returns { boolean } true if payload is valid against schema, false otherwise
 *  */
export const isValidGet15118EVCertificateRequestV201 = (data: unknown): data is Get15118EVCertificateRequestV201 => validateOCPPPayload(schemas.v201.get15118EVCertificateRequestV201, data);

/**
 * Validation function for HeartbeatResponseV201 using JSON included schema.
 *  @param { unknown } data JSON decoded payload to validate
 *  @returns { boolean } true if payload is valid against schema, false otherwise
 *  */
export const isValidHeartbeatResponseV201 = (data: unknown): data is HeartbeatResponseV201 => validateOCPPPayload(schemas.v201.heartbeatResponseV201, data);

/**
 * Validation function for HeartbeatRequestV201 using JSON included schema.
 *  @param { unknown } data JSON decoded payload to validate
 *  @returns { boolean } true if payload is valid against schema, false otherwise
 *  */
export const isValidHeartbeatRequestV201 = (data: unknown): data is HeartbeatRequestV201 => validateOCPPPayload(schemas.v201.heartbeatRequestV201, data);

/**
 * Validation function for InstallCertificateResponseV201 using JSON included schema.
 *  @param { unknown } data JSON decoded payload to validate
 *  @returns { boolean } true if payload is valid against schema, false otherwise
 *  */
export const isValidInstallCertificateResponseV201 = (data: unknown): data is InstallCertificateResponseV201 => validateOCPPPayload(schemas.v201.installCertificateResponseV201, data);

/**
 * Validation function for InstallCertificateRequestV201 using JSON included schema.
 *  @param { unknown } data JSON decoded payload to validate
 *  @returns { boolean } true if payload is valid against schema, false otherwise
 *  */
export const isValidInstallCertificateRequestV201 = (data: unknown): data is InstallCertificateRequestV201 => validateOCPPPayload(schemas.v201.installCertificateRequestV201, data);

/**
 * Validation function for LogStatusNotificationResponseV201 using JSON included schema.
 *  @param { unknown } data JSON decoded payload to validate
 *  @returns { boolean } true if payload is valid against schema, false otherwise
 *  */
export const isValidLogStatusNotificationResponseV201 = (data: unknown): data is LogStatusNotificationResponseV201 => validateOCPPPayload(schemas.v201.logStatusNotificationResponseV201, data);

/**
 * Validation function for LogStatusNotificationRequestV201 using JSON included schema.
 *  @param { unknown } data JSON decoded payload to validate
 *  @returns { boolean } true if payload is valid against schema, false otherwise
 *  */
export const isValidLogStatusNotificationRequestV201 = (data: unknown): data is LogStatusNotificationRequestV201 => validateOCPPPayload(schemas.v201.logStatusNotificationRequestV201, data);

/**
 * Validation function for MeterValuesResponseV201 using JSON included schema.
 *  @param { unknown } data JSON decoded payload to validate
 *  @returns { boolean } true if payload is valid against schema, false otherwise
 *  */
export const isValidMeterValuesResponseV201 = (data: unknown): data is MeterValuesResponseV201 => validateOCPPPayload(schemas.v201.meterValuesResponseV201, data);

/**
 * Validation function for MeterValuesRequestV201 using JSON included schema.
 *  @param { unknown } data JSON decoded payload to validate
 *  @returns { boolean } true if payload is valid against schema, false otherwise
 *  */
export const isValidMeterValuesRequestV201 = (data: unknown): data is MeterValuesRequestV201 => validateOCPPPayload(schemas.v201.meterValuesRequestV201, data);

/**
 * Validation function for NotifyChargingLimitResponseV201 using JSON included schema.
 *  @param { unknown } data JSON decoded payload to validate
 *  @returns { boolean } true if payload is valid against schema, false otherwise
 *  */
export const isValidNotifyChargingLimitResponseV201 = (data: unknown): data is NotifyChargingLimitResponseV201 => validateOCPPPayload(schemas.v201.notifyChargingLimitResponseV201, data);

/**
 * Validation function for NotifyChargingLimitRequestV201 using JSON included schema.
 *  @param { unknown } data JSON decoded payload to validate
 *  @returns { boolean } true if payload is valid against schema, false otherwise
 *  */
export const isValidNotifyChargingLimitRequestV201 = (data: unknown): data is NotifyChargingLimitRequestV201 => validateOCPPPayload(schemas.v201.notifyChargingLimitRequestV201, data);

/**
 * Validation function for NotifyCustomerInformationResponseV201 using JSON included schema.
 *  @param { unknown } data JSON decoded payload to validate
 *  @returns { boolean } true if payload is valid against schema, false otherwise
 *  */
export const isValidNotifyCustomerInformationResponseV201 = (data: unknown): data is NotifyCustomerInformationResponseV201 => validateOCPPPayload(schemas.v201.notifyCustomerInformationResponseV201, data);

/**
 * Validation function for NotifyCustomerInformationRequestV201 using JSON included schema.
 *  @param { unknown } data JSON decoded payload to validate
 *  @returns { boolean } true if payload is valid against schema, false otherwise
 *  */
export const isValidNotifyCustomerInformationRequestV201 = (data: unknown): data is NotifyCustomerInformationRequestV201 => validateOCPPPayload(schemas.v201.notifyCustomerInformationRequestV201, data);

/**
 * Validation function for NotifyDisplayMessagesResponseV201 using JSON included schema.
 *  @param { unknown } data JSON decoded payload to validate
 *  @returns { boolean } true if payload is valid against schema, false otherwise
 *  */
export const isValidNotifyDisplayMessagesResponseV201 = (data: unknown): data is NotifyDisplayMessagesResponseV201 => validateOCPPPayload(schemas.v201.notifyDisplayMessagesResponseV201, data);

/**
 * Validation function for NotifyDisplayMessagesRequestV201 using JSON included schema.
 *  @param { unknown } data JSON decoded payload to validate
 *  @returns { boolean } true if payload is valid against schema, false otherwise
 *  */
export const isValidNotifyDisplayMessagesRequestV201 = (data: unknown): data is NotifyDisplayMessagesRequestV201 => validateOCPPPayload(schemas.v201.notifyDisplayMessagesRequestV201, data);

/**
 * Validation function for NotifyEVChargingNeedsResponseV201 using JSON included schema.
 *  @param { unknown } data JSON decoded payload to validate
 *  @returns { boolean } true if payload is valid against schema, false otherwise
 *  */
export const isValidNotifyEVChargingNeedsResponseV201 = (data: unknown): data is NotifyEVChargingNeedsResponseV201 => validateOCPPPayload(schemas.v201.notifyEVChargingNeedsResponseV201, data);

/**
 * Validation function for NotifyEVChargingNeedsRequestV201 using JSON included schema.
 *  @param { unknown } data JSON decoded payload to validate
 *  @returns { boolean } true if payload is valid against schema, false otherwise
 *  */
export const isValidNotifyEVChargingNeedsRequestV201 = (data: unknown): data is NotifyEVChargingNeedsRequestV201 => validateOCPPPayload(schemas.v201.notifyEVChargingNeedsRequestV201, data);

/**
 * Validation function for NotifyEVChargingScheduleResponseV201 using JSON included schema.
 *  @param { unknown } data JSON decoded payload to validate
 *  @returns { boolean } true if payload is valid against schema, false otherwise
 *  */
export const isValidNotifyEVChargingScheduleResponseV201 = (data: unknown): data is NotifyEVChargingScheduleResponseV201 => validateOCPPPayload(schemas.v201.notifyEVChargingScheduleResponseV201, data);

/**
 * Validation function for NotifyEVChargingScheduleRequestV201 using JSON included schema.
 *  @param { unknown } data JSON decoded payload to validate
 *  @returns { boolean } true if payload is valid against schema, false otherwise
 *  */
export const isValidNotifyEVChargingScheduleRequestV201 = (data: unknown): data is NotifyEVChargingScheduleRequestV201 => validateOCPPPayload(schemas.v201.notifyEVChargingScheduleRequestV201, data);

/**
 * Validation function for NotifyEventResponseV201 using JSON included schema.
 *  @param { unknown } data JSON decoded payload to validate
 *  @returns { boolean } true if payload is valid against schema, false otherwise
 *  */
export const isValidNotifyEventResponseV201 = (data: unknown): data is NotifyEventResponseV201 => validateOCPPPayload(schemas.v201.notifyEventResponseV201, data);

/**
 * Validation function for NotifyEventRequestV201 using JSON included schema.
 *  @param { unknown } data JSON decoded payload to validate
 *  @returns { boolean } true if payload is valid against schema, false otherwise
 *  */
export const isValidNotifyEventRequestV201 = (data: unknown): data is NotifyEventRequestV201 => validateOCPPPayload(schemas.v201.notifyEventRequestV201, data);

/**
 * Validation function for NotifyMonitoringReportResponseV201 using JSON included schema.
 *  @param { unknown } data JSON decoded payload to validate
 *  @returns { boolean } true if payload is valid against schema, false otherwise
 *  */
export const isValidNotifyMonitoringReportResponseV201 = (data: unknown): data is NotifyMonitoringReportResponseV201 => validateOCPPPayload(schemas.v201.notifyMonitoringReportResponseV201, data);

/**
 * Validation function for NotifyMonitoringReportRequestV201 using JSON included schema.
 *  @param { unknown } data JSON decoded payload to validate
 *  @returns { boolean } true if payload is valid against schema, false otherwise
 *  */
export const isValidNotifyMonitoringReportRequestV201 = (data: unknown): data is NotifyMonitoringReportRequestV201 => validateOCPPPayload(schemas.v201.notifyMonitoringReportRequestV201, data);

/**
 * Validation function for NotifyReportResponseV201 using JSON included schema.
 *  @param { unknown } data JSON decoded payload to validate
 *  @returns { boolean } true if payload is valid against schema, false otherwise
 *  */
export const isValidNotifyReportResponseV201 = (data: unknown): data is NotifyReportResponseV201 => validateOCPPPayload(schemas.v201.notifyReportResponseV201, data);

/**
 * Validation function for NotifyReportRequestV201 using JSON included schema.
 *  @param { unknown } data JSON decoded payload to validate
 *  @returns { boolean } true if payload is valid against schema, false otherwise
 *  */
export const isValidNotifyReportRequestV201 = (data: unknown): data is NotifyReportRequestV201 => validateOCPPPayload(schemas.v201.notifyReportRequestV201, data);

/**
 * Validation function for PublishFirmwareResponseV201 using JSON included schema.
 *  @param { unknown } data JSON decoded payload to validate
 *  @returns { boolean } true if payload is valid against schema, false otherwise
 *  */
export const isValidPublishFirmwareResponseV201 = (data: unknown): data is PublishFirmwareResponseV201 => validateOCPPPayload(schemas.v201.publishFirmwareResponseV201, data);

/**
 * Validation function for PublishFirmwareStatusNotificationResponseV201 using JSON included schema.
 *  @param { unknown } data JSON decoded payload to validate
 *  @returns { boolean } true if payload is valid against schema, false otherwise
 *  */
export const isValidPublishFirmwareStatusNotificationResponseV201 = (data: unknown): data is PublishFirmwareStatusNotificationResponseV201 => validateOCPPPayload(schemas.v201.publishFirmwareStatusNotificationResponseV201, data);

/**
 * Validation function for PublishFirmwareStatusNotificationRequestV201 using JSON included schema.
 *  @param { unknown } data JSON decoded payload to validate
 *  @returns { boolean } true if payload is valid against schema, false otherwise
 *  */
export const isValidPublishFirmwareStatusNotificationRequestV201 = (data: unknown): data is PublishFirmwareStatusNotificationRequestV201 => validateOCPPPayload(schemas.v201.publishFirmwareStatusNotificationRequestV201, data);

/**
 * Validation function for PublishFirmwareRequestV201 using JSON included schema.
 *  @param { unknown } data JSON decoded payload to validate
 *  @returns { boolean } true if payload is valid against schema, false otherwise
 *  */
export const isValidPublishFirmwareRequestV201 = (data: unknown): data is PublishFirmwareRequestV201 => validateOCPPPayload(schemas.v201.publishFirmwareRequestV201, data);

/**
 * Validation function for ReportChargingProfilesResponseV201 using JSON included schema.
 *  @param { unknown } data JSON decoded payload to validate
 *  @returns { boolean } true if payload is valid against schema, false otherwise
 *  */
export const isValidReportChargingProfilesResponseV201 = (data: unknown): data is ReportChargingProfilesResponseV201 => validateOCPPPayload(schemas.v201.reportChargingProfilesResponseV201, data);

/**
 * Validation function for ReportChargingProfilesRequestV201 using JSON included schema.
 *  @param { unknown } data JSON decoded payload to validate
 *  @returns { boolean } true if payload is valid against schema, false otherwise
 *  */
export const isValidReportChargingProfilesRequestV201 = (data: unknown): data is ReportChargingProfilesRequestV201 => validateOCPPPayload(schemas.v201.reportChargingProfilesRequestV201, data);

/**
 * Validation function for ReservationStatusUpdateResponseV201 using JSON included schema.
 *  @param { unknown } data JSON decoded payload to validate
 *  @returns { boolean } true if payload is valid against schema, false otherwise
 *  */
export const isValidReservationStatusUpdateResponseV201 = (data: unknown): data is ReservationStatusUpdateResponseV201 => validateOCPPPayload(schemas.v201.reservationStatusUpdateResponseV201, data);

/**
 * Validation function for ReservationStatusUpdateRequestV201 using JSON included schema.
 *  @param { unknown } data JSON decoded payload to validate
 *  @returns { boolean } true if payload is valid against schema, false otherwise
 *  */
export const isValidReservationStatusUpdateRequestV201 = (data: unknown): data is ReservationStatusUpdateRequestV201 => validateOCPPPayload(schemas.v201.reservationStatusUpdateRequestV201, data);

/**
 * Validation function for ReserveNowResponseV201 using JSON included schema.
 *  @param { unknown } data JSON decoded payload to validate
 *  @returns { boolean } true if payload is valid against schema, false otherwise
 *  */
export const isValidReserveNowResponseV201 = (data: unknown): data is ReserveNowResponseV201 => validateOCPPPayload(schemas.v201.reserveNowResponseV201, data);

/**
 * Validation function for ReserveNowRequestV201 using JSON included schema.
 *  @param { unknown } data JSON decoded payload to validate
 *  @returns { boolean } true if payload is valid against schema, false otherwise
 *  */
export const isValidReserveNowRequestV201 = (data: unknown): data is ReserveNowRequestV201 => validateOCPPPayload(schemas.v201.reserveNowRequestV201, data);

/**
 * Validation function for ResetResponseV201 using JSON included schema.
 *  @param { unknown } data JSON decoded payload to validate
 *  @returns { boolean } true if payload is valid against schema, false otherwise
 *  */
export const isValidResetResponseV201 = (data: unknown): data is ResetResponseV201 => validateOCPPPayload(schemas.v201.resetResponseV201, data);

/**
 * Validation function for ResetRequestV201 using JSON included schema.
 *  @param { unknown } data JSON decoded payload to validate
 *  @returns { boolean } true if payload is valid against schema, false otherwise
 *  */
export const isValidResetRequestV201 = (data: unknown): data is ResetRequestV201 => validateOCPPPayload(schemas.v201.resetRequestV201, data);

/**
 * Validation function for RpcCallErrorV201 using JSON included schema.
 *  @param { unknown } data JSON decoded payload to validate
 *  @returns { boolean } true if payload is valid against schema, false otherwise
 *  */
export const isValidRpcCallErrorV201 = (data: unknown): data is RpcCallErrorV201 => validateOCPPPayload(schemas.v201.rpcCallErrorV201, data);

/**
 * Validation function for RpcCallResultV201 using JSON included schema.
 *  @param { unknown } data JSON decoded payload to validate
 *  @returns { boolean } true if payload is valid against schema, false otherwise
 *  */
export const isValidRpcCallResultV201 = (data: unknown): data is RpcCallResultV201 => validateOCPPPayload(schemas.v201.rpcCallResultV201, data);

/**
 * Validation function for RpcCallV201 using JSON included schema.
 *  @param { unknown } data JSON decoded payload to validate
 *  @returns { boolean } true if payload is valid against schema, false otherwise
 *  */
export const isValidRpcCallV201 = (data: unknown): data is RpcCallV201 => validateOCPPPayload(schemas.v201.rpcCallV201, data);

/**
 * Validation function for SecurityEventNotificationResponseV201 using JSON included schema.
 *  @param { unknown } data JSON decoded payload to validate
 *  @returns { boolean } true if payload is valid against schema, false otherwise
 *  */
export const isValidSecurityEventNotificationResponseV201 = (data: unknown): data is SecurityEventNotificationResponseV201 => validateOCPPPayload(schemas.v201.securityEventNotificationResponseV201, data);

/**
 * Validation function for SecurityEventNotificationRequestV201 using JSON included schema.
 *  @param { unknown } data JSON decoded payload to validate
 *  @returns { boolean } true if payload is valid against schema, false otherwise
 *  */
export const isValidSecurityEventNotificationRequestV201 = (data: unknown): data is SecurityEventNotificationRequestV201 => validateOCPPPayload(schemas.v201.securityEventNotificationRequestV201, data);

/**
 * Validation function for SendLocalListResponseV201 using JSON included schema.
 *  @param { unknown } data JSON decoded payload to validate
 *  @returns { boolean } true if payload is valid against schema, false otherwise
 *  */
export const isValidSendLocalListResponseV201 = (data: unknown): data is SendLocalListResponseV201 => validateOCPPPayload(schemas.v201.sendLocalListResponseV201, data);

/**
 * Validation function for SendLocalListRequestV201 using JSON included schema.
 *  @param { unknown } data JSON decoded payload to validate
 *  @returns { boolean } true if payload is valid against schema, false otherwise
 *  */
export const isValidSendLocalListRequestV201 = (data: unknown): data is SendLocalListRequestV201 => validateOCPPPayload(schemas.v201.sendLocalListRequestV201, data);

/**
 * Validation function for SetChargingProfileResponseV201 using JSON included schema.
 *  @param { unknown } data JSON decoded payload to validate
 *  @returns { boolean } true if payload is valid against schema, false otherwise
 *  */
export const isValidSetChargingProfileResponseV201 = (data: unknown): data is SetChargingProfileResponseV201 => validateOCPPPayload(schemas.v201.setChargingProfileResponseV201, data);

/**
 * Validation function for SetChargingProfileRequestV201 using JSON included schema.
 *  @param { unknown } data JSON decoded payload to validate
 *  @returns { boolean } true if payload is valid against schema, false otherwise
 *  */
export const isValidSetChargingProfileRequestV201 = (data: unknown): data is SetChargingProfileRequestV201 => validateOCPPPayload(schemas.v201.setChargingProfileRequestV201, data);

/**
 * Validation function for SetDisplayMessageResponseV201 using JSON included schema.
 *  @param { unknown } data JSON decoded payload to validate
 *  @returns { boolean } true if payload is valid against schema, false otherwise
 *  */
export const isValidSetDisplayMessageResponseV201 = (data: unknown): data is SetDisplayMessageResponseV201 => validateOCPPPayload(schemas.v201.setDisplayMessageResponseV201, data);

/**
 * Validation function for SetDisplayMessageRequestV201 using JSON included schema.
 *  @param { unknown } data JSON decoded payload to validate
 *  @returns { boolean } true if payload is valid against schema, false otherwise
 *  */
export const isValidSetDisplayMessageRequestV201 = (data: unknown): data is SetDisplayMessageRequestV201 => validateOCPPPayload(schemas.v201.setDisplayMessageRequestV201, data);

/**
 * Validation function for SetMonitoringBaseResponseV201 using JSON included schema.
 *  @param { unknown } data JSON decoded payload to validate
 *  @returns { boolean } true if payload is valid against schema, false otherwise
 *  */
export const isValidSetMonitoringBaseResponseV201 = (data: unknown): data is SetMonitoringBaseResponseV201 => validateOCPPPayload(schemas.v201.setMonitoringBaseResponseV201, data);

/**
 * Validation function for SetMonitoringBaseRequestV201 using JSON included schema.
 *  @param { unknown } data JSON decoded payload to validate
 *  @returns { boolean } true if payload is valid against schema, false otherwise
 *  */
export const isValidSetMonitoringBaseRequestV201 = (data: unknown): data is SetMonitoringBaseRequestV201 => validateOCPPPayload(schemas.v201.setMonitoringBaseRequestV201, data);

/**
 * Validation function for SetMonitoringLevelResponseV201 using JSON included schema.
 *  @param { unknown } data JSON decoded payload to validate
 *  @returns { boolean } true if payload is valid against schema, false otherwise
 *  */
export const isValidSetMonitoringLevelResponseV201 = (data: unknown): data is SetMonitoringLevelResponseV201 => validateOCPPPayload(schemas.v201.setMonitoringLevelResponseV201, data);

/**
 * Validation function for SetMonitoringLevelRequestV201 using JSON included schema.
 *  @param { unknown } data JSON decoded payload to validate
 *  @returns { boolean } true if payload is valid against schema, false otherwise
 *  */
export const isValidSetMonitoringLevelRequestV201 = (data: unknown): data is SetMonitoringLevelRequestV201 => validateOCPPPayload(schemas.v201.setMonitoringLevelRequestV201, data);

/**
 * Validation function for SetNetworkProfileResponseV201 using JSON included schema.
 *  @param { unknown } data JSON decoded payload to validate
 *  @returns { boolean } true if payload is valid against schema, false otherwise
 *  */
export const isValidSetNetworkProfileResponseV201 = (data: unknown): data is SetNetworkProfileResponseV201 => validateOCPPPayload(schemas.v201.setNetworkProfileResponseV201, data);

/**
 * Validation function for SetNetworkProfileRequestV201 using JSON included schema.
 *  @param { unknown } data JSON decoded payload to validate
 *  @returns { boolean } true if payload is valid against schema, false otherwise
 *  */
export const isValidSetNetworkProfileRequestV201 = (data: unknown): data is SetNetworkProfileRequestV201 => validateOCPPPayload(schemas.v201.setNetworkProfileRequestV201, data);

/**
 * Validation function for SetVariableMonitoringResponseV201 using JSON included schema.
 *  @param { unknown } data JSON decoded payload to validate
 *  @returns { boolean } true if payload is valid against schema, false otherwise
 *  */
export const isValidSetVariableMonitoringResponseV201 = (data: unknown): data is SetVariableMonitoringResponseV201 => validateOCPPPayload(schemas.v201.setVariableMonitoringResponseV201, data);

/**
 * Validation function for SetVariableMonitoringRequestV201 using JSON included schema.
 *  @param { unknown } data JSON decoded payload to validate
 *  @returns { boolean } true if payload is valid against schema, false otherwise
 *  */
export const isValidSetVariableMonitoringRequestV201 = (data: unknown): data is SetVariableMonitoringRequestV201 => validateOCPPPayload(schemas.v201.setVariableMonitoringRequestV201, data);

/**
 * Validation function for SetVariablesResponseV201 using JSON included schema.
 *  @param { unknown } data JSON decoded payload to validate
 *  @returns { boolean } true if payload is valid against schema, false otherwise
 *  */
export const isValidSetVariablesResponseV201 = (data: unknown): data is SetVariablesResponseV201 => validateOCPPPayload(schemas.v201.setVariablesResponseV201, data);

/**
 * Validation function for SetVariablesRequestV201 using JSON included schema.
 *  @param { unknown } data JSON decoded payload to validate
 *  @returns { boolean } true if payload is valid against schema, false otherwise
 *  */
export const isValidSetVariablesRequestV201 = (data: unknown): data is SetVariablesRequestV201 => validateOCPPPayload(schemas.v201.setVariablesRequestV201, data);

/**
 * Validation function for SignCertificateResponseV201 using JSON included schema.
 *  @param { unknown } data JSON decoded payload to validate
 *  @returns { boolean } true if payload is valid against schema, false otherwise
 *  */
export const isValidSignCertificateResponseV201 = (data: unknown): data is SignCertificateResponseV201 => validateOCPPPayload(schemas.v201.signCertificateResponseV201, data);

/**
 * Validation function for SignCertificateRequestV201 using JSON included schema.
 *  @param { unknown } data JSON decoded payload to validate
 *  @returns { boolean } true if payload is valid against schema, false otherwise
 *  */
export const isValidSignCertificateRequestV201 = (data: unknown): data is SignCertificateRequestV201 => validateOCPPPayload(schemas.v201.signCertificateRequestV201, data);

/**
 * Validation function for RequestStartTransactionResponseV201 using JSON included schema.
 *  @param { unknown } data JSON decoded payload to validate
 *  @returns { boolean } true if payload is valid against schema, false otherwise
 *  */
export const isValidRequestStartTransactionResponseV201 = (data: unknown): data is RequestStartTransactionResponseV201 => validateOCPPPayload(schemas.v201.requestStartTransactionResponseV201, data);

/**
 * Validation function for RequestStartTransactionRequestV201 using JSON included schema.
 *  @param { unknown } data JSON decoded payload to validate
 *  @returns { boolean } true if payload is valid against schema, false otherwise
 *  */
export const isValidRequestStartTransactionRequestV201 = (data: unknown): data is RequestStartTransactionRequestV201 => validateOCPPPayload(schemas.v201.requestStartTransactionRequestV201, data);

/**
 * Validation function for StatusNotificationResponseV201 using JSON included schema.
 *  @param { unknown } data JSON decoded payload to validate
 *  @returns { boolean } true if payload is valid against schema, false otherwise
 *  */
export const isValidStatusNotificationResponseV201 = (data: unknown): data is StatusNotificationResponseV201 => validateOCPPPayload(schemas.v201.statusNotificationResponseV201, data);

/**
 * Validation function for StatusNotificationRequestV201 using JSON included schema.
 *  @param { unknown } data JSON decoded payload to validate
 *  @returns { boolean } true if payload is valid against schema, false otherwise
 *  */
export const isValidStatusNotificationRequestV201 = (data: unknown): data is StatusNotificationRequestV201 => validateOCPPPayload(schemas.v201.statusNotificationRequestV201, data);

/**
 * Validation function for RequestStopTransactionResponseV201 using JSON included schema.
 *  @param { unknown } data JSON decoded payload to validate
 *  @returns { boolean } true if payload is valid against schema, false otherwise
 *  */
export const isValidRequestStopTransactionResponseV201 = (data: unknown): data is RequestStopTransactionResponseV201 => validateOCPPPayload(schemas.v201.requestStopTransactionResponseV201, data);

/**
 * Validation function for RequestStopTransactionRequestV201 using JSON included schema.
 *  @param { unknown } data JSON decoded payload to validate
 *  @returns { boolean } true if payload is valid against schema, false otherwise
 *  */
export const isValidRequestStopTransactionRequestV201 = (data: unknown): data is RequestStopTransactionRequestV201 => validateOCPPPayload(schemas.v201.requestStopTransactionRequestV201, data);

/**
 * Validation function for TransactionEventResponseV201 using JSON included schema.
 *  @param { unknown } data JSON decoded payload to validate
 *  @returns { boolean } true if payload is valid against schema, false otherwise
 *  */
export const isValidTransactionEventResponseV201 = (data: unknown): data is TransactionEventResponseV201 => validateOCPPPayload(schemas.v201.transactionEventResponseV201, data);

/**
 * Validation function for TransactionEventRequestV201 using JSON included schema.
 *  @param { unknown } data JSON decoded payload to validate
 *  @returns { boolean } true if payload is valid against schema, false otherwise
 *  */
export const isValidTransactionEventRequestV201 = (data: unknown): data is TransactionEventRequestV201 => validateOCPPPayload(schemas.v201.transactionEventRequestV201, data);

/**
 * Validation function for TriggerMessageResponseV201 using JSON included schema.
 *  @param { unknown } data JSON decoded payload to validate
 *  @returns { boolean } true if payload is valid against schema, false otherwise
 *  */
export const isValidTriggerMessageResponseV201 = (data: unknown): data is TriggerMessageResponseV201 => validateOCPPPayload(schemas.v201.triggerMessageResponseV201, data);

/**
 * Validation function for TriggerMessageRequestV201 using JSON included schema.
 *  @param { unknown } data JSON decoded payload to validate
 *  @returns { boolean } true if payload is valid against schema, false otherwise
 *  */
export const isValidTriggerMessageRequestV201 = (data: unknown): data is TriggerMessageRequestV201 => validateOCPPPayload(schemas.v201.triggerMessageRequestV201, data);

/**
 * Validation function for UnlockConnectorResponseV201 using JSON included schema.
 *  @param { unknown } data JSON decoded payload to validate
 *  @returns { boolean } true if payload is valid against schema, false otherwise
 *  */
export const isValidUnlockConnectorResponseV201 = (data: unknown): data is UnlockConnectorResponseV201 => validateOCPPPayload(schemas.v201.unlockConnectorResponseV201, data);

/**
 * Validation function for UnlockConnectorRequestV201 using JSON included schema.
 *  @param { unknown } data JSON decoded payload to validate
 *  @returns { boolean } true if payload is valid against schema, false otherwise
 *  */
export const isValidUnlockConnectorRequestV201 = (data: unknown): data is UnlockConnectorRequestV201 => validateOCPPPayload(schemas.v201.unlockConnectorRequestV201, data);

/**
 * Validation function for UnpublishFirmwareResponseV201 using JSON included schema.
 *  @param { unknown } data JSON decoded payload to validate
 *  @returns { boolean } true if payload is valid against schema, false otherwise
 *  */
export const isValidUnpublishFirmwareResponseV201 = (data: unknown): data is UnpublishFirmwareResponseV201 => validateOCPPPayload(schemas.v201.unpublishFirmwareResponseV201, data);

/**
 * Validation function for UnpublishFirmwareRequestV201 using JSON included schema.
 *  @param { unknown } data JSON decoded payload to validate
 *  @returns { boolean } true if payload is valid against schema, false otherwise
 *  */
export const isValidUnpublishFirmwareRequestV201 = (data: unknown): data is UnpublishFirmwareRequestV201 => validateOCPPPayload(schemas.v201.unpublishFirmwareRequestV201, data);

/**
 * Validation function for UpdateFirmwareResponseV201 using JSON included schema.
 *  @param { unknown } data JSON decoded payload to validate
 *  @returns { boolean } true if payload is valid against schema, false otherwise
 *  */
export const isValidUpdateFirmwareResponseV201 = (data: unknown): data is UpdateFirmwareResponseV201 => validateOCPPPayload(schemas.v201.updateFirmwareResponseV201, data);

/**
 * Validation function for UpdateFirmwareRequestV201 using JSON included schema.
 *  @param { unknown } data JSON decoded payload to validate
 *  @returns { boolean } true if payload is valid against schema, false otherwise
 *  */
export const isValidUpdateFirmwareRequestV201 = (data: unknown): data is UpdateFirmwareRequestV201 => validateOCPPPayload(schemas.v201.updateFirmwareRequestV201, data);

export const actionValidatorV201: {
    [key: string]: (data: unknown) => boolean;
} = {
    "Authorize": isValidAuthorizeRequestV201,
    "BootNotification": isValidBootNotificationRequestV201,
    "CancelReservation": isValidCancelReservationRequestV201,
    "CertificateSigned": isValidCertificateSignedRequestV201,
    "ChangeAvailability": isValidChangeAvailabilityRequestV201,
    "ClearCache": isValidClearCacheRequestV201,
    "ClearChargingProfile": isValidClearChargingProfileRequestV201,
    "ClearDisplayMessage": isValidClearDisplayMessageRequestV201,
    "ClearVariableMonitoring": isValidClearVariableMonitoringRequestV201,
    "ClearedChargingLimit": isValidClearedChargingLimitRequestV201,
    "CostUpdated": isValidCostUpdatedRequestV201,
    "CustomerInformation": isValidCustomerInformationRequestV201,
    "DataTransfer": isValidDataTransferRequestV201,
    "DeleteCertificate": isValidDeleteCertificateRequestV201,
    "FirmwareStatusNotification": isValidFirmwareStatusNotificationRequestV201,
    "GetBaseReport": isValidGetBaseReportRequestV201,
    "GetCertificateStatus": isValidGetCertificateStatusRequestV201,
    "GetChargingProfiles": isValidGetChargingProfilesRequestV201,
    "GetCompositeSchedule": isValidGetCompositeScheduleRequestV201,
    "GetDisplayMessages": isValidGetDisplayMessagesRequestV201,
    "GetInstalledCertificateIds": isValidGetInstalledCertificateIdsRequestV201,
    "GetLocalListVersion": isValidGetLocalListVersionRequestV201,
    "GetLog": isValidGetLogRequestV201,
    "GetMonitoringReport": isValidGetMonitoringReportRequestV201,
    "GetReport": isValidGetReportRequestV201,
    "GetTransactionStatus": isValidGetTransactionStatusRequestV201,
    "GetVariables": isValidGetVariablesRequestV201,
    "Get15118EVCertificate": isValidGet15118EVCertificateRequestV201,
    "Heartbeat": isValidHeartbeatRequestV201,
    "InstallCertificate": isValidInstallCertificateRequestV201,
    "LogStatusNotification": isValidLogStatusNotificationRequestV201,
    "MeterValues": isValidMeterValuesRequestV201,
    "NotifyChargingLimit": isValidNotifyChargingLimitRequestV201,
    "NotifyCustomerInformation": isValidNotifyCustomerInformationRequestV201,
    "NotifyDisplayMessages": isValidNotifyDisplayMessagesRequestV201,
    "NotifyEVChargingNeeds": isValidNotifyEVChargingNeedsRequestV201,
    "NotifyEVChargingSchedule": isValidNotifyEVChargingScheduleRequestV201,
    "NotifyEvent": isValidNotifyEventRequestV201,
    "NotifyMonitoringReport": isValidNotifyMonitoringReportRequestV201,
    "NotifyReport": isValidNotifyReportRequestV201,
    "PublishFirmwareStatusNotification": isValidPublishFirmwareStatusNotificationRequestV201,
    "PublishFirmware": isValidPublishFirmwareRequestV201,
    "ReportChargingProfiles": isValidReportChargingProfilesRequestV201,
    "ReservationStatusUpdate": isValidReservationStatusUpdateRequestV201,
    "ReserveNow": isValidReserveNowRequestV201,
    "Reset": isValidResetRequestV201,
    "SecurityEventNotification": isValidSecurityEventNotificationRequestV201,
    "SendLocalList": isValidSendLocalListRequestV201,
    "SetChargingProfile": isValidSetChargingProfileRequestV201,
    "SetDisplayMessage": isValidSetDisplayMessageRequestV201,
    "SetMonitoringBase": isValidSetMonitoringBaseRequestV201,
    "SetMonitoringLevel": isValidSetMonitoringLevelRequestV201,
    "SetNetworkProfile": isValidSetNetworkProfileRequestV201,
    "SetVariableMonitoring": isValidSetVariableMonitoringRequestV201,
    "SetVariables": isValidSetVariablesRequestV201,
    "SignCertificate": isValidSignCertificateRequestV201,
    "RequestStartTransaction": isValidRequestStartTransactionRequestV201,
    "StatusNotification": isValidStatusNotificationRequestV201,
    "RequestStopTransaction": isValidRequestStopTransactionRequestV201,
    "TransactionEvent": isValidTransactionEventRequestV201,
    "TriggerMessage": isValidTriggerMessageRequestV201,
    "UnlockConnector": isValidUnlockConnectorRequestV201,
    "UnpublishFirmware": isValidUnpublishFirmwareRequestV201,
    "UpdateFirmware": isValidUpdateFirmwareRequestV201
};