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

function validUrl(seed=null){
  if(seed !== null){
      faker.seed(seed);
    }
  let metaUrl = '';
  return metaUrl = faker.internet.url()
    
}

describe("Tag url metadata valido", () => {
    beforeEach(() => {
        // Given the User navigates to the login page
        GivenStepsTag.givenNavigateToLoginPage();
        // and enters a valid username and password and click the login button
        GivenStepsTag.givenLogin();
        // and navigates to the Tags
        GivenStepsTag.givenNavigateToTagPage();

      })

    it("105 - Tag URL metadata mayor valido ", () => {
    
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
      const descripcionMeta = longDescrption(50,66)
      // And fill the description with valid paragraph
      WhenStepsTag.whenFillMetadataDescriptionCard(descripcionMeta);

      // Generate a valid URL using Faker with SEED
      const urlMeta = validUrl(66)
      // And fill the URL valid for Metadata
      WhenStepsTag.whenFillMetadataUrl(urlMeta);

      
    // then save the tag
      ThenStepsTag.thenSaveTag();
  
        
    });
    
    })