const mongoose = require('mongoose');
const Joi = require('joi');
const Schema = mongoose.Schema;

const ExamSchema = new Schema({

    name:{
        type:String,
        required: true,
        minLength: 5,
        maxLength: 255,
        unique: true
    },

    instructions:{
        type:String,
        required: true,
        minLength: 5,
        maxLength: 255,
    },

    date: {
        type: Date,
        required: true
    },

    marks: {
        type: Number,
        required: true
    }
});

const Exam = mongoose.model('Exam', ExamSchema);

function validateExam(exam){

    const examValidateSchema = {
        name: Joi.string().required(),
        instructions: Joi.string().required(),
        date: Joi.date().required(),
        marks: Joi.number().required()
    };

    return Joi.validate(exam, examValidateSchema);
}

module.exports.Exam = Exam
module.exports.ValidateExam = validateExam;