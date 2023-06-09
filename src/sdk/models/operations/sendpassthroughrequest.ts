/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose } from "class-transformer";

export enum SendPassthroughRequestRequestBodyMethod {
    Get = "GET",
    Post = "POST",
    Put = "PUT",
    Patch = "PATCH",
    Delete = "DELETE",
}

export class SendPassthroughRequestRequestBody extends SpeakeasyBase {
    /**
     * Body to pass to downstream
     */
    @SpeakeasyMetadata()
    @Expose({ name: "body" })
    body?: string;

    /**
     * Headers to pass to downstream
     */
    @SpeakeasyMetadata()
    @Expose({ name: "headers" })
    headers?: Record<string, string>;

    @SpeakeasyMetadata()
    @Expose({ name: "method" })
    method: SendPassthroughRequestRequestBodyMethod;

    /**
     * The path to send the request to (do not pass the domain)
     */
    @SpeakeasyMetadata()
    @Expose({ name: "path" })
    path: string;

    /**
     * Query parameters to pass to downstream
     */
    @SpeakeasyMetadata()
    @Expose({ name: "query" })
    query?: Record<string, string>;
}

export class SendPassthroughRequestRequest extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "request, media_type=application/json" })
    requestBody: SendPassthroughRequestRequestBody;

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
 * Passthrough response
 */
export class SendPassthroughRequest200ApplicationJSON extends SpeakeasyBase {
    /**
     * The body from the downstream
     */
    @SpeakeasyMetadata()
    @Expose({ name: "body" })
    body?: any;

    /**
     * The response headers from the downstream
     */
    @SpeakeasyMetadata()
    @Expose({ name: "headers" })
    headers: Record<string, string>;

    /**
     * Status code from the downstream
     */
    @SpeakeasyMetadata()
    @Expose({ name: "status" })
    status: number;

    /**
     * The full URL the request was went to
     */
    @SpeakeasyMetadata()
    @Expose({ name: "url" })
    url: string;
}

export class SendPassthroughRequestResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    contentType: string;

    @SpeakeasyMetadata()
    statusCode: number;

    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;

    /**
     * Passthrough response
     */
    @SpeakeasyMetadata()
    sendPassthroughRequest200ApplicationJSONObject?: SendPassthroughRequest200ApplicationJSON;
}
