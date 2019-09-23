Feature: Test URL
    As a developer I want to test URL to make sure its correct

    Scenario: Testing Google URL
        When  I open the url "https://www.google.com/"
        Then  I expect the page url is "https://www.google.com/"
        And   I expect the page url is not "https://www.googler.com/"