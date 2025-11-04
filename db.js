async function connect() {
  const { Pool } = require('pg');

  const pool = new Pool({
    user: 'postgres',       // seu usuário do PostgreSQL
    host: 'localhost',      // onde o banco está rodando
    database: 'postgres', // nome do seu banco
    password: 'senai',       // sua senha
    port: "3000",             // porta padrão
  });

  pool.connect()
  .then(() => console.log('✅ Conectado ao PostgreSQL'))
  .catch(err => console.error('❌ Erro de conexão', err));
}

connect();

module.exports = connect();