const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({    // collection of data from signup.ejs
   productName: {type: String,  required : true},
   productDescription: {type: String,  required : true},
   productPrice: {type: String,  required : true},
   imagePath : {type: String,  required : true}
});

const ProductDetails =  new mongoose.model("ProductDetails",productSchema); // model using getting user collection and user schema 
module.exports = ProductDetails //export user details

