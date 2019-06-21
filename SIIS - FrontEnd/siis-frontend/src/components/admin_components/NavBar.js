import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Auth from '../../middleware/auth';
class NavBar extends Component {

    handleLogout = (e) => {
        Auth.logout(this.props.handleLogout);
    }

    render() {
        return (
            <nav className="nav-wrapper orange darken-3">
                <div className="container">
                    <NavLink exact to="/AdminHome/" className="brand-logo">SIIS-Admin</NavLink>
                    <ul className="right">
                        <li> <NavLink exact to='/AdminHome/Admins'>Admins</NavLink></li>
                        <li> <NavLink exact to='/AdminHome/Instructors'>Instructors</NavLink></li>
                        <li> <NavLink exact to='/AdminHome/Courses'>Courses</NavLink></li>
                        <li> <NavLink exact to='/' onClick={this.handleLogout}>Logout</NavLink></li>

                    </ul>
                </div>
            </nav>
        )
    }



}

export default NavBar;