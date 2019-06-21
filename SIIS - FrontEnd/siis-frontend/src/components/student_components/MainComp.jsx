import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import ViewCourses from "./ViewCourses.stud";
import ConfirmationCode from "./confirmEnrollment";
import StudentNavBar from "./studentNavBar";
import EnrolledCourses from "./enrolledCourses";
import StudentMainUI from "./studentMainUI.comp";
import StudentProfile from "./studentProfile.comp";

class MainComp extends Component {
  render() {
    return (
      <BrowserRouter>
        <StudentNavBar />
        <Route exact path="/enroll" component={ViewCourses} />
        <Route exact path="/" component={StudentMainUI} />
        <Route exact path="/enroll/validate" component={ConfirmationCode} />
        <Route exact path="/mycourses" component={EnrolledCourses} />
        <Route exact path="/dashboard" component={StudentProfile} />
      </BrowserRouter>
    );
  }
}

export default MainComp;
