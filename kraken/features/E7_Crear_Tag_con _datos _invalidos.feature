Feature: Crear tag

@user1 @web
Scenario: Crear tag con datos invalidos
  Given the user navigates to Ghost at "<GHOST>"
  And the user logs in using the credentials "<USERNAME>" and "<PASSWORD>"
  And the user navigates to the tags page
  And I wait for 2 seconds
  
  When the user cliks on the new tag
  And I wait for 1 seconds
  And I enter invalid name tag 
  And I wait for 1 seconds
  And I enter invalid description tag
  And I wait for 1 seconds
  Then I click in save tag
  And I wait for 1 seconds