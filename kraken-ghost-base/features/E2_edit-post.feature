Feature: E2-Edit post with title and description

@user1 @web
Scenario: E2-Edit post with valid data
  Given the user navigates to Ghost at "<GHOST>"
  And the user logs in using the credentials "<USERNAME>" and "<PASSWORD>"
  And the user navigates to the post page
  And I save device snapshot in sequential file 'E2' '1'
  And the user clicks on the first post
  And I save device snapshot in sequential file 'E2' '2'
  And The user enters a title for the post
  And I save device snapshot in sequential file 'E2' '3'
  And the user cliks on the new post content
  And I save device snapshot in sequential file 'E2' '4'
  And the user enters a content for the post
  And I save device snapshot in sequential file 'E2' '5'
  And the user clicks on the updtate post button
  And I save device snapshot in sequential file 'E2' '6'

  When the user updates the post

  And I save device snapshot in sequential file 'E2' '7'
  And I wait for 1 seconds
  Then the confirmation update post
  And I save device snapshot in sequential file 'E2' '8'
  And I wait for 1 seconds
