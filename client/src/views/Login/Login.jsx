/* eslint-disable no-nested-ternary */
/* eslint-disable max-len */
import React, { useState } from "react";
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import {
  Button, Col, Container, Form, FormControl, InputGroup, Modal, Row,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Featured from "../../assets/images/Featured.svg";
import loginImg1 from "../../assets/images/login-img-1.svg";
import X from "../../assets/images/X.svg";
import heroImg from "../../assets/images/harold.jpg";
import "./Login.css";
import { toggleLoginModal, toggleLoginView } from "../redux/Login/loginSlice";
import Stepper from "../../components/Stepper/Stepper";
import { toggleRegisterModal, toggleRegisterView } from "../redux/Register/RegisterSlice";
import StepperForm from "../../components/Stepper/Stepper";
// import { faClose } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function UserDetails() {
  return <span>Your details</span>;
}

function Confirmation() {
  return <span>Company details</span>;
}

function Login() {
  const [activeStep, setActiveStep] = useState(0);
  const dispatch = useDispatch();

  const isLoginModal = useSelector((state) => state.login.isLoginModal);
  const isLoginView = useSelector((state) => state.login.isLoginView);
  const isRegisterView = useSelector((state) => state.register.isRegisterView);

  console.log({ isLoginView });
  console.log({ isRegisterView });

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

  const steps = [
    "Your details",
    "Company Details",
  ];

  function getSectionComponent() {
    switch (activeStep) {
      case 0: return <UserDetails />;
      case 1: return <Confirmation />;
      default: return null;
    }
  }
  return (
    // <Modal show={isLoginModal} onHide={handleClose} size="xl" centered="true">
    <Modal
      show={isLoginModal}
      onHide={handleClose}
      dialogClassName="modal-90w"
      aria-labelledby="example-custom-modal-styling-title"
      centered="true"
    >

      <div className="box" style={{ position: "absolute", right: "0" }} />
      <div style={{ position: "absolute", right: "0" }}>

        <div role="presentation" onClick={handleClose}>
          <img src={X} alt="X" className="close-icon" style={{ cursor: "pointer" }} />
        </div>
      </div>
      <Container fluid style={{ height: "auto", padding: "0" }}>
        <Row className="h-100 col-12 g-0 flex-column-reverse flex-md-row">

          {/* login view */}

          {isLoginView
            ? (
              <Col md={12} lg={6} className="login-modal-form-col">
                <Form>
                  <div className="d-flex justify-content-center align-items-center">
                    <img src={Featured} alt="Featured" className="mb-3" />
                  </div>
                  <div className="d-flex justify-content-center align-items-center h4" style={{ marginBottom: "36px" }}>Login</div>

                  <Form.Group className="mb-4" controlId="form3Example3">
                    <Form.Control style={{ height: "56px" }} className="lg-input-small-text" type="email" size="lg" placeholder="Enter a valid email address" />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="form3Example4">
                    <Form.Control style={{ height: "56px" }} className="lg-input-small-text" type="password" size="lg" placeholder="Enter password" />
                  </Form.Group>

                  <div className="d-flex justify-content-between align-items-center">
                    <Form.Check type="checkbox" className="mb-0">
                      <Form.Check.Input className="me-2" />
                      <Form.Check.Label>Keep me Logged In</Form.Check.Label>
                    </Form.Check>
                    <a href="#!" className="text-body">Forgot password?</a>
                  </div>

                  <div className="text-center text-lg-start mt-4 pt-2">
                    <Button type="button" className="btn btn-success btn-lg w-100" style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}>
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
              </Col>
            )
            : isRegisterView && (
              // register view
              <Col md={12} lg={6} className="login-modal-form-col">
                <Form>
                  <div className="d-flex justify-content-center align-items-center h4" style={{ marginBottom: "36px" }}>Register</div>

                  <div>
                    {/* <Stepper
                      steps={steps}
                      activeStep={activeStep}
                    />
                    <div>
                      {getSectionComponent()}
                      {(activeStep !== 0 && activeStep !== steps.length - 1)
                        && <button type="button" onClick={() => setActiveStep(activeStep - 1)}>Previous</button>}
                      {activeStep !== steps.length - 1
                        && <button type="button" onClick={() => setActiveStep(activeStep + 1)}>Next</button>}
                    </div> */}
                    <StepperForm />
                  </div>

                  <Form.Group className="mb-4" controlId="form3Example3">
                    <Form.Control style={{ height: "56px" }} className="lg-input-small-text" type="email" size="lg" placeholder="Enter Email" />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="form3Example4">
                    <Form.Control style={{ height: "56px" }} className="lg-input-small-text" type="password" size="lg" placeholder="Enter Password" />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="form3Example5">
                    <Form.Control style={{ height: "56px" }} className="lg-input-small-text" type="password" size="lg" placeholder="Re-enter Password" />
                  </Form.Group>

                  <div className="d-flex justify-content-between align-items-center">
                    <Form.Check type="checkbox" className="mb-0">
                      <Form.Check.Input className="me-2" />
                      <Form.Check.Label>Keep me updated with the latest news</Form.Check.Label>
                    </Form.Check>
                  </div>
                  <div className="d-flex justify-content-between align-items-center">
                    <Form.Check type="checkbox" className="mb-0">
                      <Form.Check.Input className="me-2" />
                      <Form.Check.Label>I agree to the Terms & Conditions</Form.Check.Label>
                    </Form.Check>
                  </div>
                  {/* <a href="#!" className="text-body">Forgot password?</a> */}

                  <div className="text-center text-lg-start mt-4 pt-2">
                    <Button type="button" className="btn btn-success btn-lg w-100" style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}>
                      Register
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
              </Col>
            )}
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
