const mongoose = require('mongoose');
const Joi = require('joi');
const Schema = mongoose.Schema;
const DateOnly = require('mongoose-dateonly')(mongoose);

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
        type: DateOnly,
        required: true
    },

    marks: {
        type: Number,
        required: true
    },

    courseName: {
        type: String, 
        required: true
    },

    examinationHall: {
        type: String, 
        required: true
    }
});

const Exam = mongoose.model('Exam', ExamSchema);

function validateExam(exam){

    const examValidateSchema = {
        name: Joi.string().required(),
        instructions: Joi.string().required(),
        date: Joi.date().required(),
        marks: Joi.number().required(),
        courseName: Joi.string().required(),
        examinationHall: Joi.string().required()

    };

    return Joi.validate(exam, examValidateSchema);
}

module.exports.Exam = Exam
module.exports.ValidateExam = validateExam;