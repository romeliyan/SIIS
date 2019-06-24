import React, {Component} from 'react';
import {BrowserRouter} from 'react-router-dom';
import ProtectedRoute from '../../middleware/protected_route';
import NavBar from './NavBar';
import Course from './Courses';
import Exam from './Exams';
import Assignment from './Assignments';
import ViewCourse from './ViewCourse';
import MyAccount from './MyAccount';

import {withAlert} from 'react-alert';

class HomeRoot extends Component{
 
  state = {
    selectedCourse: '',
    selectedCourseID: ''
  }

  getSelectedCourse = (courseName, courseID) => {
    this.setState({
      selectedCourse: courseName,
      selectedCourseID: courseID
    }, () => {
      console.log('Selected Course From HomeRoot ' + this.state.selectedCourse);
    })
  }


  handleLogout = () => {
    this.props.history.push('/');
  }


  render(){
    return (
      <BrowserRouter>

        <div className="InstructorHome">
          <NavBar handleLogout={this.handleLogout}/>
          
          <ProtectedRoute exact path="/InstructorHome/" component={Course} getSelectedCourse={this.getSelectedCourse}/>
          <ProtectedRoute exact path="/InstructorHome/Exams" component={Exam}/>
          <ProtectedRoute exact path="/InstructorHome/Assignments" component={Assignment}/>
          <ProtectedRoute exact path="/InstructorHome/ViewCourse" component={ViewCourse} selectedCourseName={this.state.selectedCourse} 
          selectedCourseID={this.state.selectedCourseID}/>
          <ProtectedRoute exact path="/InstructorHome/MyAccount" component={MyAccount}/>
          
          
        </div>
        
      </BrowserRouter>
      
    );
  }
}

export default withAlert()(HomeRoot);
