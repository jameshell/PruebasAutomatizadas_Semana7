Feature: Crear tag

@user1 @web
Scenario: Crear tag con datos validos
  Given the user navigates to Ghost at "<GHOST>"
  And the user logs in using the credentials "<USERNAME>" and "<PASSWORD>"
  And the user navigates to the tags page
  And the user cliks on the new tag
  And enter name tag "<TAGTEST>"
  And enter description tag "<TAGDESCRIPTION>"
  
  When click in save tag
   
  Then click again tags
 
