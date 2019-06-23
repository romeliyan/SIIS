const mongoose = require("mongoose");

const student_assignment_mapper = new mongoose.Schema({
  assignmentID: String,
  assignmentName: String,
  courseID: String,
  studentID: String,
  uploadedAt: {
    type: Date,
    // `Date.now()` returns the current unix timestamp as a number
    default: Date.now
  }
});

module.exports = mongoose.model("student_assignment_mapper", student_assignment_mapper);
