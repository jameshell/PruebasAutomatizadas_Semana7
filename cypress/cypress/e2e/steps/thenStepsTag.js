import TagPage from "../pages/tagPage"


class ThenStepsTag {

    thenSaveTag(){
        TagPage.saveTag();
    }

    thenAssertErrorDescription(){
        TagPage.assertErrorDescription();
    }

    thenAssertErrorDescriptionFB(){
        TagPage.assertErrorDescriptionFB();
    }

    thenAssertErrorDescriptionX(){
        TagPage.assertErrorDescriptionX();
    }

    thenTagVisible(nameTag){
        TagPage.assertTagVisible(nameTag);
    }

    thenAssertErrorTagName(){
        TagPage.assertErrorTagName();
    }

    thenAssertErrorslugName(){
        TagPage.assertErrorSlugName();
    }

    thenAssertErrorTagColor(){
        TagPage.assertErrorTagColor();
    }
}

export default new ThenStepsTag();