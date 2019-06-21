import React, {Component} from 'react';
import {BrowserRouter} from 'react-router-dom';
import {withAlert} from 'react-alert';

class HomeRoot extends Component{
 
  render(){
    return (
      <BrowserRouter>

        <div>
          Admin Home Romesh
        </div>
      </BrowserRouter>
      
    );
  }
}

export default withAlert()(HomeRoot);
