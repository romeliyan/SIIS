import React, {Component} from 'react';
import Login from './Login';
import SignUp from './SignUp';
import {BrowserRouter, Route, NavLink} from 'react-router-dom';
import '../../App.css';

class LoginRegisterRoot extends Component{
    
    handleLogin = (type)=> {

        console.log("Type: " + type);
        if(type === 'Admin'){
            console.log('Logged In User Type : ' + type);
            this.props.history.push('/AdminHome');
        }
        else if(type === 'Student'){
            console.log('Logged In User Type : ' + type);
            this.props.history.push('/StudentHome');
        }
        else if(type === 'Instructor'){
            console.log('Logged In User Type : ' + type);
            this.props.history.push('/InstructorHome');
        }
    }
    
    render(){
        return(
            <BrowserRouter>
                <div className="LoginRegisterRoot">
    
                    <div className="App__Aside"></div>
    
                    <div className="App__Form">
    
                        <div className="PageSwitcher">
                            <NavLink exact to="/" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign In</NavLink>
                            <NavLink to="/SignUp" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign Up</NavLink>
                        </div>
    
                        <div className="FormTitle">
                            <NavLink exact to="/" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign In</NavLink> or 
                            <NavLink to="/SignUp" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign Up</NavLink>
                        </div>


                        <Route exact path="/" render={(routeProps) => (
                            <Login {...routeProps} handleLogin={this.handleLogin}/>
                        )}  />

                        <Route exact path="/SignUp" render={(routeProps) => (
                            <SignUp {...routeProps} handleLogin={this.handleLogin}/>
                        )}  />
                        
    
                    </div>
                </div>
            </BrowserRouter>
        );
    };
    
}

export default LoginRegisterRoot;