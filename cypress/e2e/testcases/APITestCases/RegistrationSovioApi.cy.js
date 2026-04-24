describe("Api Testing", () => {

    const randomNo = Math.floor(Math.random() * 100);
    it.skip("SendVerificationMail", () => {
        cy.request({
            method: 'POST',
            url: "https://devapi.sovio.id/v1/auth/verification-mail",
            body: {
                email: "newtest" + randomNo + "@yopmail.com"
            }
        }).then((response) => {
            expect(response.status).to.eq(201);
            expect(response.body.message).to.eq("Verification link has been successfully sent on the email. Please verify");
        })
    })


    it.skip("SendVerificationMailForAlreadySentEmail", () => {
        cy.request({

            method: 'POST',
            failOnStatusCode: false,
            url: "https://devapi.sovio.id/v1/auth/verification-mail",
            body: {
                email: "newabc1@yopmail.com"
            }
        }).then((response) => {
            expect(response.status).to.eq(409);
            expect(response.body.message).to.eq("User already exists");
            expect(response.body.error).to.eq("Conflict");
        })
    })

    it.skip("Register New User to platform [Register]", () => {
        cy.request({
            method: 'POST',
            url: "https://devapi.sovio.id/v1/auth/signup",
            body: {
                email: "newabc1@yopmail.com",
                firstName: "ALex",
                lastName: "Sam",
                password: "U2FsdGVkX18Y7bdtrjA444InlqFbMTownPCloGszjy0=",
                isPasskey: false,
                isHolder: false
            }
        }).then((response)=>{
            expect(response.status).to.eq(201);
            expect(response.body.message).to.eq("User registered successfully");
        })
    })

    it("Authenticate the user for the access [LOGIN]",()=>{
        cy.request({
            method:'POST',
            url:"https://devapi.sovio.id/v1/auth/signin",
            body:{
                email:"newabc1@yopmail.com",
                password:"U2FsdGVkX18Y7bdtrjA444InlqFbMTownPCloGszjy0="
            }
        }).then((response)=>{
            expect(response.status).to.eq(200);
            expect(response.body.message).to.eq("User login successfully")
        })
    })

    it.skip("Authenticate the user for the access [LOGIN] with Invalid Email Format",()=>{
        cy.request({
            failOnStatusCode: false,
            method:'POST',
            url:"https://devapi.sovio.id/v1/auth/signin",
            body:{
                email:"newabc1 @yop mail.com",
                password:"U2FsdGVkX18Y7bdtrjA444InlqFbMTownPCloGszjy0="
            }
        }).then((response)=>{
            expect(response.status).to.eq(400);
            expect(response.body.message).to.deep.eq([ 'Please provide a valid email' ]);
            expect(response.body.error).to.eq("Bad Request");
        })
    })

    it.skip("Authenticate the user for the access [LOGIN] with valid Email Format and Invalid Password",()=>{
        cy.request({
            failOnStatusCode: false,
            method:'POST',
            url:"https://devapi.sovio.id/v1/auth/signin",
            body:{
                email:"newabc1@yopmail.com",
                password:"Ub@dtrjA444InlqFbMTownPCloGszjy0="
            }
        }).then((response)=>{
            expect(response.status).to.eq(400);
            expect(response.body.message).to.eq("Invalid Credentials");
            expect(response.body.error).to.eq("Bad Request");
        })
    })

     it.skip("Authenticate the user for the access [LOGIN] with valid Email Format and Invalid Password",()=>{
        cy.request({
            failOnStatusCode: false,
            method:'POST',
            url:"https://devapi.sovio.id/v1/auth/signin",
            body:{
                email:"newab c1@ yopmail .com",
                password:"Ub@d tr bMTownPCloGszjy0="
            }
        }).then((response)=>{
            expect(response.status).to.eq(400);
            expect(response.body.message).to.deep.eq([ 'Please provide a valid email' ]);
            expect(response.body.error).to.eq("Bad Request");
        })
    })

     it.skip("Authenticate the user for the access [LOGIN] with empty Email Format and empty Password",()=>{
        cy.request({
            failOnStatusCode: false,
            method:'POST',
            url:"https://devapi.sovio.id/v1/auth/signin",
            body:{
                email:"",
                password:""
            }
        }).then((response)=>{
            expect(response.status).to.eq(400);
            expect(response.body.message).to.deep.eq([
        "Email is required",
        "Please provide a valid email",
        "Password is required."
    ]);
            expect(response.body.error).to.eq("Bad Request");
        })
    })

    



})
/*
{
    "statusCode": 201,
    "message": "User registered successfully",
    "data": {
        "userId": "043e143d-c6dd-4ce8-9f09-ddcd8083af5d"
    }
}

*/