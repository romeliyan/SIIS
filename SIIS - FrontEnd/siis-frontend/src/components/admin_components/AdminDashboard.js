import React, { Component } from 'react';
import { withAlert } from 'react-alert';
import backpic from '../../images/backg.png';
import { NavLink } from 'react-router-dom'
import { Input, FormGroup, Label, Modal, ModalHeader, ModalBody, ModalFooter, Table, Button } from 'reactstrap';

class AdminDashboard extends Component {

    render() {

        return (
            <div className="CourseSelection">
                <div className="backgg">
                    <img className="backpic" src={backpic} alt="background picture" />
                    <NavLink exact to='/AdminHome/Admins'><Button className="but10">Customize Admins</Button></NavLink>
                    <NavLink exact to='/AdminHome/Instructors'><Button className="but11">Customize Instructors</Button></NavLink>
                    <NavLink exact to='/AdminHome/Courses'><Button className="but12">Customize Courses</Button></NavLink>
                </div>



            </div>
        )
    }
}

export default withAlert()(AdminDashboard);