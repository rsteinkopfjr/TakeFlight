import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import "../App.css";
import dronePart from "../images/droneParts.png";
import dronePartNum from "../images/dronePartsNum.png";

class Guide extends Component {
  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <h2>User Guide</h2>
          </Col>
        </Row>
        <Row>
          <Col size="md-6">
            <img id="dronePart" src={dronePart} alt="drone" width="100%" />
          </Col>
          <Col size="md-6">
            <img id="dronePartNum" src={dronePartNum} alt="drone" width="100%" />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Guide;
