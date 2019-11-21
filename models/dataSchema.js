const mongoose = require("mongoose")
const Schema = mongoose.Schema
// const express = require("express")
// const askRouter = require("../routers/askRouter")
// // import { dataI } from '../routers/askRouter';
// // import{dataI} from"../routers/askRouter"
// // const questionSchema = new Schema({
// //     questionContent: { type: String },
// //     questionAnswers: []

// // }, {
// //     _id: true,
// //     timestamps: true
// // })

const questionSchema = new Schema({
    questionContent: { type: String },
    questionAnswer: []
}, {
    _id: true,
    timestamps: true
})


const Question = mongoose.model("question", questionSchema)



module.exports = Question