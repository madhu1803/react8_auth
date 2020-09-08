import React, { Component } from "react";
import LeftContainer from "./LeftContainer";
import RightContainer from "./RightContainer";
export default class Login extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-lg-6 d-lg-block d-none">
          <LeftContainer />
        </div>
        <div className="col-sm-12 col-md-12 col-lg-6">
          <RightContainer />
        </div>
      </div>
    );
  }
}
