Feature: E5_create empty post

@user1 @web
Scenario: E5_create empty post
  Given the user navigates to Ghost at "<GHOST>"
  And the user logs in using the credentials "<USERNAME>" and "<PASSWORD>"
  And the user navigates to the post page
  And I save device snapshot in sequential file 'E5' '1'
  When the user cliks on the new post
  And I save device snapshot in sequential file 'E5' '2'
  Then the button should not be visible
  And I save device snapshot in sequential file 'E5' '3'
  And I wait for 5 seconds