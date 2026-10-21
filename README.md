# Lanchonete AC2 (Angular)

Projeto simples de cadastro e acompanhamento de pedidos de lanchonete.

## Como abrir

1. Extraia o ZIP.
2. Abra a pasta `lanchonete-ac2` no VS Code.
3. No terminal, execute `npm install` (somente na primeira vez).
4. Execute `npm start`.
5. Abra `http://localhost:4200`.

É necessário ter Node.js e npm instalados.

## O que foi utilizado

- Dois componentes: cadastro e lista.
- `PedidosService`: armazena pedidos em memória e altera status.
- Interface `Pedido`: define os campos do pedido.
- `[(ngModel)]`: two-way binding nos campos do formulário.
- `(click)` e `(ngSubmit)`: event binding.
- `{{ ... }}`: interpolação na lista.
- `routerLink`: navegação entre as telas.

Os pedidos são mantidos ao navegar entre as telas, mas somem ao atualizar a página, porque não há banco de dados.

O botão Cancelar marca o pedido de vermelho, conforme a correção no enunciado. Não há contador.

**Observação:** o enunciado também menciona nomes de variáveis de Pokémon; aqui foram usados nomes descritivos para facilitar a apresentação.
