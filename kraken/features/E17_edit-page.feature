Feature: Edit page
  @user1 @web
  Scenario: E17 - Edit an existing page
    Given the user navigates to Ghost at "<GHOST>"
    And the user logs in using the credentials "<USERNAME>" and "<PASSWORD>"
    And the user navigates to the pages page
    And I save device snapshot in sequential file 'E17' '1'
    When the user clicks Go to Editor
    And I save device snapshot in sequential file 'E17' '2'
    And the user updates the title to "<NEW_TITLE>"
    And I save device snapshot in sequential file 'E17' '3'
    And the user updates the content to "<NEW_CONTENT>"
    And I save device snapshot in sequential file 'E17' '4'
    And the user clicks on the 'Update' link
    And I wait for 2 seconds
    Then the user should see the updated page title "<NEW_TITLE>"
    And I save device snapshot in sequential file 'E17' '5'
    And I wait for 5 seconds
