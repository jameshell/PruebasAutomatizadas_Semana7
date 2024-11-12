class DashboardPage {
    get membersLink(){
        return cy.get('li>a[href="#/members/"]');
    }

    get pagesLink(){
        return cy.get('li>a[href="#/pages/"]');
    }
    
    clickMembersLink(){
        cy.wait(2000);
        this.membersLink.click();
    }

    clickPagesLink(){
        cy.wait(1000);
        this.pagesLink.click();
    }
    get tagLink(){
        return cy.get('li>a[href="#/tags/"]').click();
    }
    clickTagLink(){
        cy.wait(2000);
        this.tagLink.click();
    }

    get postsLink(){
        return cy.get('li>a[href="#/posts/"]');
    }

    clickPostsLink(){
        cy.wait(2000);
        this.postsLink.click();
    }
}

export default new DashboardPage();
