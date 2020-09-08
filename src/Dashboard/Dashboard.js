import React, { Component } from "react";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
export default class Dashboard extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="p-4">
          <Body />
          <Footer />
        </div>
      </div>
    );
  }
}
