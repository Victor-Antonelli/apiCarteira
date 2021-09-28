const mysql = require('mysql')
// Para essa configuração, foi necessário alterar o método padrão de autenticação do usuário no  Mysql 8.0  => alter user 'victor'@'localhost' IDENTIFIED WITH  mysql_native_password BY 'root';
const conn = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'victor',
  password: 'root',
  database: 'db_carteira' 
})

module.exports = conn