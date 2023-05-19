/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { PhoneNumberType } from "./phonenumbertype";
import { Expose } from "class-transformer";

export class PhoneNumbers extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "phone_number" })
  phoneNumber: string;

  @SpeakeasyMetadata()
  @Expose({ name: "phone_number_type" })
  phoneNumberType: PhoneNumberType;
}
