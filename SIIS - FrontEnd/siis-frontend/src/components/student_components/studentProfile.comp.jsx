import React, { Component } from "react";
import axios from "axios";

class StudentProfile extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      firstname: "",
      lastname: "",
      email: "",
      nic: "",
      createdAt: ""
    };
  }

  componentDidMount() {
    console.log("--TOKEN--" + localStorage.getItem("u_id"));
    const id_user = localStorage.getItem("UUID");
    axios
      .get("http://localhost:3000/api/student/user/" + id_user)
      .then(resp => {
        this.setState(
          {
            firstname: resp.data.firstName,
            lastname: resp.data.lastName,
            email: resp.data.email,
            username: resp.data.username,
            nic: resp.data.nic,
            createdAt: resp.data.createdAt
          },
          function() {
            console.log(this.state.data);
          }
        );
      });
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="panel panel-default">
            <div className="panel-heading">
              {" "}
              <h4>Student Profile</h4>
            </div>
            <div className="panel-body">
              <div className="col-md-4 col-xs-12 col-sm-6 col-lg-4">
                <img
                  alt="User Pic"
                  src="https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg"
                  id="profile-image1"
                  className="img-circle img-responsive"
                />
              </div>
              <div className="col-md-8 col-xs-12 col-sm-6 col-lg-8">
                <div className="container">
                  <h2>{this.state.firstname + "" + this.state.lastname}</h2>
                  <p>
                    <h4> @{" " + this.state.username}</h4>
                  </p>
                </div>
                <hr />
                <ul className="container details">
                  <li>
                    <h4>
                      <span
                        className="glyphicon glyphicon-user one"
                        style={{ width: 50 }}
                      />
                      {this.state.nic}
                    </h4>
                  </li>
                  <li>
                    <h4>
                      <span
                        className="glyphicon glyphicon-envelope one"
                        style={{ width: 50 }}
                      />
                      {this.state.email}
                    </h4>
                  </li>
                </ul>
                <hr />
                <div className="col-sm-5 col-xs-6 tital ">
                  Date of Joining : {this.state.createdAt}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default StudentProfile;
