#Feature: Edit page
#  @user1 @web
#  Scenario: E17 - Edit an existing page
#    Given the user navigates to Ghost at "<GHOST>"
#    And the user logs in using the credentials "<USERNAME>" and "<PASSWORD>"
#    And the user navigates to the pages page
#    And I save device snapshot in sequential file 'E17' '1'
#    When the user clicks Go to Editor
#    And I save device snapshot in sequential file 'E17' '2'
#    And the user updates the title to "<NEW_TITLE>"
#    And I save device snapshot in sequential file 'E17' '3'
#    And the user updates the content to "<NEW_CONTENT>"
#    And I save device snapshot in sequential file 'E17' '4'
#    And the user clicks on the 'Update' link
#    And I wait for 2 seconds
#    Then the user should see the updated page title "<NEW_TITLE>"
#    And I save device snapshot in sequential file 'E17' '5'
#    And I wait for 5 seconds


Feature: Edit page
  @user1 @web
  Scenario: E17 - Edit an existing page
    Given the user navigates to Ghost at "<GHOST>"
    And the user logs in using the credentials "<USERNAME>" and "<PASSWORD>"
    And the user navigates to the pages page
    And I save device snapshot in sequential file 'E17' '1'
    And the user clicks on the first post
    And The user enters a title for the post
    And I save device snapshot in sequential file 'E17' '2'
    And the user cliks on the new post content
    And the user enters a content for the post
    And I save device snapshot in sequential file 'E17' '3'
    And the user clicks on the updtate post button
    And I save device snapshot in sequential file 'E17' '4'
    When the user updates the post
    And I wait for 1 seconds
    Then the confirmation update post
    And I save device snapshot in sequential file 'E17' '5'
    And I wait for 5 seconds


#Feature: E2-Edit post with title and description

#  @user1 @web
#  Scenario: E2-Edit post with valid data
#    Given the user navigates to Ghost at "<GHOST>"
#    And the user logs in using the credentials "<USERNAME>" and "<PASSWORD>"
#    And the user navigates to the post page
#    And I save device snapshot in sequential file 'E2' '1'
#    And the user clicks on the first post
#    And I save device snapshot in sequential file 'E2' '2'
#    And The user enters a title for the post
#    And I save device snapshot in sequential file 'E2' '3'
#    And the user cliks on the new post content
#    And the user enters a content for the post
#    And I save device snapshot in sequential file 'E2' '4'
#    And the user clicks on the updtate post button
#    And I save device snapshot in sequential file 'E2' '5'
#
#    When the user updates the post
#
#    And I save device snapshot in sequential file 'E2' '6'
#    And I wait for 1 seconds
#    Then the confirmation update post
#    And I save device snapshot in sequential file 'E2' '7'
#    And I wait for 5 seconds
