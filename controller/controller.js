const question = require("../models/dataSchema")



// const createData = (userQuestion) => {
//     let newquestionErr = {
//         questionContent: userQuestion
//     }
//     questionSchema.create(newquestionErr)
// }

const createData = (userQuestion) => {
    let newQuestion = {
        questionContent: userQuestion
    }
    question.create(newQuestion)
}

let dataR = []
var readData = (callback) => {
    question.find({}, (err, data) => {
        if (err) {
            callback({
                questionContent:"loi khong tim thay"
            })
        } else {
            callback(data)
        }
    })
}
let updateData = () => {
    
}
let deleteData = () => {

}

module.exports = {
    createData,
    readData
}