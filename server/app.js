// ============================================
// app.js
// Ponto de entrada do servidor Express.
// Configura middlewares, rotas e inicia o servidor HTTP.
// ============================================

const express = require('express');
const cors = require('cors');
const path = require('path');
const ticketRoutes = require('./routes/tickets.routes');

const app = express();
const PORT = 3000;

// --- Middlewares ---
app.use(cors());
app.use(express.json());

// --- Arquivos estáticos (frontend) ---
app.use(express.static(path.join(__dirname, '..', 'client')));

// --- Rotas ---
app.use(ticketRoutes);

// --- Inicialização do servidor ---
// NOTA: No 3º Encontro, o servidor HTTP será integrado com Socket.IO.
// Nesse momento, a criação do server será extraída para permitir
// a integração com socket.io (require('http').createServer(app)).

app.listen(PORT, () => {
  console.log('============================================');
  console.log(`  Servidor rodando em http://localhost:${PORT}`);
  console.log('============================================');
  console.log('[app.js] Express iniciado com sucesso.');
  console.log('[app.js] Servindo frontend de: client/');
  console.log('[app.js] Rotas disponíveis:');
  console.log('  POST /tickets — criar chamado');
  console.log('  GET  /tickets — listar chamados');
  console.log('============================================');
});
