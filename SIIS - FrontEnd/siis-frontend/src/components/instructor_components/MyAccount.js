import React, {Component} from 'react';
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import auth from '../../middleware/auth';

class MyAccount extends Component{

    state = {
        firstName: '',
        lastName: '',
        email: '',
        nic: '',
        mobileNumber: '',
        loggedUserArray: ''
      };

      componentDidMount() {
          
        const token = jwtDecode(auth.getToken());
        console.log(token);

        //Get the logged in instructor object
        axios.get('http://localhost:3000/api/instructor?email=' + token.email).then(res => {
            this.setState({
                firstName: res.data[0].firstName,
                lastName: res.data[0].lastName,
                email: res.data[0].email,
                nic: res.data[0].nic,
                mobileNumber: res.data[0].mobileNumber
            })

        }).catch(err => {
            console.log(err);
        })

    }

    render(){
        return(
            
            <div className="container">
                <br/> <br/>
                <div className="row">
                    <div className="panel panel-default">
                        <div className="panel-heading">
        
                            <h5>Instructor Profile</h5>
            </div>

            <div className="panel-body">
              <div className="col-md-4 col-xs-12 col-sm-6 col-lg-4">
                <img
                  alt="User Pic"
                  src="https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg"
                  id="profile-image1"
                  className="img-circle img-responsive"
                />
              </div>

              <div className="col-md-8 col-xs-12 col-sm-6 col-lg-8">
                <div className="container">

                  <h3>{this.state.firstName + " " + this.state.lastName}</h3>

                </div>
                <hr />
                <ul className="container details">
                  <li>
                    <h5>
                      <span
                        className="glyphicon glyphicon-user one"
                        style={{ width: 50 }}
                      />
                      {this.state.nic}
                    </h5>
                  </li>
                  <li>
                    <h5>
                      <span
                        className="glyphicon glyphicon-envelope one"
                        style={{ width: 50 }}
                      />
                      {this.state.email}
                    </h5>

                    <li>
                    <h5>
                      <span
                        className="glyphicon glyphicon-phone one"
                        style={{ width: 50 }}
                      />
                      {this.state.mobileNumber}
                    </h5>
                  </li>
                  </li>
                </ul>
                <hr />
              </div>
            </div>
          </div>
        </div>
      </div>

        )
    }


   
}

export default MyAccount;