import { RegisterSovio } from "../../pages/RegisterSovioPage"
import registerDataSovio from "../../fixtures/registerDataSovio.json"
import { YopMail } from "../../pages/YopVerification";

const regObj = new RegisterSovio();
const yopObj = new YopMail();
function randomEmail() {
    var email;
    const randomInt = Math.floor(Math.random() * 1000) + Math.floor(Math.random() * 100) + Math.floor(Math.random() * 100);
    return email = "user" + randomInt + "@yopmail.com";
}

let currentEmail = randomEmail();
describe("Register Flow", () => {
    it.skip("RegisterUsingPassWord1", () => {
        cy.regAndSendLink(currentEmail);
        regObj.verifyMsg().should('have.text', registerDataSovio.register.verifyMsg);
        cy.verifyYopEmail(currentEmail);   //  To verify the email through YOPmail
        // cy.url().should('include',"https://qa.sovio.id/verify-email-success");
    })

    it.skip("RegisterUsingPassWord2", () => {
        cy.visit(registerDataSovio.url.regUrl);
        regObj.enterEmail(currentEmail);
        regObj.clickContinue();
        // regObj.verifyMsg().should('have.text',registerDataSovio.register.verifyMsg);
        regObj.enterFirstName(registerDataSovio.register.firstname);
        regObj.enterLastName(registerDataSovio.register.lastname);
        regObj.enterPassWord(registerDataSovio.register.password);
        regObj.enterConPass(registerDataSovio.register.confirmpassword);
        regObj.clickCreateAcc();
    })


    it("RegisterUsingEmptyFname", () => {
        cy.visit(registerDataSovio.url.regUrl);
        regObj.enterEmail(registerDataSovio.register.email);
        regObj.clickContinue();
        cy.get("input[placeholder='Email address']").should('have.value', registerDataSovio.register.email);
        cy.get(regObj.txtFirstName).clear();
        regObj.enterLastName(registerDataSovio.register.lastname);
        regObj.enterPassWord(registerDataSovio.register.password);
        regObj.enterConPass(registerDataSovio.register.confirmpassword);
        regObj.clickCreateAcc();
        // validation of Firstname field error messge i.e, First name is required
        cy.get(".text-destructive.mt-1.text-sm").should('have.text', "First name is required");

    })

    it("RegisterUsingEmptyLastName", () => {
        cy.visit(registerDataSovio.url.regUrl);
        regObj.enterEmail(registerDataSovio.register.email);
        regObj.clickContinue();
        cy.get("input[placeholder='Email address']").should('have.value', registerDataSovio.register.email);
        regObj.enterFirstName(registerDataSovio.register.firstname);
        cy.get(regObj.txtLastName).clear();
        regObj.enterPassWord(registerDataSovio.register.password);
        regObj.enterConPass(registerDataSovio.register.confirmpassword);
        regObj.clickCreateAcc();
        cy.get(".text-destructive.mt-1.text-sm").should('have.text', "Last name is required");
        // cy.get(".flex-1 p").eq(0).should('have.text',"Last name is required");


    })

    it("RegisterUsingEmptyPassword", () => {
        cy.visit(registerDataSovio.url.regUrl);
        regObj.enterEmail(registerDataSovio.register.email);
        regObj.clickContinue();
        cy.get("input[placeholder='Email address']").should('have.value', registerDataSovio.register.email);
        regObj.enterFirstName(registerDataSovio.register.firstname);
        regObj.enterLastName(registerDataSovio.register.lastname);
        cy.get(regObj.txtPassword).clear();
        regObj.enterConPass(registerDataSovio.register.confirmpassword);
        regObj.clickCreateAcc();
        cy.get(".relative p").eq(1).should('have.text', "Password is required");
    })

    it("RegisterUsingEmptyConfirmPassword", () => {
        cy.visit(registerDataSovio.url.regUrl);
        regObj.enterEmail(registerDataSovio.register.email);
        regObj.clickContinue();
        cy.get("input[placeholder='Email address']").should('have.value', registerDataSovio.register.email);
        regObj.enterFirstName(registerDataSovio.register.firstname);
        regObj.enterLastName(registerDataSovio.register.lastname);
        regObj.enterPassWord(registerDataSovio.register.password);
        cy.get(regObj.txtConfirmPass).clear();
        regObj.clickCreateAcc();
        cy.get(".relative p").eq(1).should('have.text', "Confirm Password is required");
    })

    it("RegisterUsingSingleAlphabetFnameLname", () => {
        cy.visit(registerDataSovio.url.regUrl);
        regObj.enterEmail(registerDataSovio.register.email);
        regObj.clickContinue();
        cy.get("input[placeholder='Email address']").should('have.value', registerDataSovio.register.email);
        regObj.enterFirstName(registerDataSovio.register.singleAlphaFname);
        regObj.enterLastName(registerDataSovio.register.singleAlphaLname);
        regObj.enterPassWord(registerDataSovio.register.password);
        regObj.enterConPass(registerDataSovio.register.confirmpassword);
        regObj.clickCreateAcc();
        cy.get(".flex-1 p").eq(0).should('have.text',"Please enter at least two characters");
        cy.get(".flex-1 p").eq(1).should('have.text',"Please enter at least two characters");
    })


    it("RegisterUsingPasswordLengthLessThan8Character",()=>{
        cy.visit(registerDataSovio.url.regUrl);
        regObj.enterEmail(registerDataSovio.register.email);
        regObj.clickContinue();
        cy.get("input[placeholder='Email address']").should('have.value', registerDataSovio.register.email);
        regObj.enterFirstName(registerDataSovio.register.firstname);
        regObj.enterLastName(registerDataSovio.register.lastname);
        regObj.enterPassWord(registerDataSovio.register.invalidPass);
        regObj.enterConPass(registerDataSovio.register.invalidPass);
        regObj.clickCreateAcc();
        cy.get(".text-destructive.mt-1.text-sm").should('have.text', "Password must be at least 8 characters");
    })
     it("RegisterUsingPasswordWithoutUpperCaseCharacter",()=>{
        cy.visit(registerDataSovio.url.regUrl);
        regObj.enterEmail(registerDataSovio.register.email);
        regObj.clickContinue();
        cy.get("input[placeholder='Email address']").should('have.value', registerDataSovio.register.email);
        regObj.enterFirstName(registerDataSovio.register.firstname);
        regObj.enterLastName(registerDataSovio.register.lastname);
        regObj.enterPassWord(registerDataSovio.register.withoutUCPass);
        regObj.enterConPass(registerDataSovio.register.withoutUCPass);
        regObj.clickCreateAcc();
        cy.get(".text-destructive.mt-1.text-sm").should('have.text', "Password must contain at least one lowercase letter, one uppercase letter, one number, and one special character");
    })

    it("RegisterUsingPasswordWithoutLowerCaseCharacter",()=>{
        cy.visit(registerDataSovio.url.regUrl);
        regObj.enterEmail(registerDataSovio.register.email);
        regObj.clickContinue();
        cy.get("input[placeholder='Email address']").should('have.value', registerDataSovio.register.email);
        regObj.enterFirstName(registerDataSovio.register.firstname);
        regObj.enterLastName(registerDataSovio.register.lastname);
        regObj.enterPassWord(registerDataSovio.register.withoutLCPass);
        regObj.enterConPass(registerDataSovio.register.withoutLCPass);
        regObj.clickCreateAcc();
        cy.get(".text-destructive.mt-1.text-sm").should('have.text', "Password must contain at least one lowercase letter, one uppercase letter, one number, and one special character");
    })

     it("RegisterUsingPasswordWithoutNumeric",()=>{
        cy.visit(registerDataSovio.url.regUrl);
        regObj.enterEmail(registerDataSovio.register.email);
        regObj.clickContinue();
        cy.get("input[placeholder='Email address']").should('have.value', registerDataSovio.register.email);
        regObj.enterFirstName(registerDataSovio.register.firstname);
        regObj.enterLastName(registerDataSovio.register.lastname);
        regObj.enterPassWord(registerDataSovio.register.withoutNumericPass);
        regObj.enterConPass(registerDataSovio.register.withoutNumericPass);
        regObj.clickCreateAcc();
        cy.get(".text-destructive.mt-1.text-sm").should('have.text', "Password must contain at least one lowercase letter, one uppercase letter, one number, and one special character");
    })

     it("RegisterUsingPasswordWithoutSpecialCharacter",()=>{
        cy.visit(registerDataSovio.url.regUrl);
        regObj.enterEmail(registerDataSovio.register.email);
        regObj.clickContinue();
        cy.get("input[placeholder='Email address']").should('have.value', registerDataSovio.register.email);
        regObj.enterFirstName(registerDataSovio.register.firstname);
        regObj.enterLastName(registerDataSovio.register.lastname);
        regObj.enterPassWord(registerDataSovio.register.withoutSpCharPass);
        regObj.enterConPass(registerDataSovio.register.withoutSpCharPass);
        regObj.clickCreateAcc();
        cy.get(".text-destructive.mt-1.text-sm").should('have.text', "Password must contain at least one lowercase letter, one uppercase letter, one number, and one special character");
    })


    it("RegisterUsingPasswordWithKeepingConfirmPassFieldEmpty",()=>{
        cy.visit(registerDataSovio.url.regUrl);
        regObj.enterEmail(registerDataSovio.register.email);
        regObj.clickContinue();
        cy.get("input[placeholder='Email address']").should('have.value', registerDataSovio.register.email);
        regObj.enterFirstName(registerDataSovio.register.firstname);
        regObj.enterLastName(registerDataSovio.register.lastname);
        regObj.enterPassWord(registerDataSovio.register.password);
        cy.get(regObj.txtConfirmPass).clear();
        regObj.clickCreateAcc();
        cy.get(".text-destructive.mt-1.text-sm").should('have.text', "Confirm Password is required");
    })

    it("RegisterUsingPasswordMismatchingPassConifrmPass",()=>{
         cy.visit(registerDataSovio.url.regUrl);
        regObj.enterEmail(registerDataSovio.register.email);
        regObj.clickContinue();
        cy.get("input[placeholder='Email address']").should('have.value', registerDataSovio.register.email);
        regObj.enterFirstName(registerDataSovio.register.firstname);
        regObj.enterLastName(registerDataSovio.register.lastname);
        regObj.enterPassWord(registerDataSovio.register.password);
        regObj.enterConPass(registerDataSovio.register.misMatchConfmPass);
        regObj.clickCreateAcc();
        cy.get(".text-destructive.mt-1.text-sm").should('have.text', "Passwords must match");
    })

    

})