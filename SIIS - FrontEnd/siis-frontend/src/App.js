import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LoginRegister from "./components/general_components/Login-Register-Root";
import AdminHome from "./components/admin_components/Home-Root";
import InstructorHome from "./components/instructor_components/Home-Root";
import StudentHome from "./components/student_components/Home-Root";
import ProtectedRoute from "./middleware/protected_route";
import { Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import Alert from "./components/general_components/Alerts";

import "core-js";
import StudentProfile from "./components/student_components/studentProfile.comp";
import StudentMainUI from "./components/student_components/studentMainUI.comp";
import ConfirmationCode from "./components/student_components/confirmEnrollment";
import ViewCourses from "./components/student_components/ViewCourses.stud";
import EnrolledToCourses from "./components/student_components/enrolledCourses";
import Exam from "./components/student_components/studentsExams";

const alertOptions = {
  timeout: 3000,
  position: "top center"
};

function App() {
  return (
    <BrowserRouter>
      <AlertProvider template={AlertTemplate} {...alertOptions}>
        <Alert />
        <div className="App">
          <Switch>
            <Route exact path="/" component={LoginRegister} />
            <Route exact path="/SignUp" component={LoginRegister} />
            <ProtectedRoute exact path="/AdminHome" component={AdminHome} />
            <ProtectedRoute
              exact
              path="/InstructorHome"
              component={InstructorHome}
            />
            <ProtectedRoute exact path="/StudentHome" component={StudentHome} />
            <Route path="*" component={() => "404 Not Found"} />
            //student linking
            <ProtectedRoute
              exact
              path="/StudentHome/"
              component={StudentMainUI}
            />
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
            />
            <ProtectedRoute
              exact
              path="/StudentHome/mycourses"
              component={EnrolledToCourses}
            />
            <ProtectedRoute
              exact
              path="/StudentHome/user/exams"
              component={Exam}
            />
          </Switch>
        </div>
      </AlertProvider>
    </BrowserRouter>
  );
}

export default App;
