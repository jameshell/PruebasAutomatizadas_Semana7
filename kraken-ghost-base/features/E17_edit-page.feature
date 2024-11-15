Feature: Edit page
  @user1 @web
  Scenario: E17 - Edit an existing page
    Given the user navigates to Ghost at "<GHOST>"
    And the user logs in using the credentials "<USERNAME>" and "<PASSWORD>"
    And the user navigates to the pages page
    When the user clicks Go to Editor
    And the user updates the title to "<NEW_TITLE>"
    And the user updates the content to "<NEW_CONTENT>"
    And the user clicks on the 'Update' link
    And I wait for 2 seconds
    Then the user should see the updated page title "<NEW_TITLE>"
    And I wait for 5 seconds
