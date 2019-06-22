import React, {Component} from 'react';
import {withAlert} from 'react-alert';

class ViewCourse extends Component{

  render(){
    return (
      <div className="container-fluid">
        <br/> <br/>
        <section className="main">
          <section className="tab-content">
            <section className="tab-pane active fade in content" id="dashboard">
              <div className="col-xs-12 col-sm-6">
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h5>Currently Available Examinations</h5>
                  </div>

                  <div className="panel-body">
                    We are a leading non-state degree awarding institute
                    approved by the University Grants Commission (UGC) under the
 
                  </div>

                </div>
              </div>
              
              <div className="col-xs-12 col-sm-6">
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h5>Currently Available Assignments</h5>
                  </div>

                  <div className="panel-body">
                    We are a leading non-state degree awarding institute
                    approved by the University Grants Commission (UGC) under the
 
                  </div>

                </div>
              </div>
              
            </section>
           
            <section className="tab-pane fade" id="users" />
            <section className="tab-pane fade" id="mail" />
          </section>
        </section>
      </div>
      
    );
  }
}

export default withAlert()(ViewCourse);
