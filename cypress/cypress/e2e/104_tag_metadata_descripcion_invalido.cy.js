import GivenStepsTag from "./steps/givenStepsTag"
import ThenStepsTag from "./steps/thenStepsTag"
import WhenStepsTag from "./steps/whenStepsTag"
import {faker} from "@faker-js/faker";


function longDescrption(longDesc = 500, seed=null){
  
  if(seed !== null){
    faker.seed(seed);
  }
  let description = '';
  while(description.length < longDesc){
    description += '' + faker.lorem.paragraph();
  } 
  description = description.trim();
  return description;
}

function validTagName(seed=null){
  if(seed !== null){
    faker.seed(seed);
  }
  let nameTagValid = '';
  return nameTagValid = faker.commerce.productAdjective()
}

describe("Tag descripcion metadata invalido", () => {
    beforeEach(() => {
        // Given the User navigates to the login page
        GivenStepsTag.givenNavigateToLoginPage();
        // and enters a valid username and password and click the login button
        GivenStepsTag.givenLogin();
        // and navigates to the Tags
        GivenStepsTag.givenNavigateToTagPage();

      })

    it("104 - Tag descripcion metadata mayor a 500 caracteres invalido ", () => {
    
      //  When the user clicks on New tag
      WhenStepsTag.whenClickTagNewTag();
      
      // Generate a tag name using Faker with SEED
      const nameTag = validTagName(44)
      // and fills the name tag input
      WhenStepsTag.whenFillNameTag(nameTag);
    
      // And click on expand in FB card
      WhenStepsTag.whenExpandMetadatacard();
    
      // Generate a metadata name using Faker with SEED
      const nameMeta = validTagName(66)
      // And fills the name metadata 
      WhenStepsTag.whenFillNameMetadataCard(nameMeta);

      // Generate a long description > 500 using Faker with SEED
      const descripcionMeta = longDescrption(501,55)
      // And fill the description with invalid paragraph
      WhenStepsTag.whenFillMetadataDescriptionCard(descripcionMeta);

      // then save the tag
      ThenStepsTag.thenSaveTag();
  
        
    });
    
    })
