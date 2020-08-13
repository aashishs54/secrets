const express = require("express")
const router = express.Router()
const userController = require("./Controllers/userController")

//Home route
router.get("/", userController.homePage)

//Login or register get routes
router.get("/login" , userController.login)
router.get("/register", userController.register)

//Login or register post routes
router.post("/register", userController.registerUser)
router.post("/login", userController.loginUser)



module.exports = router