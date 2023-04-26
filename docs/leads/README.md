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
import { CreateLeadRequest, CreateLeadResponse } from "@speakeasy-sdks/supaglue/dist/sdk/models/operations";
import { AddressTypeEnum, EmailAddressesEmailAddressTypeEnum, PhoneNumberTypeEnum } from "@speakeasy-sdks/supaglue/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new Supaglue({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

const req: CreateLeadRequest = {
  requestBody: {
    model: {
      addresses: [
        {
          addressType: AddressTypeEnum.Other,
          city: "San Francisco",
          country: "USA",
          postalCode: "94107",
          state: "CA",
          street1: "525 Brannan",
          street2: "null",
        },
        {
          addressType: AddressTypeEnum.Mailing,
          city: "San Francisco",
          country: "USA",
          postalCode: "94107",
          state: "CA",
          street1: "525 Brannan",
          street2: "null",
        },
        {
          addressType: AddressTypeEnum.Billing,
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
          emailAddressType: EmailAddressesEmailAddressTypeEnum.Work,
        },
        {
          emailAddress: "hello@supaglue.com",
          emailAddressType: EmailAddressesEmailAddressTypeEnum.Work,
        },
        {
          emailAddress: "hello@supaglue.com",
          emailAddressType: EmailAddressesEmailAddressTypeEnum.Work,
        },
        {
          emailAddress: "hello@supaglue.com",
          emailAddressType: EmailAddressesEmailAddressTypeEnum.Primary,
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
};

sdk.leads.create(req).then((res: CreateLeadResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## get

Get lead

### Example Usage

```typescript
import { Supaglue } from "@speakeasy-sdks/supaglue";
import { GetLeadRequest, GetLeadResponse } from "@speakeasy-sdks/supaglue/dist/sdk/models/operations";
import { AddressTypeEnum, EmailAddressesEmailAddressTypeEnum, PhoneNumberTypeEnum } from "@speakeasy-sdks/supaglue/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new Supaglue({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

const req: GetLeadRequest = {
  expand: "owner",
  leadId: "82de27cb-6f8c-4278-b783-82d1d916eddc",
  xCustomerId: "my-customer-1",
  xProviderName: "salesforce",
};

sdk.leads.get(req).then((res: GetLeadResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## list

Get a list of leads

### Example Usage

```typescript
import { Supaglue } from "@speakeasy-sdks/supaglue";
import { ListLeadsRequest, ListLeadsResponse } from "@speakeasy-sdks/supaglue/dist/sdk/models/operations";
import { AddressTypeEnum, EmailAddressesEmailAddressTypeEnum, PhoneNumberTypeEnum } from "@speakeasy-sdks/supaglue/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new Supaglue({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

const req: ListLeadsRequest = {
  createdAfter: new Date("2023-02-23T00:00:00.000Z"),
  createdBefore: new Date("2023-02-23T00:00:00.000Z"),
  cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
  expand: "owner",
  pageSize: "3804695",
  updatedAfter: new Date("2023-02-23T00:00:00.000Z"),
  updatedBefore: new Date("2023-02-23T00:00:00.000Z"),
  xCustomerId: "my-customer-1",
  xProviderName: "salesforce",
};

sdk.leads.list(req).then((res: ListLeadsResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## update

Update lead

### Example Usage

```typescript
import { Supaglue } from "@speakeasy-sdks/supaglue";
import { UpdateLeadRequest, UpdateLeadResponse } from "@speakeasy-sdks/supaglue/dist/sdk/models/operations";
import { AddressTypeEnum, EmailAddressesEmailAddressTypeEnum, PhoneNumberTypeEnum } from "@speakeasy-sdks/supaglue/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new Supaglue({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

const req: UpdateLeadRequest = {
  requestBody: {
    model: {
      addresses: [
        {
          addressType: AddressTypeEnum.Mailing,
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
          emailAddressType: EmailAddressesEmailAddressTypeEnum.Primary,
        },
        {
          emailAddress: "hello@supaglue.com",
          emailAddressType: EmailAddressesEmailAddressTypeEnum.Primary,
        },
        {
          emailAddress: "hello@supaglue.com",
          emailAddressType: EmailAddressesEmailAddressTypeEnum.Work,
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
};

sdk.leads.update(req).then((res: UpdateLeadResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```
