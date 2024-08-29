/// <reference types= "cypress"  />

describe('Testes da aplicação de contatos', () => {


        describe('Inclusão de Contato', () => {
            it('Deve incluir um novo contato', () => {
            cy.visit('https://agenda-contatos-react.vercel.app/');
            cy.get('input[placeholder="Nome"]').type('Nome do Contato');
            cy.get('input[placeholder="E-mail"]').type('email@contato.com');
            cy.get('input[placeholder="Telefone"]').type('123456789');
            cy.get('button[type="submit"]').click();
            cy.contains('Nome do Contato').should('be.visible');
            });
        });

        describe('Alteração de Contato', () => {
            it('Deve alterar um contato existente', () => {
                cy.visit('https://agenda-contatos-react.vercel.app/');
                cy.contains('gian Souza')
                    .parents('.sc-beqWaB.eQdhbg.contato')
                    .find('.sc-gueYoa.jWEbWB .edit')
                    .click();
        
                cy.get('input[placeholder="Nome"]').clear().type('Nome Alterado');
                cy.get('input[placeholder="E-mail"]').clear().type('email@alterado.com');
                cy.get('input[placeholder="Telefone"]').clear().type('987654321');
                cy.get('button[type="submit"]').click();
                cy.contains('Nome Alterado').should('be.visible');
            });
        });

        describe('Gerenciamento de Contatos', () => {
            it('Deve remover um contato', () => {
                cy.visit('https://agenda-contatos-react.vercel.app/');
                
                cy.contains('Bruna Costa')
                    .parents('.sc-beqWaB.eQdhbg.contato') 
                    .find('.delete')
                    .click(); 
                // Verifica se o contato foi removido
                cy.contains('Bruna Costa').should('not.exist');
            });
        });
    })
