const db = require("../util/database");

module.exports = class Product {
  constructor(title, imageUrl, price) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.price = price;
  }

  save() {
    return db.execute(
      "INSERT INTO products (title, price, imageUrl) VALUES (?, ?, ?)",
      [this.title, this.price, this.imageUrl]
    );
  }

  static fetchAll() {
    return db.execute("SELECT * FROM products");
  }
};
