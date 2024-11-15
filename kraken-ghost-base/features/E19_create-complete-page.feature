Feature: Create complete page
  @user1 @web
  Scenario: E19 - Create page with title, description, and image
    Given the user navigates to Ghost at "<GHOST>"
    And the user logs in using the credentials "<USERNAME>" and "<PASSWORD>"
    And the user navigates to the pages page
    When the user clicks on the 'New page' link
    And the user fills the title "<TITLE>"
    And the user fills the content "<CONTENT>"
    And the user clicks add image
    And the user clicks on the first image
    And the user clicks on the 'Publish' button
    And I wait for 2 seconds
    And The user clicks on the button continue publishing Page
    And User clicks on the publish now button on Page
    Then the user should see the created page description "<CONTENT>"
    And I wait for 5 seconds

