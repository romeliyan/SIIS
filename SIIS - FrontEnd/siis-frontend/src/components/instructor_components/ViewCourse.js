import React, {Component} from 'react';
import {withAlert} from 'react-alert';

class ViewCourse extends Component{

  render(){
    return (
      <div>
          Hello, World. This is view course
      </div>
      
    );
  }
}

export default withAlert()(ViewCourse);
