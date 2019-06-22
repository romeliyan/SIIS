import React, { Component } from "react";
import axios from "axios";

class StudentProfile extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      firstname: "",
      lastname: "",
      email: ""
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
            lastname: resp.data.lastname,
            email: resp.data.email,
            username: resp.data.username
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
              <h4>User Profile</h4>
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
                  <h2>John Doe</h2>
                  <p>
                    an <b> Employee</b>
                  </p>
                </div>
                <hr />
                <ul className="container details">
                  <li>
                    <p>
                      <span
                        className="glyphicon glyphicon-user one"
                        style={{ width: 50 }}
                      />
                      i.rudberg
                    </p>
                  </li>
                  <li>
                    <p>
                      <span
                        className="glyphicon glyphicon-envelope one"
                        style={{ width: 50 }}
                      />
                      somerandom@email.com
                    </p>
                  </li>
                </ul>
                <hr />
                <div className="col-sm-5 col-xs-6 tital ">
                  Date Of Joining: 15 Jun 2016
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
