import GivenStepsTag from "./steps/givenStepsTag"
import ThenStepsTag from "./steps/thenStepsTag"
import WhenStepsTag from "./steps/whenStepsTag"
import {faker} from "@faker-js/faker";


function longDescrption(longDesc = 500){
  
  let description = '';
  while(description.length < longDesc){
    description += '' + faker.lorem.paragraph();
  } 
  description = description.trim();
  return description;
}

function validTagName(){

  let nameTagValid = '';
  return nameTagValid = faker.commerce.productAdjective()
}

describe("Tag titulo y descripcion metadata invalido", () => {
    beforeEach(() => {
        // Given the User navigates to the login page
        GivenStepsTag.givenNavigateToLoginPage();
        // and enters a valid username and password and click the login button
        GivenStepsTag.givenLogin();
        // and navigates to the Tags
        GivenStepsTag.givenNavigateToTagPage();

      })

    it("108 - Tag titulo y descripcion metadata mayor a 500 caracteres invalido ", () => {
    
      //  When the user clicks on New tag
      WhenStepsTag.whenClickTagNewTag();
      
      // Generate a tag name using Faker 
      const nameTag = validTagName()
      // and fills the name tag input
      WhenStepsTag.whenFillNameTag(nameTag);
    
      // And click on expand in FB card
      WhenStepsTag.whenExpandMetadatacard();
    
      // Generate a metadata name using Faker 
      const nameMeta = longDescrption(300)
      // And fills the name metadata > 300 invalid
      WhenStepsTag.whenFillNameMetadataCard(nameMeta);

      // Generate a long description > 500 using Faker 
      const descripcionMeta = longDescrption(501)
      // And fill the description with invalid paragraph
      WhenStepsTag.whenFillMetadataDescriptionCard(descripcionMeta);

      // then save the tag
      ThenStepsTag.thenSaveTag();
      // And assert that the error message is displayed
      cy.get('p.response')
      .should('exist')
      .and('contain', 'Meta Title cannot be longer than 300 characters');
  
        
    });
    
    })