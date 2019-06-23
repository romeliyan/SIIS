const mongoose = require("mongoose");

const student_enrolled_at = new mongoose.Schema({
  studentID: String,
  courseID: String,
  name: String,
  lecture: String,
  code: String
});

module.exports = mongoose.model("student_enrolled_at", student_enrolled_at);
