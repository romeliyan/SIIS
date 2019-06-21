import React, { Component } from "react";
import axios from "axios";

class EnrolledToCourses extends Component {
  state = {
    studentCourseList: [],
    fetchedCoursesList: []
  };

  componentDidMount() {
    axios.get("http://localhost:3000/api/courses").then(res => {
      this.setState((this.state.courses = res.data));
      console.log(this.state.courses);
    });
  }

  

  render() {
    return (
      <div>
        <ul>
          {this.state.fetchedCoursesList.map(item => {
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
