import React, {Component} from 'react';
import {withAlert} from 'react-alert';
import axios from "axios";
import auth from '../../middleware/auth';
import jwtDecode from 'jwt-decode';
import {NavLink} from 'react-router-dom';


class Course extends Component{

    state = {
        courseList: [],
        examList: [],
        assignmentList:[]
    };

    componentWillMount() {

        const token = jwtDecode(auth.getToken());

        //Get the logged in instructor object
        axios.get('http://localhost:3000/api/instructor?email=' + token.email).then(res => {

            console.log( res.data[0].firstName + ' ' + res.data[0].lastName);
            
            axios.get('http://localhost:3000/api/courses?lecturer=' + res.data[0].firstName).then(res => {             
                    
                    this.setState({
                        courseList: res.data
                    })
                }).catch(err => {
                    console.log(err);
                })
        }).catch(err => {
            console.log(err);
        })

        axios.get('http://localhost:3000/api/exams').then(res => {
            this.setState({
                examList: res.data
            })
        })

        axios.get('http://localhost:3000/api/assignments').then(res => {
            this.setState({
                assignmentList: res.data
            })
        })

       
    }

    handleClick = () => {
        console.log(this.state.courseList);
    }

    handleViewCourse = (courseName, courseID) => {

        this.props.getSelectedCourse(courseName, courseID);
        this.props.history.push('/InstructorHome/ViewCourse');
    }


    render() {
        return (
            
            <div className="container-fluid">
                <br/> <br/>
                <section className="main">
                <section className="tab-content">
                    <section className="tab-pane active fade in content" id="dashboard">
                        <div className="col-xs-12 col-sm-9">
                            <div className="panel panel-default">
                            <div className="panel-heading">
                                <h5>Currently Active Courses</h5>
                            </div>

                            <div className="panel-body">
                            <div>
                                
                                <ul>
                                    {
                                        this.state.courseList.length ? (
                                            this.state.courseList.map(course => {
                                                return(
                                                    <div className="container-fluid"  key={course.code}>
                                                        <div className="panel panel-default">
                                                            <div className="panel-heading">
                                                            <h6> {course.name} </h6>
                                                            </div>
                                    
                                                            <div className="panel-body">
                                                                <p>Course Name : {course.name}</p>
                                                                <p>Course Code : {course.code}</p>
                                                                <p>Lecturer : {course.lecture}</p>
                                                                <p>Enrollment Key : {course.enrollKey}</p>

                                                                <div style={{float: "right"}}>
                                                                    <NavLink exact to="/InstructorHome/ViewCourse"> <button style={{backgroundColor: "RoyalBlue"}} type="button" className="btn btn-primary" onClick={() => {this.handleViewCourse(course.name, course._id)}}>View Course Details</button></NavLink>
                                                                </div>
                                                            </div>
                                    
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        ) : (
                                            <div>
                                            </div>
                                        )
                                    }
                                </ul>
                            </div>
            
                        </div>

                        </div>
                    </div>
                    
                    <div className="col-xs-12 col-sm-3">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <h6>Recent Course Allocations</h6>
                            </div>

                            <div className="panel-body">
                            
        
                            </div>

                        </div>
                    </div>

                    <div className="col-xs-12 col-sm-3">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <h6>Upcoming Examinations</h6>
                            </div>

                            <div className="panel-body">
                            
                                    {
                                        this.state.examList.length ? (

                                            this.state.examList.map(exam => {
                                                return(
                                                    <div key={exam.name}>
                                                        <p>{exam.name} - {exam.examinationHall} </p>
                                                    </div>
                                                )
                                            })

                                        ) : ( <p>  </p>)
                                    }
        
                            </div>

                        </div>
                    </div>

                    <div className="col-xs-12 col-sm-3">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <h6>Upcoming Assignments</h6>
                            </div>

                            <div className="panel-body">
                            
                                {
                                    this.state.assignmentList.length ? (

                                        this.state.assignmentList.map(assignment => {
                                            return(
                                                <div key={assignment.name}>
                                                    <p>{assignment.name} - {assignment.dueDate} </p>
                                                </div>
                                            )
                                        })

                                    ) : ( <p>  </p>)
                                }
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

export default withAlert()(Course);