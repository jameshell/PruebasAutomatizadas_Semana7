  Feature: Edit member
  @user1 @web
  Scenario: E14 - Edit member with invalid values
    Given the user navigates to Ghost at "<GHOST>"
    And the user logs in using the credentials "<USERNAME>" and "<PASSWORD>"
    And the user navigates to the members page
    And the user clicks on a member name "<NAME2>"
    And the user fill the name "<NAME2>" 
    And the user fill the email "<EMAIL2>" 
    And the user fill the note "<NOTE2>"
    And the user clicks on the 'Save' button
    Then the user should see the message 'Invalid Email.'
    And the user should see the message 'Note is too long.'
    And I wait for 5 seconds