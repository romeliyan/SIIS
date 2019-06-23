import React, { Component } from 'react';
import { withAlert } from 'react-alert';
import axios from 'axios';
import { Input, FormGroup, Label, Modal, ModalHeader, ModalBody, ModalFooter, Table, Button } from 'reactstrap';


class AdminViewUpdate extends Component {
    state = {
        admins: [],

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
        axios.post('http://localhost:3000/api/admin', this.state).then(
            res => {
                let { admins } = this.state;
                admins.push(res.data);
            }
        )
    }

    _refreshAdmins() {
        axios.get('http://localhost:3000/api/admin').then((response) => {
            this.setState({
                admins: response.data
            })
        });
    }

    deleteAdmin(name) {
        axios.delete('http://localhost:3000/api/admin/' + name).then((response) => {
            this._refreshAdmins();
        });
    }

    getAdmins = (inputEmail) => {
        const selectedAdmin = this.state.admins.find(x => x.email === inputEmail);
        console.log(selectedAdmin);

        this.props.getSelectedAdmins(selectedAdmin);
    }

    componentDidMount() {
        axios.get('http://localhost:3000/api/admin').then(
            res => {

                this.setState(
                    this.state.admins = res.data);
                console.log(this.state.admins)
            }
        )
    }
    render() {


        const { admins } = this.state;
        const adminList = admins.length ? (

            admins.map(admin => {
                return (
                    <tr key={admin._id}>
                        <td>{admin.firstName}</td>
                        <td>{admin.lastName}</td>
                        <td>{admin.email}</td>
                        <td>{admin.nic}</td>
                        <td>{admin.mobileNumber}</td>

                        <td>
                            <Button color="danger" size="sm" onClick={() => { this.getAdmins(admin.email) }}>Select</Button>
                        </td>

                    </tr>
                )
            })
        ) : (
                <div>No Admins</div>
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
                            {adminList}
                        </tbody>
                    </Table>

                </div>

            </div>

        );

    }
}

export default withAlert()(AdminViewUpdate);