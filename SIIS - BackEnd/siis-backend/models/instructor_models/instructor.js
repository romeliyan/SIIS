const mongoose = require('mongoose');
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

    instructorId: {
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

module.exports = mongoose.model('instructor', instructorSchema);