import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import { withAlert } from "react-alert";
import ProtectedRoute from "../../middleware/protected_route";

import ViewCourses from "./ViewCourses.stud";
import EnrolledCourses from "./enrolledCourses";
import StudentNavBar from "./studentNavBar";
import StudentProfile from "./studentProfile.comp";
import StudentMainUI from "./studentMainUI.comp";

class HomeRoot extends Component {
  render() {
    return (
      <BrowserRouter>
        <StudentNavBar />

        <ProtectedRoute exact path="/StudentHome/" component={StudentMainUI} />

        <ProtectedRoute exact path="/StudentHome/profile" component={StudentProfile} />
        <ProtectedRoute
          exact
          path="/StudentHome/enroll"
          component={ViewCourses}
        />
        <ProtectedRoute
          exact
          path="/StudentHome/enrolledCourses"
          component={EnrolledCourses}
        />


      </BrowserRouter>
    );
  }
}

export default withAlert()(HomeRoot);
