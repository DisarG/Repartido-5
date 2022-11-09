const express = require('express');
const { url } = require('inspector');
const path = require("path");
const app = express();
const bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



app.use(express.static(__dirname + '/public'))
app.get("/productos", (req, res, next) => {
    console.log(req)
    console.log("<h1>Productos</h1>")
    res.json(array)
})

app.post("/productos", (req, res, next) => {
    console.log(req.body);
    const productoNew = {
        titulo: req.body.titulo,
        precio: req.body.precio,
        categoria: req.body.categoria,
        imagen: req.body.imagen
    }

    app.delete("/productos", (req, res, next) => {
        console.log(req.body)
        res.json(array)

    })

    array.push(productoNew)
    res.json({ menssager: "productoAgregadoCorrectamente", producto: productoNew });
})



app.listen(3000, () => {
    console.log("server running on port")
})