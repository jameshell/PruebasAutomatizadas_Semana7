Feature: Crear post

@user1 @web
Scenario: E5_create empty post
  Given the user navigates to Ghost at "<GHOST>"
  And the user logs in using the credentials "<USERNAME>" and "<PASSWORD>"
  And the user navigates to the post page
  And I wait for 2 seconds
  When the user cliks on the new post
  And I wait for 2 seconds
  Then the button should not be visible
  And I wait for 2 seconds