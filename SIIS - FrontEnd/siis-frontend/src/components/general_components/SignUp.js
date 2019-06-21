import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import '../../App.css'
import axios from 'axios';
import {withAlert} from 'react-alert';


class SignUp extends Component{

    state = {
        firstName:null,
        lastName: null,
        email: null,
        nic: null,
        mobileNumber: null,
        password1: null,
        password2: null,
       
    }
   
    handleChange = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        })
    }

    handleSubmit = (e) => {

        e.preventDefault();

        if(this.state.password1 !== this.state.password2){
            this.props.alert.error('Passwords Do Not Match');
        }
        else{
            
            const user = {
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                email: this.state.email,
                nic: this.state.nic,
                mobileNumber: this.state.mobileNumber,
                password: this.state.password1
            }
    
            axios.post('http://localhost:3000/api/users/', user).then(res => {
                this.props.alert.success('Registration Successful');
                this.props.alert.success('Please LogIn');
                this.props.history.push('/');
            }).catch(err => {
                this.props.alert.error(err.response.data);
            });
        }



        

    }
    

    render(){
        return(
            <div className="FormCenter">
                <form className="FormFields" onSubmit={this.handleSubmit}>

                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="firstName">First Name</label>
                        <input type="text" id="firstName" className="FormField__Input" placeholder="Enter first name" name="firstName" onChange={this.handleChange}/>
                    </div>

                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="lastName">Last Name</label>
                        <input type="text" id="lastName" className="FormField__Input" placeholder="Enter last name" name="lastName" onChange={this.handleChange}/>
                    </div>

                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="email">Email</label>
                        <input type="email" id="email" className="FormField__Input" placeholder="Enter email address" name="email" onChange={this.handleChange}/>
                    </div>

                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="nic">NIC (Optional)</label>
                        <input type="text" id="nic" className="FormField__Input" placeholder="Enter NIC" name="nic" onChange={this.handleChange}/>
                    </div>

                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="mobileNumber">Mobile Number</label>
                        <input type="text" id="mobileNumber" className="FormField__Input" placeholder="Enter mobile number" name="mobileNumber" onChange={this.handleChange}/>
                    </div>

                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="password1">Password</label>
                        <input type="password" id="password1" className="FormField__Input" placeholder="Enter password" name="password1" onChange={this.handleChange}/>
                    </div>

                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="password2">Re-Enter Password</label>
                        <input type="password" id="password2" className="FormField__Input" placeholder="Re-enter password" name="password2" onChange={this.handleChange}/>
                    </div>

                    <div className="FormField">
                        
                        <label className="FormField__CheckboxLabel">
                            <input className="FormField__Checkbox" type="checkbox" name="hasAgreed" onChange={this.handleChange}/> I agree to all the statements in 
                            <a href="https://www.termsandcondiitionssample.com/" className="FormField__TermsLink">terms of service</a>
                        </label>
                        
                    </div>

                    <div className="FormField">
                        <button className="FormField__Button mr-20"> Sign Up</button> &nbsp;
                        <NavLink exact to="/" className="FormField__Link">I'm already a member</NavLink>
                    </div>
                </form>
            </div>
        );
    }
}

export default withAlert()(SignUp);