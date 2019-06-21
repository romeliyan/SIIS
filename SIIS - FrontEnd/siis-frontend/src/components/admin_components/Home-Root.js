import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import ProtectedRoute from '../../middleware/protected_route';
import NavBar from './NavBar';
import { withAlert } from 'react-alert';
import Courses from './Courses';
import Admins from './Admins';
import Instructor from './Instructors';

class HomeRoot extends Component {

  handleLogout = () => {
    this.props.history.push('/');
  }

  render() {
    return (
      <BrowserRouter>

        <div className="AdminHome">
          <NavBar handleLogout={this.handleLogout} />

          <ProtectedRoute exact path="/AdminHome/" component={Admins} />
          <ProtectedRoute exact path="/AdminHome/Instructors" component={Instructor} />
          <ProtectedRoute exact path="/AdminHome/Courses" component={Courses} />



        </div>

      </BrowserRouter>

    );
  }
}

export default withAlert()(HomeRoot);
