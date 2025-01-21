/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * The updated reservation status.
 *
 */
export type ReservationUpdateStatusEnumType = "Expired" | "Removed";

export interface ReservationStatusUpdateRequestV201 {
  customData?: CustomDataType;
  /**
   * The ID of the reservation.
   *
   */
  reservationId: number;
  reservationUpdateStatus: ReservationUpdateStatusEnumType;
}
/**
 * This class does not get 'AdditionalProperties = false' in the schema generation, so it can be extended with arbitrary JSON properties to allow adding custom data.
 */
export interface CustomDataType {
  vendorId: string;
  [k: string]: unknown;
}
