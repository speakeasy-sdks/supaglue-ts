# leads

## Overview

The `Lead` Common Model is used to represent a "potential customer" in CRMs.

### Available Operations

* [create](#create) - Create lead
* [get](#get) - Get lead
* [list](#list) - List leads
* [update](#update) - Update lead

## create

Create lead

### Example Usage

```typescript
import { Supaglue } from "@speakeasy-sdks/supaglue";
import { CreateLeadResponse } from "@speakeasy-sdks/supaglue/dist/sdk/models/operations";
import { AddressType, EmailAddressesEmailAddressType, PhoneNumberType } from "@speakeasy-sdks/supaglue/dist/sdk/models/shared";

const sdk = new Supaglue({
  security: {
    apiKeyAuth: "",
  },
});

sdk.leads.create({
  requestBody: {
    model: {
      addresses: [
        {
          addressType: AddressType.Other,
          city: "San Francisco",
          country: "USA",
          postalCode: "94107",
          state: "CA",
          street1: "525 Brannan",
          street2: "null",
        },
        {
          addressType: AddressType.Mailing,
          city: "San Francisco",
          country: "USA",
          postalCode: "94107",
          state: "CA",
          street1: "525 Brannan",
          street2: "null",
        },
        {
          addressType: AddressType.Billing,
          city: "San Francisco",
          country: "USA",
          postalCode: "94107",
          state: "CA",
          street1: "525 Brannan",
          street2: "null",
        },
      ],
      company: "Supaglue",
      customFields: {
        "saepe": "quidem",
        "architecto": "ipsa",
      },
      emailAddresses: [
        {
          emailAddress: "hello@supaglue.com",
          emailAddressType: EmailAddressesEmailAddressType.Work,
        },
        {
          emailAddress: "hello@supaglue.com",
          emailAddressType: EmailAddressesEmailAddressType.Work,
        },
        {
          emailAddress: "hello@supaglue.com",
          emailAddressType: EmailAddressesEmailAddressType.Work,
        },
        {
          emailAddress: "hello@supaglue.com",
          emailAddressType: EmailAddressesEmailAddressType.Primary,
        },
      ],
      firstName: "George",
      lastName: "Xing",
      leadSource: "API Blogger",
      ownerId: "9f3e97fd-4d5d-4efc-959d-bbebfac079f5",
      title: "Co-Founder",
    },
  },
  xCustomerId: "my-customer-1",
  xProviderName: "salesforce",
}).then((res: CreateLeadResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                    | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `request`                                                                    | [operations.CreateLeadRequest](../../models/operations/createleadrequest.md) | :heavy_check_mark:                                                           | The request object to use for the request.                                   |
| `config`                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                 | :heavy_minus_sign:                                                           | Available config options for making requests.                                |


### Response

**Promise<[operations.CreateLeadResponse](../../models/operations/createleadresponse.md)>**


## get

Get lead

### Example Usage

```typescript
import { Supaglue } from "@speakeasy-sdks/supaglue";
import { GetLeadResponse } from "@speakeasy-sdks/supaglue/dist/sdk/models/operations";
import { AddressType, EmailAddressesEmailAddressType, PhoneNumberType } from "@speakeasy-sdks/supaglue/dist/sdk/models/shared";

const sdk = new Supaglue({
  security: {
    apiKeyAuth: "",
  },
});

sdk.leads.get({
  expand: "owner",
  leadId: "82de27cb-6f8c-4278-b783-82d1d916eddc",
  xCustomerId: "my-customer-1",
  xProviderName: "salesforce",
}).then((res: GetLeadResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                              | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `request`                                                              | [operations.GetLeadRequest](../../models/operations/getleadrequest.md) | :heavy_check_mark:                                                     | The request object to use for the request.                             |
| `config`                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)           | :heavy_minus_sign:                                                     | Available config options for making requests.                          |


### Response

**Promise<[operations.GetLeadResponse](../../models/operations/getleadresponse.md)>**


## list

Get a list of leads

### Example Usage

```typescript
import { Supaglue } from "@speakeasy-sdks/supaglue";
import { ListLeadsResponse } from "@speakeasy-sdks/supaglue/dist/sdk/models/operations";
import { AddressType, EmailAddressesEmailAddressType, PhoneNumberType } from "@speakeasy-sdks/supaglue/dist/sdk/models/shared";

const sdk = new Supaglue({
  security: {
    apiKeyAuth: "",
  },
});

sdk.leads.list({
  createdAfter: new Date("2023-02-23T00:00:00.000Z"),
  createdBefore: new Date("2023-02-23T00:00:00.000Z"),
  cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
  expand: "owner",
  pageSize: "3804695",
  updatedAfter: new Date("2023-02-23T00:00:00.000Z"),
  updatedBefore: new Date("2023-02-23T00:00:00.000Z"),
  xCustomerId: "my-customer-1",
  xProviderName: "salesforce",
}).then((res: ListLeadsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                  | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `request`                                                                  | [operations.ListLeadsRequest](../../models/operations/listleadsrequest.md) | :heavy_check_mark:                                                         | The request object to use for the request.                                 |
| `config`                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)               | :heavy_minus_sign:                                                         | Available config options for making requests.                              |


### Response

**Promise<[operations.ListLeadsResponse](../../models/operations/listleadsresponse.md)>**


## update

Update lead

### Example Usage

```typescript
import { Supaglue } from "@speakeasy-sdks/supaglue";
import { UpdateLeadResponse } from "@speakeasy-sdks/supaglue/dist/sdk/models/operations";
import { AddressType, EmailAddressesEmailAddressType, PhoneNumberType } from "@speakeasy-sdks/supaglue/dist/sdk/models/shared";

const sdk = new Supaglue({
  security: {
    apiKeyAuth: "",
  },
});

sdk.leads.update({
  requestBody: {
    model: {
      addresses: [
        {
          addressType: AddressType.Mailing,
          city: "San Francisco",
          country: "USA",
          postalCode: "94107",
          state: "CA",
          street1: "525 Brannan",
          street2: "null",
        },
      ],
      company: "Supaglue",
      customFields: {
        "nobis": "enim",
      },
      emailAddresses: [
        {
          emailAddress: "hello@supaglue.com",
          emailAddressType: EmailAddressesEmailAddressType.Primary,
        },
        {
          emailAddress: "hello@supaglue.com",
          emailAddressType: EmailAddressesEmailAddressType.Primary,
        },
        {
          emailAddress: "hello@supaglue.com",
          emailAddressType: EmailAddressesEmailAddressType.Work,
        },
      ],
      firstName: "George",
      lastName: "Xing",
      leadSource: "API Blogger",
      ownerId: "9f3e97fd-4d5d-4efc-959d-bbebfac079f5",
      title: "Co-Founder",
    },
  },
  leadId: "82de27cb-6f8c-4278-b783-82d1d916eddc",
  xCustomerId: "my-customer-1",
  xProviderName: "salesforce",
}).then((res: UpdateLeadResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                    | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `request`                                                                    | [operations.UpdateLeadRequest](../../models/operations/updateleadrequest.md) | :heavy_check_mark:                                                           | The request object to use for the request.                                   |
| `config`                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                 | :heavy_minus_sign:                                                           | Available config options for making requests.                                |


### Response

**Promise<[operations.UpdateLeadResponse](../../models/operations/updateleadresponse.md)>**

