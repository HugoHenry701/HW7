const express = require("express")
const Router = express.Router()
const { asyncreadData, updateByID, deleteData } = require("../controller/controller")


Router.get("/", async (req, res) => {
    try {

        // updateByID()
        let dataN = await asyncreadData();
        // console.log(data)
        let randomData = await dataN[Math.floor(Math.random() * dataN.length)]
        res.render("mainPage", {
            questionup: randomData.questionContent,
        });
        let id = await randomData._id
        let answer = ["yes", "no"]
        answer.map(e => {
            Router.post(`/${e}`, async (req, res) => {
                await updateByID(id, `${e}`)
                res.redirect("/")
            })
        })
        let delet = ["delete"]
        delet.map(d => {
            Router.post(`/${d}`, async (req, res) => {
                await deleteData(id, `${d}`)
                res.redirect("/")
            })
        })

    } catch{
        res.render("mainPage", {
            questionmiss: "Please submit question :>"
        })
    }

})


module.exports = Router