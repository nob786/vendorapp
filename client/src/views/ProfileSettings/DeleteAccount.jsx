import React from "react";
import {
  Button, Col, Container, Form, Modal, Row,
} from "react-bootstrap";
import * as formik from "formik";
import * as Yup from "yup";
import Header from "../../components/Navbar/Navbar";
import user from "../../assets/images/profile-settings/user.svg";

// import profile_bg from "../../assets/images/profile-settings/profile-bg.svg";
import "./ProfileSettings.css";
import Footer from "../../components/Footer/Footer";

const reasons = [
  "I want to",
  "I am not satisfied",
];

function DeleteAccount() {
  const { Formik } = formik;

  const initialValues = {
    password: "",
    confirm_password: "",
    reasonToLeave: "",
    // old_password: "",
  };

  const Schema = Yup.object().shape({
    password: Yup.string()
      .required("Password is required")
      .min(5, "Your password is too short."),
    confirm_password: Yup.string().required("Passwords must match")
      .oneOf([Yup.ref("password")], "Passwords must match"),
  });

  return (
    <>
      <Header />
      <div className="profile-settings-banner d-flex align-items-center justify-content-between">
        <div style={{ marginLeft: "100px" }}>
          <div className="roboto-bold-36px-h1">Delete Account</div>
          <div className="roboto-regular-18px-body3">We are sorry to see you leave</div>
        </div>

        <div style={{
          position: "absolute", right: "100px", top: "-28px", display: "flex",
        }}
        >
          <div style={{ marginTop: "30px" }}>
            <img src={user} alt="user" />
          </div>
        </div>
      </div>

      <Container fluid style={{ marginTop: "100px", marginBottom: "200px" }} className="">
        <Row className="justify-content-center">
          <Col lg={10}>
            <Formik
              validationSchema={Schema}
              // onSubmit={handleNextStep}
              onSubmit={console.log}
              initialValues={initialValues}
            >
              {({
                handleSubmit, handleChange, values, touched, errors,
              }) => (
                <Form noValidate onSubmit={handleSubmit}>
                  <Col lg={4}>
                    <Form.Group className="form-group mb-3" controlId="form3Example4" style={{ position: "relative" }}>
                      <Form.Label className="roboto-medium-20px-body1">Enter Password</Form.Label>
                      <Form.Control
                        style={{ height: "56px" }}
                        className="hide-validation-icon lg-input-small-text"
                        name="password"
                        type="password"
                        size="lg"
                        placeholder="Enter Old Password"
                        value={values.password}
                        onChange={handleChange}
                        isValid={touched.password && !errors.password}
                        isInvalid={!!errors.password}
                      />
                      {/* {getVisibilityIcon()} */}
                      <Form.Control.Feedback type="invalid">
                        {errors.password}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>

                  <Col lg={4}>

                    <Form.Group className="form-group mb-3" controlId="form3Example4" style={{ position: "relative" }}>
                      <Form.Label className="roboto-medium-20px-body1">Confirm Password</Form.Label>

                      <Form.Control
                        style={{ height: "56px" }}
                        className="hide-validation-icon lg-input-small-text"
                        name="confirm_password"
                        type="password"
                        size="lg"
                        placeholder="Enter New Password"
                        value={values.confirm_password}
                        onChange={handleChange}
                        isValid={touched.confirm_password && !errors.confirm_password}
                        isInvalid={!!errors.confirm_password}
                      />
                      {/* {getVisibilityIcon()} */}
                      <Form.Control.Feedback type="invalid">
                        {errors.confirm_password}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>

                  <Col lg={4}>

                    <Form.Group className="form-group mb-3" controlId="form3Example4" style={{ position: "relative" }}>
                      <Form.Label className="roboto-medium-20px-body1">Why are you leaving?</Form.Label>
                      <Form.Select
                        aria-label="Default select example"
                        style={{ height: "56px" }}
                        name="reasonToLeave"
                        value={values.reasonToLeave || ""}
                        onChange={handleChange}
                        // onBlur={handleBlur}
                        // isValid={touched.reasonToLeave && !errors.reasonToLeave}
                        isInvalid={touched.reasonToLeave && !!errors.reasonToLeave}
                        className={errors.reasonToLeave ? "border-danger" : ""}
                      >
                        <option selected value hidden="true">Select</option>
                        {reasons.map((reason, index) => (
                          // eslint-disable-next-line react/no-array-index-key
                          <option key={index} value={reason}>{reason}</option>
                        ))}
                      </Form.Select>

                      {/* <Form.Control.Feedback type="invalid">
                        {errors.confirm_password}
                      </Form.Control.Feedback> */}
                    </Form.Group>
                  </Col>

                  <Col className="d-flex justify-content-end">
                    <Button
                      type="submit"
                      // onClick={handleClickSubmit}
                      style={{ marginTop: "8rem", width: "30%" }}
                      className="btn btn-success roboto-semi-bold-16px-information btn-lg"
                    >
                      Delete
                    </Button>
                  </Col>

                </Form>
              )}
            </Formik>
          </Col>
        </Row>
      </Container>

      <Footer />
    </>
  );
}

export default DeleteAccount;
