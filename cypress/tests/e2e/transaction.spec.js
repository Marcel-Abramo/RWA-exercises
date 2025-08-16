

describe('RWA Transactions Tests', () => {
  
    const selectorsList={
     usernameField: '#username',
     passwordField: '#password',
     loginButton: '[data-test="signin-submit"]',
     loginConfirmation: '[data-test="sidenav-home"]',
     errorAlert: '[data-test="signin-error"]',
     newTransactionButton: '[data-test="nav-top-new-transaction"]',
     contactSelect: '[data-test="user-list-item-uBmeaz5pX"]',
     amountField: '#amount',
     noteTransactionFiled: '#transaction-create-description-input',
     submitPaymentButton: '[data-test="transaction-create-submit-payment"]',
     transactionAlert: '.MuiAlert-message',
    }


   it('Envio com saldo suficiente', () => {
     cy.visit('http://localhost:3000');
     cy.get(selectorsList.usernameField).type('marcelqa');
     cy.get(selectorsList.passwordField).type('123456');
     cy.get(selectorsList.loginButton).click();
     cy.get(selectorsList.loginConfirmation).contains('Home');
     cy.get(selectorsList.newTransactionButton).click();
     cy.get(selectorsList.contactSelect).click({force: true});
     cy.get(selectorsList.amountField).type('100');
     cy.get(selectorsList.noteTransactionFiled).type('Tá Pago');
     cy.get(selectorsList.submitPaymentButton).click();
     cy.get(selectorsList.transactionAlert).contains('Transaction Submitted!');
  });

   it('Enviar valor maior que o saldo', () => {
     cy.visit('http://localhost:3000');
     cy.get(selectorsList.usernameField).type('marcelqa');
     cy.get(selectorsList.passwordField).type('123456');
     cy.get(selectorsList.loginButton).click();
     cy.get(selectorsList.loginConfirmation).contains('Home');
     cy.get(selectorsList.newTransactionButton).click();
     cy.get(selectorsList.contactSelect).click({force: true});
     cy.get(selectorsList.amountField).type('1000');
     cy.get(selectorsList.noteTransactionFiled).type('Tá Pago');
     cy.get(selectorsList.submitPaymentButton).click();
     cy.get(selectorsList.transactionAlert).contains('Transaction Submitted!');
  });

   it('Enviar valor com saldo zero', () => {
     cy.visit('http://localhost:3000');
     cy.get(selectorsList.usernameField).type('marcelqa');
     cy.get(selectorsList.passwordField).type('123456');
     cy.get(selectorsList.loginButton).click();
     cy.get(selectorsList.loginConfirmation).contains('Home');
     cy.get(selectorsList.newTransactionButton).click();
     cy.get(selectorsList.contactSelect).click({force: true});
     cy.get(selectorsList.amountField).type('100');
     cy.get(selectorsList.noteTransactionFiled).type('Era pra dar erro');
     cy.get(selectorsList.submitPaymentButton).click();
     cy.get(selectorsList.transactionAlert).contains('Transaction Submitted!');
  });
  
});