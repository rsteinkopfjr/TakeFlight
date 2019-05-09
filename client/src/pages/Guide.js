import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import "../App.css";
import dronePart from "../images/droneParts.png";
// import dronePartNum from "../images/dronePartsNum.png";

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
            {/* <img id="dronePartNum" src={dronePartNum} alt="drone" width="100%" /> */}
            <ol id="droneParts">
                <li>Propellers</li>
                <li>Motors</li>
                <li>Air Status Indicator</li>
                <li>Camera</li>
                <li>Power Button</li>
                <li>Antennas</li>
                <li>Vision Positioning System</li>
                <li>Flight Battery</li>
                <li>Micro USB Port</li>
                <li>Propeller Guards</li>
            </ol>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Guide;
