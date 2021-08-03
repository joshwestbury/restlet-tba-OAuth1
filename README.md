# RESTlet TBA OAuth1

A package that creates OAuth1 Auth Header for making requests to NetSuite RESTlets

## Files

Provide a config.json file that contains the following information:

```json
{
    "accountId": "{{account id}}",
    "method": "{{method}}",
    "consumerKey": "{{consumer key}}",
    "consumerSecret": "consumer secret}}",
    "tokenId": "{{token id}}",
    "tokenSecret": "token secrete}}",
    "url": "{{RESTlet url}}",
}
```

## Usage

Here is an example of a post request using Axios

```js
const NetSuiteOAuth = require('./app.js');
const axios = require('axios');

async function main(requestBody, config) {
    let oauth = new NetSuiteOAuth(config);
    let NetSuiteAuth = oauth.createOauth();

    var options = {
        method: config.method,
        url: config.url,
        headers: {
            'Content-Type': 'application/json',
            Authorization: NetSuiteAuth.authHeader,
        },
        body: JSON.stringify(requestBody),
    };

    var response = await axios({
        method: config.method,
        url: config.url,
        data: options.body,
        headers: options.headers,
    });
    return response.data;
}
```
