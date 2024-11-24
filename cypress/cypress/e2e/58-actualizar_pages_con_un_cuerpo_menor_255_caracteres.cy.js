import GivenSteps from "./steps/givenSteps";
import pagesPage from "./pages/pagesPage";
import { faker } from "@faker-js/faker";
import WhenStepsPages from "./steps/whenStepsPages";
import ThenStepsPages from "./steps/thenStepsPages";


describe("Pages - Edit page title and description", () => {

    beforeEach(() => {
        GivenSteps.givenNavigateToLoginPage();
        GivenSteps.givenLogin();
        GivenSteps.giveNavigateToPagesPage();
        pagesPage.AndScreenshot('58-596','1');
        pagesPage.mockPageWithDescription();
        cy.get('button.close').click()
    });

    it('58 - Should edit a page', () => {
        const randomPageDescription = faker.lorem.sentence({min: 3, max: 5});;
        const randomPageTitle = faker.lorem.sentence({min: 3, max: 5});

        WhenStepsPages.WhenClickUpdateBtn();
        pagesPage.AndScreenshot('58-596','2');

        WhenStepsPages.WhenFillPageHeader(randomPageTitle);
        pagesPage.AndScreenshot('58-596','3');

        WhenStepsPages.WhenFillPageDescription(randomPageDescription);
        pagesPage.AndScreenshot('58-596','4');

        WhenStepsPages.WhenClickUpdateButton();
        pagesPage.AndScreenshot('58-596','5');

        //Then
        ThenStepsPages.thenShouldUpdatePage();
    });
});
