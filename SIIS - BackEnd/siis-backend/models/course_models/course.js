const mongoose = require('mongoose');
const Joi = require('joi');
const Schema = mongoose.Schema;

const CourseSchema = new Schema({

    name:{
        type:String,
        required: true,
        unique: true
    },
    lecture:{
        type:String,
        required: true,
    },

    code: {
        type: String,
        required: true
    }
});

const Course = mongoose.model('Course', CourseSchema);

function validateCourse(Course){

    const courseValidateSchema = {
        name: Joi.string().required(),
        lecture: Joi.string().required(),
        code: Joi.string().required()
    };

    return Joi.validate(Course, courseValidateSchema);
}

module.exports.Course = Course;
module.exports.ValidateCourse = validateCourse;