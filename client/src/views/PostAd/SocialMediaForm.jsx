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
import * as Yup from "yup";

const validationSchema = Yup.object({
  facebookURL: Yup.string()
    .max(40, "Must be 40 characters or less")
    .matches(/^[a-zA-Z0-9!@*&();'":|,.<>?/\\]+$/, "Invalid characters"),
  instagramURL: Yup.string()
    .max(40, "Must be 40 characters or less")
    .matches(/^[a-zA-Z0-9!@*&();'":|,.<>?/\\]+$/, "Invalid characters"),
  youtubeURL: Yup.string()
    .max(40, "Must be 40 characters or less")
    .matches(/^[a-zA-Z0-9!@*&();'":|,.<>?/\\]+$/, "Invalid characters"),
  tiktokURL: Yup.string()
    .max(40, "Must be 40 characters or less")
    .matches(/^[a-zA-Z0-9!@*&();'":|,.<>?/\\]+$/, "Invalid characters"),
  twitterURL: Yup.string()
    .max(40, "Must be 40 characters or less")
    .matches(/^[a-zA-Z0-9!@*&();'":|,.<>?/\\]+$/, "Invalid characters"),
});

const initialValues = {
  facebookURL: "",
  instagramURL: "",
  youtubeURL: "",
  tiktokURL: "",
  twitterURL: "",
};

function SocialMediaForm() {
  const { Formik } = formik;

  // const handleSubmit = (values) => {
  //   console.log(values);
  // };

  return (
    <Container style={{ paddingTop: "40px" }}>
      <div className="roboto-semi-bold-28px-h2 mb-4">Social Media Links</div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={console.log}
      >
        {({
          handleSubmit, handleChange, values, touched, errors,
        }) => (
          <Form noValidate onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Col lg={4}>
                {/* <label htmlFor="number" className="form-label">Enter URL</label> */}
                <Form.Group className="mb-4" controlId="facebookURL">
                  <Form.Label className="roboto-medium-20px-body1">Facebook URL</Form.Label>
                  <Form.Control
                    style={{ height: "56px" }}
                    className="lg-input-small-text"
                    name="facebookURL"
                    type="text"
                    size="lg"
                    placeholder="Enter Facebook URL"
                    value={values.facebookURL}
                    onChange={handleChange}
                    isValid={touched.facebookURL && !errors.facebookURL}
                    isInvalid={!!errors.facebookURL}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.facebookURL}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col lg={4}>
                {/* <label htmlFor="number" className="form-label">Enter URL</label> */}
                <Form.Group className="mb-4" controlId="instagramURL">
                  <Form.Label className="roboto-medium-20px-body1">Instagram URL</Form.Label>
                  <Form.Control
                    style={{ height: "56px" }}
                    className="lg-input-small-text"
                    name="instagramURL"
                    type="text"
                    size="lg"
                    placeholder="Enter Instagram URL"
                    value={values.instagramURL}
                    onChange={handleChange}
                    isValid={touched.instagramURL && !errors.instagramURL}
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
                {/* <label htmlFor="number" className="form-label">Enter URL</label> */}
                <Form.Group className="mb-4" controlId="youtubeURL">
                  <Form.Label className="roboto-medium-20px-body1">YouTube URL</Form.Label>
                  <Form.Control
                    style={{ height: "56px" }}
                    className="lg-input-small-text"
                    name="youtubeURL"
                    type="text"
                    size="lg"
                    placeholder="Enter YouTube URL"
                    value={values.youtubeURL}
                    onChange={handleChange}
                    isValid={touched.youtubeURL && !errors.youtubeURL}
                    isInvalid={!!errors.youtubeURL}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.youtubeURL}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col lg={4}>
                {/* <label htmlFor="number" className="form-label">Enter URL</label> */}
                <Form.Group className="mb-4" controlId="tiktokURL">
                  <Form.Label className="roboto-medium-20px-body1">TikTok URL</Form.Label>
                  <Form.Control
                    style={{ height: "56px" }}
                    className="lg-input-small-text"
                    name="tiktokURL"
                    type="text"
                    size="lg"
                    placeholder="Enter TikTok URL"
                    value={values.tiktokURL}
                    onChange={handleChange}
                    isValid={touched.tiktokURL && !errors.tiktokURL}
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
                {/* <label htmlFor="number" className="form-label">Enter URL</label> */}
                <Form.Group className="mb-4" controlId="twitterURL">
                  <Form.Label className="roboto-medium-20px-body1">Twitter URL</Form.Label>
                  <Form.Control
                    style={{ height: "56px" }}
                    className="lg-input-small-text"
                    name="twitterURL"
                    type="text"
                    size="lg"
                    placeholder="Enter Twitter URL"
                    value={values.twitterURL}
                    onChange={handleChange}
                    isValid={touched.twitterURL && !errors.twitterURL}
                    isInvalid={!!errors.twitterURL}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.twitterURL}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>
            {/* <div className="text-center">
              <Button type="submit" variant="primary" disabled={!dirty || !isValid}>
                Submit Social
              </Button>
            </div> */}
          </Form>
        )}
      </Formik>
    </Container>
  );
}

export default SocialMediaForm;
