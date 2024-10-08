const express = require('express');
const cors = require('cors');
const { fetchData } = require('./Api.js'); // Importa a função para buscar dados do banco de dados

const app = express();
const port = 3000;

// Configura o CORS para permitir solicitações do domínio específico
app.use(cors({
  origin: 'https://localhost-psi.vercel.app'
}));

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
