const mongoose = require('mongoose');
const Joi = require('joi');
const Schema = mongoose.Schema;
const DateOnly = require('mongoose-dateonly')(mongoose);

const AssignmentSchema = new Schema({

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

    dueDate: {
        type: DateOnly,
        required: true
    },

    marks: {
        type: Number,
        required: true
    },

    courseName: {
        type:String,
        required: true
    }
});

const Assignment = mongoose.model('Assignment', AssignmentSchema);

function validateAssignment(assignment){

    const assignmentValidateSchema = {
        name: Joi.string().required(),
        instructions: Joi.string().required(),
        dueDate: Joi.date().required(),
        marks: Joi.number().required(),
        courseName: Joi.string().required()
    };

    return Joi.validate(assignment, assignmentValidateSchema);
}

module.exports.Assignment = Assignment;
module.exports.ValidateAssignment = validateAssignment;