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
import { SendPassthroughRequestRequestBodyMethodEnum, SendPassthroughRequestResponse } from "@speakeasy-sdks/supaglue/dist/sdk/models/operations";

const sdk = new Supaglue({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.passthrough.send({
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
}).then((res: SendPassthroughRequestResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
