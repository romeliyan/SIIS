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
  password: String
});

module.exports = mongoose.model("students", studentSchema);
