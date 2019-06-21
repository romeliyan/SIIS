import React, {Component} from 'react';
import {BrowserRouter} from 'react-router-dom';
import {withAlert} from 'react-alert';

class HomeRoot extends Component{
 
  render(){
    return (
      <BrowserRouter>

        <div>
          Student Home Melan
        </div>
      </BrowserRouter>
      
    );
  }
}

export default withAlert()(HomeRoot);
