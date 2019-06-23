import React, { Component } from 'react';
import { withAlert } from 'react-alert';
import axios from 'axios';
import InstructorViewDelete from './InstructorViewDelete';
import InstructorViewUpdate from './InstructorViewUpdate';
import { Input, FormGroup, Label, Modal, ModalHeader, ModalBody, ModalFooter, Table, Button } from 'reactstrap';
import '../../App.css';
import nodemailer from 'nodemailer';
import teacher from '../../images/teach.png';

class Instructors extends Component {

    state = {
        firstName: null,
        lastName: null,
        email: null,
        nic: null,
        mobileNumber: null,
        password1: null,
        password2: null,
        instructorIDs: "",
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    getSelectedInstructor = (instructor) => {
        console.log(instructor);
        this.setState({
            firstName: instructor.firstName,
            lastName: instructor.lastName,
            email: instructor.email,
            nic: instructor.nic,
            mobileNumber: instructor.mobileNumber,
            instructorIDs: instructor._id
        })
    }

    handleUpdate = (e) => {
        e.preventDefault();

        const instructor = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            nic: this.state.nic,
            mobileNumber: this.state.mobileNumber,
            password: this.state.password1
        }

        console.log(this.state.instructorID);

        axios.put('http://localhost:3000/api/instructor/' + this.state.instructorIDs, instructor).then(res => {
            this.props.alert.success('Instructor Updated Successfully');
            this.props.history.push('/AdminHome');

        }).catch(err => {
            this.props.alert.error(err.response.data);
        })
    }


    handleSubmit = (e) => {
        e.preventDefault();

        if (this.state.password1 !== this.state.password2) {
            this.props.alert.error('Passwords Do Not Match');
        }
        else {

            const instructor = {
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                email: this.state.email,
                nic: this.state.nic,
                mobileNumber: this.state.mobileNumber,
                password: this.state.password1
            }

            const user = {
                email: this.state.email,
                password: this.state.password1,
                userType: 'Instructor'
            }

            axios.post('http://localhost:3000/api/instructor/', instructor).then(res => {
                this.props.alert.success('Registration Successful');
                this.props.history.push('/AdminHome');

                axios.post('http://localhost:3000/api/auth/user/', user).then(res => {
                    this.props.alert.success('Registration Successful');

                }).catch(err => {
                    this.props.alert.error(err.response.data);
                });
            }).catch(err => {
                this.props.alert.error(err.response.data);
            });
        }


    }


    render() {

        return (
            <div className="">

                <h3 className="ih3 center">Register Instructors</h3>
                <p className="f0">Please fill the following form to register a new Instructor to the system.</p>

                <div className="">
                    <img className="pic2" src={teacher} alt="teacher pic" />
                </div>

                <form className="" onSubmit={this.handleSubmit}>

                    <div className="f0">
                        <label className="l1" htmlFor="firstName">Instructor First Name</label>
                        <input type="text" id="firstName" className="" placeholder="Enter first name" name="firstName" onChange={this.handleChange} />
                    </div>

                    <div className="f1">
                        <label className="l1" htmlFor="lastName">Instructor Last Name</label>
                        <input type="text" id="lastName" className="" placeholder="Enter last name" name="lastName" onChange={this.handleChange} />
                    </div>

                    <div className="f1">
                        <label className="l1" htmlFor="email">Email</label>
                        <input type="email" id="email" className="" placeholder="Enter email address" name="email" onChange={this.handleChange} />
                    </div>

                    <div className="f1">
                        <label className="l1" htmlFor="nic">NIC</label>
                        <input type="text" id="nic" className="" placeholder="Enter NIC" name="nic" onChange={this.handleChange} />
                    </div>

                    <div className="f1">
                        <label className="l1" htmlFor="mobileNumber">Mobile Number</label>
                        <input type="text" id="mobileNumber" className="" placeholder="Enter mobile number" name="mobileNumber" onChange={this.handleChange} />
                    </div>

                    <div className="f1">
                        <label className="l1" htmlFor="password1">Password</label>
                        <input type="password" id="password1" className="" placeholder="Enter password" name="password1" onChange={this.handleChange} />
                    </div>

                    <div className="f1">
                        <label className="l1" htmlFor="password2">Re-Enter Password</label>
                        <input type="password" id="password2" className="" placeholder="Re-enter password" name="password2" onChange={this.handleChange} />
                    </div>

                    <div className="f1">
                        <Button style={{ backgroundColor: "green" }} size="sm" >Register Instructor</Button>
                    </div>
                </form>


                <br />
                <h3 className="ih3 center">Remove Instructors</h3>
                <p className="f0">Please select the Instructor you want to remove from the system.</p>

                <br />
                <br />
                <InstructorViewDelete getSelectedInstructors={this.getSelectedInstructor} />
                <br />
                <br />
                <h3 className="ih3 center">Update Instructors</h3>
                <p className="f0">Please select the Instructor you want to make changes and Enter New Values.</p>
                <br />
                <br />


                <InstructorViewUpdate getSelectedInstructors={this.getSelectedInstructor} />



                <div>

                    <form className="ff41" >

                        <div className="">
                            <label className="l5" htmlFor="firstName">Instructor First Name</label>
                            <input type="text" value={this.state.firstName} id="firstName" className="" placeholder="Enter first name" name="firstName" onChange={this.handleChange} />
                        </div>

                        <div className="">
                            <label className="l5" htmlFor="lastName">Instructor Last Name</label>
                            <input type="text" value={this.state.lastName} id="lastName" className="" placeholder="Enter last name" name="lastName" onChange={this.handleChange} />
                        </div>

                        <div className="">
                            <label className="l5" htmlFor="email">Email</label>
                            <input type="email" value={this.state.email} id="email" className="" placeholder="Enter email address" name="email" onChange={this.handleChange} />
                        </div>

                        <div className="">
                            <label className="l5" htmlFor="nic">NIC (Optional)</label>
                            <input type="text" id="nic" value={this.state.nic} className="" placeholder="Enter NIC" name="nic" onChange={this.handleChange} />
                        </div>

                        <div className="">
                            <label className="l5" htmlFor="mobileNumber">Mobile Number</label>
                            <input type="text" value={this.state.mobileNumber} id="mobileNumber" className="" placeholder="Enter mobile number" name="mobileNumber" onChange={this.handleChange} />
                        </div>

                        <div className="">
                            <label className="l5" htmlFor="password1">Password</label>
                            <input type="password" id="password1" className="" placeholder="Enter password" name="password1" onChange={this.handleChange} />
                        </div>

                        <div className="">
                            <label className="l5" htmlFor="password2">Re-Enter Password</label>
                            <input type="password" id="password2" className="" placeholder="Re-enter password" name="password2" onChange={this.handleChange} />
                        </div>

                        <div className="b1 center">
                            <Button onClick={this.handleUpdate} style={{ backgroundColor: "green" }} size="sm" >Update Instructor</Button>
                        </div>

                        <br /><br />

                    </form>


                </div>

            </div >
        )
    }
}

export default withAlert()(Instructors);