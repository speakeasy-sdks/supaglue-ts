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
import { SendPassthroughRequestRequestBodyMethod, SendPassthroughRequestResponse } from "@speakeasy-sdks/supaglue/dist/sdk/models/operations";

const sdk = new Supaglue({
  security: {
    apiKeyAuth: "",
  },
});

sdk.passthrough.send({
  requestBody: {
    body: "numquam",
    headers: {
      "quam": "molestiae",
      "velit": "error",
    },
    method: SendPassthroughRequestRequestBodyMethod.Get,
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

### Parameters

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `request`                                                                                            | [operations.SendPassthroughRequestRequest](../../models/operations/sendpassthroughrequestrequest.md) | :heavy_check_mark:                                                                                   | The request object to use for the request.                                                           |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[operations.SendPassthroughRequestResponse](../../models/operations/sendpassthroughrequestresponse.md)>**

