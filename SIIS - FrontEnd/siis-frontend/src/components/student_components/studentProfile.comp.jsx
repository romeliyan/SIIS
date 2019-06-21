import React, { Component } from "react";

class StudentProfile extends Component {
  constructor() {
    super();
    this.state = {
      first_name: "Melan Rashitha",
      last_name: "",
      email: "",
      username: "melan96"
    };
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-offset-2 col-md-8 col-lg-offset-3 col-lg-6">
            <div className="well profile">
              <div className="col-sm-12">
                <div className="col-xs-12 col-sm-8">
                  <h2>{this.state.first_name}</h2>
                  <p>
                    <strong>@{this.state.username}</strong>
                  </p>
                  <br />
                  <br />
                  <br />
                  <p>
                    <strong>Skills: </strong>
                    <span className="tags">html5</span>
                    <span className="tags">css3</span>
                    <span className="tags">jquery</span>
                    <span className="tags">bootstrap3</span>
                  </p>
                </div>
                <div className="col-xs-12 col-sm-4 text-center">
                  <figure>
                    <img
                      src="data:image/png;base64,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"
                      alt
                      className="img-circle img-responsive"
                    />
                  </figure>
                </div>
              </div>
              <div className="col-xs-12 divider text-center">
                <div className="col-xs-12 col-sm-4 emphasis">
                  <p />
                  <a href="/mycourses">
                    <button className="btn btn-success btn-block">
                      <span className="fa fa-plus-circle" /> My Courses
                    </button>
                  </a>
                </div>
                <div className="col-xs-12 col-sm-4 emphasis">
                  <br />
                  <button className="btn btn-info btn-block">
                    <span className="fa fa-user" /> SignOut
                  </button>
                </div>

                <ul className="dropdown-menu text-left" role="menu">
                  <li>
                    <a href="#">
                      <span className="fa fa-envelope pull-right" /> Send an
                      email{" "}
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="fa fa-list pull-right" /> Add or remove
                      from a list
                    </a>
                  </li>
                  <li className="divider" />
                  <li>
                    <a href="#">
                      <span className="fa fa-warning pull-right" />
                      Report this user for spam
                    </a>
                  </li>
                  <li className="divider" />
                  <li>
                    <a href="#" className="btn disabled" role="button">
                      {" "}
                      Unfollow{" "}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default StudentProfile;
