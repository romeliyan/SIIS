import React, { Component } from "react";
import EnrollModal from "./studentEnrollModal";
import axios from "axios";
class ViewCourses extends Component {
  state = {
    courseList: [
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
    ],
    selectedCourse: {}
  };

  //   componentWillMount() {
  //     axios
  //       .get("http://localhost:4001/api/courses")
  //       .then(res => {
  //         this.setState({
  //           traindata: res.data
  //         });
  //       })
  //       .catch(err => {
  //         console.log(err);
  //       });
  //   }

  enrollToCourse = e => {
    this.setState(
      {
        selectedCourse: e
      },
      function() {
        console.log("SELECTED -> " + this.state.selectedCourse.courseName);
      }
    );
  };

  itmDetails = input => {
    this.props.priceSetState(input.Price);
  };

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

                    <div style={{ float: "right" }}>
                      <a href="/enroll/validate">
                        <button
                          type="button"
                          className="btn btn-primary"
                          onClick={() => this.enrollToCourse(item)}
                        >
                          Enroll to Course
                        </button>
                      </a>
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
