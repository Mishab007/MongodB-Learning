const productModel = require("../models/productScheema");

const AdminObject = {
  getDashboard: (req, res) => {
    res.render("admin/dashboard");
  },
  getAddProduct: (req, res) => {
    res.render("admin/addProduct");
  },
  getProductList: async (req, res) => {
    const products = await productModel.find();
    res.render("admin/productList", { products });
  },
  getUserDetails: (req, res) => {
    res.render("admin/userDetails");
  },
  productName: async (req, res) => {
    const productName = req.body.productName;
    const productDescription = req.body.productDescription;
    const productPrice = req.body.productPrice;

    // Check if req.file exists and has a filename, then construct imagePath
    const imagePath = req.file ? "product-images/" + req.file.filename : "";

    const product = {
      productName,
      productDescription,
      productPrice,
      imagePath,
    };

    try {
      const productData = await productModel.create(product);
      console.log("Product added successfully:", productData);
      res.redirect("/admin/productList");
    } catch (error) {
      console.error("Error adding product:", error.message);
      // Handle the error appropriately, e.g., send an error response to the client
      res.status(500).send("Error adding product");
    }
  },
  getProductDelete: async (req,res)=>{
    const productId = req.params.productId
    const findDelProduct=await productModel.findByIdAndDelete(productId)

    res.redirect("/admin/productList")
  },
  getEditProduct: async (req,res)=>{
    const productId = req.params.productId
   
    const findProduct=await productModel.findById(productId)
    res.render("admin/editProduct",{findProduct})
  },
  postProductEdit:async (req,res)=>{
    const productId = req.params.productId
    const productName =await req.body.productName;
    const product=await productModel.findById(productId)
   console.log(product);
   console.log(productName);
  //  if(product){
  //   product.productName=productName
  //   product.productDescription=productDescription
  //   product.productPrice=productPrice
  //  }
   
    res.redirect("/admin/productList")
  }
};

module.exports = AdminObject;
