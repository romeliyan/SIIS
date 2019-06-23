import React, { Component } from 'react';
import { withAlert } from 'react-alert';
import axios from 'axios';
import { Input, FormGroup, Label, Modal, ModalHeader, ModalBody, ModalFooter, Table, Button } from 'reactstrap';


class InstructorViewUpdate extends Component {
    state = {
        instructors: [],

        firstName: '',
        lastName: '',
        email: '',
        nic: '',
        mobileNumber: ''
    }

    change = e => {
        this.setState({
            [e.target.name]: e.target.value
        })

    }
    onClick = e => {
        console.log(this.state);
        axios.post('http://localhost:3000/api/instructor', this.state).then(
            res => {
                let { instructors } = this.state;
                instructors.push(res.data);
            }
        )
    }

    _refreshInstructors() {
        axios.get('http://localhost:3000/api/instructors').then((response) => {
            this.setState({
                instructors: response.data
            })
        });
    }

    deleteInstructor(name) {
        axios.delete('http://localhost:3000/api/instructor/' + name).then((response) => {
            this._refreshInstructors();
        });
    }

    getInstructors = (inputEmail) => {
        const selectedInstructor = this.state.instructors.find(x => x.email === inputEmail);
        console.log(selectedInstructor);

        this.props.getSelectedInstructors(selectedInstructor);
    }

    componentDidMount() {
        axios.get('http://localhost:3000/api/instructor').then(
            res => {

                this.setState(
                    this.state.instructors = res.data);
                console.log(this.state.instructors)
            }
        )
    }
    render() {


        const { instructors } = this.state;
        const instructorList = instructors.length ? (

            instructors.map(instructor => {
                return (
                    <tr key={instructor._id}>
                        <td>{instructor.firstName}</td>
                        <td>{instructor.lastName}</td>
                        <td>{instructor.email}</td>
                        <td>{instructor.nic}</td>
                        <td>{instructor.mobileNumber}</td>

                        <td>
                            <Button color="danger" size="sm" onClick={() => { this.getInstructors(instructor.email) }}>Select</Button>
                        </td>

                    </tr>
                )
            })
        ) : (
                <div>No Instructors</div>
            );


        return (

            <div>

                <div className="ff3">
                    <Table>
                        <thead>
                            <tr>

                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email</th>
                                <th>NIC</th>
                                <th>Mobile Number</th>
                            </tr>
                        </thead>

                        <tbody>
                            {instructorList}
                        </tbody>
                    </Table>

                </div>

            </div>

        );

    }
}

export default withAlert()(InstructorViewUpdate);