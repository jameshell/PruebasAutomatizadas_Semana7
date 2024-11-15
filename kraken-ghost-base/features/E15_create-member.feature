Feature: Edit Member
  @user1 @web
  Scenario: E15 - Create member with Invalid Values
    Given the user navigates to Ghost at "<GHOST>"
    And I save device snapshot in sequential file 'E15' '1'
    And the user logs in using the credentials "<USERNAME>" and "<PASSWORD>"
    And I save device snapshot in sequential file 'E15' '2'
    And the user navigates to the members page
    And I save device snapshot in sequential file 'E15' '3'
    And the user clicks on the 'New member' link
    And I save device snapshot in sequential file 'E15' '4'
    And the user fills the form with the data Name: "<NAME>", Email: "<EMAIL2>", Note: "<NOTE2>"
    And I save device snapshot in sequential file 'E15' '5'
    When the user clicks on the 'Save' button
    And I save device snapshot in sequential file 'E15' '6'
    Then the user should see the message 'Invalid Email.'
    And I save device snapshot in sequential file 'E15' '7'
    And the user should see the message 'Note is too long.'
    And I wait for 5 seconds