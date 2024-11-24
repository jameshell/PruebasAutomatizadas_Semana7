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

describe("Tag descripcion invalido", () => {
    beforeEach(() => {
        // Given the User navigates to the login page
        GivenStepsTag.givenNavigateToLoginPage();
        // and enters a valid username and password and click the login button
        GivenStepsTag.givenLogin();
        // and navigates to the Tags
        GivenStepsTag.givenNavigateToTagPage();

      })

    it("101 - Tag descripcion invalido mayor a 500 caracteres", () => {
    
      //  When the user clicks on New tag
      WhenStepsTag.whenClickTagNewTag();
      
      // Generate a tag name using Faker
      const nameTag = validTagName()
      // and fills the name tag input
      WhenStepsTag.whenFillNameTag(nameTag);
    
      
      // Generate a long description > 501 using Faker
      const descriptionTag = longDescrption(501)
      // and fill the description tag input
      WhenStepsTag.whenFillInvalidDescription(descriptionTag);
  
      // then save the tag
      ThenStepsTag.thenSaveTag();

      // And assert that the error message is displayed
      ThenStepsTag.thenAssertErrorDescription();  

        
    });
    
    })


