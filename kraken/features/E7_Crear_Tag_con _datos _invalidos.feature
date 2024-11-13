Feature: Crear tag

@user1 @web
Scenario: Crear tag con datos invalidos
  Given the user navigates to Ghost at "<GHOST>"
  And the user logs in using the credentials "<USERNAME>" and "<PASSWORD>"
  And the user navigates to the tags page
  
  When the user cliks on the new tag
  And enter invalid name tag 
  And enter invalid description tag
  
  Then click in save tag
