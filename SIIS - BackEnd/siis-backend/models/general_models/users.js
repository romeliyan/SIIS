const mongoose = require("mongoose");
const Joi = require("joi");
const jwt = require("jsonwebtoken");
const config = require("config");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
    minLength: 5,
    maxLength: 255,
    unique: true
  },
  password: {
    type: String,
    required: true,
    minLength: 5,
    maxLength: 255
  },

  userType: {
    type: String,
    required: true
  }
});

UserSchema.methods.generateAuthToken = function() {
  const token = jwt.sign(
    { _id: this._id, type: this.userType, email: this.email },
    config.get("jwtPrivateKey")
  );
  return token;
};

const User = mongoose.model("User", UserSchema);

function validateUser(user) {
  const userValidateSchema = {
    email: Joi.string()
      .min(5)
      .max(255)
      .required()
      .email(),
    password: Joi.string()
      .min(2)
      .max(255)
      .required(),
    userType: Joi.string().required()
  };

  return Joi.validate(user, userValidateSchema);
}

function validateUserForLogin(user) {
  const userValidateSchemaForLogin = {
    email: Joi.string()
      .min(5)
      .max(255)
      .required()
      .email(),
    password: Joi.string()
      .min(5)
      .max(255)
      .required()
  };

  return Joi.validate(user, userValidateSchemaForLogin);
}

module.exports.User = User;
module.exports.validateUser = validateUser;
module.exports.validateUserForLogin = validateUserForLogin;
