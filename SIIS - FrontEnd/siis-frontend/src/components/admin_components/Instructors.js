import React, { Component } from 'react';
import { withAlert } from 'react-alert';
import axios from 'axios';
import InstructorViewDelete from './InstructorViewDelete';
import { Input, FormGroup, Label, Modal, ModalHeader, ModalBody, ModalFooter, Table, Button } from 'reactstrap';
import '../../App.css';

class Instructors extends Component {

    state = {
        firstName: null,
        lastName: null,
        email: null,
        nic: null,
        mobileNumber: null,
        password1: null,
        password2: null
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
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

                axios.post('http://localhost:3000/api/auth/user/', user).then(res => {
                    this.props.alert.success('Registration Successful');
                    this.props.history.push('Instructors/');
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
                        <label className="l1" htmlFor="nic">NIC (Optional)</label>
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

                <h3 className="ih3 center">Remove Instructors</h3>

                <br />
                <br />
                <InstructorViewDelete />

                <br />
                <br />

            </div>
        )
    }
}

export default withAlert()(Instructors);