import TagPage from "../pages/tagPage"


class WhenStepsTag {

    whenClickTagNewTag(){
        TagPage.clickNewTag()
    }

    whenClickTagNewTag(){
        TagPage.clickNewTag()
    }

    whenFillInvalidNameTag(){
        TagPage.fillInvalidNameTag()
    }

    whenFillInvalidDescription(descriptionTag){
        TagPage.fillInvalidDescriptionTag(descriptionTag)
    }



}

export default new WhenStepsTag();