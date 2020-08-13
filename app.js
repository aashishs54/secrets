//jshint esversion:6
const express = require("express")
const ejs = require("ejs")
const flash = require("connect-flash")
const router = require("./router")


const app = express()

app.set("views" , "views")
app.set ("view engine" , "ejs")

app.use(express.static("public"))
app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(flash())
app.use("/", router)

module.exports = app
