/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Addresses } from "./addresses";
import { PhoneNumbers } from "./phonenumbers";
import { Expose, Type } from "class-transformer";

export class CreateUpdateAccount extends SpeakeasyBase {
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

    @SpeakeasyMetadata()
    @Expose({ name: "description" })
    description?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "industry" })
    industry?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "number_of_employees" })
    numberOfEmployees?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "owner_id" })
    ownerId?: string;

    @SpeakeasyMetadata({ elemType: PhoneNumbers })
    @Expose({ name: "phone_numbers" })
    @Type(() => PhoneNumbers)
    phoneNumbers?: PhoneNumbers[];

    @SpeakeasyMetadata()
    @Expose({ name: "website" })
    website?: string;
}
