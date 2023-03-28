/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export enum PhoneNumbersPhoneNumberTypeEnum {
  Primary = "primary",
  Mobile = "mobile",
  Fax = "fax",
}

export class PhoneNumbers extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "phone_number" })
  phoneNumber: string;

  @SpeakeasyMetadata()
  @Expose({ name: "phone_number_type" })
  phoneNumberType: PhoneNumbersPhoneNumberTypeEnum;
}