const mongoose = require('mongoose');
const Joi = require('joi');
const Schema = mongoose.Schema;

const instructorSchema = new Schema({

    firstName: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 20
    },

    lastName: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 30
    },

    email: {
        type: String,
        required: true,
        minlength: 6,
        maxlength: 50,
        unique: true
    },

    nic: {
        type: String,
        required: true,
        minlength: 10,
        maxlength: 15,
        unique: true
    },

    mobileNumber: {
        type: String,
        required: true,
        minlength: 10,
        maxlength: 10,
        unique: true
    },

    password: {
        type: String,
        minlength: 5,
        maxlength: 30
    }

});

const Instructor = mongoose.model('Instructor', instructorSchema);

function validateInstructor(instructor) {
    const instructorValidateSchema = {
        firstName: Joi.string().required().min(2).max(20),
        lastName: Joi.string().required().min(2).max(30),
        email: Joi.string().required().min(6).max(50),
        nic: Joi.string().required().min(10).max(15),
        mobileNumber: Joi.string().required().min(10).max(10),
        password: Joi.string().min(5).max(30)
    };

    return Joi.validate(instructor, instructorValidateSchema);
}

module.exports.Instructor = mongoose.model('instructor', instructorSchema);
module.exports.ValidateInstructor = validateInstructor;