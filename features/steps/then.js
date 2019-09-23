const { Then } = require('cucumber');
const checkUrl = require('../support/check/checkUrl');

Then(/^I expect the page url is( not)? "([^"]*)?"$/, checkUrl);