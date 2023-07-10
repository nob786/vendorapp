/* eslint-disable max-len */
import React, { useState } from "react";
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import {
  Button, Col, Container, Form, Modal, Row,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Featured from "../../assets/images/Featured.svg";
import loginImg1 from "../../assets/images/login-img-1.svg";
import "./Login.css";
import { toggleLoginModal } from "../redux/Login/loginSlice";

function Login() {
  const [show, setShow] = useState(false);
  // useSelector(())
  // const { toggleLoginModal } = useSelector((state) => state.);
  const dispatch = useDispatch();

  const isLoginModal = useSelector((state) => state.login.isLoginModal);
  console.log({ isLoginModal });

  const handleClose = () => dispatch(toggleLoginModal());
  // const handleShow = () => setShow(true);
  return (
    <Modal show={isLoginModal} onHide={handleClose} size="lg" centered="true">
      {/* <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
      Close
      </Button>
      <Button variant="primary" onClick={handleClose}>
      Save Changes
      </Button>
    </Modal.Footer> */}
      {/* <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body> */}
      <Container fluid>
        <Row className="d-flex justify-content-center align-items-center h-100">
          <Col md={8} lg={6}>
            <Container>
              <div className="d-flex justify-content-center align-items-center">
                <img src={Featured} alt="Featured" className="mb-3" />
              </div>

              <div className="d-flex justify-content-center align-items-center h4" style={{ marginBottom: "36px" }}>Login</div>
              <Form>
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
                      <a href="#!" className="link-danger">Register</a>
                    </p>
                  </div>
                </div>
              </Form>
            </Container>
          </Col>
          <Col md={9} lg={6}>
            {/* className="img-fluid"  */}
            <img src={loginImg1} style={{ width: "100%", height: "auto" }} alt="loginImg1" />
          </Col>
        </Row>
      </Container>
    </Modal>
  // </section>
  );
}

export default Login;
