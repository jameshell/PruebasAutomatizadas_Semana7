Feature: E5_create empty post

@user1 @web
Scenario: E5_create empty post
  Given the user navigates to Ghost at "<GHOST>"
  And I set the browser window post to 1024x768
  And the user logs in using the credentials "<USERNAME>" and "<PASSWORD>"
  And the user navigates to the post page
  And I save device snapshot in sequential file1 "<DIR-E5>"
  When the user cliks on the new post
  And I save device snapshot in sequential file1 "<DIR-E5>"
  Then the button should not be visible
  And I save device snapshot in sequential file1 "<DIR-E5>"
  And I wait for 2 seconds