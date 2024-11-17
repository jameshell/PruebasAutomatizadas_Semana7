Feature: Create complete page
  @user1 @web
  Scenario: E19 - Create page with title, description, and image
    Given the user navigates to Ghost at "<GHOST>"
    And the user logs in using the credentials "<USERNAME>" and "<PASSWORD>"
    And the user navigates to the pages page
    And I save device snapshot in sequential file 'E19' '1'
    When the user clicks on the 'New page' link
    And I save device snapshot in sequential file 'E19' '2'
    And the user fills the title "<TITLE>"
    And I save device snapshot in sequential file 'E19' '3'
    And the user fills the content "<CONTENT>"
    And I save device snapshot in sequential file 'E19' '4'
    And the user clicks add image
    And I wait for 5 seconds
    And I save device snapshot in sequential file 'E19' '5'
    And the user clicks on the first image
    And I save device snapshot in sequential file 'E19' '6'
    And the user clicks on the 'Publish' button
    And I save device snapshot in sequential file 'E19' '7'
    And I wait for 2 seconds
    And The user clicks on the button continue publishing Page
    And User clicks on the publish now button on Page
    Then the user should see the created page description "<CONTENT>"
    And I save device snapshot in sequential file 'E19' '8'
    And I wait for 5 seconds

