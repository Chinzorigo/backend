//import connection
import db from "../config/database.js";

//get all products
export const getProducts = (result) => {
  db.query("SELECT * FROM product", (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  });
};

//get single procuct
export const getProductById = (id, result) => {
  db.query("SELECT * FROM PRODUCT WHERE product_id = ?"[id], (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results[0]); 
    }
  });
};

// Insert product to database


// Delete Product to Database

export const deleteProductById = (id, result) => {
    db.query("DELETE FROM product WHERE product_id = ?", [id], (err, result))
}
