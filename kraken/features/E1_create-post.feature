Feature: Crear post

@user1 @web
Scenario: E1_create publication with valid data
  Given the user navigates to Ghost at "<GHOST>"
  And I set the browser window post to 1024x768
  And the user logs in using the credentials "<USERNAME>" and "<PASSWORD>"
  And the user navigates to the post page
  And I save device snapshot in sequential file1 "<DIR-E1>"
  And the user cliks on the new post
  And I save device snapshot in sequential file1 "<DIR-E1>"
  And The user enters a title for the post
  And I save device snapshot in sequential file1 "<DIR-E1>"
  And the user cliks on the new post content
  And the user enters a content for the post
  And I save device snapshot in sequential file1 "<DIR-E1>"
  And The user clicks on the publish post button
  And I save device snapshot in sequential file1 "<DIR-E1>"
  And The user clicks on the button continue publishing
  And I save device snapshot in sequential file1 "<DIR-E1>"

  When User clicks on the publish now button

  And I save device snapshot in sequential file1 "<DIR-E1>"
  Then Successful publication confirmation appears
  And I save device snapshot in sequential file1 "<DIR-E1>"
  Then the confirmation message should appear
