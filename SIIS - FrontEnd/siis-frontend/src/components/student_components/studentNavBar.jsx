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
              <a className="navbar-brand" href="/StudentHome/">
                StudentLMS
              </a>
            </div>
            <ul className="nav navbar-nav">
              <li className="acenrollCoursetive">
                <NavLink exact to="/StudentHome/viewCourses">
                  View Courses to Enroll
                </NavLink>
              </li>
              <li className="acenrollCoursetive">
                <NavLink exact to="/StudentHome/mycourses">
                  My Courses
                </NavLink>
              </li>
              <li className="acenrollCoursetive">
                <NavLink exact to="/StudentHome/profile">
                  Dashboard
                </NavLink>
              </li>
              <li className="acenrollCoursetive">
                <NavLink exact to="/StudentHome/user/exams">
                  My Exams
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
