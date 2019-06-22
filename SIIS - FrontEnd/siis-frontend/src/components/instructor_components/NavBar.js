import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import Auth from '../../middleware/auth';
class NavBar extends Component{

    handleLogout = (e) => {
        Auth.logout(this.props.handleLogout);
    }

    render(){
        return(
            <nav className="nav-wrapper blue darken-4">
                <div className="container">
                    <NavLink exact to="/InstructorHome/" className="brand-logo">SIIS-Instructor</NavLink>
                    <ul className="right">
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