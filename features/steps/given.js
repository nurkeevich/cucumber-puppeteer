const { Given } = require('cucumber');
const openUrl = require('../support/action/openUrl');
const waitFor = require('../support/action/waitFor');

Given('I should be at {string-env} page', async function (url) {
    await openUrl.call(this, url);
});