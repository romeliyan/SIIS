import React, {Component} from 'react';
import {withAlert} from 'react-alert';
import axios from "axios";
import auth from '../../middleware/auth';
import jwtDecode from 'jwt-decode';
import {NavLink} from 'react-router-dom';


class Course extends Component{

    state = {
        courseList: []
    };

    componentWillMount() {

        const token = jwtDecode(auth.getToken());
        console.log(token);

        //Get the logged in instructor object
        axios.get('http://localhost:3000/api/instructor?email=' + token.email).then(res => {
            const instructor = res.data;
            console.log(instructor);

        }).catch(err => {
            console.log(err);
        })

        axios
          .get("http://localhost:3000/api/courses")
          .then(res => {
            this.setState({
                courseList: res.data
            })
          })
          .catch(err => {
            console.log(err);
          });
    }

    handleClick = () => {
        console.log(this.state.courseList);
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
                                                <NavLink> <button style={{backgroundColor: "RoyalBlue"}} type="button" className="btn btn-primary" onClick={this.handleViewCourse}>View Course Details</button></NavLink>
                                            </div>
                                        </div>
                
                                    </div>
                                </div>
                            )
                        })
                    ) : (
                        <div> No Courses Found </div>
                    )
                }
            </ul>
          </div>
        );
      }
}

export default withAlert()(Course);