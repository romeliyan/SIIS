const mongoose = require("mongoose");

const assignments = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minLength: 5,
    maxLength: 255,
    unique: true
  },
  instructions: {
    type: String,
    required: true,
    minLength: 5,
    maxLength: 255
  },

  dueDate: {
    type: Date,
    required: true
  },

  marks: {
    type: Number,
    required: true
  },
  courseID: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("assignments", assignments);
