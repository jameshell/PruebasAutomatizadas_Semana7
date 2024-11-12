Feature: Edit Member
  @user1 @web
  Scenario: E13 - Edit member with valid values
    Given the user navigates to Ghost at "<GHOST>"
    And the user logs in using the credentials "<USERNAME>" and "<PASSWORD>"
    And the user navigates to the members page
    And the user clicks on a member name "<NAME>"
    And the user fill the name "<NAME2>" 
    And the user fill the email "<EMAIL3>" 
    And the user fill the note "<NOTE3>"
    And the user clicks on the 'Save' button
    And I wait for 5 seconds
    Then the user should see the created member name "<NAME2>"
    And I wait for 5 seconds