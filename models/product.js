const products = [];

module.exports = class Product {
  constructor(productTitle) {
    this.title = productTitle;
  }

  save() {
    products.push(this);
    console.log("this product:", this, "saved products:", products);
  }

  static fetchAll() {
    console.log("fetching products:", products);
    return products;
  }
};
