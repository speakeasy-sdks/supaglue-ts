<!-- Start SDK Example Usage -->
```typescript
import {
  CreateAccountRequest,
  CreateAccountResponse
} from "supaglue-crm/dist/sdk/models/operations";
import {
  PhoneNumbersPhoneNumberTypeEnum,
  AddressesAddressTypeEnum,
} from "supaglue-crm/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "supaglue-crm";
const sdk = new SDK({
  security: {
    apiKeyAuth: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  },
});

const req: CreateAccountRequest = {
  headers: {
    xCustomerId: "my-customer-1",
    xProviderName: "salesforce",
  },
  request: {
    model: {
      addresses: [
        {
          addressType: AddressesAddressTypeEnum.Other,
          city: "San Francisco",
          country: "USA",
          postalCode: "94107",
          state: "CA",
          street1: "525 Brannan",
          street2: "null",
        },
        {
          addressType: AddressesAddressTypeEnum.Billing,
          city: "San Francisco",
          country: "USA",
          postalCode: "94107",
          state: "CA",
          street1: "525 Brannan",
          street2: "null",
        },
        {
          addressType: AddressesAddressTypeEnum.Shipping,
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
          phoneNumberType: PhoneNumbersPhoneNumberTypeEnum.Mobile,
        },
        {
          phoneNumber: "+14151234567",
          phoneNumberType: PhoneNumbersPhoneNumberTypeEnum.Primary,
        },
      ],
      website: "https://supaglue.com/",
    },
  },
};

sdk.accounts.create(req).then((res: CreateAccountResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->