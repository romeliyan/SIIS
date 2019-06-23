import React, {Component} from 'react';
import {BrowserRouter} from 'react-router-dom';
import {withAlert} from 'react-alert';
import Course from './Course';
import AddCourse from './AddCourse';


class HomeRoot extends Component{
 
  render(){
    return (
      <BrowserRouter>

        <div>
          Admin Home Romesh
         
         <AddCourse/>
        </div>
      </BrowserRouter>
      
    );
  }
}

export default withAlert()(HomeRoot);
