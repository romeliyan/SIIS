import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class StudentNavBar extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <nav className="navbar navbar-inverse">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand" href="/">
                StudentLMS
              </a>
            </div>
            <ul className="nav navbar-nav">
              <li className="acenrollCoursetive">
                <NavLink exact to="/StudentHome/enroll">
                  Enroll to Courses
                </NavLink>
              </li>
              <li className="acenrollCoursetive">
                <NavLink exact to="/StudentHome/enrolledCourses">
                  My Courses
                </NavLink>
              </li>
              <li className="acenrollCoursetive">
                <NavLink exact to="/StudentHome/profile">
                  Dashboard
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default StudentNavBar;
