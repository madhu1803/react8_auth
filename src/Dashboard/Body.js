import React, { Component } from "react";
import "./Css/Body.css";
import { Form, FormControl, Button } from "react-bootstrap";
export default class Body extends Component {
  render() {
    return (
      <div className="dashboard-body text-capitalize p-4">
        <div className="heading-container">
          <h6>welcome Ms Madhumithaa,</h6>
          <strong>List of Projects</strong>
          <Form inline className="search-form">
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="success">Search</Button>
          </Form>
        </div>
      </div>
    );
  }
}
