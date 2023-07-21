import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Chip from "../../components/Chip/Chip";

function ServicesOffered() {
  const services = [
    "label",
    "label",
    "label",
    "label",
    "label",
    "label",
    "label",
    "label",
    "label",
    "label",
    "label",
    "label",
    "label",
    "label",
    "label",
    "label",
  ];

  return (
    // <div>
    // <Row xs={2} md={4} lg={4}>
    <Container>
      <div className="roboto-semi-bold-28px-h2" style={{ marginBottom: "24px" }}>What Services You Offer?</div>
      {/* className="justify-content-md-left" */}
      <Row xs="auto" lg={6} style={{ maxWidth: "800px" }}>
        {/* <Col lg={12}> */}
        {/* <div className="chip-container"> */}
        {services.map((service) => (
          <Col>
            <Chip label={service} />
          </Col>
        ))}
        {/* </div> */}
        {/* </Col> */}
      </Row>
    </Container>
    // </Row>
  );
}

export default ServicesOffered;
