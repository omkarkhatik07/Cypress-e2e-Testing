import{RegisterSovio}from "../../pages/RegisterSovioPage"
import registerDataSovio from "../../fixtures/registerDataSovio.json"
import { YopMail } from "../../pages/YopVerification";

const regObj = new RegisterSovio();
const yopObj = new YopMail();
function randomEmail(){
    var email;
    const randomInt = Math.floor(Math.random() * 1000) + Math.floor(Math.random() * 100) + Math.floor(Math.random() * 100);
    return email = "user" + randomInt + "@yopmail.com";
}



// function verifyemailthroughyop(){

// }



describe("Register Flow",()=>{
    it.skip("RegisterUsingPassWord1", ()=>{
        cy.visit(registerDataSovio.url.regUrl);
        regObj.enterEmail(randomEmail());
        regObj.clickContinue();
        regObj.verifyMsg().should('have.text',registerDataSovio.register.verifyMsg);
        //yopObj.openYop(registerDataSovio.url.yopUrl);
        cy.origin(registerDataSovio.url.yopUrl),()=>{
           cy.visit('/');
            yopObj.enterMail(randomEmail());
            yopObj.clickSubmit();
            yopObj.clickVerifyBtn();
        }
       
    })

    it("RegisterUsingPassWord2",()=>{
 cy.visit(registerDataSovio.url.regUrl);
        regObj.enterEmail(registerDataSovio.register.email);
        regObj.clickContinue();
        // regObj.verifyMsg().should('have.text',registerDataSovio.register.verifyMsg);
        regObj.enterFirstName(registerDataSovio.register.firstname);
        regObj.enterLastName(registerDataSovio.register.lastname);
        regObj.enterPassWord(registerDataSovio.register.password);
        regObj.enterConPass(registerDataSovio.register.confirmpassword);
        regObj.btnCreateAcc();

    })
})