describe('mario', ()=>{
    it('acessa página',()=>{
        cy.visit('https://devfinance-agilizei.netlify.app/')
        cy.get('header > img').should('be.visible')
});
    it('Add transaction',()=>{
        cy.visit('https://devfinance-agilizei.netlify.app/')
        cy.get('header > img').should('be.visible')

        cy.get('#transaction > .button').click()
        cy.get('#form > h2').contains('Nova Transação')

        cy.get('#description').type('aaaaaaaaaaa')
        cy.get('#amount').type('500.00')
        cy.get('#date').type('2023-10-12')
        cy.get('button').contains('Salvar').click()
    });

    it('delete transaction',()=>{
        cy.visit('https://devfinance-agilizei.netlify.app/')
        cy.get('header > img').should('be.visible')
        cy.get('#transaction > .button').click()
        cy.get('#form > h2').contains('Nova Transação')

        cy.get('#description').type('bbb')
        cy.get('#amount').type('507.00')
        cy.get('#date').type('2023-11-12')
        cy.get('button').contains('Salvar').click()

        cy.get(':nth-child(4) > img').click()

        cy.get('header > img').should('be.visible')
        cy.get('#transaction > .button').click()
        cy.get('#form > h2').contains('Nova Transação')

        cy.get('#description').type('bbb')
        cy.get('#amount').type('507.00')
        cy.get('#date').type('2023-11-12')
        cy.get('button').contains('Salvar').click()

        cy.get('header > img').should('be.visible')
        cy.get('#transaction > .button').click()
        cy.get('#form > h2').contains('Nova Transação')

        cy.get('#description').type('bbb')
        cy.get('#amount').type('507.00')
        cy.get('#date').type('2023-11-12')
        cy.get('button').contains('Salvar').click()

        cy.get('[data-index="1"] > :nth-child(4) > img').click()

    })
})
