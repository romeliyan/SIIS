import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import { withAlert } from "react-alert";
import MainComp from "./MainComp";

class HomeRoot extends Component {
  render() {
    return (
      <div className="container">
        <MainComp />
      </div>
    );
  }
}

export default withAlert()(HomeRoot);
