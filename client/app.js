// ============================================
// app.js (frontend)
// Lógica do frontend para envio de chamados via API REST.
// Comunicação síncrona: fetch POST /tickets.
// ============================================

const form = document.getElementById('ticket-form');
const formMessage = document.getElementById('form-message');

/**
 * Envia um novo chamado técnico via POST /tickets.
 */
form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const clientName = document.getElementById('clientName').value;
  const problem = document.getElementById('problem').value;

  formMessage.textContent = 'Enviando chamado...';

  try {
    const response = await fetch('/tickets', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ clientName, problem }),
    });

    const data = await response.json();

    if (data.success) {
      formMessage.textContent = data.message;
      form.reset();
    } else {
      formMessage.textContent = 'Erro: ' + data.message;
    }
  } catch (error) {
    formMessage.textContent = 'Erro ao conectar com o servidor.';
    console.error('[app.js] Erro:', error);
  }
});

// NOTA: No 3º Encontro, será adicionada a integração com Socket.IO
// para receber atualizações em tempo real (evento "ticket-processed").
