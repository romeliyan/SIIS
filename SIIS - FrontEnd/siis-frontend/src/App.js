import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import LoginRegister from './components/general_components/Login-Register-Root';
import AdminHome from './components/admin_components/Home-Root';
import InstructorHome from './components/instructor_components/Home-Root';
import StudentHome from './components/student_components/Home-Root';
import ProtectedRoute from './middleware/protected_route';
import {Provider as AlertProvider} from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
import Alert from './components/general_components/Alerts';
import Exam from './components/instructor_components/Exams';
import Assignment from './components/instructor_components/Assignments';
import ViewCourse from './components/instructor_components/ViewCourse'
import MyAccount from './components/instructor_components/MyAccount';
import 'core-js';
import StudentProfile from './components/student_components/studentProfile.comp';
import ConfirmationCode from './components/student_components/confirmEnrollment';
import ViewCourseStudent from './components/student_components/ViewCourses.stud'
import EnrolledToCourses from './components/student_components/enrolledCourses';
import AssignmentList from './components/student_components/AssignmentList';
import Instructor from './components/admin_components/Instructors';
import Courses from './components/admin_components/Courses';

const alertOptions = {
  timeout: 3000, 
  position: 'top center',
}

function App() {
  return (

    <BrowserRouter>
      <AlertProvider template={AlertTemplate} {...alertOptions}>
        <Alert/>
        <div className="App">
          <Switch>   
            <Route exact path="/" component={LoginRegister}/>
            <Route exact path="/SignUp" component={LoginRegister}/>
            <ProtectedRoute path="/AdminHome" component={AdminHome}/>
            <ProtectedRoute path="/InstructorHome" component={InstructorHome}/>
            <ProtectedRoute exact path="/StudentHome" component={StudentHome}/>
            <ProtectedRoute path="/InstructorHome/Exams" component={Exam}/>
            <ProtectedRoute path="/InstructorHome/Assignments" component={Assignment}/>
            <ProtectedRoute path="/InstructorHome/ViewCourse" component={ViewCourse}/>
            <ProtectedRoute path="/InstructorHome/MyAccount" component={MyAccount}/>
	    <ProtectedRoute path="/AdminHome/Instructors" component={Instructor} />
            <ProtectedRoute path="/AdminHome/Courses" component={Courses} />
            <Route path="*" component={() => "404 Not Found"}/>




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
            component={ViewCourseStudent}
          />
          <ProtectedRoute
            exact
            path="/StudentHome/mycourses"
            component={EnrolledToCourses}
          />

          <ProtectedRoute
            exact
            path="/StudentHome/courses/assignments"
            component={AssignmentList}
          />
          <ProtectedRoute exact path="/StudentHome/user/exams" component={Exam} />
          </Switch>  


        </div> 
      </AlertProvider>
    </BrowserRouter>
   
  );
}

export default App;
