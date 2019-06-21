import React, { Component } from "react";
import axios from "axios";

class ConfirmationCode extends Component {
  constructor(props) {
    super(props);
  }

  OnClickVerifyKey = () => {
    let userInputKey = document.getElementById("confirmkey").value;

    if (userInputKey == this.props.values.selectedCourse.courseName) {
      alert("Success ...");
      this.props.nextPage();
    } else {
      alert(
        "Your Verification Key is Invalid" +
          this.props.values.selectedCourse.courseName
      );
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
