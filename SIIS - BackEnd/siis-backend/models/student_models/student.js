const mongoose = require("mongoose");
const Joi = require("joi");
const jwt = require("jsonwebtoken");
const config = require("config");
const Schema = mongoose.Schema;

const studentSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String,
  nic: String,
  mobileNumber: String,
  username: String,
  course: [String],
  password: String,
  createdAt: {
    type: Date,
    // `Date.now()` returns the current unix timestamp as a number
    default: Date.now
  }
});

//Joi validation
function validateStudent(student) {
  const studentValidateSchema = {
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    email: Joi.string().email({ minDomainAtoms: 2 }),
    nic: Joi.string().required(),
    mobileNumber: Joi.string().required(),
    username: Joi.string()
      .alphanum()
      .min(3)
      .max(30)
      .required(),

    password: Joi.string().required()
  };

  return Joi.validate(student, studentValidateSchema);
}

module.exports.ValidateExam = validateStudent;
module.exports = mongoose.model("students", studentSchema);
