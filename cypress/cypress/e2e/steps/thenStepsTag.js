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

}

export default new ThenStepsTag();