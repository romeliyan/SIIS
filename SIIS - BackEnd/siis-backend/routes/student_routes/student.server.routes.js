const express = require("express");

const Student = require("../../models/student_models/student");
const student_enrolled = require("../../models/student_models/student_course");
const assignment = require("../../models/student_models/student_assignment");
const router = express.Router();

router.post("/", (req, res) => {
  let student = new Student(req.body);

  student
    .save()
    .then(response => {
      console.log(response);
      res.send(response).status(200);
    })
    .catch(err => console.log(err));
});

router.get("/", (req, res) => {
  Student.find({}, (err, doc) => {
    console.log("executed GET - X01");
    if (!err) {
      res.send(doc);
    }
  });
});

//find user by email
router.get("/email/:email", (req, res) => {
  console.log(req.params.email);
  Student.findOne({ email: req.params.email }, function(err, doc) {
    if (err) {
      console.log(err);
      res.json({ message: "not found" }).status(404);
    }
    console.log(doc);
    res.send(doc).status(200);
  });
});

router.get("/user/:id", (req, res) => {
  console.log(req.params.id);
  Student.findById(req.params.id, function(err, doc) {
    if (err) {
      console.log(err);
      res.json({ message: "not found" }).status(404);
    }
    console.log(doc);
    res.send(doc).status(200);
  });
});

//POST student when StudentID Recived
router.post("/enrolled", (req, res) => {
  let enrolledCourse = new student_enrolled(req.body);

  enrolledCourse
    .save()
    .then(response => {
      console.log(response);
      res.send(response).status(200);
    })
    .catch(err => console.log(err));
});

//getModulesWhen passing studentID

router.get("/enrolled/:studentID", (req, res) => {
  console.log(req.params.studentID);
  student_enrolled.find({ studentID: req.params.studentID }, function(
    err,
    doc
  ) {
    if (err) {
      console.log(err);
      res.json({ message: "not found" }).status(404);
    }
    console.log(doc);
    res.send(doc).status(200);
  });
});

//assignment Routes for student purpose

//POST --

router.post("/assignments", (req, res) => {
  let assignment_inst = new assignment(req.body);

  assignment_inst
    .save()
    .then(response => {
      console.log(response);
      res.send(response).status(200);
    })
    .catch(err => console.log(err));
});

//GET
router.get("/assignments/:courseID", (req, res) => {
  console.log(req.params.courseID);
  assignment.find({ courseID: req.params.courseID }, function(err, doc) {
    if (err) {
      console.log(err);
      res.json({ message: "not found" }).status(404);
    }
    console.log(doc);
    res.send(doc).status(200);
  });
});

//GET ALL --
router.get("/assignments", (req, res) => {
  
  assignment.find({}, function(err, doc) {
    if (err) {
      console.log(err);
      res.json({ message: "not found" }).status(404);
    }
    console.log(doc);
    res.send(doc).status(200);
  });
});

module.exports = router;
