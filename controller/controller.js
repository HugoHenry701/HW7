const question = require("../models/dataSchema")
const mongoose = require("mongoose")




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

async function asyncreadData() {
    let data = await question.find({});
    return data

}
async function updateData(id, answer) {
    await question.findOneAndUpdate(
        { _id: id },
        { $push: { questionAnswer: answer } },
    )
}
async function deleteData(id){
    await question.findOneAndDelete({_id:id})
}

module.exports = {
    createData,
    asyncreadData,
    updateByID: updateData,
    deleteData
}