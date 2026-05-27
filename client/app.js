// ============================================
// app.js (frontend)
// Handles ticket creation, fetching, and UI rendering.
// ============================================

// ----- DOM references -----
const form = document.getElementById('ticket-form');
const formMessage = document.getElementById('form-message');
const submitBtn = document.getElementById('submit-btn');
const submitBtnText = document.getElementById('submit-btn-text');
const ticketsContainer = document.getElementById('tickets-container');
const ticketsList = document.getElementById('tickets-list');
const emptyState = document.getElementById('empty-state');
const refreshBtn = document.getElementById('refresh-btn');

// ----- Form submission -----
form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const clientName = document.getElementById('clientName').value.trim();
  const problem = document.getElementById('problem').value.trim();

  // Simple client‑side validation
  if (!clientName || !problem) {
    formMessage.textContent = 'Preencha todos os campos.';
    formMessage.className = 'form-message error';
    return;
  }

  // UI feedback while sending
  submitBtn.disabled = true;
  submitBtnText.textContent = 'Enviando...';
  formMessage.textContent = '';

  try {
    const response = await fetch('/tickets', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ clientName, problem }),
    });

    const data = await response.json();

    if (data.success) {
      formMessage.textContent = data.message;
      formMessage.className = 'form-message success';
      form.reset();
      fetchTickets();
    } else {
      formMessage.textContent = data.message;
      formMessage.className = 'form-message error';
    }
  } catch (err) {
    formMessage.textContent = 'Erro ao conectar com o servidor.';
    formMessage.className = 'form-message error';
    console.error('[app.js] Erro:', err);
  } finally {
    submitBtn.disabled = false;
    submitBtnText.textContent = 'Enviar Chamado';
  }
});

// ----- Ticket fetching -----
async function fetchTickets() {
  // Show loading state
  ticketsContainer.hidden = false;
  ticketsContainer.innerHTML = '<div class="spinner" aria-hidden="true"></div><p>Carregando chamados...</p>';
  emptyState.hidden = true;
  ticketsList.innerHTML = '';

  try {
    const response = await fetch('/tickets');
    if (!response.ok) throw new Error('Network response was not ok');
    const tickets = await response.json();
    renderTickets(tickets);
  } catch (err) {
    // Show error state
    const errorDiv = document.createElement('div');
    errorDiv.className = 'state-box error-state';
    errorDiv.innerHTML = `<span class="state-icon" aria-hidden="true">⚠️</span><p>Não foi possível carregar os chamados.</p>`;
    document.querySelector('#tickets-section').appendChild(errorDiv);
    console.error('[app.js] Erro ao buscar tickets:', err);
    ticketsContainer.hidden = true;
  }
}

function renderTickets(tickets) {
  ticketsContainer.hidden = true;
  if (!tickets || tickets.length === 0) {
    emptyState.hidden = false;
    return;
  }
  emptyState.hidden = true;
  ticketsList.innerHTML = '';
  tickets.forEach((t) => {
    const card = document.createElement('div');
    card.className = 'ticket-card';
    card.innerHTML = `
      <div class="ticket-header">
        <span class="ticket-id">#${t.id}</span>
        <span class="ticket-status ${t.status}">${t.status}</span>
      </div>
      <div class="ticket-body">
        <strong>Cliente:</strong> ${t.clientName}<br>
        <strong>Problema:</strong> ${t.problem}
      </div>`;
    ticketsList.appendChild(card);
  });
}

// ----- Refresh button -----
refreshBtn.addEventListener('click', (e) => {
  e.preventDefault();
  fetchTickets();
});

// ----- Initial load -----
document.addEventListener('DOMContentLoaded', () => {
  fetchTickets();
});

// ----- Placeholder for future Socket.IO integration -----
// When Socket.IO is added on the server, uncomment the lines below:
// const socket = io();
// socket.on('ticket-processed', (updatedTicket) => {
//   // Simple strategy: re‑fetch the list to reflect the latest state.
//   fetchTickets();
// });
