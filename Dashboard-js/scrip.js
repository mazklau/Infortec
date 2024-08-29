const express = require('express');
const cors = require('cors');
const { fetchData } = require('./script.js'); // Importa a função para buscar dados do banco de dados

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
// Configura o CORS para permitir solicitações de qualquer origem
app.use(cors());

// Endpoint para obter dados
app.get('/dados', async (req, res) => {
  try {
    const rows = await fetchData(); // Chama a função que busca os dados do banco de dados
    console.log('Dados obtidos do banco de dados:', rows); // Adicione este log para verificar os dados recebidos

    res.json(rows); // Envia os dados como JSON para o cliente
  } catch (error) {
    console.error('Erro ao obter dados:', error.message);
    res.status(500).json({ error: 'Erro ao obter dados' });
  }
});

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
