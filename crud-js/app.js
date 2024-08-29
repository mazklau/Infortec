const express = require('express');
const mysql = require('mysql2/promise');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Configuração do body-parser para tratar dados no formato JSON
app.use(bodyParser.json());

(async () => {
    let db;
  
    try {
      // Cria uma conexão com o banco de dados
    db = await mysql.createConnection({
    host: 'autorack.proxy.rlwy.net',
    port: 45268,
    user: 'root',
    password: 'XzlrPHlhHzUToVIxdpaftvLculTfJrAi',
    database: 'railway',
     connectTimeout: 10000 // Tempo em milissegundos
});

// Conectando ao banco de dados MySQL
db.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
    return;
  }
  console.log('Conectado ao banco de dados MySQL!');
});


    const [rows, fields] = await db.query('SELECT * FROM Usuario_Cadastros ');
    console.log('Resultados:', rows);

  } catch (err) {
    console.error('Erro:', err.message);
  } 


})();

