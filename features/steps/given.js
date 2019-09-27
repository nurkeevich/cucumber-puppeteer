const Given = require('cucumber');
const openUrl = require('../support/action/openUrl');

Given(/^I should be at "([^"]*)?" and domain "([^"]*)?"( and userAgent "([^"]*)?")?( and device "([^"]*)?")? page$/, async function (url, urlAddition) {
    // await openUrl.call()
});