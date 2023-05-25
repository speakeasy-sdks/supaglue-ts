/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import { Accounts } from "./accounts";
import { Contacts } from "./contacts";
import { Leads } from "./leads";
import * as shared from "./models/shared";
import { Opportunities } from "./opportunities";
import { Passthrough } from "./passthrough";
import { Users } from "./users";
import axios from "axios";
import { AxiosInstance } from "axios";

/**
 * Contains the list of servers available to the SDK
 */
export const ServerList = [
  /**
   * Local Supaglue API
   */
  "http://localhost:8080/crm/v1",
] as const;

/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
  /**
   * The security details required to authenticate the SDK
   */
  security?: shared.Security;
  /**
   * Allows overriding the default axios client used by the SDK
   */
  defaultClient?: AxiosInstance;
  /**
   * Allows overriding the default server URL used by the SDK
   */
  serverURL?: string;
};

/**
 * # Introduction
 *
 * @remarks
 * Welcome to the Supaglue unified CRM API documentation. You can use this API to read data that has been synced into Supaglue from third-party providers.
 * ### Base API URL
 * ```
 * http://localhost:8080/crm/v1
 * ```
 *
 *
 * @see {@link https://www.postman.com/supaglue/workspace/supaglue-public/overview} - Try out our API in Postman!
 */
export class Supaglue {
  /**
   * The `Account` Common Model is used to represent a "company" in CRMs.
   */
  public accounts: Accounts;
  /**
   * The `Contact` Common Model is used to represent a "contact" in CRMs.
   */
  public contacts: Contacts;
  /**
   * The `Lead` Common Model is used to represent a "potential customer" in CRMs.
   */
  public leads: Leads;
  /**
   * The `Opportunity` Common Model is used to represent a "deal opportunity" in CRMs.
   */
  public opportunities: Opportunities;
  /**
   * Passthrough operations to underlying providers.
   */
  public passthrough: Passthrough;
  /**
   * The `User` Common Model is used to represent a "user" that can login to CRMs.
   */
  public users: Users;

  public _defaultClient: AxiosInstance;
  public _securityClient: AxiosInstance;
  public _serverURL: string;
  private _language = "typescript";
  private _sdkVersion = "0.15.3";
  private _genVersion = "2.32.2";
  private _globals: any;

  constructor(props?: SDKProps) {
    this._serverURL = props?.serverURL ?? ServerList[0];

    this._defaultClient =
      props?.defaultClient ?? axios.create({ baseURL: this._serverURL });
    if (props?.security) {
      let security: shared.Security = props.security;
      if (!(props.security instanceof utils.SpeakeasyBase))
        security = new shared.Security(props.security);
      this._securityClient = utils.createSecurityClient(
        this._defaultClient,
        security
      );
    } else {
      this._securityClient = this._defaultClient;
    }

    this.accounts = new Accounts(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );

    this.contacts = new Contacts(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );

    this.leads = new Leads(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );

    this.opportunities = new Opportunities(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );

    this.passthrough = new Passthrough(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );

    this.users = new Users(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
  }
}
