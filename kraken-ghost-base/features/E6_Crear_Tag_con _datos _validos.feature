Feature: Crear tag

@user1 @web
Scenario: E6 - Crear tag con datos validos
  Given the user navigates to Ghost at "<GHOST>"
  And the user logs in using the credentials "<USERNAME>" and "<PASSWORD>"
  And I save device snapshot in sequential file 'E6' '1'
  And the user navigates to the tags page
  And I save device snapshot in sequential file 'E6' '2'
  And the user cliks on the new tag
  And I save device snapshot in sequential file 'E6' '3'
  And enter name tag "<TAGTEST>"
  And I save device snapshot in sequential file 'E6' '4'
  And enter description tag "<TAGDESCRIPTION>"
  And I save device snapshot in sequential file 'E6' '5'
  
  When click in save tag
  And I save device snapshot in sequential file 'E6' '6'
   
  Then click again tags
  And I save device snapshot in sequential file 'E6' '7'
  And I wait for 5 seconds
