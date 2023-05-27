/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class GetOpportunityRequest extends SpeakeasyBase {
    /**
     * Which relations should be returned in expanded form. Multiple relation names should be comma separated without spaces
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=expand" })
    expand?: string;

    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=opportunity_id" })
    opportunityId: string;

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

export class GetOpportunityResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    contentType: string;

    @SpeakeasyMetadata()
    statusCode: number;

    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;

    /**
     * Opportunity
     */
    @SpeakeasyMetadata()
    opportunity?: shared.Opportunity;
}
