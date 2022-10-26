describe('Rediffmail Application test', function () {

    it('Rediif Page Visit, Click Create Account', function () {
        cy.visit("https://www.rediff.com/");
        cy.xpath("//a[@title='Create Rediffmail Account']").click()
            
        })

    it('Verify alert message on top', () => {

        cy.get('#Register')
            .scrollIntoView()
            .should('be.visible')
            .then((registerbtn) => {
                if (registerbtn) {
                    cy.get('#Register').click()
                }
                else
                {
                    cy.get('#Register')
            .scrollIntoView()
            .should('not.be.visible')
                }
            })
        cy.on('window:alert', (t) => {
            //assertions
            expect(t).to.contains('Your full name');
        })

    })

    it('select the option Australia from the dropdown having value as 12', () => {

        cy.get(':nth-child(3) > [width="185"] > input')
            .type('Sana Shahir')

        cy.xpath("//select[@id='country']")
            .select('12')
            .should('have.value', '12')

            
    })
    
    it('Dropdown values selection Test', () => {

        //Select the option with the text
        cy.xpath("//select[@id='country']").select('India').should('have.value', '99')
       //Select the option with the value
       cy.xpath("//select[@id='country']").select('4').should('have.value', '4')
       //Select the option with index 0
       cy.xpath("//select[@id='country']").select(0).should('have.value', '99')
       /* cy.go('back')
       cy.go('back') */
    //Select the options with the texts "India" and "Australia"  
    //cy.visit("https://demoqa.com/select-menu").go('forward');
    /* cy.xpath("//select[@id='country']")
            .select(['India', 'Australia'])
            .invoke('val')
            .should('deep.equal', ['99', '12']) */
    })

})
