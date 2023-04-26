# passthrough

## Overview

Passthrough operations to underlying providers.

### Available Operations

* [send](#send) - Send passthrough request

## send

Send request directly to a provider

### Example Usage

```typescript
import { Supaglue } from "@speakeasy-sdks/supaglue";
import {
  SendPassthroughRequestRequest,
  SendPassthroughRequestRequestBodyMethodEnum,
  SendPassthroughRequestResponse,
} from "@speakeasy-sdks/supaglue/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new Supaglue({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

const req: SendPassthroughRequestRequest = {
  requestBody: {
    body: "numquam",
    headers: {
      "quam": "molestiae",
      "velit": "error",
    },
    method: SendPassthroughRequestRequestBodyMethodEnum.Get,
    path: "quia",
    query: {
      "vitae": "laborum",
      "animi": "enim",
    },
  },
  xCustomerId: "my-customer-1",
  xProviderName: "salesforce",
};

sdk.passthrough.send(req).then((res: SendPassthroughRequestResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```
