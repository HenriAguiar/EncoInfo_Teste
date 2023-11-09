Cypress.Commands.add('acessaDevFinances',()=>{
    cy.visit('https://devfinance-agilizei.netlify.app/')
    cy.get('header > img').should('be.visible')
})

Cypress.Commands.add('adicionaTransacao',(descricao,valor,data)=>{
    cy.get('#transaction > .button').click()
    cy.get('#form > h2').contains('Nova Transação')

    cy.get('#description').type(descricao)
    cy.get('#amount').type(valor)
    cy.get('#date').type(data)
    cy.get('button').contains('Salvar').click()
})