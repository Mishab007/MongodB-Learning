const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({    // collection of data from signup.ejs
   email: {type: String,  required : true},
   username: {type: String,  required : true},
   password: {type: String,  required : true},
   role: { type: String, enum: ['user', 'admin'], default: 'user' },
});

const userDetails =  new mongoose.model("userDetails",userSchema); // model using getting user collection and user schema 
module.exports = userDetails //export user details

