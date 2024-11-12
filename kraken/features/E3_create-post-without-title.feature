Feature: Crear post

@user1 @web
Scenario: E3_Create post without title
  Given the user navigates to Ghost at "<GHOST>"
  And the user logs in using the credentials "<USERNAME>" and "<PASSWORD>"
  And I wait for 2 seconds
  And the user navigates to the post page
  And I wait for 2 seconds
  When the user cliks on the new post
  And I wait for 2 seconds
  When the user cliks on the new post content
  And I wait for 2 seconds
  When the user enters a content for the post
  And I wait for 2 seconds
  When The user clicks on the publish post button
  And I wait for 2 seconds
  When The user clicks on the button continue publishing
  And I wait for 2 seconds
  When User clicks on the publish now button
  And I wait for 2 seconds
  Then Successful publication confirmation appears
  And I wait for 2 seconds
  Then the confirmation message untitled
  And I wait for 2 seconds