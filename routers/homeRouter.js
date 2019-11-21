const express = require("express")
const Router = express.Router()
const controller = require("../controller/controller")


Router.get("/", (req, res) => {
    try {
        let callback = function (data) {
            res.render("mainpage", {

                questionup: data[Math.floor(Math.random()*data.length)].questionContent
    
            })
        }

        controller.readData(callback)

    } catch (error) {
        res.render("mainpage", {
            questionmiss: "Please submit question :>"
        })
    }
})
module.exports = Router
