import React from "react";
// import { Formik, Form, Field } from "formik";
// import * as Yup from "yup";
// import {
//   Container, Row, Col, Button,
// } from "react-bootstrap";
import * as formik from "formik";
import {
  Button, Col, Container, Form, Modal, Row,
} from "react-bootstrap";

function SocialMediaForm({
  values,
  errors,
  handleChange,
}) {
  return (
    <Container style={{ paddingTop: "40px" }}>
      <div className="roboto-semi-bold-28px-h2 mb-4">Social Media Links</div>

      <Row className="mb-3">
        <Col lg={4}>
          <Form.Group className="mb-4" controlId="facebookURL">
            <Form.Label className="roboto-medium-20px-body1">Facebook URL</Form.Label>
            <Form.Control
              style={{ height: "56px" }}
              className="lg-input-small-text"
              name="SocialMedia.facebookURL"
              type="text"
              size="lg"
              placeholder="Enter Facebook URL"
              value={values.facebookURL}
              onChange={handleChange}
              // isValid={touched.facebookURL && !errors.facebookURL}
              isInvalid={!!errors.facebookURL}
            />
            <Form.Control.Feedback type="invalid">
              {errors.facebookURL}
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
        <Col lg={4}>
          <Form.Group className="mb-4" controlId="instagramURL">
            <Form.Label className="roboto-medium-20px-body1">Instagram URL</Form.Label>
            <Form.Control
              style={{ height: "56px" }}
              className="lg-input-small-text"
              name="SocialMedia.instagramURL"
              type="text"
              size="lg"
              placeholder="Enter Instagram URL"
              value={values.instagramURL}
              onChange={handleChange}
              // isValid={touched.instagramURL && !errors.instagramURL}
              isInvalid={!!errors.instagramURL}
            />
            <Form.Control.Feedback type="invalid">
              {errors.instagramURL}
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col lg={4}>
          <Form.Group className="mb-4" controlId="youtubeURL">
            <Form.Label className="roboto-medium-20px-body1">YouTube URL</Form.Label>
            <Form.Control
              style={{ height: "56px" }}
              className="lg-input-small-text"
              name="SocialMedia.youtubeURL"
              type="text"
              size="lg"
              placeholder="Enter YouTube URL"
              value={values.youtubeURL}
              onChange={handleChange}
              // isValid={touched.youtubeURL && !errors.youtubeURL}
              isInvalid={!!errors.youtubeURL}
            />
            <Form.Control.Feedback type="invalid">
              {errors.youtubeURL}
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
        <Col lg={4}>
          <Form.Group className="mb-4" controlId="tiktokURL">
            <Form.Label className="roboto-medium-20px-body1">TikTok URL</Form.Label>
            <Form.Control
              style={{ height: "56px" }}
              className="lg-input-small-text"
              name="SocialMedia.tiktokURL"
              type="text"
              size="lg"
              placeholder="Enter TikTok URL"
              value={values.tiktokURL}
              onChange={handleChange}
              // isValid={touched.tiktokURL && !errors.tiktokURL}
              isInvalid={!!errors.tiktokURL}
            />
            <Form.Control.Feedback type="invalid">
              {errors.tiktokURL}
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col lg={4}>
          <Form.Group className="mb-4" controlId="twitterURL">
            <Form.Label className="roboto-medium-20px-body1">Twitter URL</Form.Label>
            <Form.Control
              style={{ height: "56px" }}
              className="lg-input-small-text"
              name="SocialMedia.twitterURL"
              type="text"
              size="lg"
              placeholder="Enter Twitter URL"
              value={values.twitterURL}
              onChange={handleChange}
              // isValid={touched.twitterURL && !errors.twitterURL}
              isInvalid={!!errors.twitterURL}
            />
            <Form.Control.Feedback type="invalid">
              {errors.twitterURL}
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
      </Row>
    </Container>
  );
}

export default SocialMediaForm;