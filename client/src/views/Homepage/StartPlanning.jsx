import React from "react";
import {
  Button, Col, Container, Form, FormControl, InputGroup, Row,
} from "react-bootstrap";
import heroImg from "../../assets/images/harold.jpg";

function StartPlanning() {
  return (
  // <div>StartPlanning</div>
    <Container fluid style={{ height: "auto", padding: "0" }}>
      <Row className="h-100 col-12 g-0">
        <Col md={5} className="d-flex" style={{ justifyContent: "right", paddingRight: "0" }}>
          <img src={heroImg} alt="Hero Image" style={{ maxWidth: "100%" }} />
        </Col>
        <Col md={7} className="d-flex align-items-center justify-content-center">
          <div style={{ padding: "50px 0" }}>
            <div style={{ maxWidth: "461px" }}>
              <h1 className="text-left">Start planning your events!</h1>
              <p className="text-left">
                Let’s plan together your unforgettable memories! We offer you all the
                necessary tools for managing your events.
              </p>
            </div>
            <div className="d-flex justify-content-left mt-5">
              <Button variant="success" type="submit">Create free account</Button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default StartPlanning;
