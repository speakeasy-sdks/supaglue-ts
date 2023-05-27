/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class CreateOpportunityRequestBody extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "model" })
    @Type(() => shared.CreateUpdateOpportunity)
    model: shared.CreateUpdateOpportunity;
}

export class CreateOpportunityRequest extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "request, media_type=application/json" })
    requestBody: CreateOpportunityRequestBody;

    /**
     * The customer ID that uniquely identifies the customer in your application
     */
    @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-customer-id" })
    xCustomerId: string;

    /**
     * The provider name
     */
    @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-provider-name" })
    xProviderName: string;
}

/**
 * Opportunity created
 */
export class CreateOpportunity201ApplicationJSON extends SpeakeasyBase {
    @SpeakeasyMetadata({ elemType: shared.Errors })
    @Expose({ name: "errors" })
    @Type(() => shared.Errors)
    errors?: shared.Errors[];

    @SpeakeasyMetadata({ elemType: shared.Logs })
    @Expose({ name: "logs" })
    @Type(() => shared.Logs)
    logs?: shared.Logs[];

    @SpeakeasyMetadata()
    @Expose({ name: "model" })
    @Type(() => shared.Opportunity)
    model?: shared.Opportunity;

    @SpeakeasyMetadata({ elemType: shared.Warnings })
    @Expose({ name: "warnings" })
    @Type(() => shared.Warnings)
    warnings?: shared.Warnings[];
}

export class CreateOpportunityResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    contentType: string;

    @SpeakeasyMetadata()
    statusCode: number;

    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;

    /**
     * Opportunity created
     */
    @SpeakeasyMetadata()
    createOpportunity201ApplicationJSONObject?: CreateOpportunity201ApplicationJSON;
}
