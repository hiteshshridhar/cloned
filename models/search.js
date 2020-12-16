const db = require("../util/database");

module.exports = class Search {
  constructor(title) {
    this.title = title;
 }

   static fetchAll() {
    return db.execute("SELECT * FROM node_complete WHERE id IN (SELECT prod_id FROM products WHERE prodname ?"),[this.title]((err, req, res) =>{
        console.log("No products to be found");
    });
  }
};
