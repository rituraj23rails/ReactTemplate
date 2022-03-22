Feature: Country Home Screen

    Scenario: User navigates Country Home Screen
        Given I am a User loading Country Home Screen
        When I navigate to the Country Home Screen
        Then Country Home Screen will load with out errors
        And I can enter search input value for countries
        And I can select the submit button to search the countries
        And I can leave the screen with out errors