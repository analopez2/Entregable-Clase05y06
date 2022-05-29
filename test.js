const contenedor = require('./contenedor');

//#region PRUEBAS
//#region  newArchivo - new Contenedor
const newArchivo = new contenedor.Contenedor('product.txt');
//#endregion

//#region save
async function testSaveInit() {
  let product1 = await newArchivo.save({
    title: 'Escuadra',
    price: 123.45,
    thumbnail:
      'https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png',
  });
  console.log(product1);
  let product2 = await newArchivo.save({
    title: 'Calculadora',
    price: 234.56,
    thumbnail:
      'https://cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-256.png',
    id: 2,
  });
  console.log(product2);
  let product3 = await newArchivo.save({
    title: 'Globo Terráqueo',
    price: 345.67,
    thumbnail:
      'https://cdn3.iconfinder.com/data/icons/education-209/64/globe-earth-geograhy-planet-school-256.png',
    id: 3,
  });
  console.log(product3);
}
// testSaveInit();

async function testSave() {
  let newProduct = await newArchivo.save({
    title: 'New Product Test',
    price: 300.5,
    thumbnail:
      'https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png',
  });
  console.log(newProduct);
}
// testSave();

//#endregion

//#region getById
async function getById() {
  let product = await newArchivo.getById(2);
  console.log(product);
}
// getById();
//#endregion

//#region getAll
// async function getAll() {
//   let data = await newArchivo.getAll();
//   console.log(data);
// }
// getAll();
//#endregion

//#region deleteById
// newArchivo
//   .deleteById(1)
//   .then(console.log(console.log('Product deleted successfully')));
//#endregion

//#region deleteAll
// newArchivo.deleteAll().then(console.log('Products deleted successfully'));
//#endregion

//#region deleteFile
// newArchivo.deleteFile().then(console.log('File deleted successfully'));
//#endregion

//#endregion
