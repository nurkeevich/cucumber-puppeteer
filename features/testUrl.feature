Feature: Test URL
    As a Tester I want to test URL to make sure its correct

    Scenario Outline: Verifing URLs
        When I open the url <openURL>
        Then I expect the page url is <expectURL>

        Examples:
            | openURL                     | expectURL                   |
            | "https://www.google.com/"   | "https://www.google.com/"   |
            | "https://www.facebook.com/" | "https://www.facebook.com/" |

