Feature: E2-Edit post with title and description

@user1 @web
Scenario: E2-Edit post with valid data
  Given the user navigates to Ghost at "<GHOST>"
  And I set the browser window post to 1024x768
  And the user logs in using the credentials "<USERNAME>" and "<PASSWORD>"
  And the user navigates to the post page
  And I save device snapshot in sequential file1 "<DIR-E2>"
  And the user clicks on the first post
  And I save device snapshot in sequential file1 "<DIR-E2>"
  And The user enters a title for the post
  And I save device snapshot in sequential file1 "<DIR-E2>"
  And the user cliks on the new post content
  And I save device snapshot in sequential file1 "<DIR-E2>"
  And the user enters a content for the post
  And I save device snapshot in sequential file1 "<DIR-E2>"

  When the user updates the post

  And I save device snapshot in sequential file1 "<DIR-E2>"
  And I wait for 1 seconds
  Then the confirmation update post
  And I save device snapshot in sequential file1 "<DIR-E2>"
  And I wait for 1 seconds
