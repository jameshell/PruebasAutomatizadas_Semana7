Feature: E4_Create full post with image

@user1 @web
Scenario:E4_Create full post with image
  Given the user navigates to Ghost at "<GHOST>"
  And I set the browser window post to 1024x768
  And the user logs in using the credentials "<USERNAME>" and "<PASSWORD>"
  And the user navigates to the post page
  And I save device snapshot in sequential file1 "<DIR-E4>"
  And the user cliks on the new post
  And I save device snapshot in sequential file1 "<DIR-E4>"
  And The user enters a title for the post
  And I save device snapshot in sequential file1 "<DIR-E4>"
  And the user cliks on the new post content
  And I save device snapshot in sequential file1 "<DIR-E4>"
  And the user enters a content for the post
  And I save device snapshot in sequential file1 "<DIR-E4>"
  And the user clicks add image
  And I save device snapshot in sequential file1 "<DIR-E4>"
  And the user clicks on the first image
  And I save device snapshot in sequential file1 "<DIR-E4>"
  And The user clicks on the publish post button
  And I save device snapshot in sequential file1 "<DIR-E4>"
  And The user clicks on the button continue publishing
  And I save device snapshot in sequential file1 "<DIR-E4>"
  When User clicks on the publish now button
  And I save device snapshot in sequential file1 "<DIR-E4>"
  Then Successful publication confirmation appears
  And I save device snapshot in sequential file1 "<DIR-E4>"
  Then the confirmation message should appear
  And I wait for 2 seconds

