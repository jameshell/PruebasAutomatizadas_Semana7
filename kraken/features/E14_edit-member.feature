  Feature: Edit member
  @user1 @web
  Scenario: E14 - Edit member with invalid values
    Given the user navigates to Ghost at "<GHOST>"
    And I save device snapshot in sequential file 'E14' '1'
    And the user logs in using the credentials "<USERNAME>" and "<PASSWORD>"
    And I save device snapshot in sequential file 'E14' '2'
    And the user navigates to the members page
    And I save device snapshot in sequential file 'E14' '3'
    And the user clicks on a member name "<NAME2>"
    And I save device snapshot in sequential file 'E14' '4'
    And the user fills the form with the data Name: "<NAME2>", Email: "<EMAIL2>", Note: "<NOTE2>"
    And I save device snapshot in sequential file 'E14' '5'
    When the user clicks on the 'Save' button
    And I save device snapshot in sequential file 'E14' '6'
    Then the user should see the message 'Invalid Email.'
    And I save device snapshot in sequential file 'E14' '7'
    And the user should see the message 'Note is too long.'
    And I wait for 5 seconds