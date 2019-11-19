import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import Plot from 'react-plotly.js';
import "../App.css";

class Account extends Component {
  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <h2>Account</h2>
            <Plot
              data={[
                {
                  x: [1, -5, -15, -13, 0, 13, 18, 5, -7, 2, 5 - 9, -20, -19],
                  y: [4, -8, -6, -7, 0, 7, 3, -3, -11, -13, 5, 11, 1, -1],
                  type: "scatter",
                  mode: "lines+points",
                  marker: { color: "red" }
                }
                // {type: 'bar', x: [1, -5, -15,-13,0], y: [4, -8, -6,-7,0]},
              ]}
              layout={{ width: 620, height: 540, title: "Drone VGX Data" }}
            />
            <Plot
            data={[
              // {
              //   x: [1, -5, -15, -13, 0, 13, 18, 5, -7, 2, 5 - 9, -20, -19],
              //   y: [4, -8, -6, -7, 0, 7, 3, -3, -11, -13, 5, 11, 1, -1],
              //   type: "scatter",
              //   mode: "lines+points",
              //   marker: { color: "red" }
              // }
              {type: 'bar', x: [1, -5, -15,-13,0], y: [4, -8, -6,-7,0]}
            ]}
            layout={{ width: 620, height: 540, title: "Drone AGX Data" }}
          />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Account;
