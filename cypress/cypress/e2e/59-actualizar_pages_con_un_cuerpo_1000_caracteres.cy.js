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
        pagesPage.mockPageWithDescription();
        cy.get('button.close').click()
    });

    it('59 - Should edit a page with description of over 1000', () => {
        let randomPageDescription = "";
        while (randomPageDescription.length < 1000) {
            randomPageDescription += faker.lorem.paragraph();
        }
        randomPageDescription = randomPageDescription.slice(0, 1000);
        const randomPageTitle = faker.lorem.sentence({min: 3, max: 5});

        WhenStepsPages.WhenClickUpdateBtn();

        WhenStepsPages.WhenFillPageHeader(randomPageTitle);

        WhenStepsPages.WhenFillPageDescription(randomPageDescription);

        WhenStepsPages.WhenClickUpdateButton();

        cy.wait(1000);

        ThenStepsPages.thenShouldUpdatePage();
    });
});
