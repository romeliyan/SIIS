const mongoose = require("mongoose");

const student_course = new mongoose.Schema({
  studentID: String,
  courseID: String
});

module.exports = mongoose.model("student_course", student_course);
