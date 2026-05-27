// ============================================
// tickets.service.js
// Serviço responsável pela lógica de negócio dos chamados técnicos.
// Armazena chamados em memória (array) com IDs incrementais.
// ============================================

let nextTicketId = 1;
const tickets = [];

/**
 * Cria um novo chamado técnico.
 * @param {string} clientName - Nome do cliente.
 * @param {string} problem - Descrição do problema.
 * @returns {object} O ticket criado.
 */
function createTicket(clientName, problem) {
  const ticket = {
    id: nextTicketId++,
    clientName,
    problem,
    status: 'pending',
    createdAt: new Date().toISOString(),
  };

  tickets.push(ticket);

  return ticket;
}

/**
 * Retorna todos os chamados armazenados.
 * @returns {object[]} Lista de tickets.
 */
function getAllTickets() {
  return tickets;
}

module.exports = {
  createTicket,
  getAllTickets,
};
