/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class CreateUpdateOpportunity extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "account_id" })
    accountId?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "amount" })
    amount?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "close_date" })
    closeDate?: string;

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
    @Expose({ name: "name" })
    name?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "owner_id" })
    ownerId?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "stage" })
    stage?: string;
}
