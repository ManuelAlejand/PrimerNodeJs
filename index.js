const exp = require('express');
//const mongoose=require('./src/config/connection');
const modeloProducto = require('./src/models/productos-schema')
require ('dotenv').config()
const app = exp();

app.get('/productos', async (req, res) => {
    let resultado = await modeloProducto.find({});
    console.log(resultado);

    if (resultado) {
        res.json({ "mensaje": resultado });
    } else {
        res.json({ "mensaje": "Hubo un error" });
    }
})
app.get('/productos/:x', async (req, res) => {
    let resultado = await modeloProducto.findOne({ "nombre": req.params.x });
    console.log(resultado)
    res.json(resultado)
    // if (resultado) {
    //     res.json({ "mensaje": resultado });
    // } else {
    //     res.json({ "mensaje": "Hubo un error, producto no encontrado... " })
    // }
});

app.use(exp.json())
app.use(exp.urlencoded({ extended:false}))



app.post('/productos', async (req, res) => {
    const nuevoProducto ={
        "nombre": req.body.nombreProducto,
        "precio": req.body.precioProducto,

    };
    let insercion = await modeloProducto.create(nuevoProducto);
    if(insercion)
        res.status(200).json({"mensaje": "Registro exitoso"})
    else
        res.status(404).json({"mensaje": "Se presento un error"})
});

//callback

app.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo en el puerto ${process.env.PORT}`);
})
