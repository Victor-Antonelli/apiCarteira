// Nesse arquivo configuro todas as rotas 
const Cartao = require('../models/cartao')
module.exports = app => {
  app.get('/carteira', (req, res) => {
    Cartao.get(res)
  })

  app.get('/cartao/:id', (req, res) => {
    const id = parseInt(req.params.id) 
    
    Cartao.getById(id, res)
  })

  app.post('/cartao', (req, res) => {
    const cartao = req.body
    Cartao.create(cartao,res)
    
  })
  
  app.patch('/cartao/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const values = req.body

    Cartao.update(id, values, res)
  })

  app.delete('/cartao/:id', (req, res) => {
    const id = parseInt(req.params.id)

    Cartao.delete(id, res)

  })


}