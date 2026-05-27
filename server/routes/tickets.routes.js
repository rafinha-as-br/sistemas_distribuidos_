// ============================================
// tickets.routes.js
// Rotas REST para manipulação de chamados técnicos.
// POST /tickets — cria um novo chamado (comunicação síncrona).
// GET /tickets  — retorna todos os chamados.
// ============================================

const express = require('express');
const router = express.Router();
const ticketsService = require('../services/tickets.service');

/**
 * POST /tickets
 * Recebe um chamado técnico do cliente.
 * Comunicação síncrona: o servidor responde imediatamente.
 */
router.post('/tickets', (req, res) => {
  const { clientName, problem } = req.body;

  // Validação dos campos obrigatórios
  if (!clientName || !clientName.trim()) {
    console.log('[POST /tickets] Erro: clientName não informado.');
    return res.status(400).json({
      success: false,
      message: 'Campo "clientName" é obrigatório.',
    });
  }

  if (!problem || !problem.trim()) {
    console.log('[POST /tickets] Erro: problem não informado.');
    return res.status(400).json({
      success: false,
      message: 'Campo "problem" é obrigatório.',
    });
  }

  const ticket = ticketsService.createTicket(clientName.trim(), problem.trim());

  console.log(`[POST /tickets] Chamado #${ticket.id} criado — Cliente: ${ticket.clientName}`);

  return res.status(201).json({
    success: true,
    message: 'Chamado recebido',
  });
});

/**
 * GET /tickets
 * Retorna todos os chamados armazenados.
 * Será expandido no 2º Encontro.
 */
router.get('/tickets', (req, res) => {
  const tickets = ticketsService.getAllTickets();

  console.log(`[GET /tickets] Retornando ${tickets.length} chamado(s).`);

  return res.json(tickets);
});

module.exports = router;
