const config = require('./config.json');
const NetSuiteOAuth = require('./app.js');
const axios = require('axios');

async function main(payload, config) {
    let OAuth = new NetSuiteOAuth(config);
    let Auth = OAuth.createOauth();

    // make request here
}
