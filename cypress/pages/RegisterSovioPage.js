export class RegisterSovio{
txtEmail = "input[placeholder='Enter your email']";
btnContinue ="button[type='submit']";
txtFirstName = "input[placeholder='First name']";
txtLastName = "input[placeholder='Last name']";
txtPassword = "input[placeholder='Create password']";
txtConfirmPass = "input[placeholder='Confirm password']";
btnCreateAcc = "button[type='submit']";
btnPassWord="button[class='flex flex-1 items-center justify-center rounded-none p-1 bg-background text-foreground ring-offset-background shadow-xs']";
btnPassKey = "button[class='flex flex-1 items-center justify-center rounded-none p-1 ']";
verificationMsg = "div[class='flex w-full flex-wrap items-center justify-between'] div";

// newwwwwwwwwwww@yopmail.com

enterEmail(email){
cy.get(this.txtEmail).type(email);
}

clickContinue(){
    cy.get(this.btnContinue).click();
}

enterFirstName(Fname){
    cy.get(this.txtFirstName).type(Fname);
}
enterLastName(Lname){
    cy.get(this.txtLastName).type(Lname);
}
enterPassWord(pass){
    cy.get(this.txtPassword).type(pass);
}
enterConPass(Cpass){
    cy.get(this.txtConfirmPass).type(Cpass);
}
clickCreateAcc(){
    cy.get(this.btnCreateAcc).click();
}
clickPassWord(){
    cy.get(this.btnPassWord).click();
}
clickPassKey(){
    cy.get(this.btnPassKey).click();
}

verifyMsg(){
    return cy.get(this.verificationMsg);
}




}