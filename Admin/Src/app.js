const express = require('express');
const app = express();
const path = require('path')
const PORT = process.env.PORT || 5000
// const nocache = require("nocache");
const bodyParser = require('body-parser');
const router = require('../Src/Router/commonRouter');
const mongoose = require('mongoose'); //calling mongodb
const bycrpt = require('bcrypt')
const session = require('express-session')
const nocache = require('nocache')
const adminRoutes = require('./Router/adminRouter')

mongoose.connect('mongodb://127.0.0.1:27017/My_Database?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.1.1').then(()=>{
  console.log("mongooose connected");
}) //connected with mongo db



app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
app.use(nocache())
app.use(
  session({
      secret: "mydob@1234321",
      resave: false,
      saveUninitialized: true,
  }))
  app.use("/",router)
  app.use("/admin",adminRoutes)
  app.use("/Public",express.static("Public"))


  app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs'); // Adjust 'ejs' to your actual view engine


app.listen(PORT);