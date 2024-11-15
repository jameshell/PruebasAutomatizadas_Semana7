Feature: Crear tag

@user1 @web
Scenario: E8 - Crear tag con datos vacios
  Given the user navigates to Ghost at "<GHOST>"
  And the user logs in using the credentials "<USERNAME>" and "<PASSWORD>"
  And I save device snapshot in sequential file 'E8' '1'
  And the user navigates to the tags page
  And I save device snapshot in sequential file 'E8' '2'
  When the user cliks on the new tag
  And I save device snapshot in sequential file 'E8' '3'
  Then click in save tag
  And I save device snapshot in sequential file 'E8' '4'