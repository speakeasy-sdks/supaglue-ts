/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

/**
 * The `User` Common Model is used to represent a "user" that can login to CRMs.
 */
export class Users {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;

    constructor(
        defaultClient: AxiosInstance,
        securityClient: AxiosInstance,
        serverURL: string,
        language: string,
        sdkVersion: string,
        genVersion: string
    ) {
        this._defaultClient = defaultClient;
        this._securityClient = securityClient;
        this._serverURL = serverURL;
        this._language = language;
        this._sdkVersion = sdkVersion;
        this._genVersion = genVersion;
    }

    /**
     * Get user
     */
    async get(
        req: operations.GetUserRequest,
        config?: AxiosRequestConfig
    ): Promise<operations.GetUserResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetUserRequest(req);
        }

        const baseURL: string = this._serverURL;
        const url: string = utils.generateURL(baseURL, "/users/{user_id}", req);

        const client: AxiosInstance = this._securityClient || this._defaultClient;

        const headers = { ...utils.getHeadersFromRequest(req), ...config?.headers };
        headers["Accept"] = "application/json";
        headers[
            "user-agent"
        ] = `speakeasy-sdk/${this._language} ${this._sdkVersion} ${this._genVersion}`;

        const httpRes: AxiosResponse = await client.request({
            validateStatus: () => true,
            url: url,
            method: "get",
            headers: headers,
            ...config,
        });

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.GetUserResponse = new operations.GetUserResponse({
            statusCode: httpRes.status,
            contentType: contentType,
            rawResponse: httpRes,
        });
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.user = utils.objectToClass(httpRes?.data, shared.User);
                }
                break;
        }

        return res;
    }

    /**
     * List users
     *
     * @remarks
     * Get a list of users
     */
    async list(
        req: operations.ListUsersRequest,
        config?: AxiosRequestConfig
    ): Promise<operations.ListUsersResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ListUsersRequest(req);
        }

        const baseURL: string = this._serverURL;
        const url: string = baseURL.replace(/\/$/, "") + "/users";

        const client: AxiosInstance = this._securityClient || this._defaultClient;

        const headers = { ...utils.getHeadersFromRequest(req), ...config?.headers };
        const queryParams: string = utils.serializeQueryParams(req);
        headers["Accept"] = "application/json";
        headers[
            "user-agent"
        ] = `speakeasy-sdk/${this._language} ${this._sdkVersion} ${this._genVersion}`;

        const httpRes: AxiosResponse = await client.request({
            validateStatus: () => true,
            url: url + queryParams,
            method: "get",
            headers: headers,
            ...config,
        });

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.ListUsersResponse = new operations.ListUsersResponse({
            statusCode: httpRes.status,
            contentType: contentType,
            rawResponse: httpRes,
        });
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.listUsers200ApplicationJSONObject = utils.objectToClass(
                        httpRes?.data,
                        operations.ListUsers200ApplicationJSON
                    );
                }
                break;
        }

        return res;
    }
}
