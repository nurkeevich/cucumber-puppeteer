const { Given } = require('cucumber');
const checkUrl = require('../support/check/checkUrl');
const isVisible = require('../support/check/isVisible');

Given(
    /^the element "([^"]*)?" is( not)* visible$/,
    isVisible
);

Given(
    /^the page url is( not)? "([^"]*)?"$/,
    checkUrl
);

/*
Given(
    /^the element "([^"]*)?" is( not)* enabled$/,
    isEnabled
);

Given(
    /^the element "([^"]*)?" is( not)* selected$/,
    checkSelected
);

Given(
    /^the checkbox "([^"]*)?" is( not)* checked$/,
    checkSelected
);

Given(
    /^there is (an|no) element "([^"]*)?" on the page$/,
    checkElementExists
);

Given(
    /^the title is( not)* "([^"]*)?"$/,
    checkTitle
);

Given(
    /^the element "([^"]*)?" contains( not)* the same text as element "([^"]*)?"$/,
    compareText
);

Given(
    /^the (button|element) "([^"]*)?"( not)* matches the text "([^"]*)?"$/,
    checkEqualsText
);

Given(
    /^the (button|element) "([^"]*)?"( not)* contains the text "([^"]*)?"$/,
    checkContainsText
);

Given(
    /^the (button|element) "([^"]*)?"( not)* contains any text$/,
    checkContainsAnyText
);

Given(
    /^the (button|element) "([^"]*)?" is( not)* empty$/,
    checkIsEmpty
);



Given(
    /^the( css)* attribute "([^"]*)?" from element "([^"]*)?" is( not)* "([^"]*)?"$/,
    checkProperty
);
*/



