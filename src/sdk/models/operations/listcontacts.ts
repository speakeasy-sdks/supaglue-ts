/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class ListContactsRequest extends SpeakeasyBase {
    /**
     * If provided, will only return objects created after this datetime
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=created_after" })
    createdAfter?: Date;

    /**
     * If provided, will only return objects created before this datetime
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=created_before" })
    createdBefore?: Date;

    /**
     * The pagination cursor value
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cursor" })
    cursor?: string;

    /**
     * Which relations should be returned in expanded form. Multiple relation names should be comma separated without spaces
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=expand" })
    expand?: string;

    /**
     * Number of results to return per page
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_size" })
    pageSize?: string;

    /**
     * If provided, will only return objects modified after this datetime
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=updated_after" })
    updatedAfter?: Date;

    /**
     * If provided, will only return objects modified before this datetime
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=updated_before" })
    updatedBefore?: Date;

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
 * Contacts
 */
export class ListContacts200ApplicationJSON extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "next" })
    next?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "previous" })
    previous?: string;

    @SpeakeasyMetadata({ elemType: shared.Contact })
    @Expose({ name: "results" })
    @Type(() => shared.Contact)
    results?: shared.Contact[];
}

export class ListContactsResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    contentType: string;

    @SpeakeasyMetadata()
    statusCode: number;

    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;

    /**
     * Contacts
     */
    @SpeakeasyMetadata()
    listContacts200ApplicationJSONObject?: ListContacts200ApplicationJSON;
}
