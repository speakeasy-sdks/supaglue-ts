/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Addresses } from "./addresses";
import { EmailAddresses } from "./emailaddresses";
import { PhoneNumbers } from "./phonenumbers";
import { Expose, Type } from "class-transformer";

export class CreateUpdateContact extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "account_id" })
  accountId?: string;

  @SpeakeasyMetadata({ elemType: Addresses })
  @Expose({ name: "addresses" })
  @Type(() => Addresses)
  addresses?: Addresses[];

  /**
   * Custom properties to be inserted that are not covered by the common model. Object keys must match exactly to the corresponding provider API.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "custom_fields" })
  customFields?: Record<string, any>;

  @SpeakeasyMetadata({ elemType: EmailAddresses })
  @Expose({ name: "email_addresses" })
  @Type(() => EmailAddresses)
  emailAddresses?: EmailAddresses[];

  @SpeakeasyMetadata()
  @Expose({ name: "first_name" })
  firstName?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "last_name" })
  lastName?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "owner_id" })
  ownerId?: string;

  @SpeakeasyMetadata({ elemType: PhoneNumbers })
  @Expose({ name: "phone_numbers" })
  @Type(() => PhoneNumbers)
  phoneNumbers?: PhoneNumbers[];
}
