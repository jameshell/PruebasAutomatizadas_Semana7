Feature: Crear tag

@user1 @web
Scenario: Crear tag con datos vacios
  Given the user navigates to Ghost at "<GHOST>"
  And the user logs in using the credentials "<USERNAME>" and "<PASSWORD>"
  And the user navigates to the tags page
  
  When the user cliks on the new tag
  
  Then click in save tag
  