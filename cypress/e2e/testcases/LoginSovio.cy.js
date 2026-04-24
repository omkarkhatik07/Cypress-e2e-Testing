import { LoginSovio } from "../../pages/LoginSovioPage";
import loginDataSovio from "../../fixtures/loginDataSovio.json";
import registerDataSovio from "../../fixtures/registerDataSovio.json";

const loginObj = new LoginSovio();

// before('opening the browser', () => {
//     cy.visit(registerDataSovio.url.loginUrl);
// })

describe("login test cases positive", () => {
    it("LoginWithValidEmailValidPass", () => {
        cy.visit(registerDataSovio.url.loginUrl);
        loginObj.enterEmail(loginDataSovio.login.email2);
        loginObj.enterPassword(loginDataSovio.login.password);
        loginObj.clickSignUp();
        cy.wait(1000);
        loginObj.verifyUrl().should('eq', loginDataSovio.login.expectedUrl);
    })
})

describe("Login test cases negative", () => {
    it("LoginWithEmptyFields", () => {
        cy.visit(registerDataSovio.url.loginUrl);
        cy.get(loginObj.txtEmail).clear();
        cy.get(loginObj.txtPassword).clear();
        loginObj.clickSignUp();
        cy.get("#_r_0_-form-item-message").should('have.text', loginDataSovio.login.emailError);
        cy.get("#_r_1_-form-item-message").should('have.text', loginDataSovio.login.passwordError);
    })

    it("LoginWithEmptyPassword", () => {
        cy.visit(registerDataSovio.url.loginUrl);
        loginObj.enterEmail(loginDataSovio.login.email2);
        cy.get(loginObj.txtPassword).clear();
        loginObj.clickSignUp();
        cy.get("#_r_1_-form-item-message").should('have.text', "Password is required");
    })

    it("LoginWithValidEmailInvalidPassword",()=>{
        cy.visit(registerDataSovio.url.loginUrl);
        loginObj.enterEmail(loginDataSovio.login.email2);
        loginObj.enterPassword(loginDataSovio.login.invalidPass);
        loginObj.clickSignUp();
        cy.get("div[class='flex w-full flex-wrap items-center justify-between'] div").should('have.text',"Invalid Credentials.");
    })

    it("LoginWithInvalidEmailValidPassword",()=>{
        cy.visit(registerDataSovio.url.loginUrl);
        loginObj.enterEmail(loginDataSovio.login.invalidEmail);
        loginObj.enterPassword(loginDataSovio.login.password);
        loginObj.clickSignUp();
        cy.get("div[class='flex w-full flex-wrap items-center justify-between'] div").should('have.text',"Sign in failed. Please try again later.");
    })

    it("LoginWithInvalidEmailInvalidPassword",()=>{
        cy.visit(registerDataSovio.url.loginUrl);
        loginObj.enterEmail(loginDataSovio.login.invalidEmail);
        loginObj.enterPassword(loginDataSovio.login.invalidPass );
        loginObj.clickSignUp();
        cy.get("div[class='flex w-full flex-wrap items-center justify-between'] div").should('have.text',"Sign in failed. Please try again later.");  
    })

    
})
