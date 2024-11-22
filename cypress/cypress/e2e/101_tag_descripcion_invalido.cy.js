import GivenStepsTag from "./steps/givenStepsTag"
import ThenStepsTag from "./steps/thenStepsTag"
import WhenStepsTag from "./steps/whenStepsTag"
import {faker} from "@faker-js/faker";


function longDescrption(longDesc = 500, seed=null){
  
  if(seed !== null){
    faker.seed(seed);
  }
  let description = ''
  while(description.length < longDesc){
    description += '' + faker.lorem.paragraph();
  } 
  description = description.trim();
  return description;
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

    it("101 - Tag descripcion invalido ", () => {
    
      //  When the user clicks on New tag
      WhenStepsTag.whenClickTagNewTag();
      
    
      // and fills the name tag input
      
      WhenStepsTag.whenFillInvalidNameTag();
    
      
      // Generate a long description using Faker with SEED
      const descriptionTag = longDescrption(501,44)
      // and fill the description tag input
      WhenStepsTag.whenFillInvalidDescription(descriptionTag);
  
      // then save the tag
      ThenStepsTag.thenSaveTag();
  
        
    });
    
    })


