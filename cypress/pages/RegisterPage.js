export class Register {
    txtFirstName = "#input-firstname";
    txtLastName = "#input-lastname";
    txtEmail = "#input-email";
    txtPhn = "#input-telephone";
    txtPass = "#input-password";
    txtConfirmPass = "#input-confirm";
    privacyCheckBox = "[type='checkbox']";
    submitBtn = ".btn.btn-primary";
     //url = "https://naveenautomationlabs.com/opencart/index.php?route=account/register";
    openApp(url){
        cy.visit(url);
    }
    enterFname(Fname) {
        cy.get(this.txtFirstName).type(Fname);
    }
    enterLname(Lname) {
        cy.get(this.txtLastName).type(Lname);
    }
    enterEmail(email) {
        cy.get(this.txtEmail).type(email);
    }
    enterPhn(phn){
        cy.get(this.txtPhn).type(phn);
    }
    enterPass(pass){
        cy.get(this.txtPass).type(pass);
    }
    enterConfirmPass(Confirmpass){
        cy.get(this.txtConfirmPass).type(Confirmpass);
    }
    clickPrivacy(){
        cy.get(this.privacyCheckBox).click();
    }
    clickSubmitBtn(){
        cy.get(this.submitBtn).click();
    }

}