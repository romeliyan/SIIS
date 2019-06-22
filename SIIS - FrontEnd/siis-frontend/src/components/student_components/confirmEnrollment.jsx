import React, { Component } from "react";
import axios from "axios";

class ConfirmationCode extends Component {
  constructor(props) {
    super(props);
  }

  OnClickVerifyKey = () => {
    console.log("------KEY--------" + localStorage.getItem("key"));
    console.log(
      "----------COURSE ID--------" + localStorage.getItem("course_id")
    );
    console.log("----------UUID--------" + localStorage.getItem("UUID"));

    console.log("----------Name--------" + localStorage.getItem("name"));

    console.log("----------Lecture--------" + localStorage.getItem("lecture"));

    console.log("----------Code--------" + localStorage.getItem("code"));
    let userInputKey = document.getElementById("confirmkey").value;

    if (userInputKey == localStorage.getItem("key")) {
      //creating payload
      const formPayload = {
        courseID: localStorage.getItem("course_id"),
        studentID: localStorage.getItem("UUID"),
        name: localStorage.getItem("name"),
        lecture: localStorage.getItem("lecture"),
        code: localStorage.getItem("code")
      };

      axios
        .post("http://localhost:3000/api/student//enrolled", formPayload)
        .then(function(response) {
          console.log("Added To Course --> " + response.data);
        });
      this.props.history.push("/StudentHome/");
      alert("Success ...");
      this.props.history.push("/StudentHome/");
    } else {
      alert("Your Verification Key is Invalid");
    }
  };

  render() {
    return (
      <div className="container">
        <div className="panel panel-default">
          <div className="panel-heading ">Enrollment Key Validation</div>
          <div className="panel-body">
            <label htmlFor="address-line03">
              Enter Enrollment Key For {this.props.values}
            </label>
            <input
              type="text"
              className="form-control"
              id="confirmkey"
              placeholder="XXX-XXX"
            />
            <br />

            <button
              type="button"
              className="btn btn-danger btn-block"
              onClick={this.OnClickVerifyKey}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default ConfirmationCode;
