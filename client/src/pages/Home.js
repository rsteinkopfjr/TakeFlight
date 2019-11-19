import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
// import drone from "../images/telloDrone.png";
import droneVideo from "../images/DroneFlight.mp4";
import "../App.css";
import Farhan from "../components/Cards/Farhan";
import Jose from "../components/Cards/Jose";
import Robert from "../components/Cards/Robert";
import SignUp from "../components/SignUp/index";

class Home extends Component {
  render() {
    return (
      <div>
        <div id="videoContainer">
          <video autoPlay muted loop id="droneVideo">
            <source src={droneVideo} type="video/mp4" />
          </video>
          <div id="videoText">
            <Container fluid>
              <Row>
                <Col size="md-6">
                  <div id="droneSection">
                    {/* <img id="droneImage"src={drone} alt="drone" width="100%" /> */}
                  </div>
                </Col>
                <Col size="md-6">
                  <div id="aboutSection">
                    <h2>
                      Unlock the full potential of your DJI Tello drone with
                      Take Flight
                    </h2>
                    <br />
                    <br />
                    <h4>Sign Up Now!</h4>
                    <SignUp />
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
        <div id="sectionTwo">
          <Container fluid>
            <Row>
              <Col size="md-12">
                <br />
                <br />
                <h4>
                  Control your drone seamlessly with our custom designed
                  controller.
                </h4>
                <br />
                <h4>
                  Track and store all of the data from each and every flight.
                </h4>
                <br />
                <h4>Display your data in easy to view charts and graphs.</h4>
                <br />
                <h4>
                  Experience the future of drone technology with Take Flight!
                </h4>
                <br />
                <br />
              </Col>
            </Row>
          </Container>
        </div>
        <div className="parallax">
          <p id="quote">
            Technology is a soaring exercise of the human imagination.
          </p>
        </div>
        <div id="team">
          <Container fluid>
            <Row>
              <Col size="md-12">
                <h2 id="teamTitle">Meet the Team</h2>
              </Col>
            </Row>
            <Row>
              <Col size="md-4">
                <Farhan />
              </Col>
              <Col size="md-4">
                <Jose />
              </Col>
              <Col size="md-4">
                <Robert />
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

export default Home;
