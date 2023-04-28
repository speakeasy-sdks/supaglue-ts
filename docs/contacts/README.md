# contacts

## Overview

The `Contact` Common Model is used to represent a "contact" in CRMs.

### Available Operations

* [create](#create) - Create contact
* [get](#get) - Get contact
* [list](#list) - List contacts
* [search](#search) - Search contacts
* [update](#update) - Update contact

## create

Create contact

### Example Usage

```typescript
import { Supaglue } from "@speakeasy-sdks/supaglue";
import { CreateContactResponse } from "@speakeasy-sdks/supaglue/dist/sdk/models/operations";
import { AddressTypeEnum, EmailAddressesEmailAddressTypeEnum, PhoneNumberTypeEnum } from "@speakeasy-sdks/supaglue/dist/sdk/models/shared";

const sdk = new Supaglue({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.contacts.create({
  requestBody: {
    model: {
      accountId: "64571bff-48ea-4469-9fa0-ee1a0bab38bd",
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
          addressType: AddressTypeEnum.Billing,
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
          addressType: AddressTypeEnum.Other,
          city: "San Francisco",
          country: "USA",
          postalCode: "94107",
          state: "CA",
          street1: "525 Brannan",
          street2: "null",
        },
      ],
      customFields: {
        "porro": "dolorum",
        "dicta": "nam",
        "officia": "occaecati",
      },
      emailAddresses: [
        {
          emailAddress: "hello@supaglue.com",
          emailAddressType: EmailAddressesEmailAddressTypeEnum.Work,
        },
      ],
      firstName: "George",
      lastName: "Xing",
      ownerId: "9f3e97fd-4d5d-4efc-959d-bbebfac079f5",
      phoneNumbers: [
        {
          phoneNumber: "+14151234567",
          phoneNumberType: PhoneNumberTypeEnum.Fax,
        },
        {
          phoneNumber: "+14151234567",
          phoneNumberType: PhoneNumberTypeEnum.Mobile,
        },
        {
          phoneNumber: "+14151234567",
          phoneNumberType: PhoneNumberTypeEnum.Primary,
        },
        {
          phoneNumber: "+14151234567",
          phoneNumberType: PhoneNumberTypeEnum.Mobile,
        },
      ],
    },
  },
  xCustomerId: "my-customer-1",
  xProviderName: "salesforce",
}).then((res: CreateContactResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## get

Get contact

### Example Usage

```typescript
import { Supaglue } from "@speakeasy-sdks/supaglue";
import { GetContactResponse } from "@speakeasy-sdks/supaglue/dist/sdk/models/operations";
import { AddressTypeEnum, EmailAddressesEmailAddressTypeEnum, PhoneNumberTypeEnum } from "@speakeasy-sdks/supaglue/dist/sdk/models/shared";

const sdk = new Supaglue({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.contacts.get({
  contactId: "0258cbc6-6020-430a-848e-aafacbadf4ae",
  expand: "owner",
  xCustomerId: "my-customer-1",
  xProviderName: "salesforce",
}).then((res: GetContactResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## list

Get a list of contacts

### Example Usage

```typescript
import { Supaglue } from "@speakeasy-sdks/supaglue";
import { ListContactsResponse } from "@speakeasy-sdks/supaglue/dist/sdk/models/operations";
import { AddressTypeEnum, EmailAddressesEmailAddressTypeEnum, PhoneNumberTypeEnum } from "@speakeasy-sdks/supaglue/dist/sdk/models/shared";

const sdk = new Supaglue({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.contacts.list({
  createdAfter: new Date("2023-02-23T00:00:00.000Z"),
  createdBefore: new Date("2023-02-23T00:00:00.000Z"),
  cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
  expand: "owner",
  pageSize: "3804695",
  updatedAfter: new Date("2023-02-23T00:00:00.000Z"),
  updatedBefore: new Date("2023-02-23T00:00:00.000Z"),
  xCustomerId: "my-customer-1",
  xProviderName: "salesforce",
}).then((res: ListContactsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## search

Search contacts

### Example Usage

```typescript
import { Supaglue } from "@speakeasy-sdks/supaglue";
import { SearchContactsRequestBodyFiltersEmailAddress1TypeEnum, SearchContactsResponse } from "@speakeasy-sdks/supaglue/dist/sdk/models/operations";
import { AddressTypeEnum, EmailAddressesEmailAddressTypeEnum, PhoneNumberTypeEnum } from "@speakeasy-sdks/supaglue/dist/sdk/models/shared";

const sdk = new Supaglue({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.contacts.search({
  requestBody: {
    filters: {
      emailAddress: {
        type: SearchContactsRequestBodyFiltersEmailAddress1TypeEnum.Equals,
        value: "molestiae",
      },
    },
  },
  cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
  pageSize: "3804695",
  xCustomerId: "my-customer-1",
  xProviderName: "salesforce",
}).then((res: SearchContactsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## update

Update contact

### Example Usage

```typescript
import { Supaglue } from "@speakeasy-sdks/supaglue";
import { UpdateContactResponse } from "@speakeasy-sdks/supaglue/dist/sdk/models/operations";
import { AddressTypeEnum, EmailAddressesEmailAddressTypeEnum, PhoneNumberTypeEnum } from "@speakeasy-sdks/supaglue/dist/sdk/models/shared";

const sdk = new Supaglue({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.contacts.update({
  requestBody: {
    model: {
      accountId: "64571bff-48ea-4469-9fa0-ee1a0bab38bd",
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
        "esse": "ipsum",
        "excepturi": "aspernatur",
        "perferendis": "ad",
      },
      emailAddresses: [
        {
          emailAddress: "hello@supaglue.com",
          emailAddressType: EmailAddressesEmailAddressTypeEnum.Primary,
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
    },
  },
  contactId: "0258cbc6-6020-430a-848e-aafacbadf4ae",
  xCustomerId: "my-customer-1",
  xProviderName: "salesforce",
}).then((res: UpdateContactResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
