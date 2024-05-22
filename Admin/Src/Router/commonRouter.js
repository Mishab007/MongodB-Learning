const express = require("express")
const router = express.Router()
const {getHome, getSignup, getLogin, postSignup, postLogin, getLogout} = require("../controllers/commonController")
const middleware = require("../middlewaire/validation")
const validation = require('../validation/validation')


//get 
router.get('/',getHome)
router.get('/signup',getSignup)
router.get('/login',getLogin)
router.get('/logout',getLogout)
//post
router.post('/signupAction',middleware,  postSignup)
router.post('/loginAction',postLogin)


module.exports = router