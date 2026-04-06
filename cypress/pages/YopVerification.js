export class YopMail {

    txtEmail = "[placeholder='Enter your inbox here']";
    btnSubmit = "[title='Check Inbox @yopmail.com']";

    openYop(url) {
        cy.visit(url);
    }
    enterMail(mail) {
        cy.get(this.txtEmail).type(mail);
    }
    clickSubmit() {
        cy.get(this.btnSubmit).click();
    }

    clickVerifyBtn() {
        cy.get('iframe[name="ifmail"]')
            .its('0.contentDocument.body') // Access the iframe's internal document
            .should('not.be.empty')
            .then(cy.wrap)
            .within(() => {
                //Remove 'target' attribute so it opens in the SAME window
                cy.contains('a', 'VERIFY')
                    .invoke('removeAttr', 'target')
                    .click();
            });
    }
}