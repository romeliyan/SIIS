const mongoose = require('mongoose');
const Joi = require('joi');
const Schema = mongoose.Schema;

const CourseInsSchema = new Schema({

    coursename:{
        type:String,
        required: true,
        unique: true
    },
    lecture:{
        type:String,
        required: true,
    },

    
});

const CourseIns = mongoose.model('CourseIns', CourseInsSchema);

function validateCourseIns(CourseIns){

    const CourseInsValidateSchema = {
        coursename: Joi.string().required(),
        lecture: Joi.string().required()
    };

    return Joi.validate(CourseIns, CourseInsValidateSchema);
}

module.exports.CourseIns = CourseIns;
module.exports.ValidateCourseIns = validateCourseIns;