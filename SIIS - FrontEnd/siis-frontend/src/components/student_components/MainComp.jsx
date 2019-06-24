import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import StudentNavBar from "./studentNavBar";
import ViewCourses from "./ViewCourses.stud";
import EnrolledCourses from "./enrolledCourses";

class MainComp extends Component {
  render() {
    return (
      <BrowserRouter>
        <StudentNavBar />
        <Route exact path="/enroll" component={ViewCourses} />
        <Route exact path="/" />
        <Route exact path="/enroll/validate" />
        <Route exact path="/mycourses" component={EnrolledCourses} />
        <Route exact path="/dashboard" />
      </BrowserRouter>
    );
  }
}

export default MainComp;
