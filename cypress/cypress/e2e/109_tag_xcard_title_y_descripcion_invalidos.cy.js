import GivenStepsTag from "./steps/givenStepsTag"
import ThenStepsTag from "./steps/thenStepsTag"
import WhenStepsTag from "./steps/whenStepsTag"

const https = require("https");

var jsonData = null;

function generatePosts(recordCount = 10) {
    const API_KEY = Cypress.config("API_KEY"); 
    return new Promise((resolve, reject) => {

        const mockarooSchema = [
            { name: "tag_name", type: "Fake Company Name" },
            { name: "paragraphs_501", type: "Sentences", min:"23", max: "23"},
            { name: "paragraphs", type: "Paragraphs"},
            { name: "url", type: "URL"}
            
        ];

        const postData = JSON.stringify(mockarooSchema);
        const options = {
            hostname: "api.mockaroo.com",
            path: `/api/generate.json?key=${API_KEY}&count=${recordCount}`,
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Content-Length": postData.length
            }
        };
        const req = https.request(options, (res) => {
            let data = "";
            res.on("data", (chunk) => {
                data += chunk;
            });
            res.on("end", () => {
                if (res.statusCode === 200) {
                    var mock = JSON.parse(data);
                    resolve(mock);
                } else {
                    console.error("Error:", res.statusCode, res.statusMessage);
                }
            });
        })
        req.on("error", (error) => {
            console.error("Failed to generate mock data:", error.message);
            reject(error)
        });
        req.write(postData);
        req.end()
    });
}


describe("Tag Xcard titulo y descripcion invalido", () => {

    let data = [];
    before(() => {
      cy.wrap(generatePosts(), { timeout: 10000 }).then((response) => {
          jsonData = response;
          const value = Math.floor(Math.random() * 10);
          data = jsonData[value];
      })
    });

    beforeEach(() => {
        // Given the User navigates to the login page
        GivenStepsTag.givenNavigateToLoginPage();
        // and enters a valid username and password and click the login button
        GivenStepsTag.givenLogin();
        // and navigates to the Tags
        GivenStepsTag.givenNavigateToTagPage();

      })

    it("109 - Tag Xcard titulo y descripcion invalido ", () => {
    
      //  When the user clicks on New tag
      WhenStepsTag.whenClickTagNewTag();
      
      // Generate a tag name using mockaroo
      const nameTag = data['tag_name'];
      // and fills the name tag input
      WhenStepsTag.whenFillNameTag(nameTag);
    
      // And click on expand in FB card
      WhenStepsTag.whenExpandXcard();
    
      // Generate a xcard name using mockaroo
      const xcardName = data['paragraphs_501'];
      // And fills the name Xcard > 300 
      WhenStepsTag.whenFillNameXCard(xcardName);

      // Generate a long description > 500 using mockaroo
      const descripcionX = data['paragraphs_501'];
      // And fill the description X Card with valid paragraph
      WhenStepsTag.whenFillXDescriptionCard(descripcionX);
      
      // then save the tag
      ThenStepsTag.thenSaveTag();

      // And assert that the error message is displayed
      ThenStepsTag.thenAssertErrorDescriptionX();  

        
    });
    
    })