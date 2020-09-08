import React, { Component } from "react";
import { Card, Dropdown, Button } from "react-bootstrap";
import "./Dcard.css";
import DropDown from "./DropDown";
import { BiDotsVerticalRounded } from "react-icons/bi";

export default class Dcard extends Component {
  render() {
    return (
      <div>
        <Card className="dcard-container mt-5">
          <Card.Body>
            <Card.Title>
              Johnson&johnson
              <div className="card-right-align">
                {/* <DropDown /> */}
                <BiDotsVerticalRounded />
              </div>
            </Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
