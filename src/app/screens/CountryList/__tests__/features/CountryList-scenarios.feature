Feature: Country List Screen

    Scenario: User navigates Country List Screen
        Given I am a User loading Country List Screen
        When I navigate to the Country List Screen
        Then Country List Screen will load with out errors
        And I can leave the screen with out errors