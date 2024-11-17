#Feature: Create page
#
#  @user1 @web
#  Scenario: E16 - Create page with valid values
#    Given the user navigates to Ghost at "<GHOST>"
#    And the user logs in using the credentials "<USERNAME>" and "<PASSWORD>"
#    And the user navigates to the pages page
#    And I save device snapshot in sequential file 'E16' '1'
#    When the user clicks on the 'New page' link
#    And I save device snapshot in sequential file 'E16' '2'
#    And the user fills the title "<TITLE>"
#    And I save device snapshot in sequential file 'E16' '3'
#    And the user fills the content "<CONTENT>"
#    And I save device snapshot in sequential file 'E16' '4'
#    And the user clicks on the 'Publish' button
#    And I save device snapshot in sequential file 'E16' '5'
#    And I wait for 2 seconds
#    And The user clicks on the button continue publishing Page
#    And I save device snapshot in sequential file 'E16' '6'
#    And User clicks on the publish now button on Page
#    Then the user should see the created page title "<TITLE>"
#    And I save device snapshot in sequential file 'E16' '7'
#    And I wait for 5 seconds

Feature: Create page
  @user1 @web
  Scenario: E16 - Create page with valid values
    Given the user navigates to Ghost at "<GHOST>"
    And the user logs in using the credentials "<USERNAME>" and "<PASSWORD>"
    And the user navigates to the pages page
    And I save device snapshot in sequential file 'E16' '1'
    And I wait for 1 seconds
    And the user cliks on the new post
    And I save device snapshot in sequential file 'E16' '2'
    And The user enters a title for the post
    And I save device snapshot in sequential file 'E16' '3'
    And the user cliks on the new post content
    And the user enters a content for the post
    And I save device snapshot in sequential file 'E16' '4'
    And The user clicks on the publish post button
    And I wait for 1 seconds
    And I save device snapshot in sequential file 'E16' '5'

    When User clicks on the publish now button
    And I wait for 1 seconds
    And I save device snapshot in sequential file 'E16' '6'
    Then Successful publication confirmation appears
    And I save device snapshot in sequential file 'E16' '7'
    Then the confirmation message should appear
    And I wait for 5 seconds



#Feature: Crear post
#
#  @user1 @web
#  Scenario: E1_create publication with valid data
#    Given the user navigates to Ghost at "<GHOST>"
#    And the user logs in using the credentials "<USERNAME>" and "<PASSWORD>"
#    And the user navigates to the post page
#    And I save device snapshot in sequential file 'E1' '1'
#    And I wait for 1 seconds
#    And the user cliks on the new post
#    And I save device snapshot in sequential file 'E1' '2'
#    And The user enters a title for the post
#    And I save device snapshot in sequential file 'E1' '3'
#    And the user cliks on the new post content
#    And the user enters a content for the post
#    And I save device snapshot in sequential file 'E1' '4'
#    And The user clicks on the publish post button
#    And I wait for 1 seconds
#    And I save device snapshot in sequential file 'E1' '5'
#
#    When User clicks on the publish now button
#    And I wait for 1 seconds
#    And I save device snapshot in sequential file 'E1' '6'
#    Then Successful publication confirmation appears
#    And I save device snapshot in sequential file 'E1' '7'
#    Then the confirmation message should appear
#    And I wait for 5 seconds