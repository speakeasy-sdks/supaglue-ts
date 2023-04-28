# users

## Overview

The `User` Common Model is used to represent a "user" that can login to CRMs.

### Available Operations

* [get](#get) - Get user
* [list](#list) - List users

## get

Get user

### Example Usage

```typescript
import { Supaglue } from "@speakeasy-sdks/supaglue";
import { GetUserResponse } from "@speakeasy-sdks/supaglue/dist/sdk/models/operations";

const sdk = new Supaglue({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.users.get({
  userId: "0258cbc6-6020-430a-848e-aafacbadf4ae",
  xCustomerId: "my-customer-1",
  xProviderName: "salesforce",
}).then((res: GetUserResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## list

Get a list of users

### Example Usage

```typescript
import { Supaglue } from "@speakeasy-sdks/supaglue";
import { ListUsersResponse } from "@speakeasy-sdks/supaglue/dist/sdk/models/operations";

const sdk = new Supaglue({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.users.list({
  createdAfter: new Date("2023-02-23T00:00:00.000Z"),
  createdBefore: new Date("2023-02-23T00:00:00.000Z"),
  cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
  expand: "owner",
  pageSize: "3804695",
  updatedAfter: new Date("2023-02-23T00:00:00.000Z"),
  updatedBefore: new Date("2023-02-23T00:00:00.000Z"),
  xCustomerId: "my-customer-1",
  xProviderName: "salesforce",
}).then((res: ListUsersResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
