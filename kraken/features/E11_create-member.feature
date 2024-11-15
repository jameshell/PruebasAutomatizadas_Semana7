Feature: Create member
  @user1 @web
  Scenario: E11 - Create member with valid values
    Given the user navigates to Ghost at "<GHOST>"
    And I save device snapshot in sequential file 'E11' '1'
    And the user logs in using the credentials "<USERNAME>" and "<PASSWORD>"
    And I save device snapshot in sequential file 'E11' '2'
    And the user navigates to the members page
    And I save device snapshot in sequential file 'E11' '3'
    And the user clicks on the 'New member' link
    And I save device snapshot in sequential file 'E11' '4'
    And the user fills the form with the data Name: "<NAME>", Email: "<EMAIL>", Note: "<NOTE>"
    And I save device snapshot in sequential file 'E11' '5'
    When the user clicks on the 'Save' button
    And I save device snapshot in sequential file 'E11' '6'
    Then the user should see the created member name "<NAME>"
    And I save device snapshot in sequential file 'E11' '7'
    And I wait for 5 seconds

 