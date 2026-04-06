import { LoginSovio } from "../../pages/LoginSovioPage";
import loginDataSovio from "../../fixtures/loginDataSovio.json";
import registerDataSovio from "../../fixtures/registerDataSovio.json";

const loginObj = new LoginSovio();

before('opening the browser', () => {
    cy.visit(registerDataSovio.url.loginUrl);
})

// describe("login test cases positive", () => {

//     it.skip("loginUsingPassword", () => {
//         loginObj.enterEmail(loginDataSovio.login.email);
//         loginObj.enterPassword(loginDataSovio.login.password);
//         loginObj.clickSignUp();
//         cy.wait(1000);
//         loginObj.verifyUrl().should('eq', loginDataSovio.login.expectedUrl);
//     })
// })

describe("Login test cases negative", ()=>{
    it("loginWithEmptyFields", ()=>{
        loginObj.enterEmail(loginDataSovio.login.email1);
        loginObj.enterPassword(loginDataSovio.login.password1);
        loginObj.clickSignUp();
        loginObj.emailValidation().should('have.text',loginDataSovio.login.emailError);
        
    })
})
