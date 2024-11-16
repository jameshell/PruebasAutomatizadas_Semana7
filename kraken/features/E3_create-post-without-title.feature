Feature: E3_Create post without title

@user1 @web
Scenario: E3_Create post without title
  Given the user navigates to Ghost at "<GHOST>"
  And the user logs in using the credentials "<USERNAME>" and "<PASSWORD>"
  And the user navigates to the post page
  And I save device snapshot in sequential file 'E3' '1'
  And the user cliks on the new post
  And I save device snapshot in sequential file 'E3' '2'
  And the user cliks on the new post content
  And I save device snapshot in sequential file 'E3' '3'
  And the user enters a content for the post
  And I save device snapshot in sequential file 'E3' '4'
  And The user clicks on the publish post button
  And I save device snapshot in sequential file 'E3' '5'
  And The user clicks on the button continue publishing
  And I save device snapshot in sequential file 'E3' '6'

  When User clicks on the publish now button
  
  And I save device snapshot in sequential file 'E3' '7'
  Then Successful publication confirmation appears
  And I save device snapshot in sequential file 'E3' '8'
  Then the confirmation message untitled
  And I wait for 5 seconds