import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import { withAlert } from "react-alert";
import ProtectedRoute from "../../middleware/protected_route";

import ViewCourses from "./ViewCourses.stud";
import EnrolledCourses from "./enrolledCourses";
import StudentNavBar from "./studentNavBar";
import StudentProfile from "./studentProfile.comp";
import StudentMainUI from "./studentMainUI.comp";
import ConfirmationCode from "./confirmEnrollment";

class HomeRoot extends Component {
  state = {
    enrollmentKEY: ""
  };

  setSelectedItem(e) {
    this.setState({
      enrollmentKEY: e
    });
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
          path="/StudentHome/enrolledToCourses"
          component={EnrolledCourses}
        />
      </BrowserRouter>
    );
  }
}

export default withAlert()(HomeRoot);
