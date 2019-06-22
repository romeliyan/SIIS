import React, { Component } from "react";
import axios from "axios";

class AssignmentList extends Component {
  state = {
    studentID: localStorage.getItem("UUID"),
    courseID: localStorage.getItem("clickedCourse"),
    infoPayLoad: []
  };

  //STEPS
  //----------> fetch course ids for given UUID
  //----------> access courselist by computed course ids
  //---------->render to user

  componentDidMount() {
    axios
      .get(
        "http://localhost:3000/api/student/assignments/" +
          localStorage.getItem("clickedCourse")
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

  render() {
    return (
      <div>
        <h1>{this.state.courseIDList}</h1>
        <ul>
          {this.state.infoPayLoad.map(item => {
            return (
              <div className="container">
                <div className="panel panel-default">
                  <div className="panel-heading ">
                    <h4>Assignment - {item.name}</h4>
                  </div>
                  <div className="panel-body">
                    <div className="container-fluid">
                      <h2>{item.name}</h2>
                      <p>{this.instructions}</p>
                      <table className="table table-condensed">
                        <tbody>
                          <tr>
                            <td>Assignment Name </td>
                            <td>{item.name}</td>
                          </tr>
                          <tr>
                            <td>Allocated Marks</td>
                            <td>{item.marks}</td>
                          </tr>
                          <tr>
                            <td>Due Date</td>
                            <td>{item.dueDate}</td>
                          </tr>
                          <tr>
                            <td>Course Name</td>
                            <td>{item.courseName}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <button
                      type="button"
                      className="btn btn-danger btn-block"
                      onClick={this.OnClickVerifyKey}
                    >
                      Submit Form
                    </button>
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

export default AssignmentList;
