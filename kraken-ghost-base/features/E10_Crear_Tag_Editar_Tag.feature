Feature: Editar tag

@user1 @web
Scenario: E10 - Editar tag con datos validos
  Given the user navigates to Ghost at "<GHOST>"
  And the user logs in using the credentials "<USERNAME>" and "<PASSWORD>"
  And I save device snapshot in sequential file 'E10' '1'
  And the user navigates to the tags page
  And I save device snapshot in sequential file 'E10' '2'
  And the user cliks on the new tag
  And I save device snapshot in sequential file 'E10' '3'
  And enter name tag to delete "ToDelete"
  And I save device snapshot in sequential file 'E10' '4'
  And enter description tag "<TAGDESCRIPTION>"
  And I save device snapshot in sequential file 'E10' '5'
  And click in save tag
  And I save device snapshot in sequential file 'E10' '6'

  When click again tags
  And I save device snapshot in sequential file 'E10' '7'
  And click in tag to edit
  And I save device snapshot in sequential file 'E10' '8'
  And edit the tag name 'EditTag'
  And I save device snapshot in sequential file 'E10' '9'
  And edit the tag description 'descriptioneditok'
  And I save device snapshot in sequential file 'E10' '10'
  
  Then click in save tag
  And I save device snapshot in sequential file 'E10' '11'
  And click again tags
  And I save device snapshot in sequential file 'E10' '12'
  And I wait for 5 seconds
