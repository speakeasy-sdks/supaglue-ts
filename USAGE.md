<!-- Start SDK Example Usage -->
```typescript
import {
  CreateAccountRequest,
  CreateAccountResponse
} from "@speakeasy-sdks/supaglue/dist/sdk/models/operations";
import {
  PhoneNumberTypeEnum,
  AddressTypeEnum,
} from "@speakeasy-sdks/supaglue/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { Supaglue } from "@speakeasy-sdks/supaglue";
const sdk = new Supaglue({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

const req: CreateAccountRequest = {
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
      ],
      customFields: {
        "vero": "perspiciatis",
        "nulla": "nihil",
        "fuga": "facilis",
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
          phoneNumberType: PhoneNumberTypeEnum.Primary,
        },
      ],
      website: "https://supaglue.com/",
    },
  },
  xCustomerId: "my-customer-1",
  xProviderName: "salesforce",
};

sdk.accounts.create(req).then((res: CreateAccountResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->