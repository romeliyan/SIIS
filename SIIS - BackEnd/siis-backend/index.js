const express = require("express");
const config = require("config");
const auth = require("./routes/general_routes/auth");
const examRoutes = require("./routes/exam_routes/exam.route");
const assignmentRoutes = require("./routes/assignment_routes/assignment.route");
const courseRoutes = require("./routes/course_routes/course.route");
const studentRoutes = require("./routes/student_routes/student.server.routes");
const admin = require("./routes/admin_routes/admin.server.routes");
const instructor = require("./routes/instructor_routes/instructor.server.routes");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3000;

//If the jwtPrivateKey is not set, exit the application.
if (!config.get("jwtPrivateKey")) {
  console.error("FATAL ERROR: jwtPirvateKey is not defined");
  process.exit(1);
}
//Connect to mongoDB
mongoose
  .connect(
    "mongodb+srv://melan96:melan96@mongo-todo-yebxu.mongodb.net/test?retryWrites=true",
    { useNewUrlParser: true }
  )
  .then(() => {
    console.log("Successfully connected to MongoDB");
  })
  .catch(err => {
    console.log("Could not connect to MongoDB");
    console.log(err);
  });

app.use(
  cors({
    //origin: 'http://localhost:3001'
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "x-auth-token"
  })
);

//User the middleware
app.use(bodyParser.json());
app.use("/api/student", studentRoutes);
app.use("/api/auth", auth);
app.use("/api/exams", examRoutes);
app.use("/api/assignments", assignmentRoutes);
app.use("/api/courses", courseRoutes);

app.use("/api/admin", admin);
app.use("/api/instructor", instructor);

app.listen(port, () => {
  console.log("Listening on port " + port);
});
