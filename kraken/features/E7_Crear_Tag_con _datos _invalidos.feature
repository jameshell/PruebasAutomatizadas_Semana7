Feature: Crear tag

@user1 @web
Scenario: E7 - Crear tag con datos invalidos
  Given the user navigates to Ghost at "<GHOST>"
  And the user logs in using the credentials "<USERNAME>" and "<PASSWORD>"
  And I save device snapshot in sequential file 'E7' '1'
  And the user navigates to the tags page
  And I save device snapshot in sequential file 'E7' '2'
  When the user cliks on the new tag
  And I save device snapshot in sequential file 'E7' '3'
  And enter invalid name tag
  And I save device snapshot in sequential file 'E7' '4' 
  And enter invalid description tag
  And I save device snapshot in sequential file 'E7' '5'
  
  Then click in save tag
  And I save device snapshot in sequential file 'E7' '6'
  And I wait for 5 seconds
