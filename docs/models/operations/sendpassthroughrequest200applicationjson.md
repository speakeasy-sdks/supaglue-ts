# SendPassthroughRequest200ApplicationJSON

Passthrough response


## Fields

| Field                                    | Type                                     | Required                                 | Description                              | Example                                  |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| `body`                                   | *any*                                    | :heavy_minus_sign:                       | The body from the downstream             |                                          |
| `headers`                                | Record<string, *string*>                 | :heavy_check_mark:                       | The response headers from the downstream |                                          |
| `status`                                 | *number*                                 | :heavy_check_mark:                       | Status code from the downstream          | 200                                      |
| `url`                                    | *string*                                 | :heavy_check_mark:                       | The full URL the request was went to     | https://customcrm.com/api/cars           |