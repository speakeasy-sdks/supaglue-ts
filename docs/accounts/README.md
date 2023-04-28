# accounts

## Overview

The `Account` Common Model is used to represent a "company" in CRMs.

### Available Operations

* [create](#create) - Create account
* [get](#get) - Get account
* [list](#list) - List accounts
* [search](#search) - Search accounts
* [update](#update) - Update account

## create

Create account

### Example Usage

```typescript
import { Supaglue } from "@speakeasy-sdks/supaglue";
import { CreateAccountResponse } from "@speakeasy-sdks/supaglue/dist/sdk/models/operations";
import { AddressTypeEnum, PhoneNumberTypeEnum } from "@speakeasy-sdks/supaglue/dist/sdk/models/shared";

const sdk = new Supaglue({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.accounts.create({
  requestBody: {
    model: {
      addresses: [
        {
          addressType: AddressTypeEnum.Primary,
          city: "San Francisco",
          country: "USA",
          postalCode: "94107",
          state: "CA",
          street1: "525 Brannan",
          street2: "null",
        },
        {
          addressType: AddressTypeEnum.Shipping,
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
          addressType: AddressTypeEnum.Mailing,
          city: "San Francisco",
          country: "USA",
          postalCode: "94107",
          state: "CA",
          street1: "525 Brannan",
          street2: "null",
        },
      ],
      customFields: {
        "minus": "placeat",
        "voluptatum": "iusto",
      },
      description: "Integration API",
      industry: "API's",
      name: "Sample Customer",
      numberOfEmployees: 276000,
      ownerId: "9f3e97fd-4d5d-4efc-959d-bbebfac079f5",
      phoneNumbers: [
        {
          phoneNumber: "+14151234567",
          phoneNumberType: PhoneNumberTypeEnum.Mobile,
        },
        {
          phoneNumber: "+14151234567",
          phoneNumberType: PhoneNumberTypeEnum.Fax,
        },
        {
          phoneNumber: "+14151234567",
          phoneNumberType: PhoneNumberTypeEnum.Fax,
        },
      ],
      website: "https://supaglue.com/",
    },
  },
  xCustomerId: "my-customer-1",
  xProviderName: "salesforce",
}).then((res: CreateAccountResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## get

Get account

### Example Usage

```typescript
import { Supaglue } from "@speakeasy-sdks/supaglue";
import { GetAccountResponse } from "@speakeasy-sdks/supaglue/dist/sdk/models/operations";
import { AddressTypeEnum, PhoneNumberTypeEnum } from "@speakeasy-sdks/supaglue/dist/sdk/models/shared";

const sdk = new Supaglue({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.accounts.get({
  accountId: "0258cbc6-6020-430a-848e-aafacbadf4ae",
  expand: "owner",
  xCustomerId: "my-customer-1",
  xProviderName: "salesforce",
}).then((res: GetAccountResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## list

Get a list of accounts

### Example Usage

```typescript
import { Supaglue } from "@speakeasy-sdks/supaglue";
import { ListAccountsResponse } from "@speakeasy-sdks/supaglue/dist/sdk/models/operations";
import { AddressTypeEnum, PhoneNumberTypeEnum } from "@speakeasy-sdks/supaglue/dist/sdk/models/shared";

const sdk = new Supaglue({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.accounts.list({
  createdAfter: new Date("2023-02-23T00:00:00.000Z"),
  createdBefore: new Date("2023-02-23T00:00:00.000Z"),
  cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
  expand: "owner",
  pageSize: "3804695",
  updatedAfter: new Date("2023-02-23T00:00:00.000Z"),
  updatedBefore: new Date("2023-02-23T00:00:00.000Z"),
  xCustomerId: "my-customer-1",
  xProviderName: "salesforce",
}).then((res: ListAccountsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## search

Search accounts

### Example Usage

```typescript
import { Supaglue } from "@speakeasy-sdks/supaglue";
import { SearchAccountsRequestBodyFiltersWebsite1TypeEnum, SearchAccountsResponse } from "@speakeasy-sdks/supaglue/dist/sdk/models/operations";
import { AddressTypeEnum, PhoneNumberTypeEnum } from "@speakeasy-sdks/supaglue/dist/sdk/models/shared";

const sdk = new Supaglue({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.accounts.search({
  requestBody: {
    filters: {
      website: {
        type: SearchAccountsRequestBodyFiltersWebsite1TypeEnum.Equals,
        value: "ab",
      },
    },
  },
  cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
  pageSize: "3804695",
  xCustomerId: "my-customer-1",
  xProviderName: "salesforce",
}).then((res: SearchAccountsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## update

Update account

### Example Usage

```typescript
import { Supaglue } from "@speakeasy-sdks/supaglue";
import { UpdateAccountResponse } from "@speakeasy-sdks/supaglue/dist/sdk/models/operations";
import { AddressTypeEnum, PhoneNumberTypeEnum } from "@speakeasy-sdks/supaglue/dist/sdk/models/shared";

const sdk = new Supaglue({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.accounts.update({
  requestBody: {
    model: {
      addresses: [
        {
          addressType: AddressTypeEnum.Primary,
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
      customFields: {
        "ipsam": "repellendus",
      },
      description: "Integration API",
      industry: "API's",
      name: "Sample Customer",
      numberOfEmployees: 276000,
      ownerId: "9f3e97fd-4d5d-4efc-959d-bbebfac079f5",
      phoneNumbers: [
        {
          phoneNumber: "+14151234567",
          phoneNumberType: PhoneNumberTypeEnum.Fax,
        },
        {
          phoneNumber: "+14151234567",
          phoneNumberType: PhoneNumberTypeEnum.Primary,
        },
        {
          phoneNumber: "+14151234567",
          phoneNumberType: PhoneNumberTypeEnum.Fax,
        },
        {
          phoneNumber: "+14151234567",
          phoneNumberType: PhoneNumberTypeEnum.Fax,
        },
      ],
      website: "https://supaglue.com/",
    },
  },
  accountId: "0258cbc6-6020-430a-848e-aafacbadf4ae",
  xCustomerId: "my-customer-1",
  xProviderName: "salesforce",
}).then((res: UpdateAccountResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```