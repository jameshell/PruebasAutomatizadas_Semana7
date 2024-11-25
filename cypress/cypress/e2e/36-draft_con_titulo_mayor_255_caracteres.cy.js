import GivenSteps from "./steps/givenSteps";
import pagesPage from "./pages/pagesPage";
import WhenStepsPages from "./steps/whenStepsPages";
import ThenStepsPages from "./steps/thenStepsPages";

describe("Pages - Create a draft with title greater than 255 characters", () => {

    beforeEach(() => {
        GivenSteps.givenNavigateToLoginPage();
        GivenSteps.givenLogin();
        GivenSteps.giveNavigateToPagesPage();

        Cypress.Screenshot.defaults({
            disableTimersAndAnimations: false,
        })
    });

    it('E31 - Should create a new page successfully with apriori data', () => {
        cy.fixture('pages').then((data) => {
            const randomPageTitle = data[0].Title_255;

            WhenStepsPages.WhenNewPageBtn_Click();

            WhenStepsPages.WhenFillPageHeader(randomPageTitle);

            WhenStepsPages.WhenClickAddImgBtn();

            WhenStepsPages.WhenClickAddImageBtn_FirstPic()

            ThenStepsPages.thenPublishButton_ShouldNotExist();
        });
    });
});
