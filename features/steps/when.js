const { When } = require('cucumber');
const openUrl = require('../support/action/openUrl');

When(
    'I open the url {string-env}', async function (url) {
        await openUrl.call(this, url);
    }
);