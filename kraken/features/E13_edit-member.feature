Feature: Edit Member
  @user1 @web
  Scenario: E13 - Edit member with valid values
    Given the user navigates to Ghost at "<GHOST>"
    And I save device snapshot in sequential file 'E13' '1'
    And the user logs in using the credentials "<USERNAME>" and "<PASSWORD>"
    And I save device snapshot in sequential file 'E13' '2'
    And the user navigates to the members page
    And I save device snapshot in sequential file 'E13' '3'
    And the user clicks on a member name "<NAME>"
    And I save device snapshot in sequential file 'E13' '4'
    And the user fills the form with the data Name: "<NAME2>", Email: "<EMAIL3>", Note: "<NOTE3>"
    And I save device snapshot in sequential file 'E13' '5'
    When the user clicks on the 'Save' button
    And I save device snapshot in sequential file 'E13' '6'
    Then the user should see the created member name "<NAME2>"
    And I save device snapshot in sequential file 'E13' '7'
    And I wait for 5 seconds