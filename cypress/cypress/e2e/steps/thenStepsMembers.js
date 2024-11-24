import MemberPage from "../pages/memberPage";

class ThenStepsMembers {
    thenSeeCreatedMember(name, email){
        MemberPage.seeCreatedMember(name, email);
    }
    thenSeeEmailRequiredMemberForm(){
        MemberPage.seeEmailRequired();
    }
    thenSeeInvalidNote(){
        MemberPage.seeInvalidNote();
    }
    thenSeeInvalidEmail(){
        MemberPage.seeInvalidEmail();
    }
    thenSeeInvalidName(){
        MemberPage.seeInvalidName();
    }
}

export default new ThenStepsMembers();