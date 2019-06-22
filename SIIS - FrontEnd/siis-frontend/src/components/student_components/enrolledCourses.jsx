import React, { Component } from "react";
import axios from "axios";

class EnrolledToCourses extends Component {
  state = {
    studentID: localStorage.getItem("UUID"),
    infoPayLoad: []
  };

  //STEPS
  //----------> fetch course ids for given UUID
  //----------> access courselist by computed course ids
  //---------->render to user

  componentDidMount() {
    axios
      .get(
        "http://localhost:3000/api/student/enrolled/" +
          localStorage.getItem("UUID")
      )
      .then(response => {
        this.setState(
          {
            infoPayLoad: response.data
          },
          function() {
            console.log(this.state.infoPayLoad);
          }
        );
      })
      .catch(err => console.log(err));
  }

  onPlay = () => {
    alert("Clickked");
  };

  render() {
    return (
      <div>
        <h1>{this.state.courseIDList}</h1>
        <ul>
          {this.state.infoPayLoad.map(item => {
            return (
              <div className="container">
                <div
                  className="panel panel-default"
                  onClick={() => this.onPlay()}
                >
                  <div className="panel-heading ">
                    {JSON.stringify(item.courseName)}
                  </div>

                  <div className="panel-body">
                    <h5>Course Name : {item.name}</h5>
                    <h5>Lecturer : {item.lecture}</h5>
                    <h5>Course Code : {item.code}</h5>
                    <h5>Enroll Key : {item.enrollKey}</h5>
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
