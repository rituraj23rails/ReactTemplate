Feature: Story Detail Screen

    Scenario: User navigates Story Detail Screen
        Given I am a User loading Story Detail Screen
        When I navigate to the Story Detail Screen
        Then Story Detail Screen will load with out errors
        And I can enter search input value for stories
        And I can select the clear filter buttons
        And I can leave the screen with out errors