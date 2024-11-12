Feature: Edit Member
  @user1 @web
  Scenario: E15 - Create member with Invalid Values
    Given the user navigates to Ghost at "<GHOST>"
    And the user logs in using the credentials "<USERNAME>" and "<PASSWORD>"
    And the user navigates to the members page
    When the user clicks on the 'New member' link
    And the user fill the name "<NAME>" 
    And the user fill the email "<EMAIL2>" 
      And the user fill the note "<NOTE2>"
    And the user clicks on the 'Save' button
    And I wait for 2 seconds
    Then the user should see the message 'Invalid Email.'
    And the user should see the message 'Note is too long.'
    And I wait for 5 seconds