class Tabelas {
  init(conn) {
    this.conn = conn 
    this.criaTabelaCartao()
  }

  criaTabelaCartao() {
    const sql = 'CREATE TABLE IF NOT EXISTS tb_cartao (id INT NOT NULL AUTO_INCREMENT, nome varchar(80), numero varchar(30), cod_seguranca varchar(80), validade varchar(6), data_criacao datetime, PRIMARY KEY(id))'

    this.conn.query(sql, (error) => {
      if(error){
        console.log(error)
      }else{
        console.log('Tabela de cartoes criada com sucesso')
      }
    })
  }

}

module.exports = new Tabelas