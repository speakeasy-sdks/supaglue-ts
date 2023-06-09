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