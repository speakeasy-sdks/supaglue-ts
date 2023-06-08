<div align="center">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/supaglue-labs/supaglue/main/docs/static/img/logo-dark.png">
      <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/supaglue-labs/supaglue/main/docs/static/img/logo-light.png">
      <img alt="Supaglue" src="https://raw.githubusercontent.com/supaglue-labs/supaglue/main/docs/static/img/logo-light.png">
    </picture>
    <h1>Typescript SDK</h1>
   <p>The Open Source Unified API for CRM integrations</p>
   <a href="https://docs.supaglue.com/"><img src="https://img.shields.io/static/v1?label=Docs&message=API Ref&color=000&style=for-the-badge" /></a>
   <a href="https://github.com/speakeasy-sdks/supaglue-ts/actions"><img src="https://img.shields.io/github/actions/workflow/status/speakeasy-sdks/supaglue-ts/speakeasy_sdk_generation.yml?style=for-the-badge" /></a>
  <a href="https://opensource.org/licenses/MIT"><img src="https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge" /></a>
  <a href="https://github.com/speakeasy-sdks/supaglue-ts/releases"><img src="https://img.shields.io/github/v/release/speakeasy-sdks/supaglue-ts?sort=semver&style=for-the-badge" /></a>
</div>

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add @speakeasy-sdks/supaglue
```

### Yarn

```bash
yarn add @speakeasy-sdks/supaglue
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import { Supaglue } from "@speakeasy-sdks/supaglue";
import { CreateAccountResponse } from "@speakeasy-sdks/supaglue/dist/sdk/models/operations";
import { AddressType, PhoneNumberType } from "@speakeasy-sdks/supaglue/dist/sdk/models/shared";

const sdk = new Supaglue({
  security: {
    apiKeyAuth: "",
  },
});

sdk.accounts.create({
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
          addressType: AddressType.Billing,
          city: "San Francisco",
          country: "USA",
          postalCode: "94107",
          state: "CA",
          street1: "525 Brannan",
          street2: "null",
        },
        {
          addressType: AddressType.Shipping,
          city: "San Francisco",
          country: "USA",
          postalCode: "94107",
          state: "CA",
          street1: "525 Brannan",
          street2: "null",
        },
      ],
      customFields: {
        "nulla": "corrupti",
        "illum": "vel",
        "error": "deserunt",
      },
      description: "Integration API",
      industry: "API's",
      name: "Sample Customer",
      numberOfEmployees: 276000,
      ownerId: "9f3e97fd-4d5d-4efc-959d-bbebfac079f5",
      phoneNumbers: [
        {
          phoneNumber: "+14151234567",
          phoneNumberType: PhoneNumberType.Mobile,
        },
        {
          phoneNumber: "+14151234567",
          phoneNumberType: PhoneNumberType.Primary,
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
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [accounts](docs/accounts/README.md)

* [create](docs/accounts/README.md#create) - Create account
* [get](docs/accounts/README.md#get) - Get account
* [list](docs/accounts/README.md#list) - List accounts
* [search](docs/accounts/README.md#search) - Search accounts
* [update](docs/accounts/README.md#update) - Update account

### [contacts](docs/contacts/README.md)

* [create](docs/contacts/README.md#create) - Create contact
* [get](docs/contacts/README.md#get) - Get contact
* [list](docs/contacts/README.md#list) - List contacts
* [search](docs/contacts/README.md#search) - Search contacts
* [update](docs/contacts/README.md#update) - Update contact

### [leads](docs/leads/README.md)

* [create](docs/leads/README.md#create) - Create lead
* [get](docs/leads/README.md#get) - Get lead
* [list](docs/leads/README.md#list) - List leads
* [update](docs/leads/README.md#update) - Update lead

### [opportunities](docs/opportunities/README.md)

* [create](docs/opportunities/README.md#create) - Create opportunity
* [get](docs/opportunities/README.md#get) - Get opportunity
* [list](docs/opportunities/README.md#list) - List opportunities
* [search](docs/opportunities/README.md#search) - Search Opportunities
* [update](docs/opportunities/README.md#update) - Update opportunity

### [passthrough](docs/passthrough/README.md)

* [send](docs/passthrough/README.md#send) - Send passthrough request

### [users](docs/users/README.md)

* [get](docs/users/README.md#get) - Get user
* [list](docs/users/README.md#list) - List users
<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
