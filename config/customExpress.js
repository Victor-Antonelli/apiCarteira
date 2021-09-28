// A criação do diretório config é para a melhor organização do código 
// Utilizamos o nome customExpress pois nesse ponto, já estamos modificando o padrão do Express, utilizando por exemplo, o consign para agrupar todas as rotas que estão dentro de "Controllers" dentro de app
// O BodyParser é utilizado para parsear as requisições (Já foi descontinuado, é possível utilizar o próprio express no lugar)

const express = require('express')
const consign = require('consign') 
const cors = require('cors')
const bodyParser = require('body-parser') // (*)

module.exports = () => {

  const app = express()
  app.use(cors())
  app.use(express.urlencoded({ extended: true}))
  app.use(express.json())
  
  consign()
    .include('controllers')
    .into(app)

  return app
}
