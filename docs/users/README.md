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
import { GetUserRequest, GetUserResponse } from "@speakeasy-sdks/supaglue/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new Supaglue({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

const req: GetUserRequest = {
  userId: "0258cbc6-6020-430a-848e-aafacbadf4ae",
  xCustomerId: "my-customer-1",
  xProviderName: "salesforce",
};

sdk.users.get(req).then((res: GetUserResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## list

Get a list of users

### Example Usage

```typescript
import { Supaglue } from "@speakeasy-sdks/supaglue";
import { ListUsersRequest, ListUsersResponse } from "@speakeasy-sdks/supaglue/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new Supaglue({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

const req: ListUsersRequest = {
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

sdk.users.list(req).then((res: ListUsersResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```
