const express = require ("express")
const router = express.Router()
const{register,login,getUserData} = require("../controllers/userControllers")
const authMiddleware = require('../middlewares/authMiddleware')


router.post("/register", register)
router.post("/login", login) 
router.get("/",authMiddleware,getUserData)


module.exports= router