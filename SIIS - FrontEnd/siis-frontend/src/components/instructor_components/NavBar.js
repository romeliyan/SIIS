import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import Auth from '../../middleware/auth'
import jwtDecode from 'jwt-decode';
import axios from 'axios';
import { isTemplateElement } from '@babel/types';

class NavBar extends Component{

    state = {
        firstname: '',
        lastname: ''
    }

    componentDidMount = () => {

        const token = jwtDecode(Auth.getToken());
        
        //Get the logged in instructor object
        axios.get('http://localhost:3000/api/instructor?email=' + token.email).then(res => {

            console.log( res.data[0].firstName + ' ' + res.data[0].lastName);
            
            this.setState({
                firstname: res.data[0].firstName,
                lastname: res.data[0].lastName
            });

        }).catch(err => {
            console.log(err);
        })
    }


    handleLogout = (e) => {
        Auth.logout(this.props.handleLogout);
    }

    render(){
        return(
            <nav className="nav-wrapper blue darken-4" >
                <div className="container">
                    <NavLink exact to="/InstructorHome/" className="brand-logo">SIIS</NavLink>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;({this.state.firstname + " " + this.state.lastname})
                    <ul className="right">
                        <li> <NavLink exact to='/InstructorHome/'>Courses</NavLink></li>
                        <li> <NavLink exact to='/InstructorHome/Exams'>Exams</NavLink></li>
                        <li> <NavLink exact to='/InstructorHome/Assignments'>Assignments</NavLink></li>
                        <li> <NavLink exact to='/InstructorHome/MyAccount'>My Account</NavLink></li>
                        <li> <NavLink exact to='/' onClick={this.handleLogout}>Logout</NavLink></li>
                                
                    </ul>
                </div>
            </nav>
        )
    }


   
}

export default NavBar;