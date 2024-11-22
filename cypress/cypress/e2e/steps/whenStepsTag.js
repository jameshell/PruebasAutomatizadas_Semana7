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

    whenFillNameTag(nameTag){
        TagPage.fillNameTag(nameTag)
    }

    whenFillInvalidDescription(descriptionTag){
        TagPage.fillInvalidDescriptionTag(descriptionTag)
    }

    whenExpandFbCard(){
        TagPage.expandFbCard()
    }

    whenFillNameFbCard(nameFbCard){
        TagPage.fillNameFbCard(nameFbCard)
    }

    whenFillFbDescriptionCard(descripcionFb){
        TagPage.fillDescriptionFb(descripcionFb)
    }

    whenExpandMetadatacard(){
        TagPage.expandMetadataCard()
    }

    whenFillNameMetadataCard(descripcionmMeta){
        TagPage.fillMetadataName(descripcionmMeta)
    }

    whenFillMetadataDescriptionCard(descripcionMeta){
        TagPage.fillMetadataDescription(descripcionMeta)
    }

    whenFillMetadataUrl(urlMeta){
        TagPage.fillMetadataUrl(urlMeta)
    }
    whenExpandXcard(){
        TagPage.expandXcard()
    }

    whenFillNameXCard(xcardName){
        TagPage.fillXcardName(xcardName)
    }

    whenFillXDescriptionCard(descripcionX){
        TagPage.fillXDescription(descripcionX)
    }
}

export default new WhenStepsTag();