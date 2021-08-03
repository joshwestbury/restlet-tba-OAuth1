const config = require('./config.json');
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

main({ recType: 'invoice' }, config).then((res) => console.log(res));
