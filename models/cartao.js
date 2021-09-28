const conn = require('../infra/connection')

class Cartao {

  get(res){
    const sql = 'SELECT * FROM tb_cartao'
    conn.query(sql, (error,result) => {
      if(error){
        res.status(400).json(error)
      }else{
        res.status(200).json(result)
      }
    })
  }

  getById(id, res){
    const sql = 'SELECT * FROM tb_cartao  WHERE id = ?'

    conn.query(sql, id, (error, result) => {

      if(error){
        res.status(400).json(error)
      }else{
        const cartao = result[0]
        res.status(200).json(cartao)
      }

    })
  }

  create(cartao, res){
    const data_criacao = new Date()
    const sql = 'INSERT INTO tb_cartao SET ?'
    const cartaoComData = {...cartao, data_criacao}
    conn.query(sql, cartaoComData, (error,result) => {
      if(error){
        res.status(400).json(error)
      }else{
        res.status(201).json(result)
      }
    })
  }

  update(id, values, res){
    const sql = 'UPDATE tb_cartao SET ? WHERE id = ?'
    conn.query(sql, [values, id], (error, result) => {
      if(error){
        res.status(400).json(error)
      }else{
        res.status(200).json({...values, id})
      }

    })

  }

  delete(id, res){
    const sql = 'DELETE FROM tb_cartao WHERE id = ?'
    conn.query(sql, id, (error, result) => {
      if(error){
        res.status(400).json(error)
      }else{
        res.status(200).json({id})
      }
    })
  }

}

module.exports = new Cartao