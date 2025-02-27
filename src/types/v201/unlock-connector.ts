/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface UnlockConnectorRequestV201 {
  customData?: CustomDataType;
  /**
   * This contains the identifier of the EVSE for which a connector needs to be unlocked.
   *
   */
  evseId: number;
  /**
   * This contains the identifier of the connector that needs to be unlocked.
   *
   */
  connectorId: number;
}
/**
 * This class does not get 'AdditionalProperties = false' in the schema generation, so it can be extended with arbitrary JSON properties to allow adding custom data.
 */
export interface CustomDataType {
  vendorId: string;
  [k: string]: unknown;
}
