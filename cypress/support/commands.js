// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('regAndSendLink',(email)=>{
    cy.visit("https://qa.sovio.id/sign-up");
    cy.get("input[placeholder='Enter your email']").type(email);
    cy.get("button[type='submit']").click();
})




Cypress.Commands.add('verifyYopEmail', (email) => {
    const yopUrl = 'https://yopmail.com/en';
    cy.origin(yopUrl, { args: { email } }, ({ email }) => {
        cy.visit('/');
        cy.get("[placeholder='Enter your inbox here']").type(email);
        cy.get("[title='Check Inbox @yopmail.com']").click();
        cy.reload();    
        cy.wait(1000);
         cy.get('iframe[name="ifmail"]')
                .its('0.contentDocument.body') // Access the iframe's internal document
                .should('not.be.empty')
                .then(cy.wrap) // Wrap the body to use Cypress commands
                .within(() => {
                    // 2. Find the anchor tag containing "VERIFY"
                    // 3. Remove 'target' attribute so it opens in the SAME window
                    cy.contains('a', 'VERIFY')
                        .invoke('removeAttr', 'target')
                        .click();
                });

    });
});