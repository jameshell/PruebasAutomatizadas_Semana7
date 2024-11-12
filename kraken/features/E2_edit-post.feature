Feature: Crear post

@user1 @web
Scenario: E2-Edit post with valid data
  Given the user navigates to Ghost at "<GHOST>"
  And the user logs in using the credentials "<USERNAME>" and "<PASSWORD>"
  And the user navigates to the post page
  And I wait for 2 seconds
  When the user clicks on the first post
  And I wait for 2 seconds
  When The user enters a title for the post
  And I wait for 2 seconds
  When the user cliks on the new post content
  And I wait for 2 seconds
  When the user enters a content for the post
  And I wait for 2 seconds
  When the user updates the post
  And I wait for 1 seconds
  Then the confirmation update post
  And I wait for 2 seconds
