import React, { Component } from "react";
import Header from "./Header";
import Body from "./Body";
export default class Dashboard extends Component {
  render() {
    return (
      <div>
        <h1>dashboard</h1>
        <Header />
        <Body />
      </div>
    );
  }
}
