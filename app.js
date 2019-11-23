const express = require("express")
const path = require("path")
const handlebars = require("express-handlebars")
const bodyParser = require("body-parser")
const homeRouter = require("./routers/homeRouter")
const askRouter = require("./routers/askRouter")
const mongoose = require("mongoose")
const yesno = require("./routers/yesno")

let app = express()

mongoose.connect("mongodb://localhost/csdl", { useNewUrlParser: true }, (err) => {
    if (err) { console.log(err) } else
    console.log("database connected")
})
app.use(bodyParser.urlencoded({ extended: false }))

app.use("/", homeRouter)
app.use("/", askRouter.router)
app.use("/", yesno)
let option = {
    defaultLayout: "main"
}

app.engine("handlebars", handlebars({ defaultLayout: "main" }))
app.set("view engine", "handlebars")
app.use(express.static("public"))

app.listen((701), (err) => {
    if (err) { console.log(err) } else {
        console.log("App listen at 701")
    }
})
