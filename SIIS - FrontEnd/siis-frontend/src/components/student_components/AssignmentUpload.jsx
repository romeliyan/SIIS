import React, { Component } from "react";
import axios from "axios";

class AssignmentUpload extends Component {
  state = {
    courseID: "",
    studentID: "",
    assignmentID: "",
    submissionNote: ""
  };

  contToNextBtn() {
    axios.post("/uploads");
  }
  render() {
    return (
      <div>
        <div className="container-fluid">
          <div className="panel panel-default">
            <div className="panel-heading"> Assignment Submission </div>
            <div className="panel-body">
              <form
                action="/upload"
                method="POST"
                enctype="multipart/form-data"
              >
                <div className="form-group">
                  <br />
                  <label htmlFor="note">
                    <h2>Submission Note</h2>
                  </label>
                  <textarea
                    className="form-control"
                    rows={5}
                    placeholder="Submission Comments"
                    id="comment"
                    defaultValue={""}
                  />

                  <br />
                  <br />
                  <div className="custom-file">
                    <input
                      type="file"
                      name="file"
                      className="custom-file-input"
                      id="customFile"
                    />
                    <label className="custom-file-label" htmlFor="customFile">
                      Choose file
                    </label>
                  </div>

                  <br />

                  <br />

                  <div style={{ float: "right" }}>
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={this.contToNextBtn}
                    >
                      Submit Assignment
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AssignmentUpload;
