import React from "react";
import * as formik from "formik";
import * as Yup from "yup";
import {
  Button, Col, Container, Form, Modal, Row,
} from "react-bootstrap";
import Header from "../../components/Navbar/Navbar";
import TopBanner from "../../components/TopBanner";
import postAdBanner1 from "../../assets/images/post-ad-banner-1.svg";
import postAdBanner2 from "../../assets/images/post-ad-banner-2.svg";
import postAdBanner3 from "../../assets/images/post-ad-banner-3.svg";
import "./PostAd.css";

function PostAd() {
  const { Formik } = formik;

  const step2InitialValues = {
    company_name: "",
    county: "",
    address: "",
    postal_code: "",
    fiscal_code: "",
    firm_number: "",
    bank_name: "",
    bank_iban: "",
    terms_acceptance: false,
    newsletter: false,
    // ...other field initial values
  };

  const step2Schema = Yup.object().shape({
    company_name: Yup.string()
      .required()
      .max(25, "Company name must be up to 25 characters"),
    county: Yup.string()
      .required(),
    address: Yup.string()
      .required("Address is required")
      .matches(
        /^[A-Za-z0-9\s,-./]+$/,
        "Address can only contain letters, digits, spaces, and , - . / characters",
      )
      .max(70, "Address must be be up 70 characters"),
    postal_code: Yup.string().max(7, "Postal code must be up to 7 characters"),
    fiscal_code: Yup.string().max(11, "Fiscal code must be up to 11 characters")
      .matches(/^[A-Za-z0-9]+$/, "Must contain letters and digits only"),
    firm_number: Yup.string().max(11, "Firm Name must be up to 11 characters")
      .matches(
        /^[A-Za-z0-9/.]+$/,
        "Firm number can contain up to 11 letters, digits, /, and . signs",
      ),
    bank_name: Yup.string().max(30, "Bank name must be up to 30 characters"),
    bank_iban: Yup.string().max(30, "Bank name must be up to 30 characters")
      .matches(/^[A-Za-z0-9]+$/, "Bank IBAN can contain letters and digits"),
    terms_acceptance: Yup.bool().required().oneOf([true], "Terms must be accepted"),
    newsletter: Yup.bool(),

  });

  return (
    <div>
      <TopBanner />
      <Header />

      <div className="ad-banner d-flex align-items-center justify-content-between">
        <div style={{ marginLeft: "100px" }}>
          <h4>Post an Ad</h4>
          <div>Reach thousands of buyers on our platform</div>
        </div>

        <div style={{
          position: "absolute", right: "-50px", top: "-32px", display: "flex",
        }}
        >
          <div style={{ marginTop: "30px" }}>
            <img src={postAdBanner1} alt="postAdBanner1" />
          </div>
          <div style={{ margin: "0 -65px" }}>
            <img src={postAdBanner3} alt="postAdBanner3" />
          </div>
          <div style={{ marginTop: "30px" }}>
            <img src={postAdBanner2} alt="postAdBanner2" />
          </div>
        </div>
      </div>

      <Container fluid style={{ marginTop: "40px", paddingLeft: "150px" }}>
        <Row>

          <h4>Company Information</h4>

          {/* ---------------------------FORM */}
          <Formik
            validationSchema={step2Schema}
            onSubmit={console.log}
            initialValues={step2InitialValues}
          >
            {({
              handleSubmit, handleChange, values, touched, errors,
            }) => (
              <Form noValidate onSubmit={handleSubmit}>

                <div className="">

                  <Col md={6} lg={3}>
                    <Form.Group className="form-group mb-3" controlId="form3Example3">
                      <Form.Label className="roboto-medium-20px-body1">Commercial Name</Form.Label>
                      <Form.Control
                        style={{ height: "56px" }}
                        className="lg-input-small-text"
                        type="text"
                        name="company_name"
                        size="sm"
                        placeholder="Enter Company Name"
                        value={values.company_name || ""}
                        onChange={handleChange}
                        isValid={touched.company_name && !errors.company_name}
                        isInvalid={!!errors.company_name}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.company_name}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                  <Col md={6} lg={3}>
                    <Form.Group className="form-group mb-3" controlId="form3Example4">
                      {/* <Form.Select aria-label="Default select example" style={{ height: "56px" }}> */}
                      <Form.Label className="roboto-medium-20px-body1">Select Category</Form.Label>
                      <Form.Select
                        aria-label="Default select example"
                        style={{ height: "56px" }}
                        name="county"
                        value={values.county || ""}
                        onChange={handleChange}
                        // onBlur={handleBlur}
                        isValid={touched.county && !errors.county}
                        isInvalid={touched.county && !!errors.county}
                        className={errors.county ? "border-danger" : ""}
                      >
                        <option disabled selected value hidden="true">Select County</option>
                      </Form.Select>
                      {/* <Form.Control.Feedback type="invalid"> */}
                      <div className="text-danger" style={{ fontSize: "14px" }}>
                        {errors.county}
                      </div>
                      {/* </Form.Control.Feedback> */}
                    </Form.Group>
                  </Col>

                  <Col md={6} lg={3}>
                    <Form.Group className="form-group mb-3" controlId="form3Example5">
                      <Form.Label className="roboto-medium-20px-body1">Select sub-category</Form.Label>
                      <Form.Control
                        style={{ height: "56px" }}
                        className="lg-input-small-text"
                        name="address"
                        type="text"
                        size="lg"
                        placeholder="Enter Company Address"
                        value={values.address || ""}
                        onChange={handleChange}
                        isValid={touched.address && !errors.address}
                        isInvalid={!!errors.address}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.address}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                  <Form.Group className="form-group mb-3" controlId="form3Example6">
                    <Form.Label className="roboto-medium-20px-body1">Description</Form.Label>
                    <Form.Control
                      style={{ minHeight: "300px" }}
                      className="lg-input-small-text"
                      name="postal_code"
                      as="textarea"
                      rows={3}
                      type="text"
                      size="lg"
                      placeholder="Enter Postal Code"
                      value={values.postal_code || ""}
                      onChange={handleChange}
                      isValid={touched.postal_code && !errors.postal_code}
                      isInvalid={!!errors.postal_code}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.postal_code}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group className="form-group mb-3" controlId="form3Example7">

                    <Form.Label className="roboto-medium-20px-body1">Country</Form.Label>
                    <Form.Control
                      style={{ height: "56px" }}
                      className="lg-input-small-text"
                      name="fiscal_code"
                      type="text"
                      size="lg"
                      placeholder="Enter Fiscal Code"
                      value={values.fiscal_code || ""}
                      onChange={handleChange}
                      isValid={touched.fiscal_code && !errors.fiscal_code}
                      isInvalid={!!errors.fiscal_code}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.fiscal_code}
                    </Form.Control.Feedback>
                  </Form.Group>
                </div>

                {/* <div>
                  <div className="text-center text-lg-start mt-4 pt-2">
                    <Button
                      type="submit"
                      className="btn btn-success roboto-semi-bold-16px-information btn-lg w-100"
                      style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
                    >
                      Register
                    </Button>
                  </div>
                </div> */}
              </Form>
            )}
          </Formik>

        </Row>
      </Container>
    </div>
    // </div >
  );
}

export default PostAd;
