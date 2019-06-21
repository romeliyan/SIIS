import React, { Component } from "react";
import axios from "axios";
class EnrolledCourses extends Component {
  state = {
    studentCourseList: [],
    fetchedCoursesList: [
      {
        courseName: "fadfs",
        courseID: "2105",
        courseYear: "25"
      },
      {
        courseName: "fadfs",
        courseID: "2105",
        courseYear: "25"
      },
      {
        courseName: "fadfs",
        courseID: "2105",
        courseYear: "25"
      },
      {
        courseName: "fadfs",
        courseID: "2105",
        courseYear: "25"
      }
    ]
  };

  componentWillMount() {
    const courseID = this.state.studentCourseList[0];
    axios
      .get("/api/courses/" + courseID)
      .then(res => console.log(res))
      .catch(function(error) {
        // handle error
        console.log(error);
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

export default EnrolledCourses;
