import {
  isValidAuthorizeResponseV201,
  isValidAuthorizeRequestV201,
  isValidBootNotificationResponseV201,
  isValidBootNotificationRequestV201,
  isValidCancelReservationResponseV201,
  isValidCancelReservationRequestV201,
  isValidCertificateSignedResponseV201,
  isValidCertificateSignedRequestV201,
  isValidChangeAvailabilityResponseV201,
  isValidChangeAvailabilityRequestV201,
  isValidClearCacheResponseV201,
  isValidClearCacheRequestV201,
  isValidClearChargingProfileResponseV201,
  isValidClearChargingProfileRequestV201,
  isValidClearDisplayMessageResponseV201,
  isValidClearDisplayMessageRequestV201,
  isValidClearVariableMonitoringResponseV201,
  isValidClearVariableMonitoringRequestV201,
  isValidClearedChargingLimitResponseV201,
  isValidClearedChargingLimitRequestV201,
  isValidCostUpdatedResponseV201,
  isValidCostUpdatedRequestV201,
  isValidCustomerInformationResponseV201,
  isValidCustomerInformationRequestV201,
  isValidDataTransferResponseV201,
  isValidDataTransferRequestV201,
  isValidDeleteCertificateResponseV201,
  isValidDeleteCertificateRequestV201,
  isValidFirmwareStatusNotificationResponseV201,
  isValidFirmwareStatusNotificationRequestV201,
  isValidGetBaseReportResponseV201,
  isValidGetBaseReportRequestV201,
  isValidGetCertificateStatusResponseV201,
  isValidGetCertificateStatusRequestV201,
  isValidGetChargingProfilesResponseV201,
  isValidGetChargingProfilesRequestV201,
  isValidGetCompositeScheduleResponseV201,
  isValidGetCompositeScheduleRequestV201,
  isValidGetDisplayMessagesResponseV201,
  isValidGetDisplayMessagesRequestV201,
  isValidGetInstalledCertificateIdsResponseV201,
  isValidGetInstalledCertificateIdsRequestV201,
  isValidGetLocalListVersionResponseV201,
  isValidGetLocalListVersionRequestV201,
  isValidGetLogResponseV201,
  isValidGetLogRequestV201,
  isValidGetMonitoringReportResponseV201,
  isValidGetMonitoringReportRequestV201,
  isValidGetReportResponseV201,
  isValidGetReportRequestV201,
  isValidGetTransactionStatusResponseV201,
  isValidGetTransactionStatusRequestV201,
  isValidGetVariablesResponseV201,
  isValidGetVariablesRequestV201,
  isValidGet15118EVCertificateResponseV201,
  isValidGet15118EVCertificateRequestV201,
  isValidHeartbeatResponseV201,
  isValidHeartbeatRequestV201,
  isValidInstallCertificateResponseV201,
  isValidInstallCertificateRequestV201,
  isValidLogStatusNotificationResponseV201,
  isValidLogStatusNotificationRequestV201,
  isValidMeterValuesResponseV201,
  isValidMeterValuesRequestV201,
  isValidNotifyChargingLimitResponseV201,
  isValidNotifyChargingLimitRequestV201,
  isValidNotifyCustomerInformationResponseV201,
  isValidNotifyCustomerInformationRequestV201,
  isValidNotifyDisplayMessagesResponseV201,
  isValidNotifyDisplayMessagesRequestV201,
  isValidNotifyEVChargingNeedsResponseV201,
  isValidNotifyEVChargingNeedsRequestV201,
  isValidNotifyEVChargingScheduleResponseV201,
  isValidNotifyEVChargingScheduleRequestV201,
  isValidNotifyEventResponseV201,
  isValidNotifyEventRequestV201,
  isValidNotifyMonitoringReportResponseV201,
  isValidNotifyMonitoringReportRequestV201,
  isValidNotifyReportResponseV201,
  isValidNotifyReportRequestV201,
  isValidPublishFirmwareResponseV201,
  isValidPublishFirmwareStatusNotificationResponseV201,
  isValidPublishFirmwareStatusNotificationRequestV201,
  isValidPublishFirmwareRequestV201,
  isValidReportChargingProfilesResponseV201,
  isValidReportChargingProfilesRequestV201,
  isValidReservationStatusUpdateResponseV201,
  isValidReservationStatusUpdateRequestV201,
  isValidReserveNowResponseV201,
  isValidReserveNowRequestV201,
  isValidResetResponseV201,
  isValidResetRequestV201,
  isValidSecurityEventNotificationResponseV201,
  isValidSecurityEventNotificationRequestV201,
  isValidSendLocalListResponseV201,
  isValidSendLocalListRequestV201,
  isValidSetChargingProfileResponseV201,
  isValidSetChargingProfileRequestV201,
  isValidSetDisplayMessageResponseV201,
  isValidSetDisplayMessageRequestV201,
  isValidSetMonitoringBaseResponseV201,
  isValidSetMonitoringBaseRequestV201,
  isValidSetMonitoringLevelResponseV201,
  isValidSetMonitoringLevelRequestV201,
  isValidSetNetworkProfileResponseV201,
  isValidSetNetworkProfileRequestV201,
  isValidSetVariableMonitoringResponseV201,
  isValidSetVariableMonitoringRequestV201,
  isValidSetVariablesResponseV201,
  isValidSetVariablesRequestV201,
  isValidSignCertificateResponseV201,
  isValidSignCertificateRequestV201,
  isValidRequestStartTransactionResponseV201,
  isValidRequestStartTransactionRequestV201,
  isValidStatusNotificationResponseV201,
  isValidStatusNotificationRequestV201,
  isValidRequestStopTransactionResponseV201,
  isValidRequestStopTransactionRequestV201,
  isValidTransactionEventResponseV201,
  isValidTransactionEventRequestV201,
  isValidTriggerMessageResponseV201,
  isValidTriggerMessageRequestV201,
  isValidUnlockConnectorResponseV201,
  isValidUnlockConnectorRequestV201,
  isValidUnpublishFirmwareResponseV201,
  isValidUnpublishFirmwareRequestV201,
  isValidUpdateFirmwareResponseV201,
  isValidUpdateFirmwareRequestV201,
  isValidRpcCallResultV201,
  isValidRpcCallErrorV201,
  isValidRpcCallV201
} from "../src/validation/v201/";

interface TestCase {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  fun: (data: unknown) => data is any
  validData: unknown
  invalidData: unknown
}

const statusWithReason = {
  status: "Unknown",
  statusInfo: { reasonCode: "just because" }
};

const tests: TestCase[] = [
  {
    fun: isValidAuthorizeResponseV201,
    validData: { idTokenInfo: { status: "NoCredit" } },
    invalidData: { status: "Accepted" }
  },
  {
    fun: isValidAuthorizeRequestV201,
    validData: { idToken: { idToken: "ABC", type: "Central" } },
    invalidData: { idToken: "ABC" }
  },
  {
    fun: isValidBootNotificationResponseV201,
    validData: {
      currentTime: "2021-01-01T00:00:00Z",
      interval: 300,
      status: "Accepted"
    },
    invalidData: {}
  },
  {
    fun: isValidBootNotificationRequestV201,
    validData: {
      chargingStation: { vendorName: "ACME", model: "model1" },
      reason: "RemoteReset"
    },
    invalidData: {
      chargingStation: { vendorName: "ACME", model: "model1" },
      reason: "JustBecause"
    }
  },
  {
    fun: isValidCancelReservationResponseV201,
    validData: {
      status: "Rejected",
      statusInfo: { reasonCode: "just because" }
    },
    invalidData: { status: "Blocked" }
  },
  {
    fun: isValidCancelReservationRequestV201,
    validData: { reservationId: 1234 },
    invalidData: { reservationId: "foo" }
  },
  {
    fun: isValidCertificateSignedResponseV201,
    validData: {
      status: "Rejected",
      statusInfo: { reasonCode: "just because" }
    },
    invalidData: { statusInfo: { reasonCode: "FOO" } }
  },
  {
    fun: isValidCertificateSignedRequestV201,
    validData: {
      certificateChain: "---",
      certificateType: "ChargingStationCertificate"
    },
    invalidData: {
      certificateChain: "---",
      certificateType: "B2BV2GCertificate"
    }
  },
  {
    fun: isValidChangeAvailabilityResponseV201,
    validData: {
      status: "Scheduled"
    },
    invalidData: { status: "Foo" }
  },
  {
    fun: isValidChangeAvailabilityRequestV201,
    validData: { operationalStatus: "Inoperative" },
    invalidData: { operationalStatus: "Available" }
  },
  {
    fun: isValidClearCacheResponseV201,
    validData: {
      status: "Accepted"
    },
    invalidData: { status: "Scheduled" }
  },
  {
    fun: isValidClearCacheRequestV201,
    validData: {},
    invalidData: { idTag: "foo" }
  },
  {
    fun: isValidClearChargingProfileResponseV201,
    validData: statusWithReason,
    invalidData: {
      status: "Rejected"
    }
  },
  {
    fun: isValidClearChargingProfileRequestV201,
    validData: {
      chargingProfileId: 1234,
      chargingProfileCriteria: {
        chargingProfilePurpose: "TxProfile"
      }
    },
    invalidData: { idTag: "foo" }
  },
  {
    fun: isValidClearDisplayMessageResponseV201,
    validData: statusWithReason,
    invalidData: {}
  },
  {
    fun: isValidClearDisplayMessageRequestV201,
    validData: { id: 2 },
    invalidData: { id: "2" }
  },
  {
    fun: isValidClearVariableMonitoringResponseV201,
    validData: { clearMonitoringResult: [{ status: "Accepted", id: 1 }] },
    invalidData: statusWithReason
  },
  {
    fun: isValidClearVariableMonitoringRequestV201,
    validData: { id: [1] },
    invalidData: { id: 1 }
  },
  {
    fun: isValidClearedChargingLimitResponseV201,
    validData: { customData: { vendorId: "1", foo: "bar" } },
    invalidData: { status: "Accepted" }
  },
  {
    fun: isValidClearedChargingLimitRequestV201,
    validData: { chargingLimitSource: "EMS" },
    invalidData: {}
  },
  {
    fun: isValidCostUpdatedResponseV201,
    validData: { customData: { vendorId: "1", foo: "bar" } },
    invalidData: { status: "Rejected" }
  },
  {
    fun: isValidCostUpdatedRequestV201,
    validData: {
      totalCost: 23,
      transactionId: "123"
    },
    invalidData: { transactionId: "123" }
  },
  {
    fun: isValidCustomerInformationResponseV201,
    validData: { ...statusWithReason, status: "Invalid" },
    invalidData: { status: "Unknown" }
  },
  {
    fun: isValidCustomerInformationRequestV201,
    validData: {
      requestId: 123,
      report: false,
      clear: false,
      customerIdentifier: "foo"
    },
    invalidData: {}
  },
  {
    fun: isValidDataTransferResponseV201,
    validData: { ...statusWithReason, status: "Accepted" },
    invalidData: {}
  },
  {
    fun: isValidDataTransferRequestV201,
    validData: { vendorId: "abc" },
    invalidData: {}
  },
  {
    fun: isValidDeleteCertificateResponseV201,
    validData: { ...statusWithReason, status: "Accepted" },
    invalidData: {}
  },
  {
    fun: isValidDeleteCertificateRequestV201,
    validData: {
      certificateHashData: {
        hashAlgorithm: "SHA256",
        issuerNameHash: "123",
        issuerKeyHash: "456",
        serialNumber: "789"
      }
    },
    invalidData: {}
  },
  {
    fun: isValidFirmwareStatusNotificationResponseV201,
    validData: {},
    invalidData: { status: "Unknown" }
  },
  {
    fun: isValidFirmwareStatusNotificationRequestV201,
    validData: {
      status: "Downloading"
    },
    invalidData: {
      status: "Unknown"
    }
  },
  {
    fun: isValidGetBaseReportResponseV201,
    validData: { ...statusWithReason, status: "NotSupported" },
    invalidData: {}
  },
  {
    fun: isValidGetBaseReportRequestV201,
    validData: {
      requestId: 123,
      reportBase: "ConfigurationInventory"
    },
    invalidData: { requestId: 123 }
  },
  {
    fun: isValidGetCertificateStatusResponseV201,
    validData: { ...statusWithReason, status: "Failed" },
    invalidData: statusWithReason
  },
  {
    fun: isValidGetCertificateStatusRequestV201,
    validData: {
      ocspRequestData: {
        hashAlgorithm: "SHA256",
        issuerNameHash: "---",
        issuerKeyHash: "---",
        serialNumber: "123",
        responderURL: ""
      }
    },
    invalidData: {}
  },
  {
    fun: isValidGetChargingProfilesResponseV201,
    validData: { status: "NoProfiles" },
    invalidData: { status: "Rejected" }
  },
  {
    fun: isValidGetChargingProfilesRequestV201,
    validData: {
      requestId: 123,
      evseId: 1,
      chargingProfile: {
        chargingProfilePurpose: "TxProfile",
        chargingLimitSource: ["EMS"]
      }
    },
    invalidData: { requestId: 123 }
  },
  {
    fun: isValidGetCompositeScheduleResponseV201,
    validData: {
      status: "Accepted",
      schedule: {
        duration: 60,
        evseId: 1,
        chargingSchedulePeriod: [
          {
            startPeriod: 0,
            limit: 100
          }
        ],
        scheduleStart: new Date().toISOString(),
        chargingRateUnit: "W"
      }
    },
    invalidData: statusWithReason
  },
  {
    fun: isValidGetCompositeScheduleRequestV201,
    validData: { duration: 50, evseId: 2, chargingRateUnit: "W" },
    invalidData: { charginRateUnit: "A", evseId: 1 }
  },
  {
    fun: isValidGetDisplayMessagesResponseV201,
    validData: statusWithReason,
    invalidData: {}
  },
  {
    fun: isValidGetDisplayMessagesRequestV201,
    validData: {
      id: [1],
      requestId: 123,
      priority: "AlwaysFront",
      state: "Charging"
    },
    invalidData: {}
  },
  {
    fun: isValidGetInstalledCertificateIdsResponseV201,
    validData: { ...statusWithReason, status: "NotFound" },
    invalidData: { status: "Rejected" }
  },
  {
    fun: isValidGetInstalledCertificateIdsRequestV201,
    validData: { certificateType: ["V2GCertificateChain"] },
    invalidData: { certificateType: "CA" }
  },
  {
    fun: isValidGetLocalListVersionResponseV201,
    validData: { versionNumber: 2 },
    invalidData: {}
  },
  {
    fun: isValidGetLocalListVersionRequestV201,
    validData: {},
    invalidData: { customData: {} }
  },
  {
    fun: isValidGetLogResponseV201,
    validData: { ...statusWithReason, status: "Rejected" },
    invalidData: {}
  },
  {
    fun: isValidGetLogRequestV201,
    validData: {
      log: { remoteLocation: "http://example.com" },
      logType: "SecurityLog",
      requestId: 213,
      retries: 2,
      retryInterval: 300
    },
    invalidData: {
      logType: "SecurityLog",
      requestId: 213,
      retries: 2,
      retryInterval: 300
    }
  },
  {
    fun: isValidGetMonitoringReportResponseV201,
    validData: { ...statusWithReason, status: "EmptyResultSet" },
    invalidData: {}
  },
  {
    fun: isValidGetMonitoringReportRequestV201,
    validData: {
      requestId: 123,
      monitoringCriteria: ["DeltaMonitoring"],
      componentVariable: [{ component: { name: "foo" } }]
    },
    invalidData: { requestID: 123 }
  },
  {
    fun: isValidGetReportResponseV201,
    validData: { ...statusWithReason, status: "EmptyResultSet" },
    invalidData: statusWithReason
  },
  {
    fun: isValidGetReportRequestV201,
    validData: {
      requestId: 123,
      componentVariable: [{ component: { name: "foo" } }]
    },
    invalidData: {}
  },
  {
    fun: isValidGetTransactionStatusResponseV201,
    validData: {
      messagesInQueue: true,
      ongoingIndicator: false
    },
    invalidData: { onGoingIndicator: true }
  },
  {
    fun: isValidGetTransactionStatusRequestV201,
    validData: { transactionId: "123" },
    invalidData: { transactionId: 123 }
  },
  {
    fun: isValidGetVariablesResponseV201,
    validData: {
      getVariableResult: [
        {
          attributeStatus: "Accepted",
          attributeType: "MinSet",
          component: { name: "foo" },
          variable: { name: "bar" },
          attributeValue: "baz"
        }
      ]
    },
    invalidData: {}
  },
  {
    fun: isValidGetVariablesRequestV201,
    validData: {
      getVariableData: [
        { component: { name: "foo" }, variable: { name: "bar" } }
      ]
    },
    invalidData: { getVariableData: [] }
  },
  {
    fun: isValidGet15118EVCertificateResponseV201,
    validData: {
      status: "Accepted",
      exiResponse: "base64encodedstring"
    },
    invalidData: { status: "Rejected" }
  },
  {
    fun: isValidGet15118EVCertificateRequestV201,
    validData: {
      iso15118SchemaVersion: "1.0.0",
      action: "Install",
      exiRequest: "base64encodedstring"
    },
    invalidData: {
      is15118SchemaVersion: "1.0.0",
      action: "Remove"
    }
  },
  {
    fun: isValidHeartbeatResponseV201,
    validData: {
      currentTime: new Date().toISOString()
    },
    invalidData: {}
  },
  {
    fun: isValidHeartbeatRequestV201,
    validData: {},
    invalidData: { customData: {} }
  },
  {
    fun: isValidInstallCertificateResponseV201,
    validData: { ...statusWithReason, status: "Accepted" },
    invalidData: statusWithReason
  },
  {
    fun: isValidInstallCertificateRequestV201,
    validData: {
      certificate: "PEM encoded certificate",
      certificateType: "ManufacturerRootCertificate"
    },
    invalidData: { certificate: "PEM encoded certificate" }
  },
  {
    fun: isValidLogStatusNotificationResponseV201,
    validData: {},
    invalidData: { customData: {} }
  },
  {
    fun: isValidLogStatusNotificationRequestV201,
    validData: {
      requestId: 123,
      status: "Idle"
    },
    invalidData: { status: "Unknown" }
  },
  {
    fun: isValidMeterValuesResponseV201,
    validData: {},
    invalidData: { customData: {} }
  },
  {
    fun: isValidMeterValuesRequestV201,
    validData: {
      evseId: 1,
      meterValue: [
        {
          timestamp: "2021-01-01T00:00:00Z",
          sampledValue: [
            {
              value: 100,
              measurand: "Energy.Active.Import.Register",
              context: "Sample.Periodic",
              location: "Outlet",
              unitOfMeasure: { unit: "Wh" }
            }
          ]
        }
      ]
    },
    invalidData: {
      evseId: 1,
      meterValue: []
    }
  },
  {
    fun: isValidNotifyChargingLimitResponseV201,
    validData: {},
    invalidData: { customData: {} }
  },
  {
    fun: isValidNotifyChargingLimitRequestV201,
    validData: {
      evseId: 1,
      chargingLimit: { chargingLimitSource: "EMS", isGridCritical: false },
      chargingSchedule: [
        {
          id: 1,
          duration: 60,
          chargingRateUnit: "W",
          chargingSchedulePeriod: [
            {
              startPeriod: 0,
              limit: 100
            }
          ]
        }
      ]
    },
    invalidData: {}
  },
  {
    fun: isValidNotifyCustomerInformationResponseV201,
    validData: {},
    invalidData: { customData: {} }
  },
  {
    fun: isValidNotifyCustomerInformationRequestV201,
    validData: {
      data: "foo",
      seqNo: 0,
      generatedAt: new Date().toISOString(),
      requestId: 123
    },
    invalidData: { seqNo: 1, requestId: 1 }
  },
  {
    fun: isValidNotifyDisplayMessagesResponseV201,
    validData: {},
    invalidData: { customData: {} }
  },
  {
    fun: isValidNotifyDisplayMessagesRequestV201,
    validData: {
      messageInfo: [
        {
          id: 1,
          message: { content: "Hi there!", format: "ASCII" },
          priority: "AlwaysFront"
        }
      ],
      requestId: 1
    },
    invalidData: {
      messageInfo: []
    }
  },
  {
    fun: isValidNotifyEVChargingNeedsResponseV201,
    validData: { ...statusWithReason, status: "Processing" },
    invalidData: statusWithReason
  },
  {
    fun: isValidNotifyEVChargingNeedsRequestV201,
    validData: {
      evseId: 1,
      chargingNeeds: {
        requestedEnergyTransfer: "DC",
        dcChargingParameters: {
          evMaxCurrent: 50,
          evMaxVoltage: 400
        }
      }
    },
    invalidData: {}
  },
  {
    fun: isValidNotifyEVChargingScheduleResponseV201,
    validData: { status: "Accepted" },
    invalidData: {}
  },
  {
    fun: isValidNotifyEVChargingScheduleRequestV201,
    validData: {
      evseId: 1,
      timeBase: new Date().toISOString(),
      chargingSchedule: {
        id: 1,
        startSchedule: new Date().toISOString(),
        chargingRateUnit: "W",
        chargingSchedulePeriod: [{ startPeriod: 0, limit: 100 }],
        salesTariff: {
          id: 1,
          salesTariffEntry: [
            {
              relativeTimeInterval: { start: 60 },
              consumptionCost: [
                {
                  startValue: 2,
                  cost: [{ amount: 25, costKind: "CarbonDioxideEmission" }]
                }
              ]
            }
          ]
        }
      }
    },
    invalidData: {}
  },
  {
    fun: isValidNotifyEventResponseV201,
    validData: {},
    invalidData: { customData: {} }
  },
  {
    fun: isValidNotifyEventRequestV201,
    validData: {
      generatedAt: new Date().toISOString(),
      seqNo: 1,
      eventData: [
        {
          eventId: 1,
          timestamp: new Date().toISOString(),
          trigger: "Periodic",
          actualValue: "123",
          component: { name: "foo" },
          variable: { name: "bar" },
          eventNotificationType: "HardWiredNotification"
        }
      ]
    },
    invalidData: {}
  },
  {
    fun: isValidNotifyMonitoringReportResponseV201,
    validData: {},
    invalidData: { customData: {} }
  },
  {
    fun: isValidNotifyMonitoringReportRequestV201,
    validData: {
      requestId: 1,
      seqNo: 1,
      generatedAt: new Date().toISOString(),
      monitor: [
        {
          component: { name: "foo" },
          variable: { name: "bar" },
          variableMonitoring: [
            {
              id: 1,
              type: "Delta",
              severity: 6,
              transaction: false,
              value: 23
            }
          ]
        }
      ]
    },
    invalidData: { monitor: [] }
  },
  {
    fun: isValidNotifyReportResponseV201,
    validData: {},
    invalidData: { customData: {} }
  },
  {
    fun: isValidNotifyReportRequestV201,
    validData: {
      requestId: 1,
      generatedAt: new Date().toISOString(),
      seqNo: 1,
      reportData: [
        {
          component: { name: "foo" },
          variable: { name: "bar" },
          variableAttribute: [
            {
              type: "MinSet",
              value: "baz"
            }
          ]
        }
      ]
    },
    invalidData: {}
  },
  {
    fun: isValidPublishFirmwareResponseV201,
    validData: {
      status: "Accepted"
    },
    invalidData: {}
  },
  {
    fun: isValidPublishFirmwareStatusNotificationResponseV201,
    validData: {},
    invalidData: { customData: {} }
  },
  {
    fun: isValidPublishFirmwareStatusNotificationRequestV201,
    validData: {
      status: "Downloading",
      location: ["http://example.com"],
      requestId: 1
    },
    invalidData: {}
  },
  {
    fun: isValidPublishFirmwareRequestV201,
    validData: {
      location: "http://example.com",
      retries: 2,
      retryInterval: 300,
      checksum: "0x00",
      requestId: 1
    },
    invalidData: {}
  },
  {
    fun: isValidReportChargingProfilesResponseV201,
    validData: {},
    invalidData: { customData: {} }
  },
  {
    fun: isValidReportChargingProfilesRequestV201,
    validData: {
      requestId: 1,
      chargingLimitSource: "EMS",
      chargingProfile: [
        {
          id: 1,
          stackLevel: 1,
          chargingProfilePurpose: "TxProfile",
          chargingProfileKind: "Recurring",
          chargingSchedule: [
            {
              id: 2,
              chargingRateUnit: "A",
              chargingSchedulePeriod: [{ startPeriod: 1, limit: 20 }]
            }
          ]
        }
      ],
      evseId: 1
    },
    invalidData: {}
  },
  {
    fun: isValidReservationStatusUpdateResponseV201,
    validData: {},
    invalidData: { customData: {} }
  },
  {
    fun: isValidReservationStatusUpdateRequestV201,
    validData: { reservationId: 12, reservationUpdateStatus: "Expired" },
    invalidData: {}
  },
  {
    fun: isValidReserveNowResponseV201,
    validData: {
      status: "Faulted",
      statusInfo: {
        reasonCode: "foo",
        additionalInfo: "bar"
      }
    },
    invalidData: {}
  },
  {
    fun: isValidReserveNowRequestV201,
    validData: {
      id: 1,
      expiryDateTime: new Date().toISOString(),
      idToken: { idToken: "abc123", type: "Central" },
      connectorType: "sType2"
    },
    invalidData: { idToken: "abc123" }
  },
  {
    fun: isValidResetResponseV201,
    validData: {
      status: "Scheduled"
    },
    invalidData: {}
  },
  {
    fun: isValidResetRequestV201,
    validData: {
      type: "Immediate"
    },
    invalidData: { type: "Whenever" }
  },
  {
    fun: isValidSecurityEventNotificationResponseV201,
    validData: {},
    invalidData: { type: "event" }
  },
  {
    fun: isValidSecurityEventNotificationRequestV201,
    validData: { type: "event", timestamp: new Date().toISOString() },
    invalidData: { timestamp: new Date().toISOString() }
  },
  {
    fun: isValidSendLocalListResponseV201,
    validData: {
      status: "VersionMismatch",
      statusInfo: { reasonCode: "foo" }
    },
    invalidData: { status: "Rejected" }
  },
  {
    fun: isValidSendLocalListRequestV201,
    validData: {
      versionNumber: 1,
      localAuthorizationList: [
        { idToken: { idToken: "abc", type: "Central" } }
      ],
      updateType: "Full"
    },
    invalidData: {
      versionNumber: 2
    }
  },
  {
    fun: isValidSetChargingProfileResponseV201,
    validData: { status: "Accepted" },
    invalidData: {}
  },
  {
    fun: isValidSetChargingProfileRequestV201,
    validData: {
      evseId: 1,
      chargingProfile: {
        id: 1,
        stackLevel: 1,
        chargingProfilePurpose: "TxProfile",
        chargingProfileKind: "Recurring",
        chargingSchedule: [
          {
            id: 2,
            chargingRateUnit: "A",
            chargingSchedulePeriod: [{ startPeriod: 1, limit: 20 }]
          }
        ]
      }
    },
    invalidData: {}
  },
  {
    fun: isValidSetDisplayMessageResponseV201,
    validData: { ...statusWithReason, status: "NotSupportedMessageFormat" },
    invalidData: statusWithReason
  },
  {
    fun: isValidSetDisplayMessageRequestV201,
    validData: {
      message: {
        id: 1,
        priority: "AlwaysFront",
        message: {
          content: "Hello World",
          format: "ASCII"
        }
      }
    },
    invalidData: { message: "hello" }
  },
  {
    fun: isValidSetMonitoringBaseResponseV201,
    validData: { ...statusWithReason, status: "NotSupported" },
    invalidData: statusWithReason
  },
  {
    fun: isValidSetMonitoringBaseRequestV201,
    validData: {
      monitoringBase: "FactoryDefault"
    },
    invalidData: {}
  },
  {
    fun: isValidSetMonitoringLevelResponseV201,
    validData: { status: "Accepted" },
    invalidData: {}
  },
  {
    fun: isValidSetMonitoringLevelRequestV201,
    validData: { severity: 7 },
    invalidData: {}
  },
  {
    fun: isValidSetNetworkProfileResponseV201,
    validData: { status: "Failed" },
    invalidData: {}
  },
  {
    fun: isValidSetNetworkProfileRequestV201,
    validData: {
      configurationSlot: 1,
      connectionData: {
        ocppVersion: "OCPP20",
        ocppTransport: "JSON",
        securityProfile: 2,
        messageTimeout: 5,
        ocppInterface: "Wired0",
        ocppCsmsUrl: "wss://example.com"
      }
    },
    invalidData: {}
  },
  {
    fun: isValidSetVariableMonitoringResponseV201,
    validData: {
      setMonitoringResult: [
        {
          id: 1,
          status: "Accepted",
          type: "Delta",
          component: { name: "foo" },
          variable: { name: "bar" },
          severity: 6
        }
      ]
    },
    invalidData: {}
  },
  {
    fun: isValidSetVariableMonitoringRequestV201,
    validData: {
      setMonitoringData: [
        {
          id: 2,
          transaction: false,
          value: 3,
          type: "Delta",
          severity: 6,
          component: { name: "foo" },
          variable: { name: "bar" }
        }
      ]
    },
    invalidData: {}
  },
  {
    fun: isValidSetVariablesResponseV201,
    validData: {
      setVariableResult: [
        {
          attributeStatus: "Accepted",
          attributeType: "MinSet",
          component: { name: "foo" },
          variable: { name: "bar" }
        }
      ]
    },
    invalidData: {}
  },
  {
    fun: isValidSetVariablesRequestV201,
    validData: {
      setVariableData: [
        {
          attributeType: "MinSet",
          component: { name: "foo" },
          variable: { name: "bar" },
          attributeValue: "baz"
        }
      ]
    },
    invalidData: {}
  },
  {
    fun: isValidSignCertificateResponseV201,
    validData: { ...statusWithReason, status: "Rejected" },
    invalidData: {}
  },
  {
    fun: isValidSignCertificateRequestV201,
    validData: {
      csr: "---",
      certificateType: "ChargingStationCertificate"
    },
    invalidData: {}
  },
  {
    fun: isValidRequestStartTransactionResponseV201,
    validData: { ...statusWithReason, status: "Rejected" },
    invalidData: statusWithReason
  },
  {
    fun: isValidRequestStartTransactionRequestV201,
    validData: {
      evseId: 1,
      idToken: { idToken: "abc", type: "Central" },
      remoteStartId: 1,
      chargingProfile: {
        id: 2,
        stackLevel: 0,
        chargingProfilePurpose: "TxProfile",
        chargingProfileKind: "Recurring",
        chargingSchedule: [
          {
            id: 3,
            chargingRateUnit: "W",
            chargingSchedulePeriod: [{ startPeriod: 0, limit: 100 }]
          }
        ]
      }
    },
    invalidData: { idTag: "abc" }
  },
  {
    fun: isValidStatusNotificationResponseV201,
    validData: {},
    invalidData: { customData: {} }
  },
  {
    fun: isValidStatusNotificationRequestV201,
    validData: {
      timestamp: new Date().toISOString(),
      connectorStatus: "Available",
      evseId: 2,
      connectorId: 1
    },
    invalidData: {}
  },
  {
    fun: isValidRequestStopTransactionResponseV201,
    validData: { ...statusWithReason, status: "Rejected" },
    invalidData: statusWithReason
  },
  {
    fun: isValidRequestStopTransactionRequestV201,
    validData: { transactionId: "123" },
    invalidData: {}
  },
  {
    fun: isValidTransactionEventResponseV201,
    validData: {
      totalCost: 234,
      chargingPriority: 3
    },
    invalidData: { status: "foo" }
  },
  {
    fun: isValidTransactionEventRequestV201,
    validData: {
      eventType: "Ended",
      meterValue: [
        {
          sampledValue: [{ value: 23, measurand: "Voltage" }],
          timestamp: new Date().toISOString()
        }
      ],
      timestamp: new Date().toISOString(),
      triggerReason: "Authorized",
      seqNo: 1,
      transactionInfo: {
        transactionId: "123"
      }
    },
    invalidData: { eventType: "Ended" }
  },
  {
    fun: isValidTriggerMessageResponseV201,
    validData: { status: "Accepted" },
    invalidData: {}
  },
  {
    fun: isValidTriggerMessageRequestV201,
    validData: {
      evse: { id: 1, connectorId: 2 },
      requestedMessage: "LogStatusNotification"
    },
    invalidData: {}
  },
  {
    fun: isValidUnlockConnectorResponseV201,
    validData: { status: "UnlockFailed" },
    invalidData: {}
  },
  {
    fun: isValidUnlockConnectorRequestV201,
    validData: { evseId: 1, connectorId: 2 },
    invalidData: {}
  },
  {
    fun: isValidUnpublishFirmwareResponseV201,
    validData: { status: "NoFirmware" },
    invalidData: {}
  },
  {
    fun: isValidUnpublishFirmwareRequestV201,
    validData: { checksum: "0x25" },
    invalidData: {}
  },
  {
    fun: isValidUpdateFirmwareResponseV201,
    validData: { status: "InvalidCertificate" },
    invalidData: statusWithReason
  },
  {
    fun: isValidUpdateFirmwareRequestV201,
    validData: {
      requestId: 23,
      firmware: {
        location: "http://example.com",
        retrieveDateTime: new Date().toISOString()
      },
      retries: 3,
      retryInterval: 30
    },
    invalidData: {}
  },
  {
    fun: isValidRpcCallV201,
    validData: [2, "abc123", "BootNotification", { chargePointVendor: "Denso", chargePointModel: "X-CHARGER" }],
    invalidData: [3, "abc13", { chargePointVendor: "Denso", chargePointModel: "X-CHARGER" }]
  },
  {
    fun: isValidRpcCallErrorV201,
    validData: [4, "abc123", "NotImplemented", "Code", {}],
    invalidData: [4, "abc123", "custom", {}]
  },
  {
    fun: isValidRpcCallResultV201,
    validData: [3, "abc123", {}],
    invalidData: [4, "abc13", "notImplemented", {}]

  }
];

describe("Validation for OCPP v2.0.1 payloads", () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  test.each(tests)("$fun", ({ fun, validData, invalidData }) => {
    expect(fun(validData)).toBe(true);
    expect(fun(invalidData)).toBe(false);
  });
});
