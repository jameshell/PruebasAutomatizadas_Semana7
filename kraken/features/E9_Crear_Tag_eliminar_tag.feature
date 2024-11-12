Feature: Crear tag

@user1 @web
Scenario: Crear tag con datos validos
  Given the user navigates to Ghost at "<GHOST>"
  And the user logs in using the credentials "<USERNAME>" and "<PASSWORD>"
  And the user navigates to the tags page
  And I wait for 2 seconds
  
  When the user cliks on the new tag
  And I wait for 1 seconds
  And I enter name tag to delete "ToDelete"

  And I enter description tag "<TAGDESCRIPTION>"
  Then I click in save tag
  And I wait for 1 seconds

  Then I click again tags
  And I wait for 2 seconds
  And I click in tag to delete
  And I wait for 2 seconds
  And I click delete
  And I wait for 2 seconds
  Then I click confirm delete
  And I wait for 2 seconds

