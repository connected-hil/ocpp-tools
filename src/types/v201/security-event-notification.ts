/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface SecurityEventNotificationRequestV201 {
  customData?: CustomDataType;
  /**
   * Type of the security event. This value should be taken from the Security events list.
   *
   */
  type: string;
  /**
   * Date and time at which the event occurred.
   *
   */
  timestamp: string;
  /**
   * Additional information about the occurred security event.
   *
   */
  techInfo?: string;
}
/**
 * This class does not get 'AdditionalProperties = false' in the schema generation, so it can be extended with arbitrary JSON properties to allow adding custom data.
 */
export interface CustomDataType {
  vendorId: string;
  [k: string]: unknown;
}
