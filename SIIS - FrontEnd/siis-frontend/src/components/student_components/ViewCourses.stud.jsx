import React, { Component } from "react";
import jwtToken from "jwt-decode";
import auth from "../../middleware/auth";
import { NavLink } from "react-router-dom";
import axios from "axios";
class ViewCourses extends Component {
  state = {
    userName: "",
    courseList: [],
    selectedCourse: {}
  };

  enrollToCourse = e => {
    localStorage.setItem("key", e.enrollKey);
    localStorage.setItem("course_id", e._id);
    localStorage.setItem("name",e.name);
    localStorage.setItem("lecture",e.lecture);
    localStorage.setItem("code",e.code);
    this.props.history.push("/StudentHome/enrollme");
  };

  // componentWillMount() {
  //   const token = jwtToken(auth.getDecodedToken);
  //   console.log("-->" + token);
  // }
  componentDidMount() {
    console.log("KEY -------->" + localStorage.getItem("u_id"));

    axios
      .get("http://localhost:3000/api/courses")
      .then(res => {
        this.setState(
          {
            courseList: res.data
          },
          function() {
            console.log(this.state.courseList);
          }
        );
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.courseList.map(item => {
            return (
              <div className="container">
                <div className="panel panel-default">
                  <div className="panel-heading ">
                    {JSON.stringify(item.courseName)}
                  </div>

                  <div className="panel-body">
                    <h5>Course Name : {item.name}</h5>
                    <h5>Lecturer : {item.lecture}</h5>
                    <h5>Course Code : {item.code}</h5>
                    <h5>Enroll Key : {item.enrollKey}</h5>

                    <div style={{ float: "right" }}>
                      <button
                        type="button"
                        className="btn btn-primary"
                        onClick={() => this.enrollToCourse(item)}
                      >
                        Enroll to Course
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default ViewCourses;
