  Feature: Create member
  @user1 @web
  Scenario: E12 - Create member with empty values
    Given the user navigates to Ghost at "<GHOST>"
    And I save device snapshot in sequential file 'E12' '1'
    And the user logs in using the credentials "<USERNAME>" and "<PASSWORD>"
    And I save device snapshot in sequential file 'E12' '2'
    And the user navigates to the members page
    And I save device snapshot in sequential file 'E12' '3'
    And  the user clicks on the 'New member' link
    And I save device snapshot in sequential file 'E12' '4'
    When the user clicks on the 'Save' button
    And I save device snapshot in sequential file 'E12' '5'
    Then the user should see the message 'Please enter an email.'
    And I save device snapshot in sequential file 'E12' '6'
    And I wait for 5 seconds
