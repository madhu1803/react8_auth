import React, { Component } from "react";
import "./Css/Body.css";
import { Form, FormControl, Button } from "react-bootstrap";
import Dcard from "../Components/DCard";
import Footer from "./Footer";
export default class Body extends Component {
  render() {
    return (
      <div className="dashboard-container text-capitalize p-4">
        <div className="heading-container">
          <h6>welcome Ms Madhumithaa,</h6>
          <strong>List of Projects</strong>
          <Form inline className="search-form">
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="success">Search</Button>
          </Form>
        </div>
        <div className="dashboard-body p-4">
          <div className="row">
            <Dcard />
            <Dcard />
            <Dcard />
            <Dcard />
            <Dcard />
            <Dcard />
            <Dcard />
            <Dcard />
            <Dcard />
          </div>
        </div>
        <div className="dashboard-footer p-4">
          <Footer />
        </div>
      </div>
    );
  }
}
