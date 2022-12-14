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
  db.query("SELECT * FROM PRODUCT WHERE product_id = ?", [id], (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results[0]); 
    }
  });
};

// Insert product to database
export const insertProduct = (data, result) => {
    db.query("INSERT INTO product SET?", [data], (err, results) => {
      if (err) {
          console.log(err);
          result(err, null);
        } else {
          result(null, results);
      }
    }
  )
}

// Update product to database
export const updateProductById = (data, id, result) => {
    db.query("UPDATE product SET product_name = ?, product_price = ? WHERE product_id = ?", [data.product_name, data.product_price, id], (err, results) => {
      if (err) {
          console.log(err);
          result(err, null);
        } else {
          result(null, results);
      }
    }
  )
}

// Delete product from database
export const deleteProductById = (id, result) => {
    db.query("DELETE from product WHERE product_id = ?", [id], (err, results) => {
      if (err) {
          console.log(err);
          result(err, null);
        } else {
          result(null, results);
      }
    }
  )
}



