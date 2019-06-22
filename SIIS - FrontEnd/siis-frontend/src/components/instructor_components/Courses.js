import React, {Component} from 'react';
import {withAlert} from 'react-alert';
import axios from "axios";
import auth from '../../middleware/auth';
import jwtDecode from 'jwt-decode';
import {NavLink} from 'react-router-dom';


class Course extends Component{

    state = {
        courseList: [],
    };

    componentWillMount() {

        const token = jwtDecode(auth.getToken());

        //Get the logged in instructor object
        axios.get('http://localhost:3000/api/instructor?email=' + token.email).then(res => {

            console.log( res.data[0].firstName + ' ' + res.data[0].lastName);
            
            axios.get('http://localhost:3000/api/courses?lecturer=' + res.data[0].firstName + ' ' + res.data[0].lastName).then(res => {             
                    
                    this.setState({
                        courseList: res.data
                    })
                }).catch(err => {
                    console.log(err);
                })
        }).catch(err => {
            console.log(err);
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
          <div>
            <br/>
            <br/>
            <ul>
                {
                    this.state.courseList.length ? (
                        this.state.courseList.map(course => {
                            return(
                                <div className="container"  key={course.code}>
                                    <div className="panel panel-default">
                                        <div className="panel-heading">
                                           <h5> {course.name} </h5>
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
                        <div> No Courses Found 
                            <button onClick={this.handleClick}> Click</button>
                        </div>
                    )
                }
            </ul>
          </div>
        );
      }
}

export default withAlert()(Course);