import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import Auth from '../../auth';
class NavBar extends Component{

    handleLogout = (e) => {
        Auth.logout(this.props.handleLogout);
    }

    render(){
        return(
            <nav className="nav-wrapper blue darken-3">
                <div className="container">
                    <NavLink exact to="/Home/" className="brand-logo">TTRS</NavLink>
                    <ul className="right">
                        <li> <NavLink exact to='/Home/AboutUs'>About Us</NavLink></li>
                        <li> <NavLink exact to='/Home/MyAccount'>My Account</NavLink></li>
                        <li> <NavLink exact to='/' onClick={this.handleLogout} >Logout</NavLink></li>
                    
                        
                    </ul>
                </div>
            </nav>
        )
    }


   
}

export default NavBar;