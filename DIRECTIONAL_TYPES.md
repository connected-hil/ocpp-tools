# Directional Types in OCPP Tools

## Overview

OCPP messages have a clear directionality - they are either initiated by the **Charge Point (CP)** or the **Central System Management System (CSMS)**. This package now provides type-safe directional types that make the message flow explicit in your code.

## Available Types

### OCPP 1.6

#### Action Types
```typescript
// Actions initiated by Charge Point
type CPActionV16 = 
  | "Authorize"
  | "BootNotification"
  | "DiagnosticsStatusNotification"
  | "FirmwareStatusNotification"
  | "Heartbeat"
  | "LogStatusNotification"
  | "MeterValues"
  | "SecurityEventNotification"
  | "SignCertificate"
  | "SignedFirmwareStatusNotification"
  | "StartTransaction"
  | "StatusNotification"
  | "StopTransaction";

// Actions initiated by CSMS (Central System)
type CSMSActionV16 = 
  | "CancelReservation"
  | "CertificateSigned"
  | "ChangeAvailability"
  | "ChangeConfiguration"
  | "ClearCache"
  | "ClearChargingProfile"
  | "DataTransfer"
  | "DeleteCertificate"
  | "ExtendedTriggerMessage"
  | "GetCompositeSchedule"
  | "GetConfiguration"
  | "GetDiagnostics"
  | "GetInstalledCertificateIds"
  | "GetLocalListVersion"
  | "GetLog"
  | "InstallCertificate"
  | "RemoteStartTransaction"
  | "RemoteStopTransaction"
  | "ReserveNow"
  | "Reset"
  | "SendLocalList"
  | "SetChargingProfile"
  | "SignedUpdateFirmware"
  | "TriggerMessage"
  | "UnlockConnector"
  | "UpdateFirmware";

// All actions (backward compatible)
type ActionV16 = CPActionV16 | CSMSActionV16;
```

#### Request Types
```typescript
// Requests sent from Charge Point to CSMS
type CPRequestTypeV16 = 
  | AuthorizeRequestV16
  | BootNotificationRequestV16
  | HeartbeatRequestV16
  | StartTransactionRequestV16
  | StopTransactionRequestV16
  | MeterValuesRequestV16
  | StatusNotificationRequestV16
  // ... etc

// Requests sent from CSMS to Charge Point
type CSMSRequestTypeV16 = 
  | CancelReservationRequestV16
  | ChangeAvailabilityRequestV16
  | ChangeConfigurationRequestV16
  | RemoteStartTransactionRequestV16
  | RemoteStopTransactionRequestV16
  | ResetRequestV16
  | UnlockConnectorRequestV16
  // ... etc

// All request types (backward compatible)
type OCPPRequestTypeV16 = CPRequestTypeV16 | CSMSRequestTypeV16;
```

#### Response Types
```typescript
// Responses sent from CSMS to CP (in response to CP requests)
type CPResponseTypeV16 = 
  | AuthorizeResponseV16
  | BootNotificationResponseV16
  | HeartbeatResponseV16
  | StartTransactionResponseV16
  | StopTransactionResponseV16
  // ... etc

// Responses sent from CP to CSMS (in response to CSMS requests)
type CSMSResponseTypeV16 = 
  | CancelReservationResponseV16
  | ChangeAvailabilityResponseV16
  | ChangeConfigurationResponseV16
  | RemoteStartTransactionResponseV16
  | RemoteStopTransactionResponseV16
  | ResetResponseV16
  // ... etc

// All response types (backward compatible)
type OCPPResponseTypeV16 = CPResponseTypeV16 | CSMSResponseTypeV16;
```

### OCPP 2.0.1

The same structure applies to OCPP 2.0.1:
- `CPActionV201` / `CSMSActionV201` / `ActionV201`
- `CPRequestTypeV201` / `CSMSRequestTypeV201` / `OCPPRequestTypeV201`
- `CPResponseTypeV201` / `CSMSResponseTypeV201` / `OCPPResponseTypeV201`

## Usage Examples

### Charge Point Implementation

```typescript
import { 
  CPRequestTypeV16, 
  CPResponseTypeV16,
  CPActionV16 
} from '@cshil/ocpp-tools';

class ChargePoint {
  async sendRequest(
    action: CPActionV16, 
    request: CPRequestTypeV16
  ): Promise<CPResponseTypeV16> {
    // Send request to CSMS
    // TypeScript ensures you only use CP-initiated actions
  }

  async handleRequest(
    action: CSMSActionV16,
    request: CSMSRequestTypeV16
  ): Promise<CSMSResponseTypeV16> {
    // Handle request from CSMS
    // TypeScript ensures you only handle CSMS-initiated actions
  }
}

// Example: Send Authorize request
const authorizeRequest: CPRequestTypeV16 = {
  idTag: "USER123"
};
const response = await cp.sendRequest("Authorize", authorizeRequest);
```

### CSMS Implementation

```typescript
import { 
  CSMSRequestTypeV16, 
  CSMSResponseTypeV16,
  CSMSActionV16 
} from '@cshil/ocpp-tools';

class CentralSystem {
  async sendRequest(
    action: CSMSActionV16, 
    request: CSMSRequestTypeV16
  ): Promise<CSMSResponseTypeV16> {
    // Send request to Charge Point
    // TypeScript ensures you only use CSMS-initiated actions
  }

  async handleRequest(
    action: CPActionV16,
    request: CPRequestTypeV16
  ): Promise<CPResponseTypeV16> {
    // Handle request from Charge Point
    // TypeScript ensures you only handle CP-initiated actions
  }
}

// Example: Send RemoteStartTransaction
const remoteStartRequest: CSMSRequestTypeV16 = {
  idTag: "ADMIN001",
  connectorId: 1
};
const response = await csms.sendRequest("RemoteStartTransaction", remoteStartRequest);
```

### Type Guards

You can create type guards to narrow types at runtime:

```typescript
function isCPAction(action: ActionV16): action is CPActionV16 {
  const cpActions: CPActionV16[] = [
    "Authorize",
    "BootNotification",
    "Heartbeat",
    "StartTransaction",
    "StopTransaction",
    // ... etc
  ];
  return cpActions.includes(action as CPActionV16);
}

// Usage
const action: ActionV16 = getActionFromMessage();
if (isCPAction(action)) {
  // action is now typed as CPActionV16
  handleCPMessage(action);
} else {
  // action is now typed as CSMSActionV16
  handleCSMSMessage(action);
}
```

## Backward Compatibility

All existing types are still available and work exactly as before:

```typescript
// Old code still works
import { ActionV16, OCPPRequestTypeV16, OCPPResponseTypeV16 } from '@cshil/ocpp-tools';

const action: ActionV16 = "Authorize";
const request: OCPPRequestTypeV16 = { idTag: "TEST" };
```

The new directional types are **supersets** of the existing types, so you can gradually adopt them in your codebase.

## Implementation Details

The directional types are automatically generated from the message direction configuration in `scripts/message-direction.ts`. The configuration is based on the official OCPP specifications:

- **OCPP 1.6**: Based on OCPP 1.6 Edition 2
- **OCPP 2.0.1**: Based on OCPP 2.0.1 specification

If you need to customize the direction of certain messages (e.g., for custom implementations), you can modify the configuration file and regenerate the types.

## Testing

The package includes comprehensive tests for directional types:
- `tests/directional-types-v16.test.ts` - 53 tests for OCPP 1.6
- `tests/directional-types-v201.test.ts` - 53 tests for OCPP 2.0.1

Run tests with:
```bash
pnpm test
```

## Regenerating Types

If you modify the message direction configuration:

```bash
pnpm run generate
```

This will regenerate all type files with the updated directional types.

