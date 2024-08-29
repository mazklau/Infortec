const mysql = require('mysql2/promise');

async function fetchData() {
  let db;

  try {
    // Cria uma conexão com o banco de dados
    db = await mysql.createConnection({
      host: 'autorack.proxy.rlwy.net',
      port: 45268,
      user: 'root',
      password: 'XzlrPHlhHzUToVIxdpaftvLculTfJrAi',
      database: 'railway',
      connectTimeout: 10000, // Tempo em milissegundos
    });

    console.log('Conectado ao banco de dados MySQL!');

    // Realiza a consulta SQL
    const [rows, fields] = await db.query('SELECT * FROM Usuario_Cadastros');
    
    // Retorna os dados
    return rows;

  } catch (err) {
    console.error('Erro:', err.message);
    throw err; // Propaga o erro para ser tratado pelo chamador
  } finally {
    if (db) {
      await db.end();
    }
  }
}

module.exports = { fetchData };
