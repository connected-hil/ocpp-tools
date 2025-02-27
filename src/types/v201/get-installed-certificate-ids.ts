/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type GetCertificateIdUseEnumType =
  | "V2GRootCertificate"
  | "MORootCertificate"
  | "CSMSRootCertificate"
  | "V2GCertificateChain"
  | "ManufacturerRootCertificate";

export interface GetInstalledCertificateIdsRequestV201 {
  customData?: CustomDataType;
  /**
   * Indicates the type of certificates requested. When omitted, all certificate types are requested.
   *
   *
   * @minItems 1
   */
  certificateType?: [GetCertificateIdUseEnumType, ...GetCertificateIdUseEnumType[]];
}
/**
 * This class does not get 'AdditionalProperties = false' in the schema generation, so it can be extended with arbitrary JSON properties to allow adding custom data.
 */
export interface CustomDataType {
  vendorId: string;
  [k: string]: unknown;
}
