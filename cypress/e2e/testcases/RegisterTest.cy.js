import { Register } from "../../pages/RegisterPage"
import registerData from "../../fixtures/registerData.json"
const registerObj = new Register();
describe("Register suite",()=>{
    it("register by valid data",()=>{
        registerObj.openApp(registerData.url);
        registerObj.enterFname(registerData.firstname);
        registerObj.enterLname(registerData.lastname);
        registerObj.enterEmail(registerData.email);
        registerObj.enterPhn(registerData.phn);
        registerObj.enterPass(registerData.password);
        registerObj.enterConfirmPass(registerData.confirmpass);
        registerObj.clickPrivacy();
        registerObj.clickSubmitBtn();

    })
})