const customExpress = require('./config/customExpress')
const conn = require('./infra/connection')
const Tabelas = require('./infra/tabelas')

conn.connect((error) => {
  if(error){
    
    console.warn(error)
  }else{
    Tabelas.init(conn)
    const app = customExpress()

    app.listen(3030, () => console.log("Servidor OK!"))
  }
})
