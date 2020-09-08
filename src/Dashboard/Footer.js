import React, { Component } from "react";
import { Card } from "react-bootstrap";
export default class Footer extends Component {
  render() {
    return (
      <div>
        <Card>
          <Card.Body
            className="text-white"
            style={{ backgroundColor: "#0073e6" }}
          >
            <Card.Title>
              <strong>Special title treatment</strong>
            </Card.Title>
            <Card.Text>
              With supporting text below as a natural lead-in to additional
              content. With supporting text below as a natural lead-in to
              additional content. With supporting text below as a natural
              lead-in to additional content. With supporting text below as a
              natural lead-in to additional content. With supporting text below
              as a natural lead-in to additional content.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
