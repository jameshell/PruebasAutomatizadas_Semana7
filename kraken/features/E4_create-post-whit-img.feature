Feature: Crear post

@user1 @web
Scenario:E4_Create full post with image
  Given the user navigates to Ghost at "<GHOST>"
  And the user logs in using the credentials "<USERNAME>" and "<PASSWORD>"
  And the user navigates to the post page
  And I wait for 2 seconds
  When the user cliks on the new post
  And I wait for 2 seconds
  When The user enters a title for the post
  And I wait for 2 seconds
  When the user cliks on the new post content
  And I wait for 2 seconds
  When the user enters a content for the post
  And I wait for 2 seconds
  When the user clicks add image
  And I wait for 2 seconds
  When the user clicks on the first image
  And I wait for 2 seconds
  When The user clicks on the publish post button
  And I wait for 2 seconds
  When The user clicks on the button continue publishing
  And I wait for 2 seconds
  When User clicks on the publish now button
  And I wait for 2 seconds
  Then Successful publication confirmation appears
  And I wait for 2 seconds
  Then the confirmation message should appear
  And I wait for 2 seconds

