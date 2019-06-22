import React, { Component } from "react";
import axios from "axios";

class EnrolledToCourses extends Component {
  state = {
    loggedStudentID: localStorage.getItem("u_id"),
    courseList: []
  };

  componentDidMount() {
    axios
      .get(
        "http://localhost:3000/api/student/" + this.state.loggedStudentID + ""
      )
      .then(res => {
        this.setState(
          {
            courseList: res.data.course
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
                    <h5>Course Name : {item.courseName}</h5>
                    <h5>CourseID : {item.courseID}</h5>
                    <h5>Year : {item.courseYear}</h5>
                    <h5>Semester : {item.courseSemester}</h5>
                    <h5>
                      Enrollment Key :{" "}
                      {JSON.stringify(item.courseEnrollmentKey)}
                    </h5>
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

export default EnrolledToCourses;
