# RESTlet TBA OAuth1

A package that creates OAuth1 Auth Header for making requests to NetSuite RESTlets

Package relies on original source code from https://github.com/alejandrofierro/nsoauth1

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
    "url": "{{RESTlet url}}"
}
```

## Usage

Here is an example of a post request using Axios

```js
// main.js
const NetSuiteOAuth = require('./app.js');
const axios = require('axios');
const config = require('./config.json');

async function main(requestBody, config) {
    try {
        const oauth = new NetSuiteOAuth(config);
        const NetSuiteAuth = oauth.createOauth();

        const response = await axios({
            method: oauth.method,
            url: oauth.url,
            data: JSON.stringify(requestBody),
            headers: {
                'Content-Type': 'application/json',
                Authorization: NetSuiteAuth.authHeader,
            },
        });
        return response.data;
    } catch (err) {
        console.log('ERROR', err);
    }
}
```
