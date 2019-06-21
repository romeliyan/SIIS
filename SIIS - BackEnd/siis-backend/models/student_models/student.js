const mongoose = require("mongoose");
const Joi = require("joi");
const jwt = require("jsonwebtoken");
const config = require("config");
const Schema = mongoose.Schema;

const studentSchema = new Schema({
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
  username: {
    type: String,
    required: true
  },

  course: {
    type: [String],
    required: true
  },

  studentId: {
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

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;
