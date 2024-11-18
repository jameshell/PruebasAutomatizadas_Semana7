#Feature: Create empty page
#  @user1 @web
#  Scenario: E20 - Create page with only description
#    Given the user navigates to Ghost at "<GHOST>"
#    And the user logs in using the credentials "<USERNAME>" and "<PASSWORD>"
#    And the user navigates to the pages page
#    And I save device snapshot in sequential file 'E20' '1'
#    When the user clicks on the 'New page' link
#    And I save device snapshot in sequential file 'E20' '2'
#    Then the button should not be visible
#    And I wait for 5 seconds


Feature: Create empty page
  @user1 @web
  Scenario: E20 - Create page with only description
    Given the user navigates to Ghost at "<GHOST>"
    And the user logs in using the credentials "<USERNAME>" and "<PASSWORD>"
    And the user navigates to the pages page
    And I save device snapshot in sequential file 'E20' '1'
    When the user cliks on the new post
    Then the button should not be visible
    And I save device snapshot in sequential file 'E20' '2'
    And I wait for 5 seconds


#Feature: E5_create empty post
#
#  @user1 @web
#  Scenario: E5_create empty post
#    Given the user navigates to Ghost at "<GHOST>"
#    And the user logs in using the credentials "<USERNAME>" and "<PASSWORD>"
#    And the user navigates to the post page
#    And I save device snapshot in sequential file 'E5' '1'
#    When the user cliks on the new post
#    And I save device snapshot in sequential file 'E5' '2'
#    Then the button should not be visible
#    And I save device snapshot in sequential file 'E5' '3'
#    And I wait for 5 seconds