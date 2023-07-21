import React from "react";
import {
  Button, Col, Container, Form, Modal, Row,
} from "react-bootstrap";

function ContactInformationForm({
  values, errors, touched, handleChange,
}) {
  // const handleSubmit = (values) => {
  //   console.log(values);
  // };

  return (
    <Container style={{ paddingTop: "40px" }}>

      <div className="roboto-semi-bold-28px-h2" style={{ marginBottom: "40px" }}>
        Contact Information
      </div>

      <Row className="mb-3">
        <Col lg={4}>
          <Form.Group className="mb-4" controlId="form3Example3">
            <Form.Label className="roboto-medium-20px-body1">Contact Person Number</Form.Label>
            <Form.Control
              style={{ height: "56px" }}
              className="lg-input-small-text"
              name="contact_number"
              type="text"
              size="lg"
              placeholder="Enter Number"
              value={values.contact_number}
              onChange={handleChange}
              isValid={touched.contact_number && !errors.contact_number}
              isInvalid={!!errors.contact_number}
            />
            <Form.Control.Feedback type="invalid">
              {errors.contact_number}
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
        <Col lg={4}>
          <Form.Group className="mb-4" controlId="form3Example3">
            <Form.Label className="roboto-medium-20px-body1">Website URL</Form.Label>
            <Form.Control
              style={{ height: "56px" }}
              className="lg-input-small-text"
              name="websiteUrl"
              type="text"
              size="lg"
              placeholder="Enter websiteUrl"
              value={values.websiteUrl}
              onChange={handleChange}
              isValid={touched.websiteUrl && !errors.websiteUrl}
              isInvalid={!!errors.websiteUrl}
            />
            <Form.Control.Feedback type="invalid">
              {errors.websiteUrl}
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col lg={4}>
          <Form.Group className="mb-4" controlId="form3Example3">
            <Form.Label className="roboto-medium-20px-body1">Country</Form.Label>
            <Form.Select
              aria-label="Default select example"
              style={{ height: "56px" }}
              name="county"
              value={values.country || ""}
              onChange={handleChange}
              // onBlur={handleBlur}
              isValid={touched.country && !errors.country}
              isInvalid={touched.country && !!errors.country}
              className={errors.country ? "border-danger" : ""}
            >
              <option disabled selected value hidden="true">Select country</option>
            </Form.Select>
            {/* <Form.Control.Feedback type="invalid"> */}
            <div className="text-danger" style={{ fontSize: "14px" }}>
              {errors.country}
            </div>
          </Form.Group>
        </Col>
        <Col lg={4}>
          <Form.Group className="mb-4" controlId="form3Example3">
            <Form.Label className="roboto-medium-20px-body1">City</Form.Label>
            <Form.Control
              style={{ height: "56px" }}
              className="lg-input-small-text"
              name="city"
              type="text"
              size="lg"
              placeholder="Enter City"
              value={values.city}
              onChange={handleChange}
              isValid={touched.city && !errors.city}
              isInvalid={!!errors.city}
            />
            <Form.Control.Feedback type="invalid">
              {errors.city}
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col lg={4}>
          <Form.Group className="mb-4" controlId="form3Example3">
            <Form.Label className="roboto-medium-20px-body1">Street</Form.Label>
            <Form.Control
              style={{ height: "56px" }}
              className="lg-input-small-text"
              name="street"
              type="text"
              size="lg"
              placeholder="Enter websiteUrl"
              value={values.street}
              onChange={handleChange}
              isValid={touched.street && !errors.street}
              isInvalid={!!errors.street}
            />
            <Form.Control.Feedback type="invalid">
              {errors.street}
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col lg={8}>
          <Form.Group className="mb-4" controlId="form3Example3">
            <Form.Label className="roboto-medium-20px-body1">Full Address</Form.Label>
            <Form.Control
              style={{ height: "56px" }}
              className="lg-input-small-text"
              name="fullAddress"
              type="text"
              size="lg"
              placeholder="Enter websiteUrl"
              value={values.fullAddress}
              onChange={handleChange}
              isValid={touched.fullAddress && !errors.fullAddress}
              isInvalid={!!errors.fullAddress}
            />
            <Form.Control.Feedback type="invalid">
              {errors.fullAddress}
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
      </Row>
    </Container>
  );
}

export default ContactInformationForm;
