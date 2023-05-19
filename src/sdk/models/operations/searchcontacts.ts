/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export enum SearchContactsRequestBodyFiltersEmailAddress1Type {
  Equals = "equals",
}

export class SearchContactsRequestBodyFiltersEmailAddress1 extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type: SearchContactsRequestBodyFiltersEmailAddress1Type;

  @SpeakeasyMetadata()
  @Expose({ name: "value" })
  value: string;
}

export class SearchContactsRequestBodyFilters extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "email_address" })
  emailAddress?: any;
}

export class SearchContactsRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "filters" })
  @Type(() => SearchContactsRequestBodyFilters)
  filters: SearchContactsRequestBodyFilters;
}

export class SearchContactsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  requestBody: SearchContactsRequestBody;

  /**
   * The pagination cursor value
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=cursor",
  })
  cursor?: string;

  /**
   * Number of results to return per page
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=page_size",
  })
  pageSize?: string;

  /**
   * The customer ID that uniquely identifies the customer in your application
   */
  @SpeakeasyMetadata({
    data: "header, style=simple;explode=false;name=x-customer-id",
  })
  xCustomerId: string;

  /**
   * The provider name
   */
  @SpeakeasyMetadata({
    data: "header, style=simple;explode=false;name=x-provider-name",
  })
  xProviderName: string;
}

/**
 * Contacts
 */
export class SearchContacts200ApplicationJSON extends SpeakeasyBase {
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

export class SearchContactsResponse extends SpeakeasyBase {
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
  searchContacts200ApplicationJSONObject?: SearchContacts200ApplicationJSON;
}
