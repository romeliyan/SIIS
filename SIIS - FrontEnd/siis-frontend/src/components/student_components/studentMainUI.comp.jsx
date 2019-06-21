import React, { Component } from "react";
import StudentNavBar from "./studentNavBar";

class StudentMainUI extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <section className="main">
          <section className="tab-content">
            <section className="tab-pane active fade in content" id="dashboard">
              <div className="row">
                <div className="col-xs-6 col-sm-3">
                  <div className="panel panel-primary">
                    <div className="panel-body">
                      <br />
                      <br />
                      a
                      <br />
                      <br />
                    </div>
                  </div>
                </div>
                <div className="col-xs-6 col-sm-3">
                  <div className="panel panel-success">
                    <div className="panel-body">
                      <br />
                      <br />
                      <br />
                      <br />
                    </div>
                  </div>
                </div>
                <div className="col-xs-6 col-sm-3">
                  <div className="panel panel-danger">
                    <div className="panel-body">
                      <br />
                      <br />
                      <br />
                      <br />
                    </div>
                  </div>
                </div>
                <div className="col-xs-6 col-sm-3">
                  <div className="panel panel-warning">
                    <div className="panel-body">
                      <br />
                      <br />
                      <br />
                      <br />
                    </div>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-9">
                  <div className="panel panel-default">
                    <div className="panel-heading">Something</div>
                    <div className="panel-body">
                      This layout uses tabs to demonstrate what you could do
                      with it. It probably makes more sense to use individual
                      pages/templates in a production app.
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
                <div className="col-xs-12 col-sm-3">
                  <div className="panel panel-default">
                    <div className="panel-heading">Upcoming Assignments</div>
                    <div className="panel-body" />
                  </div>
                  <div className="panel panel-default">
                    <div className="panel-heading">Enrolled Courses</div>
                    <div className="panel-body">
                      Designed by{" "}
                      <a href="http://www.kaitanilabs.com" target="_blank">
                        Kaitani Labs
                      </a>
                    </div>
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
