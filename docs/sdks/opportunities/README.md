# opportunities

## Overview

The `Opportunity` Common Model is used to represent a "deal opportunity" in CRMs.

### Available Operations

* [create](#create) - Create opportunity
* [get](#get) - Get opportunity
* [list](#list) - List opportunities
* [search](#search) - Search Opportunities
* [update](#update) - Update opportunity

## create

Create opportunity

### Example Usage

```typescript
import { Supaglue } from "@speakeasy-sdks/supaglue";
import { CreateOpportunityResponse } from "@speakeasy-sdks/supaglue/dist/sdk/models/operations";
import { AddressType, PhoneNumberType } from "@speakeasy-sdks/supaglue/dist/sdk/models/shared";

const sdk = new Supaglue({
  security: {
    apiKeyAuth: "",
  },
});

sdk.opportunities.create({
  requestBody: {
    model: {
      accountId: "64571bff-48ea-4469-9fa0-ee1a0bab38bd",
      amount: 100000,
      closeDate: "2022-02-10T00:00:00Z",
      customFields: {
        "iure": "culpa",
      },
      description: "Wants to use open source unified API for third-party integrations",
      name: "Needs Integrations",
      ownerId: "9f3e97fd-4d5d-4efc-959d-bbebfac079f5",
      stage: "Closed Won",
    },
  },
  xCustomerId: "my-customer-1",
  xProviderName: "salesforce",
}).then((res: CreateOpportunityResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.CreateOpportunityRequest](../../models/operations/createopportunityrequest.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.CreateOpportunityResponse](../../models/operations/createopportunityresponse.md)>**


## get

Get opportunity

### Example Usage

```typescript
import { Supaglue } from "@speakeasy-sdks/supaglue";
import { GetOpportunityResponse } from "@speakeasy-sdks/supaglue/dist/sdk/models/operations";
import { AddressType, PhoneNumberType } from "@speakeasy-sdks/supaglue/dist/sdk/models/shared";

const sdk = new Supaglue({
  security: {
    apiKeyAuth: "",
  },
});

sdk.opportunities.get({
  expand: "owner",
  opportunityId: "c9f58083-a370-47b5-ad02-99160ea20372",
  xCustomerId: "my-customer-1",
  xProviderName: "salesforce",
}).then((res: GetOpportunityResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.GetOpportunityRequest](../../models/operations/getopportunityrequest.md) | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.GetOpportunityResponse](../../models/operations/getopportunityresponse.md)>**


## list

Get a list of opportunities

### Example Usage

```typescript
import { Supaglue } from "@speakeasy-sdks/supaglue";
import { ListOpportunitiesResponse } from "@speakeasy-sdks/supaglue/dist/sdk/models/operations";
import { AddressType, PhoneNumberType } from "@speakeasy-sdks/supaglue/dist/sdk/models/shared";

const sdk = new Supaglue({
  security: {
    apiKeyAuth: "",
  },
});

sdk.opportunities.list({
  createdAfter: new Date("2023-02-23T00:00:00.000Z"),
  createdBefore: new Date("2023-02-23T00:00:00.000Z"),
  cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
  expand: "owner",
  pageSize: "3804695",
  updatedAfter: new Date("2023-02-23T00:00:00.000Z"),
  updatedBefore: new Date("2023-02-23T00:00:00.000Z"),
  xCustomerId: "my-customer-1",
  xProviderName: "salesforce",
}).then((res: ListOpportunitiesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.ListOpportunitiesRequest](../../models/operations/listopportunitiesrequest.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.ListOpportunitiesResponse](../../models/operations/listopportunitiesresponse.md)>**


## search

Search Opportunities

### Example Usage

```typescript
import { Supaglue } from "@speakeasy-sdks/supaglue";
import { SearchOpportunitiesRequestBodyFiltersAccountId1Type, SearchOpportunitiesResponse } from "@speakeasy-sdks/supaglue/dist/sdk/models/operations";
import { AddressType, PhoneNumberType } from "@speakeasy-sdks/supaglue/dist/sdk/models/shared";

const sdk = new Supaglue({
  security: {
    apiKeyAuth: "",
  },
});

sdk.opportunities.search({
  requestBody: {
    filters: {
      accountId: {
        type: SearchOpportunitiesRequestBodyFiltersAccountId1Type.Equals,
        value: "doloribus",
      },
    },
  },
  cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
  pageSize: "3804695",
  xCustomerId: "my-customer-1",
  xProviderName: "salesforce",
}).then((res: SearchOpportunitiesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.SearchOpportunitiesRequest](../../models/operations/searchopportunitiesrequest.md) | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.SearchOpportunitiesResponse](../../models/operations/searchopportunitiesresponse.md)>**


## update

Update opportunity

### Example Usage

```typescript
import { Supaglue } from "@speakeasy-sdks/supaglue";
import { UpdateOpportunityResponse } from "@speakeasy-sdks/supaglue/dist/sdk/models/operations";
import { AddressType, PhoneNumberType } from "@speakeasy-sdks/supaglue/dist/sdk/models/shared";

const sdk = new Supaglue({
  security: {
    apiKeyAuth: "",
  },
});

sdk.opportunities.update({
  requestBody: {
    model: {
      accountId: "64571bff-48ea-4469-9fa0-ee1a0bab38bd",
      amount: 100000,
      closeDate: "2022-02-10T00:00:00Z",
      customFields: {
        "architecto": "mollitia",
        "dolorem": "culpa",
        "consequuntur": "repellat",
        "mollitia": "occaecati",
      },
      description: "Wants to use open source unified API for third-party integrations",
      name: "Needs Integrations",
      ownerId: "9f3e97fd-4d5d-4efc-959d-bbebfac079f5",
      stage: "Closed Won",
    },
  },
  opportunityId: "c9f58083-a370-47b5-ad02-99160ea20372",
  xCustomerId: "my-customer-1",
  xProviderName: "salesforce",
}).then((res: UpdateOpportunityResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.UpdateOpportunityRequest](../../models/operations/updateopportunityrequest.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.UpdateOpportunityResponse](../../models/operations/updateopportunityresponse.md)>**

