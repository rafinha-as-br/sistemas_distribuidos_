# Walkthrough — 1º Encontro

## O que foi feito

Implementação completa da estrutura inicial do projeto conforme o plano aprovado.

### Arquivos funcionais criados (7)

| Arquivo | Responsabilidade |
|---|---|
| [package.json](file:///c:/Users/rafin/Desktop/projects/sistemas_distribuidos_/package.json) | Dependências e scripts (`start`, `grpc`) |
| [server/app.js](file:///c:/Users/rafin/Desktop/projects/sistemas_distribuidos_/server/app.js) | Entry point Express, middlewares, serve frontend |
| [server/routes/tickets.routes.js](file:///c:/Users/rafin/Desktop/projects/sistemas_distribuidos_/server/routes/tickets.routes.js) | POST /tickets (com validação) e GET /tickets |
| [server/services/tickets.service.js](file:///c:/Users/rafin/Desktop/projects/sistemas_distribuidos_/server/services/tickets.service.js) | Lógica de negócio, armazenamento em memória, IDs incrementais |
| [client/index.html](file:///c:/Users/rafin/Desktop/projects/sistemas_distribuidos_/client/index.html) | HTML estrutural com formulário |
| [client/style.css](file:///c:/Users/rafin/Desktop/projects/sistemas_distribuidos_/client/style.css) | CSS estrutural mínimo |
| [client/app.js](file:///c:/Users/rafin/Desktop/projects/sistemas_distribuidos_/client/app.js) | Fetch POST /tickets com tratamento de erros |

### Placeholders criados (8)

Cada um com comentários documentando responsabilidades futuras e o encontro onde será implementado:

| Arquivo | Encontro futuro |
|---|---|
| `server/queue/ticketQueue.js` | 3º |
| `server/workers/ticketWorker.js` | 3º |
| `server/socket/socketHandler.js` | 3º |
| `server/mutex/mutexManager.js` | 4º |
| `server/grpc/grpcClient.js` | 4º |
| `grpc-service/server.js` | 4º |
| `grpc-service/proto/ticket.proto` | 4º |
| `grpc-service/services/classificationService.js` | 4º |

## Estrutura final

```text
sistemas_distribuidos_/
├── package.json
├── README.md
├── server/
│   ├── app.js
│   ├── routes/
│   │   └── tickets.routes.js
│   ├── services/
│   │   └── tickets.service.js
│   ├── queue/
│   │   └── ticketQueue.js          (placeholder)
│   ├── workers/
│   │   └── ticketWorker.js         (placeholder)
│   ├── socket/
│   │   └── socketHandler.js        (placeholder)
│   ├── mutex/
│   │   └── mutexManager.js         (placeholder)
│   └── grpc/
│       └── grpcClient.js           (placeholder)
├── grpc-service/
│   ├── server.js                   (placeholder)
│   ├── proto/
│   │   └── ticket.proto            (placeholder)
│   └── services/
│       └── classificationService.js (placeholder)
└── client/
    ├── index.html
    ├── style.css
    └── app.js
```

## Testes realizados

| Teste | Resultado |
|---|---|
| `npm install` | ✅ 125 packages, 0 vulnerabilities |
| Servidor inicia na porta 3000 | ✅ Logs detalhados no console |
| `POST /tickets` com dados válidos | ✅ `{ success: true, message: "Chamado recebido" }` (201) |
| `POST /tickets` com clientName vazio | ✅ `{ success: false, message: "Campo \"clientName\" é obrigatório." }` (400) |
| `GET /tickets` | ✅ Retorna array com ticket criado (id, clientName, problem, status, createdAt) |
| Logs no console | ✅ `[POST /tickets] Chamado #1 criado — Cliente: João` |

## Ajustes aplicados conforme solicitação

- ✅ Nomes de arquivos no padrão plural: `tickets.routes.js`, `tickets.service.js`
- ✅ Validação mínima no POST (clientName e problem obrigatórios)
- ✅ Logs básicos no backend para demonstração acadêmica
- ✅ IDs incrementais: `let nextTicketId = 1`
- ✅ Sem pasta `src/` dentro de `server/`

## Para rodar o projeto

No terminal entre na pasta root do projeto e execute os comandos abaixo:

Primeiro as dependências:

npm install

E para rodar:

npm start

E acessar [http://localhost:3000](http://localhost:3000).