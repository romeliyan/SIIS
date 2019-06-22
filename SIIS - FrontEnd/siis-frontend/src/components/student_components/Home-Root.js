import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import { withAlert } from "react-alert";
import ProtectedRoute from "../../middleware/protected_route";
import jwtToken from "jwt-decode";
import auth from "../../middleware/auth";
import ViewCourses from "./ViewCourses.stud";
import EnrolledCourses from "./enrolledCourses";
import StudentNavBar from "./studentNavBar";
import StudentProfile from "./studentProfile.comp";
import StudentMainUI from "./studentMainUI.comp";
import ConfirmationCode from "./confirmEnrollment";
import StudentExams from "./studentsExams";
import Exam from "./studentsExams";
import axios from "axios";
class HomeRoot extends Component {
  state = {
    enrollmentKEY: "",
    userUUID: ""
  };

  setSelectedItem(e) {
    this.setState({
      enrollmentKEY: e
    });
  }

  componentDidMount() {
    this.interval = setInterval(
      () => this.setState({ time: Date.now() }),
      1000
    );
    //GEN TOCKEN
    const token = jwtToken(auth.getToken());
    //console.log(token);

    //connect axios to /email endpoint to get userUUID
    axios
      .get("http://localhost:3000/api/student/email/" + token.email + "")
      .then(response => {
        //console.log(response.data._id);
        localStorage.setItem("UUID", response.data._id);
      });

    console.log(
      "-------TOKEN DETAIL ----------------->   " + localStorage.getItem("UUID")
    );
  }

  render() {
    return (
      <BrowserRouter>
        <StudentNavBar />

        <ProtectedRoute exact path="/StudentHome/" component={StudentMainUI} />

        <ProtectedRoute
          exact
          path="/StudentHome/profile"
          component={StudentProfile}
        />
        <ProtectedRoute
          exact
          path="/StudentHome/enrollme"
          component={ConfirmationCode}
        />
        <ProtectedRoute
          exact
          path="/StudentHome/viewCourses"
          component={ViewCourses}
          setState={this.setSelectedItem}
        />
        <ProtectedRoute
          exact
          path="/StudentHome/mycourses"
          component={EnrolledCourses}
        />
        <ProtectedRoute exact path="/StudentHome/user/exams" component={Exam} />
      </BrowserRouter>
    );
  }
}

export default withAlert()(HomeRoot);
