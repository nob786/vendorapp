/* eslint-disable no-nested-ternary */
/* eslint-disable max-len */
import React, { useState } from "react";
import {
  Button, Col, Container, Form, Modal, Row,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";
import * as formik from "formik";
import * as Yup from "yup";
import Featured from "../../assets/images/Featured.svg";
import loginImg1 from "../../assets/images/login-img-1.svg";
import X from "../../assets/images/X.svg";
import heroImg from "../../assets/images/harold.jpg";
import arrowBack from "../../assets/images/arrow-back.svg";
import visibility from "../../assets/images/visibility.svg";
import visibilityHide from "../../assets/images/visibility-hide.svg";
import "./Login.css";
import { toggleLoginModal, toggleLoginView } from "../redux/Login/loginSlice";
import { toggleRegisterView } from "../redux/Register/RegisterSlice";
import StepperForm from "../../components/Stepper/Stepper";
import { handleNextStep, handlePrevStep } from "../redux/Stepper/StepperSlice";
import ForgotPassword from "./ForgotPassword";

const counties = [
  "Alba", "Arad", "Arges", "Bacau", "Bihor", "Bistrita-Nasaud",
  "Botosani", "Braila", "Brasov", "Buzau", "Calarasi",
  "Caras-Severin", "Cluj", "Constanta", "Covasna", "Dambovita",
  "Dolj", "Galati", "Giurgiu", "Gorj", "Harghita",
  "Hunedoara", "Ialomita", "Iasi", "Ilfov", "Maramures", "Mehedinti",
  "Mures", "Neamt", "Olt", "Prahova", "Salaj", "Satu-Mare", "Sibiu",
  "Suceava", "Teleorman", "Timis", "Tulcea", "Valcea", "Vaslui", "Vrancea",
];

function Login() {
  const dispatch = useDispatch();
  const { Formik } = formik;

  // password: Yup.string().required('Password is required'),
  // passwordConfirmation: Yup.string()
  //    .oneOf([Yup.ref('password'), null], 'Passwords must match')

  const step1InitialValues = {
    email: "",
    password: "",
    password_check: "",
    contact_person: "",
  };

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

  const loginSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is Required"),
    password: Yup.string()
      .required("Password is required")
      .min(5, "Your password is too short."),
  });

  const step1Schema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is Required"),
    password: Yup.string()
      .required("Password is required")
      .min(5, "Your password is too short."),
    password_check: Yup.string().required("Passwords must match").oneOf([Yup.ref("password")], "Passwords must match"),
    contact_person: Yup.string().required(),
  });

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
  // const companyDetailschema = Yup.object().shape({
  //   company_name: Yup.string().required(),
  //   country: Yup.string()
  //     .required("Password is required")
  //     .min(5, "Your password is too short."),
  //   address: Yup.string().required("Passwords must match").oneOf([Yup.ref("password")], "Passwords must match"),
  //   postal_code: Yup.string().required(),
  //   fiscal_code: Yup.string().required(),
  //   firm_number: Yup.string().required(),
  //   bank_name: Yup.string().required(),
  //   bank_iban: Yup.string().required(),
  // });

  const isLoginModal = useSelector((state) => state.login.isLoginModal);
  const isLoginView = useSelector((state) => state.login.isLoginView);
  const isRegisterView = useSelector((state) => state.register.isRegisterView);
  const activeStep = useSelector((state) => state.stepper.activeStep);

  const [phone, setPhone] = useState("");
  const [forgotPassword, setForgotPassword] = useState(false);
  const [isShowPassword, setIsShowPassword] = useState(false);

  const handleClose = () => dispatch(toggleLoginModal());

  const handleRegisterClick = () => {
    // hide login view
    dispatch(toggleLoginView());
    // show register view
    dispatch(toggleRegisterView());
  };

  const handleLoginClick = () => {
    // show login view
    dispatch(toggleLoginView());
    // hide register view
    dispatch(toggleRegisterView());
  };

  const handleClickArrowBack = () => {
    if (forgotPassword) {
      setForgotPassword(false);
      dispatch(toggleLoginView());
    } else if (activeStep > 0) {
      dispatch(handlePrevStep());
    } else {
      handleClose();
    }
  };

  const handleClickForgotPassword = () => {
    if (isLoginView) {
      dispatch(toggleLoginView());
    }
    setForgotPassword(true);
  };

  const getVisibilityIcon = () => (
    <div style={{ position: "absolute", right: "15px", top: "15px" }}>
      {isShowPassword
        ? (
          <img
            role="presentation"
            src={visibility}
            alt="visibility"
            style={{ cursor: "pointer" }}
            onClick={() => setIsShowPassword(false)}
          />
        )
        : (
          <img
            role="presentation"
            src={visibilityHide}
            alt="visibilityHide"
            style={{ cursor: "pointer" }}
            onClick={() => setIsShowPassword(true)}
          />
        )}
    </div>
  );

  const handleStep1Submit = (values, { resetForm }) => {
    // setEmail(values.email);
    // setPassword(values.password);
    // setPasswordCheck(values.password_check);
    // setContactPerson(values.contact_person);
    resetForm();
    dispatch(handleNextStep());
  };

  const handleRegisterationSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
    // handleNextStep();
  };

  const dynamicRegisterationView = (handleNextStep) => (
    activeStep === 0
      ? (
        <Formik
          validationSchema={step1Schema}
          // onSubmit={handleNextStep}
          onSubmit={handleStep1Submit}
          initialValues={step1InitialValues}
        // initialValues={{
        //   email: "",
        //   password: "",
        //   password_check: "",
        //   // phone: "",
        //   contact_person: "",
        // }}
        >
          {({
            handleSubmit, handleChange, values, touched, errors,
          }) => (
            <Form noValidate onSubmit={handleSubmit}>
              <div style={{ maxHeight: "296px", overflowY: "scroll" }} className="Container Flipped">
                <Form.Group className="form-group mb-4" controlId="form3Example3">
                  <Form.Control
                    style={{ height: "56px" }}
                    className="lg-input-small-text"
                    name="email"
                    type="email"
                    size="lg"
                    placeholder="Enter Email"
                    value={values.email}
                    onChange={handleChange}
                    isValid={touched.email && !errors.email}
                    isInvalid={!!errors.email}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.email}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="form-group mb-3" controlId="form3Example4" style={{ position: "relative" }}>
                  <Form.Control
                    style={{ height: "56px" }}
                    className="hide-validation-icon lg-input-small-text"
                    name="password"
                    type={isShowPassword ? "text" : "password"}
                    size="lg"
                    placeholder="Enter Password"
                    value={values.password}
                    onChange={handleChange}
                    isValid={touched.password && !errors.password}
                    isInvalid={!!errors.password}
                  />
                  {getVisibilityIcon()}
                  <Form.Control.Feedback type="invalid">
                    {errors.password}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="form-group mb-3" controlId="form3Example5" style={{ position: "relative" }}>
                  <Form.Control
                    style={{ height: "56px" }}
                    className="hide-validation-icon lg-input-small-text"
                    name="password_check"
                    type={isShowPassword ? "text" : "password"}
                    size="lg"
                    placeholder="Re-enter Password"
                    value={values.password_check}
                    onChange={handleChange}
                    isValid={touched.password_check && !errors.password_check}
                    isInvalid={!!errors.password_check}
                  />
                  {getVisibilityIcon()}
                  <Form.Control.Feedback type="invalid">
                    {errors.password_check}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="form-group mb-3" controlId="form3Example6">
                  <PhoneInput
                    country="eg"
                    enableSearch
                    value={phone}
                    // eslint-disable-next-line no-shadow
                    onChange={(phone) => setPhone(phone)}
                  />
                </Form.Group>

                <Form.Group className="form-group mb-3" controlId="form3Example7">
                  <Form.Control
                    style={{ height: "56px" }}
                    className="lg-input-small-text"
                    name="contact_person"
                    type="text"
                    size="lg"
                    placeholder="Enter Contact Person Name"
                    value={values.contact_person}
                    onChange={handleChange}
                    isValid={touched.contact_person && !errors.contact_person}
                    isInvalid={!!errors.contact_person}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.contact_person}
                  </Form.Control.Feedback>
                </Form.Group>
              </div>

              <div className="text-center text-lg-start mt-4 pt-2">
                <Button
                  // type="button"
                  className="btn btn-success btn-lg w-100"
                  style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
                  // onClick={handleNextStep}
                  type="submit"
                >
                  Next
                </Button>

                <div className="row" style={{ textAlign: "center" }}>
                  <p className="small fw-bold mt-3 pt-1 mb-0 ">
                    Already have an account?
                    {" "}
                    <a href="#!" className="link-danger" onClick={handleLoginClick}>Login</a>
                  </p>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      )
      : (
        <Formik
          validationSchema={step2Schema}
          onSubmit={handleRegisterationSubmit}
          initialValues={step2InitialValues}
        >
          {({
            handleSubmit, handleChange, values, touched, errors,
          }) => (
            <Form noValidate onSubmit={handleSubmit}>

              <div style={{ maxHeight: "296px", overflowY: "scroll" }} className="Container Flipped">

                <Form.Group className="form-group mb-3" controlId="form3Example3">
                  <Form.Control
                    style={{ height: "56px" }}
                    className="lg-input-small-text"
                    type="text"
                    name="company_name"
                    size="lg"
                    placeholder="Enter Company Name"
                    value={values.company_name}
                    onChange={handleChange}
                    isValid={touched.company_name && !errors.company_name}
                    isInvalid={!!errors.company_name}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.company_name}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="form-group mb-3" controlId="form3Example4">
                  {/* <Form.Select aria-label="Default select example" style={{ height: "56px" }}> */}
                  <Form.Select
                    aria-label="Default select example"
                    style={{ height: "56px" }}
                    name="county"
                    value={values.county}
                    onChange={handleChange}
                    // onBlur={handleBlur}
                    isValid={touched.county && !errors.county}
                    isInvalid={touched.county && !!errors.county}
                    className={errors.county ? "border-danger" : ""}
                  // className="border-danger"
                  >
                    {/* <option disabled selected value hidden="true">Select County</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option> */}
                    <option disabled selected value hidden="true">Select County</option>
                    {counties.map((county, index) => (
                      // eslint-disable-next-line react/no-array-index-key
                      <option key={index} value={county}>{county}</option>
                    ))}
                  </Form.Select>
                  {/* <Form.Control.Feedback type="invalid"> */}
                  <div className="text-danger" style={{ fontSize: "14px" }}>
                    {errors.county}
                  </div>
                  {/* </Form.Control.Feedback> */}
                </Form.Group>

                <Form.Group className="form-group mb-3" controlId="form3Example5">
                  <Form.Control
                    style={{ height: "56px" }}
                    className="lg-input-small-text"
                    name="address"
                    type="text"
                    size="lg"
                    placeholder="Enter Company Address"
                    value={values.address}
                    onChange={handleChange}
                    isValid={touched.address && !errors.address}
                    isInvalid={!!errors.address}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.address}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="form-group mb-3" controlId="form3Example6">
                  <Form.Control
                    style={{ height: "56px" }}
                    className="lg-input-small-text"
                    name="postal_code"
                    type="text"
                    size="lg"
                    placeholder="Enter Postal Code"
                    value={values.postal_code}
                    onChange={handleChange}
                    isValid={touched.postal_code && !errors.postal_code}
                    isInvalid={!!errors.postal_code}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.postal_code}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="form-group mb-3" controlId="form3Example7">
                  <Form.Control
                    style={{ height: "56px" }}
                    className="lg-input-small-text"
                    name="fiscal_code"
                    type="text"
                    size="lg"
                    placeholder="Enter Fiscal Code"
                    value={values.fiscal_code}
                    onChange={handleChange}
                    isValid={touched.fiscal_code && !errors.fiscal_code}
                    isInvalid={!!errors.fiscal_code}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.fiscal_code}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="form-group mb-3" controlId="form3Example8">
                  <Form.Control
                    style={{ height: "56px" }}
                    className="lg-input-small-text"
                    name="firm_number"
                    type="text"
                    size="lg"
                    placeholder="Enter Firm Number"
                    value={values.firm_number}
                    onChange={handleChange}
                    isValid={touched.firm_number && !errors.firm_number}
                    isInvalid={!!errors.firm_number}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.firm_number}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="form-group mb-3" controlId="form3Example9">
                  <Form.Control
                    style={{ height: "56px" }}
                    className="lg-input-small-text"
                    name="bank_name"
                    type="text"
                    size="lg"
                    placeholder="Enter Bank Name"
                    value={values.bank_name}
                    onChange={handleChange}
                    isValid={touched.bank_name && !errors.bank_name}
                    isInvalid={!!errors.bank_name}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.bank_name}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="form-group mb-3" controlId="form3Example10">
                  <Form.Control
                    style={{ height: "56px" }}
                    className="lg-input-small-text"
                    name="bank_iban"
                    type="text"
                    size="lg"
                    placeholder="Enter Bank IBAN"
                    value={values.bank_iban}
                    onChange={handleChange}
                    isValid={touched.bank_iban && !errors.bank_iban}
                    isInvalid={!!errors.bank_iban}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.bank_iban}
                  </Form.Control.Feedback>
                </Form.Group>
              </div>

              <div style={{ paddingLeft: "36px" }}>
                {/* <div className="form-group d-flex justify-content-between align-items-center">
                  <Form.Check type="checkbox" className="mb-0">
                    <Form.Check.Input className="me-2" />
                    <Form.Check.Label>Keep me updated with the latest news</Form.Check.Label>
                  </Form.Check>
                </div>
                <div className="form-group d-flex justify-content-between align-items-center mt-2">
                  <Form.Check type="checkbox" className="mb-0">
                    <Form.Check.Input className="me-2" />
                    <Form.Check.Label>I agree to the Terms & Conditions</Form.Check.Label>
                  </Form.Check>
                </div> */}

                <Form.Group className="position-relative mb-3">
                  {/* <Form.Check
                    type="checkbox"
                    name="newsletter"
                    label="Keep me updated with the latest news"
                    // onChange={handleChange}
                    isInvalid={!!errors.newsletter}
                    feedback={errors.newsletter}
                    feedbackType="invalid"
                    id="validationFormik106"
                  // feedbackTooltip
                  /> */}
                  {/* <div className="form-check mb-3">
                    <input type="checkbox" name="terms_acceptance" className="form-check-input" id="validationFormCheck1" required />
                    <label className="form-check-label" htmlFor="validationFormCheck1">Check this checkbox</label>
                    <div className="invalid-feedback">Example invalid feedback text</div>
                  </div> */}

                  {/* <div class="form-check">
      <input class="form-check-input is-invalid" type="checkbox" value="" id="invalidCheck3" aria-describedby="invalidCheck3Feedback" required>
      <label class="form-check-label" for="invalidCheck3">
        Agree to terms and conditions
      </label>
      <div id="invalidCheck3Feedback" class="invalid-feedback">
        You must agree before submitting.
      </div>
    </div> */}

                </Form.Group>

                <Form.Group className="position-relative mb-3">
                  <Form.Check
                    type="checkbox"
                    required
                    name="terms_acceptance"
                    label="I agree to the Terms & Conditions"
                    value={values.terms_acceptance}
                    // checked={values.terms_acceptance}
                    onChange={handleChange}
                    isInvalid={!!errors.terms_acceptance}
                    feedback={errors.terms_acceptance}
                    feedbackType="invalid"
                    id="validationFormik107"
                  />
                </Form.Group>

                <div className="text-center text-lg-start mt-4 pt-2">
                  <Button type="submit" className="btn btn-success btn-lg w-100" style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}>
                    Register
                  </Button>
                </div>
                <div className="row" style={{ textAlign: "center" }}>
                  <p className="small fw-bold mt-3 pt-1 mb-0 ">
                    Already have an account?
                    {" "}
                    <a href="#!" className="link-danger" onClick={handleLoginClick}>Login</a>
                  </p>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      )
  );

  return (
    <Modal
      show={isLoginModal}
      onHide={handleClose}
      dialogClassName="modal-90w"
      aria-labelledby="example-custom-modal-styling-title"
      centered="true"
    >

      <div className="box" style={{ position: "absolute", right: "0" }} />
      <div style={{ position: "absolute", right: "10px", top: "8px" }}>
        <div role="presentation" onClick={handleClose} className="close-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none" style={{ cursor: "pointer" }}>
            <path d="M17 1L1 17M1 1L17 17" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>

      <div style={{
        position: "absolute", left: "0", paddingTop: "18px", paddingLeft: "24px",
      }}
      >
        <div role="presentation" onClick={handleClickArrowBack}>
          <img src={arrowBack} alt="arrowBack" className="arrowBack-icon" style={{ cursor: "pointer" }} />
        </div>
      </div>

      {
        isLoginView
        && (
          <div style={{
            position: "absolute", left: "0", paddingTop: "19px", paddingLeft: "24px",
          }}
          >
            <div role="presentation" onClick={handleClose}>
              <img src={arrowBack} alt="arrowBack" className="arrowBack-icon" style={{ cursor: "pointer" }} />
            </div>
          </div>
        )
      }

      <Container fluid style={{ height: "auto", padding: "0" }}>
        <Row className="h-100 col-12 g-0 flex-column-reverse flex-md-row">

          {/* login view */}

          {isLoginView
            ? (
              <Col md={12} lg={6} className="login-modal-form-col">
                <div className="d-flex justify-content-center align-items-center">
                  <img src={Featured} alt="Featured" className="mb-3" />
                </div>
                <div className="d-flex justify-content-center align-items-center h4" style={{ marginBottom: "36px" }}>Login</div>

                <Formik
                  validationSchema={loginSchema}
                  // onSubmit={handleNextStep}
                  onSubmit={console.log}
                  initialValues={{
                    email: "",
                    password: "",
                  }}
                >
                  {({
                    handleSubmit, handleChange, values, touched, errors,
                  }) => (
                    <Form noValidate onSubmit={handleSubmit}>
                      <Form.Group className="mb-4" controlId="form3Example3">
                        <Form.Control
                          style={{ height: "56px" }}
                          className="lg-input-small-text"
                          name="email"
                          type="email"
                          size="lg"
                          placeholder="Enter Email"
                          value={values.email}
                          onChange={handleChange}
                          isValid={touched.email && !errors.email}
                          isInvalid={!!errors.email}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.email}
                        </Form.Control.Feedback>
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="form3Example4" style={{ position: "relative" }}>
                        <Form.Control
                          style={{ height: "56px" }}
                          className="hide-validation-icon lg-input-small-text"
                          name="password"
                          type={isShowPassword ? "text" : "password"}
                          size="lg"
                          placeholder="Enter Password"
                          value={values.password}
                          onChange={handleChange}
                          isValid={touched.password && !errors.password}
                          isInvalid={!!errors.password}
                        />
                        {getVisibilityIcon()}
                        <Form.Control.Feedback type="invalid">
                          {errors.password}
                        </Form.Control.Feedback>
                      </Form.Group>

                      <div className="d-flex justify-content-between align-items-center">
                        <Form.Check type="checkbox" className="mb-0">
                          <Form.Check.Input className="me-2" />
                          <Form.Check.Label>Keep me Logged In</Form.Check.Label>
                        </Form.Check>
                        <a href="#!" className="text-body" onClick={handleClickForgotPassword}>Forgot password?</a>
                      </div>

                      <div className="text-center text-lg-start mt-4 pt-2">
                        <Button type="submit" className="btn btn-success btn-lg w-100" style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}>
                          Login
                        </Button>

                        <h4 className="login-page-text-divider"><span>OR</span></h4>

                        <div className="row">
                          <div className="col">
                            <a className="btn btn-outline-dark w-100" href="/users/googleauth" role="button" style={{ textTransform: "none", padding: "10px 16px" }}>
                              <img width="20px" style={{ marginBottom: "3px", marginRight: "5px" }} alt="Google sign-in" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png" />
                              Login with Google
                            </a>
                          </div>
                        </div>

                        <div className="row" style={{ textAlign: "center" }}>
                          <p className="small fw-bold mt-3 pt-1 mb-0 ">
                            {" Don't have an account?"}
                            {" "}
                            <a href="#!" className="link-danger" onClick={handleRegisterClick}>Register</a>
                          </p>
                        </div>
                      </div>
                    </Form>
                  )}
                </Formik>
              </Col>
            )
            : isRegisterView ? (
              // register view
              <Col md={12} lg={6} className="login-modal-form-col">
                {/* <Form> */}
                <div className="d-flex justify-content-center align-items-center h4" style={{ marginBottom: "36px" }}>Register</div>

                <StepperForm componentToRender={dynamicRegisterationView} />

                {/* </Form> */}
              </Col>
            )
              : forgotPassword
                ? <ForgotPassword setForgotPassword={setForgotPassword} />
                : ""}
          <Col md={0} lg={6} className="d-flex login-image-mobile" style={{ justifyContent: "right", paddingRight: "0" }}>
            <img src={heroImg} alt="heroImg" style={{ maxWidth: "100%", objectFit: "cover" }} />
          </Col>
        </Row>
      </Container>
    </Modal>
    // </section>
  );
}

export default Login;
