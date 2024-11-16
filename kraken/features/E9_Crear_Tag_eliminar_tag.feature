Feature: Crear tag

@user1 @web
Scenario: E9 - Crear tag con datos validos y eliminarlo
  Given the user navigates to Ghost at "<GHOST>"
  And the user logs in using the credentials "<USERNAME>" and "<PASSWORD>"
  And I save device snapshot in sequential file 'E9' '1'
  And the user navigates to the tags page
  And I save device snapshot in sequential file 'E9' '2'
  And the user cliks on the new tag
  And I save device snapshot in sequential file 'E9' '3'
  And enter name tag to delete "ToDelete"
  And I save device snapshot in sequential file 'E9' '4'
  And enter description tag "<TAGDESCRIPTION>"
  And I save device snapshot in sequential file 'E9' '5'
  And click in save tag
  And I save device snapshot in sequential file 'E9' '6'

  When click again tags
  And I save device snapshot in sequential file 'E9' '7'
  And click in tag to delete
  And I save device snapshot in sequential file 'E9' '8'
  And click delete
  And I save device snapshot in sequential file 'E9' '9'
  
  Then click confirm delete
  And I save device snapshot in sequential file 'E9' '10'
  And I wait for 5 seconds
  

