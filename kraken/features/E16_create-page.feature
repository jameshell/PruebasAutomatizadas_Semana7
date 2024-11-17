Feature: Create page

  @user1 @web
  Scenario: E16 - Create page with valid values
    Given the user navigates to Ghost at "<GHOST>"
    And the user logs in using the credentials "<USERNAME>" and "<PASSWORD>"
    And the user navigates to the pages page
    And I save device snapshot in sequential file 'E16' '1'
    When the user clicks on the 'New page' link
    And I save device snapshot in sequential file 'E16' '2'
    And the user fills the title "<TITLE>"
    And I save device snapshot in sequential file 'E16' '3'
    And the user fills the content "<CONTENT>"
    And I save device snapshot in sequential file 'E16' '4'
    And the user clicks on the 'Publish' button
    And I save device snapshot in sequential file 'E16' '5'
    And I wait for 2 seconds
    And The user clicks on the button continue publishing Page
    And I save device snapshot in sequential file 'E16' '6'
    And User clicks on the publish now button on Page
    Then the user should see the created page title "<TITLE>"
    And I save device snapshot in sequential file 'E16' '7'
    And I wait for 5 seconds
