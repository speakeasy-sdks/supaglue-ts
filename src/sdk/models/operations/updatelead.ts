/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class UpdateLeadRequestBody extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "model" })
    @Type(() => shared.CreateUpdateLead)
    model: shared.CreateUpdateLead;
}

export class UpdateLeadRequest extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "request, media_type=application/json" })
    requestBody: UpdateLeadRequestBody;

    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=lead_id" })
    leadId: string;

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
 * Lead updated
 */
export class UpdateLead200ApplicationJSON extends SpeakeasyBase {
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
    @Type(() => shared.Lead)
    model?: shared.Lead;

    @SpeakeasyMetadata({ elemType: shared.Warnings })
    @Expose({ name: "warnings" })
    @Type(() => shared.Warnings)
    warnings?: shared.Warnings[];
}

export class UpdateLeadResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    contentType: string;

    @SpeakeasyMetadata()
    statusCode: number;

    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;

    /**
     * Lead updated
     */
    @SpeakeasyMetadata()
    updateLead200ApplicationJSONObject?: UpdateLead200ApplicationJSON;
}
