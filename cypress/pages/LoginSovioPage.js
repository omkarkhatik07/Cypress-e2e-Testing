export class LoginSovio {
    txtEmail = "input[placeholder='test@example.com']";
    txtPassword = "input[type='password']";
    ForgotPassLink = "";
    toggleIcon = ".lucide.lucide-eye.h-4.w-4";
    submitBtn = "[type='submit']";
    createAcc = "a[class='url-link']";
    Emptyemail = ".text-destructive.text-sm"

    enterEmail(email) {
        cy.get(this.txtEmail).type(email);
    }

    enterPassword(pass) {
        cy.get(this.txtPassword).type(pass);
    }

    clickSignUp() {
        cy.get(this.submitBtn).click();
    }
    clickForgotPassLink() {
        cy.get(this.ForgotPassLink).click();
    }
    clickToggleIcon() {
        cy.get(this.toggleIcon).click();
    }
    clickCreateAcc() {
        cy.get(this.createAcc).click();
    }
    verifyUrl(){
        return cy.url();
    }
    emailValidation(){
         return cy.get(this.Emptyemail);
    }
}