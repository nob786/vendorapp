/* eslint-disable no-nested-ternary */
/* eslint-disable max-len */
import React, { useState } from "react";
import {
  Button, Col, Container, Form, Modal, Row,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";
import Featured from "../../assets/images/Featured.svg";
import loginImg1 from "../../assets/images/login-img-1.svg";
import X from "../../assets/images/X.svg";
import heroImg from "../../assets/images/harold.jpg";
import arrowBack from "../../assets/images/arrow-back.svg";
import "./Login.css";
import { toggleLoginModal, toggleLoginView } from "../redux/Login/loginSlice";
import { toggleRegisterView } from "../redux/Register/RegisterSlice";
import StepperForm from "../../components/Stepper/Stepper";
import { handlePrevStep } from "../redux/Stepper/StepperSlice";

function ForgotPassword({ setForgotPassword }) {
  const dispatch = useDispatch();

  const isLoginModal = useSelector((state) => state.login.isLoginModal);
  const isLoginView = useSelector((state) => state.login.isLoginView);
  const isRegisterView = useSelector((state) => state.register.isRegisterView);
  const activeStep = useSelector((state) => state.stepper.activeStep);

  const [phone, setPhone] = useState("");
  const [isResetEmailSent, setIsResetEmailSent] = useState(false);

  const handleClose = () => dispatch(toggleLoginModal());

  const handleRegisterClick = () => {
    // hide login view
    dispatch(toggleLoginView());
    // show register view
    dispatch(toggleRegisterView());
  };

  const handleLoginClick = () => {
    // show login view
    setForgotPassword(false);
    dispatch(toggleLoginView());
    // hide register view
    // dispatch(toggleRegisterView());
  };

  const handleClickArrowBack = () => {
    handleLoginClick();
  };

  const handleResetPassword = () => {
    setIsResetEmailSent(true);
    // handleLoginClick();
  };

  return (
    // <Modal show={isLoginModal} onHide={handleClose} size="xl" centered="true">
    <Col md={12} lg={6} className="login-modal-form-col">
      {!isResetEmailSent
        ? (
          <Form>
            <div className="d-flex justify-content-center align-items-center">
              <img src={Featured} alt="Featured" className="mb-3" />
            </div>
            <div className="d-flex justify-content-center align-items-center h4" style={{ marginBottom: "32px", marginTop: "27px" }}>Forgot Password?</div>
            <div className="d-flex justify-content-center align-items-center body text-center" style={{ marginBottom: "50px", padding: "0 50px" }}>
              Enter your email and we will send you a
              link that will redirect you to
              <br />
              {" "}
              Reset your password
            </div>
            <Form.Group controlId="form3Example3" style={{ marginBottom: "94px" }}>
              <Form.Control style={{ height: "56px" }} className="lg-input-small-text" type="email" size="lg" placeholder="Enter Email" />
            </Form.Group>

            <div className="text-center text-lg-start mt-4 pt-2">
              <Button
                type="button"
                className="btn btn-success btn-lg w-100"
                style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
                onClick={handleResetPassword}
              >
                Send
              </Button>

              <div className="row" style={{ textAlign: "center" }}>
                <p className="small fw-bold mt-3 pt-1 mb-0">
                  {" Already have an account?"}
                  {" "}
                  <a href="#!" className="link" onClick={handleLoginClick}>Login</a>
                </p>
              </div>
            </div>
          </Form>
        )

        : (
          <Form>
            <div className="d-flex justify-content-center align-items-center">
              <img src={Featured} alt="Featured" className="mb-3" />
            </div>
            <div className="d-flex justify-content-center align-items-center h4" style={{ marginBottom: "32px", marginTop: "27px" }}>Forgot Password?</div>
            <div className="d-flex justify-content-center align-items-center body text-center" style={{ marginBottom: "50px", padding: "0 50px" }}>
              We have sent you an email for setting
              up a new password
            </div>
            <Form.Group controlId="form3Example3" style={{ marginBottom: "94px" }}>
              <Form.Control style={{ height: "56px" }} className="lg-input-small-text" type="email" size="lg" value="test@gmail.com" placeholder="Enter Email" />
            </Form.Group>

            <div className="text-center text-lg-start mt-4 pt-2">
              <Button
                type="button"
                className="btn btn-success btn-lg w-100"
                style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
                onClick={handleResetPassword}
              >
                Send
              </Button>

              <div className="row" style={{ textAlign: "center" }}>
                <p className="small fw-bold mt-3 pt-1 mb-0">
                  {" Already have an account?"}
                  {" "}
                  <a href="#!" className="link" onClick={handleLoginClick}>Back to Login</a>
                </p>
              </div>
            </div>
          </Form>
        )}
    </Col>
    //  </section>
  );
}

export default ForgotPassword;
