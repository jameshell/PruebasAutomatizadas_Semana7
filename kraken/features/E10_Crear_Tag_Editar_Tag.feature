Feature: Editar tag

@user1 @web
Scenario: Editar tag con datos validos
  Given the user navigates to Ghost at "<GHOST>"
  And the user logs in using the credentials "<USERNAME>" and "<PASSWORD>"
  And the user navigates to the tags page
  And the user cliks on the new tag
  And enter name tag to delete "ToDelete"
  And enter description tag "<TAGDESCRIPTION>"
  And click in save tag

  When click again tags
  And click in tag to edit
  And edit the tag name 'EditTag'
  And edit the tag description 'descriptioneditok'
  
  Then click in save tag
  And click again tags
