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
app.get('/productos', async (req, res) => {
  let data = await newArchivo.getAll();
  res.send(data);
});

app.get('/productoRandom', async (req, res) => {
  let data = await newArchivo.getAll();
  let indexRandom = Math.round(Math.random() * data.length + 1);
  let product = data[indexRandom];
  res.send(product);
});
