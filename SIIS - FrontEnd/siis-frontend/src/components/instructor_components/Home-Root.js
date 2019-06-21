import React, {Component} from 'react';
import {BrowserRouter} from 'react-router-dom';

import {withAlert} from 'react-alert';

class HomeRoot extends Component{
 
  render(){
    return (
      <BrowserRouter>

        <div>
          Instructor Home Pasindu
        </div>
      </BrowserRouter>
      
    );
  }
}

export default withAlert()(HomeRoot);
