import React, { Component } from "react";
import { Card, Dropdown } from "react-bootstrap";
import "./Dcard.css";
import DropDown from "./DropDown";
import { BiDotsVerticalRounded, BiCalendarAlt } from "react-icons/bi";

export default class Dcard extends Component {
  render() {
    return (
      <div className="col-sm-12 col-md-6 col-lg-3">
        <Card className="dcard-container mt-4 text-capitalize shadow p-3 mb-3 bg-white rounded">
          <Card.Body>
            <Card.Title>
              Johnson&johnson
              <div className="card-right-align">
                {/* <DropDown /> */}
                <BiDotsVerticalRounded />
              </div>
            </Card.Title>
            <Card.Text className="mt-5">
              <p>
                AV project{" "}
                <a href="#" style={{ float: "right" }}>
                  Census
                </a>
              </p>
              <hr />
              <p>
                <BiCalendarAlt />
                <small className="text-break text-muted">
                  Feb 23,2020 to Feb 24,2020
                </small>
              </p>
              <p>
                <small
                  className="text-break text-muted"
                  style={{ float: "right" }}
                >
                  No of Outfits
                </small>
                {/* <strong style={{ float: "right" }}>23,000</strong> */}
              </p>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
