import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import "../App.css";

class Account extends Component {
    render() {
        return(
            <Container fluid>
                <Row>
                    <Col size="md-12">
                        <h2>Account</h2>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Account;