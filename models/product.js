const fs = require("fs");
const path = require("path");

module.exports = class Product {
  constructor(productTitle) {
    this.title = productTitle;
  }

  save() {
    const productsPath = path.join(
      path.dirname(process.mainModule.filename),
      "data",
      "products.json"
    );
    fs.readFile(productsPath, (error, fileContent) => {
      console.log("fileContent:", JSON.parse(fileContent));
      let products = [];
      if (!error) {
        products = JSON.parse(fileContent);
      } else {
        console.log(error);
      }
      products.push(this);
      console.log("saved product:", this);
      fs.writeFile(productsPath, JSON.stringify(products), (error) => {
        if (error) {
          console.log("error:", error);
        }
      });
    });
  }

  static fetchAll(callBack) {
    const productsPath = path.join(
      path.dirname(process.mainModule.filename),
      "data",
      "products.json"
    );
    fs.readFile(productsPath, (error, fileContent) => {
      if (error) {
        console.log(error, "fetchAll returned an empty array");
        callBack([]);
      }
      console.log("fetching products:", JSON.parse(fileContent));
      callBack(JSON.parse(fileContent));
    });
  }
};
