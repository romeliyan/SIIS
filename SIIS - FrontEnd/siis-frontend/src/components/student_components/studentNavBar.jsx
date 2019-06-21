import React, { Component } from "react";

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
              <li className="active">
                <a href="/dashboard">My Account</a>
              </li>
              <li>
                <a href="/enroll">Enroll to Course</a>
              </li>
              <li>
                <a href="/mycourses">My Courses</a>
              </li>
              <li>
                <a href="#">sign out</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default StudentNavBar;
