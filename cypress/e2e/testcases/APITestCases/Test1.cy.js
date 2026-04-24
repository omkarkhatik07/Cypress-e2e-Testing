describe("API Testing",()=>{
    it("SendVerificationMail",()=>{
        cy.request({
            method:'GET',
            url:"https://qa.sovio.id/v1/auth/clientAliases",
        }).then((response)=>{
            expect(response.status).to.eq(200);
        })
    })
})  