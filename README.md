# Distributed Technical Support System

Sistema acadêmico desenvolvido para demonstrar conceitos de sistemas distribuídos, comunicação cliente-servidor, processamento assíncrono, comunicação em tempo real e controle de concorrência utilizando tecnologias web modernas.

---

# Objetivo do Projeto

O projeto simula uma **Central de Atendimento de Chamados Técnicos**, onde clientes podem abrir solicitações de suporte e acompanhar o processamento dos chamados em tempo real.

O principal objetivo é demonstrar, de forma prática e didática, os seguintes conceitos:

- API REST
- Comunicação síncrona
- Comunicação assíncrona
- Filas de mensagens
- Comunicação em tempo real com Socket.IO
- Comunicação entre serviços com gRPC
- Controle de concorrência
- Região crítica
- Sincronização com mutex

---

# Tema do Sistema

O sistema representa um ambiente de suporte técnico corporativo.

Fluxo principal:

1. Um cliente envia um chamado técnico.
2. O backend recebe a solicitação via API REST.
3. O chamado entra em uma fila de processamento assíncrono.
4. Workers processam os chamados posteriormente.
5. O frontend recebe atualizações em tempo real utilizando Socket.IO.
6. Um microserviço gRPC auxilia na validação ou classificação dos chamados.
7. A fila é protegida utilizando mutex para evitar problemas de concorrência.

---

# Tecnologias Utilizadas

## Frontend
- HTML
- CSS
- JavaScript puro

## Backend
- Node.js
- Express

## Comunicação em Tempo Real
- Socket.IO

## Comunicação Entre Serviços
- gRPC

## Controle de Concorrência
- async-mutex

---

# Estrutura do Projeto

```text
project/
│
├── server/
│   ├── src/
│   ├── routes/
│   ├── services/
│   ├── queue/
│   ├── grpc/
│   ├── socket/
│   ├── mutex/
│   ├── workers/
│   └── app.js
│
├── grpc-service/
│   ├── proto/
│   ├── server.js
│   └── services/
│
├── client/
│   ├── index.html
│   ├── style.css
│   └── app.js
│
└── package.json
