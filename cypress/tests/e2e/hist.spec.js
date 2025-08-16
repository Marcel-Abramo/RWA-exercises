

describe('RWA Historic Tests', () => {
  
 const selectorsList={
     usernameField: '#username',
     passwordField: '#password',
     loginButton: '[data-test="signin-submit"]',
     loginConfirmation: '[data-test="sidenav-home"]',
     personalButton: '[data-test="nav-personal-tab"]',        
     alertNoTransactions: '[data-test="empty-list-header"]',
     transactionPaid: '[style="height: 128px; left: 0px; position: absolute; top: 0px; width: 100%;"]',
     
    }


   it('Conta nova acessa histórico', () => {
     cy.visit('http://localhost:3000');
     cy.get(selectorsList.usernameField).type('historicoteste');
     cy.get(selectorsList.passwordField).type('123456');
     cy.get(selectorsList.loginButton).click();
     cy.get(selectorsList.loginConfirmation).contains('Home');
     cy.get(selectorsList.personalButton).click();
     cy.get(selectorsList.alertNoTransactions).contains('No Transactions');
  });

   it('Listar transações existentes', () => {
     cy.visit('http://localhost:3000');
     cy.get(selectorsList.usernameField).type('marcelqa');
     cy.get(selectorsList.passwordField).type('123456');
     cy.get(selectorsList.loginButton).click();
     cy.get(selectorsList.loginConfirmation).contains('Home');
     cy.get(selectorsList.personalButton).click();
     cy.get(selectorsList.transactionPaid).contains('paid')
  });  
});