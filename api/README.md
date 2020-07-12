# Exercício 7

Alunos:

Alysson Rogerio Oliveira (9771355)

Guilherme Brunassi Nogima (9771629)

Leonardo Akel Daher (9771682)


## Para rodar:

```bash
npm install
npm start
```

## Instruções para teste

### Serviços
Listar todos os serviços:

    GET: /services

Listar serviço por ID:

    GET: /services/id/<id-do-servico>

Listar por slug:

    GET: /services/slug/<slug-do-servico>

getPartnerHours (JSON incluindo "partner" e "hours"):

    GET: /services/partner-hours

Criar serviço:

    POST: /services

Atualizar serviço:

    PUT: /services/<id-do-servico>

Remover serviço:

    DELETE: /services

### Pedidos

Listar pedidos:

    GET: /orders

Criar pedido:

    POST: /orders

### Clientes

Listar clientes:

    GET: /customers

Criar cliente:

    POST: /customers
