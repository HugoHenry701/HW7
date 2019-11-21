const express = require("express")
const Router = express.Router()
const controller = require("../controller/controller")


Router.get("/ask", (req, res) => {
    res.render("askPage")
})

Router.post("/ask", (req, res) => {
    let questionContent = req.body.question
    controller.createData(questionContent)
    res.render("askPage")
})
module.exports = {
    router: Router,
 
}