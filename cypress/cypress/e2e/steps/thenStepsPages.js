import PagesPage from "../pages/pagesPage";
import pagesPage from "../pages/pagesPage";

class ThenStepsPages {
    thenIsPublishFlowComplete() {
        PagesPage.isPublishFlowComplete();
    }

    thenIsModalHeaderCorrect(randomPageDescription) {
        PagesPage.isModalHeaderCorrect(randomPageDescription);
    }

    thenPublishButton_ShouldNotExist(){
        pagesPage.publishButton_ShouldNotExist();
    }

    thenIsModalHeaderCorrect_Untitled(){
        pagesPage.isModalHeaderCorrect_Untitled();
    }

    thenIsModalDescriptionCorrect(randomPageDescription) {
        pagesPage.isModalDescriptionCorrect(randomPageDescription);
    }

    thenShouldUpdatePage(){
        pagesPage.ShouldUpdatePage();
    }

    thenShouldNotUpdatePage(){
        pagesPage.ShouldNotUpdatePage();
    }

    thenIsDraftSaved() {
        pagesPage.isDraftSaved();
    }

    thenShouldNotAllowTitleLongerThan255() {
        pagesPage.ShouldNotAllowTitleLongerThan255();
    }
}

export default new ThenStepsPages();
