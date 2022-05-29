const res = require('express/lib/response');
const fs = require('fs');

class Contenedor {
  constructor(nameFile) {
    this.nameFile = nameFile;
  }

  async save(object) {
    let data = [];
    let id = 0;
    try {
      if (fs.existsSync(this.nameFile)) {
        data = await this.getAll();
        id = data[data.length - 1].id + 1;
      } else {
        id++;
      }
      object.id = id;
      data.push(object);
      await fs.promises.writeFile(this.nameFile, JSON.stringify(data, null, 2));
      return id;
    } catch (error) {
      throw new Error(`ERROR | Write File: ${error.message} `);
    }
  }

  async getById(idProduct) {
    try {
      let data = [];
      let result = await fs.promises.readFile(this.nameFile, 'utf-8');
      if (result) {
        data = JSON.parse(result);
        let product = data.find((product) => product.id == idProduct);
        return product;
      }
    } catch (error) {
      throw new Error(
        `ERROR | ProductID:${idProduct} | Error Message: ${error.message} `
      );
    }
  }

  async getAll() {
    try {
      let response = await fs.promises.readFile(this.nameFile, 'utf-8');
      if (response) {
        let data = JSON.parse(response);
        return data;
      }
    } catch (error) {
      throw new Error(`ERROR | Error Message: ${error.message} `);
    }
  }

  async deleteById(idProduct) {
    try {
      let data = [];
      let response = await this.getAll();
      if (response)
        data = response.filter((product) => product.id != idProduct);
      console.info('INFO | New Data: ', data);
      await fs.promises.writeFile(
        `${this.nameFile}`,
        JSON.stringify(data, null, 2)
      );
    } catch (error) {
      throw new Error(`ERROR | Error Message: ${error.message} `);
    }
  }

  async deleteAll() {
    try {
      await fs.promises.writeFile(
        `${this.nameFile}`,
        JSON.stringify([], null, 2)
      );
      console.info('INFO | Remove all productos in file: ', this.nameFile);
    } catch (error) {
      throw new Error(`ERROR | Error Message: ${error.message} `);
    }
  }

  async deleteFile() {
    try {
      await fs.promises.unlink(this.nameFile);
      console.info('INFO | File deleted successfully', this.nameFile);
    } catch (error) {
      throw new Error(`ERROR | Error Message: ${error.message} `);
    }
  }
}

exports.Contenedor = Contenedor;
