const mongoose = require('mongoose');
const Joi = require('joi');
const Schema = mongoose.Schema;

const adminSchema = new Schema({

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

const Admin = mongoose.model('Admin', adminSchema);

function validateAdmin(admin) {
    const adminValidateSchema = {
        firstName: Joi.string().required().minlength(2).maxlength(20),
        lastName: Joi.string().required().minlength(2).maxlength(30),
        email: Joi.string().required().minlength(6).maxlength(50).unique(),
        nic: Joi.string().required().minlength(10).maxlength(15).unique(),
        mobileNumber: Joi.string().required().minlength(10).maxlength(10).unique(),
        password: Joi.string().minlength(5).maxlength(30)
    };

    return Joi.validate(admin, adminValidateSchema);
}

module.exports = mongoose.model('admin', adminSchema);
module.exports.validateAdmin = validateAdmin;