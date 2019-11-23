const express = require("express")
const Router = express.Router()
const {updateByID} = require("../controller/controller")



Router.post("/",(req,res)=>{
    let id = req.headers.questionID
    console.log(id)
    res.render("mainpage")
})







module.exports = Router