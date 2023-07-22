import React from "react";
import {
  Button, Col, Container, Form, Modal, Row,
} from "react-bootstrap";
import * as formik from "formik";
import * as Yup from "yup";
import Header from "../../components/Navbar/Navbar";
import user from "../../assets/images/profile-settings/user.svg";
import personIcon from "../../assets/images/profile-settings/person.svg";
import contactIcon from "../../assets/images/post-ad/contact.svg";

// import profile_bg from "../../assets/images/profile-settings/profile-bg.svg";
import "./ProfileSettings.css";
import Footer from "../../components/Footer/Footer";

function PersonalInformation() {
  const { Formik } = formik;

  const initialValues = {
    person_name: "",
    person_number: "",
  };

  const Schema = Yup.object().shape({
    person_name: Yup.string().matches(/^[A-Za-z\s]{1,25}$/, "Invalid input"),
    person_number: Yup.string().matches(/^\+?[0-9]{1,15}$/, "Invalid phone number"),
  });

  return (
    <>
      <Header />
      <div className="profile-settings-banner d-flex align-items-center justify-content-between">
        <div style={{ marginLeft: "100px" }}>
          <div className="roboto-bold-36px-h1">Personal Information</div>
          <div className="roboto-regular-18px-body3">Update your information with ease</div>
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
                    <Form.Group className="mb-4" controlId="form3Example3">
                      <Form.Label
                        className="roboto-medium-20px-body1 d-flex align-items-center"
                        style={{ marginBottom: "20px" }}
                      >
                        <img src={personIcon} alt="commercialName" style={{ marginRight: "16px" }} />

                        Contact Person Name

                      </Form.Label>
                      <Form.Control
                        style={{ height: "56px" }}
                        className="lg-input-small-text"
                        name="person_name"
                        type="text"
                        size="lg"
                        placeholder="Enter Name"
                        value={values.person_name}
                        onChange={handleChange}
                        // isValid={touched.person_name && !errors.person_name}
                        isInvalid={!!errors.person_name}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.person_name}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>

                  <Col lg={4}>

                    <Form.Group className="mb-3" controlId="form3Example4">
                      <Form.Label
                        className="roboto-medium-20px-body1 d-flex align-items-center"
                        style={{ marginBottom: "20px" }}
                      >
                        <img src={contactIcon} alt="commercialName" style={{ marginRight: "16px" }} />

                        Contact Person Number

                      </Form.Label>
                      <Form.Control
                        style={{ height: "56px" }}
                        className="lg-input-small-text"
                        name="person_number"
                        type="text"
                        size="lg"
                        placeholder="Enter Number"
                        value={values.person_number}
                        onChange={handleChange}
                        // isValid={touched.person_number && !errors.person_number}
                        isInvalid={!!errors.person_number}
                      />
                      {/* {getVisibilityIcon()} */}
                      <Form.Control.Feedback type="invalid">
                        {errors.person_number}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>

                  <Col className="d-flex justify-content-end">
                    <Button
                      type="submit"
                      // onClick={handleClickSubmit}
                      style={{ marginTop: "8rem", width: "30%" }}
                      className="btn btn-success roboto-semi-bold-16px-information btn-lg"
                    >
                      Save Changes
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

export default PersonalInformation;
