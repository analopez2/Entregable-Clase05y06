const express = require('express');
const app = express();
const contenedor = require('./contenedor');
const newArchivo = new contenedor.Contenedor('product.txt');

const PORT = 8080;

const server = app.listen(PORT, () => {
  console.log(`Servidor http escuchando en el puerto ${server.address().port}`);
});

server.on('error', (error) => console.log(`Error en servidor ${error}`));

// RUTAS
app.get('/productos', (req, res) => {
  (async () => {
    let data = await newArchivo.getAll();
    res.send(data);
  })();
});

app.get('/productoRandom', (req, res) => {
  (async () => {
    let data = await newArchivo.getAll();
    let idRandom = Math.floor(Math.random() * data.length + 1);
    let product = await newArchivo.getById(idRandom);
    res.send(product);
  })();
});
