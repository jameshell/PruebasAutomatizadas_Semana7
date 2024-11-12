import GivenSteps from "./steps/givenSteps";
import pagesPage from "./pages/pagesPage";
import { faker } from "@faker-js/faker";
import WhenSteps from "./steps/whenSteps";
import whenSteps from "./steps/whenSteps";

describe("Pages - Edit page title and description", () => {

    beforeEach(() => {
        // Given the User navigates to the login page
        GivenSteps.givenNavigateToLoginPage();
        // and enters a valid username and password and click the login button
        GivenSteps.givenLogin();
        // and navigates to the Pages
        GivenSteps.giveNavigateToPagesPage();
        //Create a page with description
        pagesPage.mockPageWithDescription();
        cy.get('button.close').click()
    });

    it('E17 - Should edit a page', () => {
        const randomPageDescription = faker.lorem.paragraph();
        const randomPageTitle = faker.lorem.sentence({min: 3, max: 5});
        // When
        // pagesPage.updateBtn_Click()
        WhenSteps.WhenClickUpdateBtn();

        // pagesPage.fillPageHeader(randomPageTitle);
        WhenSteps.WhenFillPageHeader(randomPageTitle);

        // pagesPage.fillPageDescription(randomPageDescription)
        WhenSteps.WhenFillPageDescription(randomPageDescription);

        // pagesPage.updateButton_Click();
        WhenSteps.WhenClickUpdateButton();

        //Then
        // pagesPage.verifyContentExists(randomPageTitle);
        // pagesPage.verifyContentExists(randomPageDescription);
    });
});
