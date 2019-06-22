import React, { Component } from "react";
import StudentNavBar from "./studentNavBar";
import axios from "axios";
import ImageSlider from "./ImageSlider";

class StudentMainUI extends Component {
  state = {
    infoPayLoad: []
  };

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
  render() {
    return (
      <div className="container">
        <section className="main">
          <section className="tab-content">
            <section className="tab-pane active fade in content" id="dashboard">
              <div className="col-xs-12 col-sm-9">
                <div className="panel panel-default">
                  <ImageSlider />
                  <div className="panel-heading">
                    <h4>Welcome to Remote Learning Management System </h4>
                  </div>

                  <div className="panel-body">
                    We are a leading non-state degree awarding institute
                    approved by the University Grants Commission (UGC) under the
                    Universities Act. We are also members of the Association of
                    Commonwealth Universities (ACU), as well as the
                    International Association of Universities (IAU), and the
                    first Sri Lankan institute to be accredited by the
                    Institution of Engineering & Technology, UK. We are proud to
                    be listed as a leading and formidable awarding institute
                    authorised and approved by the University Grants Commission
                    (UGC) under the Universities Act, and the International
                    Association of Universities (IAU). Furthermore, not only are
                    we the first Sri Lankan institute to be accredited by the
                    Institution of Engineering & Technology (IET.), UK, our IT
                    degrees are also in turn accredited by the Engineering
                    Council, UK.
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-3">
                <div className="panel panel-default">
                  <div className="panel-heading">Upcoming Assignments</div>
                  <div className="panel-body" />
                </div>
                <div className="panel panel-default">
                  <div className="panel-heading">Enrolled Courses</div>
                  <div className="panel-body">
                    {this.state.infoPayLoad.map(item => {
                      return (
                        <div>
                          <div className="bg-success text-white">
                            <h5>{item.name}</h5>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </section>
            <section className="tab-pane fade" id="configuration">
              <nav className="subbar">
                <ul className="nav nav-tabs">
                  <li className="active">
                    <a href="#access" data-toggle="tab">
                      <i className="fa fa-code" /> <span>System</span>
                    </a>
                  </li>
                  <li>
                    <a href="#roles" data-toggle="tab">
                      <i className="fa fa-user" /> <span>Roles</span>
                    </a>
                  </li>
                </ul>
              </nav>
              <section className="tab-content content">
                <section className="tab-pane active fade in" id="access">
                  <div className="row">
                    <div className="col-xs-12">
                      <div className="panel panel-default">
                        <div className="panel-heading">Something</div>
                        <div className="panel-body">
                          <br />
                          <br />
                          <br />
                          <br />
                        </div>
                      </div>
                    </div>
                    <div className="col-xs-12 col-sm-4">
                      <div className="panel panel-default">
                        <div className="panel-heading">Something</div>
                        <div className="panel-body">
                          <br />
                          <br />
                          <br />
                          <br />
                        </div>
                      </div>
                    </div>
                    <div className="col-xs-12 col-sm-4">
                      <div className="panel panel-default">
                        <div className="panel-heading">Something</div>
                        <div className="panel-body">
                          <br />
                          <br />
                          <br />
                          <br />
                        </div>
                      </div>
                    </div>
                    <div className="col-xs-12 col-sm-4">
                      <div className="panel panel-default">
                        <div className="panel-heading">Something</div>
                        <div className="panel-body">
                          <br />
                          <br />
                          <br />
                          <br />
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <section className="tab-pane fade" id="roles">
                  <div className="row">
                    <div className="col-xs-12 col-sm-8 col-md-9">
                      <div className="panel panel-default">
                        <div className="panel-heading">Something</div>
                        <div className="panel-body">
                          <br />
                          <br />
                          <br />
                          <br />
                          <br />
                          <br />
                          <br />
                          <br />
                          <br />
                          <br />
                          <br />
                          <br />
                          <br />
                          <br />
                        </div>
                      </div>
                    </div>
                    <div className="hidden-xs col-sm-4 col-md-3">
                      <div className="panel panel-default">
                        <div className="panel-heading">Something</div>
                        <div className="panel-body">
                          <br />
                          <br />
                          <br />
                        </div>
                      </div>
                      <div className="panel panel-default">
                        <div className="panel-heading">Something</div>
                        <div className="panel-body">
                          <br />
                          <br />
                          <br />
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </section>
            </section>
            <section className="tab-pane fade" id="users" />
            <section className="tab-pane fade" id="mail" />
          </section>
        </section>
      </div>
    );
  }
}

export default StudentMainUI;
