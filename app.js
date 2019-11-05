const express =require("express")
const path =require("path")
const handlebars = require("express-handlebars")
const bodyParser = require("body-parser")
const fs = require("fs")
let app = express()

let option = {
    defaultLayout: "main"
}
app.use(bodyParser.urlencoded({extended:false}))
// let render = handlebars(option)
app.engine("handlebars",handlebars({defaultLayout: "main"}))
app.set("view engine","handlebars")

app.get("/",(req,res)=>{
    // res.send("DMM CKO HUU ")
    let data = JSON.parse(fs.readFileSync("data.json", "utf8"))
    let question = data[Math.floor(Math.random() * data.length)]
    console.log(question)
    console.log(question.questionContent)

    
  
        

    
    

    res.render("mainpage",{
        
        questionup: question.questionContent

    })
    // res.sendFile(path.resolve(__dirname + '/public/index.html'))
})
app.post("/ask",(req,res)=>{
    let questionContent = req.body.text
    try {
        let data1 = fs.readFileSync(path.resolve(__dirname,'data.json')).toString('utf8')
        let dataR = JSON.parse(data1)

        let newquestion={
            id: dataR.length +1,
            questionContent: questionContent,
            questionAnswer:[]

        }
        dataR.push(newquestion)
        let saveddata = JSON.stringify(dataR)
        fs.writeFile('data.json',saveddata,'utf8',(err) => {
            if(err){console.log(err)}else{
                console.log("saved")
                res.render('askPage')
            }
        })
        
    } catch (error) {
        let data = []
        let newQuestion = {
            id : 1 ,
            questionContent: questionContent,
            questionAnswer: []
        }
        data.push(newQuestion)
        let savedData = JSON.stringify(data)
        fs.writeFile('data.json',savedData,'utf8',(err) => {
            if (err) {console.log(err)} else {
                console.log("Saved")
                res.render('askPage')
            }
        })

    }

})
    

app.get("/ask",(req,res)=>{
    // res.send("hieu dz :)))")
    res.render("askPage")
})
app.use(express.static("public"))
app.listen(5000,(err)=>{
    if(err){console.log(err)}else{
        console.log("App listen at 5000")
    }
})
//get la gui du lieu, post la nhan du lieu