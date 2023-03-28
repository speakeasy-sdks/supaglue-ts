/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class SearchOpportunitiesQueryParams extends SpeakeasyBase {
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
}

export class SearchOpportunitiesHeaders extends SpeakeasyBase {
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

export enum SearchOpportunitiesRequestBodyFiltersAccountId1TypeEnum {
  Equals = "equals",
}

export class SearchOpportunitiesRequestBodyFiltersAccountId1 extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type: SearchOpportunitiesRequestBodyFiltersAccountId1TypeEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "value" })
  value: string;
}

export class SearchOpportunitiesRequestBodyFilters extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "account_id" })
  accountId?: any;
}

export class SearchOpportunitiesRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "filters" })
  @Type(() => SearchOpportunitiesRequestBodyFilters)
  filters: SearchOpportunitiesRequestBodyFilters;
}

export class SearchOpportunitiesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: SearchOpportunitiesQueryParams;

  @SpeakeasyMetadata()
  headers: SearchOpportunitiesHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: SearchOpportunitiesRequestBody;
}

/**
 * Opportunities
 */
export class SearchOpportunities200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "next" })
  next?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "previous" })
  previous?: string;

  @SpeakeasyMetadata({ elemType: shared.Opportunity })
  @Expose({ name: "results" })
  @Type(() => shared.Opportunity)
  results?: shared.Opportunity[];
}

export class SearchOpportunitiesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  /**
   * Opportunities
   */
  @SpeakeasyMetadata()
  searchOpportunities200ApplicationJSONObject?: SearchOpportunities200ApplicationJSON;
}