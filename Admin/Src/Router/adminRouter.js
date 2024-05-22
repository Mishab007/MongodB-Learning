
const express = require("express")
const adminRouter = express.Router()

const upload = require('../middlewaire/multer')
const {getDashboard,getAddProduct,getProductList,getUserDetails,productName, getProductDelete,getEditProduct, postProductEdit} = require('../controllers/adminController')





adminRouter.get('/dashboard',getDashboard)
adminRouter.get('/addProduct',getAddProduct)
adminRouter.get('/productList/',getProductList)
adminRouter.get('/userDetails',getUserDetails)
adminRouter.get("/deleteProduct/:productId",getProductDelete)
adminRouter.get("/editProduct/:productId",getEditProduct)


adminRouter.post('/productAction',upload.single('Image'),productName)
adminRouter.post('/editProduct/:productId',postProductEdit)

module.exports = adminRouter