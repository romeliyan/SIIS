import React, {Component} from 'react';
import {withAlert} from 'react-alert';
import axios from 'axios';

class ViewCourse extends Component{

  state = {
    examList: [],
    assignmentList: []
  }

  componentDidMount = () => {

    axios.get('http://localhost:3000/api/exams?courseName=' + this.props.selectedCourseName).then(res => {
      console.log(res.data);
      this.setState({
        examList: res.data
      })
    })

    axios.get('http://localhost:3000/api/assignments?courseName=' + this.props.selectedCourseName).then(res => {
      console.log(res.data);
      this.setState({
        assignmentList: res.data
      })
    })
  }

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
                    
                  <ul>
                      {
                          this.state.examList.length ? (
                              this.state.examList.map(exam => {
                                  return(
                                      <div className="container-fluid"  key={exam.name}>
                                          <div className="panel panel-default">
                                              <div className="panel-heading">
                                                <h6> {exam.name} </h6>
                                              </div>
                      
                                              <div className="panel-body">
                                                  <p>Examination Name : {exam.name}</p>
                                                  <p>Examination Date : {exam.date}</p>
                                                  <p>Allocated Marks : {exam.marks}</p>
                                                  <p>Allocalted Hall : {exam.examinationHall}</p>
                                               
                                              </div>
                      
                                          </div>
                                      </div>
                                  )
                              })
                          ) : (
                              <div> No Examinations Found 
                                  
                              </div>
                          )
                      }
                  </ul>
 
                  </div>

                </div>
              </div>
              
              <div className="col-xs-12 col-sm-6">
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h5>Currently Available Assignments</h5>
                  </div>

                  <div className="panel-body">
                    <ul>
                        {
                            this.state.assignmentList.length ? (
                                this.state.assignmentList.map(assignment => {
                                    return(
                                        <div className="container-fluid"  key={assignment.name}>
                                            <div className="panel panel-default">
                                                <div className="panel-heading">
                                                  <h6> {assignment.name} </h6>
                                                </div>
                        
                                                <div className="panel-body">
                                                    <p>Assignment Name : {assignment.name}</p>
                                                    <p>Assignment Due Date : {assignment.dueDate}</p>
                                                    <p>Assignment Marks : {assignment.marks}</p>

                                                </div>
                        
                                            </div>
                                        </div>
                                    )
                                })
                            ) : (
                                <div> No Examinations Found 
                                    
                                </div>
                            )
                        }
                    </ul>
 
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
