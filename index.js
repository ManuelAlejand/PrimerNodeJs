const exp = require('express');
//const mongoose=require('./src/config/connection');
const modeloProducto = require('./src/models/productos-schema')

const app = exp();

app.get('/productos/:x',  async (req,res) => {
    let resultado =  await modeloProducto.find({"nombre": req.params.x});
    console.log(resultado)
});

app.listen(9898)