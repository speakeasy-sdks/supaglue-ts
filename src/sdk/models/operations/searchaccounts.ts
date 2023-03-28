/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export enum SearchAccountsRequestBodyFiltersWebsite1TypeEnum {
  Equals = "equals",
}

export class SearchAccountsRequestBodyFiltersWebsite1 extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type: SearchAccountsRequestBodyFiltersWebsite1TypeEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "value" })
  value: string;
}

export class SearchAccountsRequestBodyFilters extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "website" })
  website?: any;
}

export class SearchAccountsRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "filters" })
  @Type(() => SearchAccountsRequestBodyFilters)
  filters: SearchAccountsRequestBodyFilters;
}

export class SearchAccountsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  requestBody: SearchAccountsRequestBody;

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
 * Accounts
 */
export class SearchAccounts200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "next" })
  next?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "previous" })
  previous?: string;

  @SpeakeasyMetadata({ elemType: shared.Account })
  @Expose({ name: "results" })
  @Type(() => shared.Account)
  results?: shared.Account[];
}

export class SearchAccountsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  /**
   * Accounts
   */
  @SpeakeasyMetadata()
  searchAccounts200ApplicationJSONObject?: SearchAccounts200ApplicationJSON;
}
