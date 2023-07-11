import React from "react";
// import './Navbar';
import { Button, Form } from "react-bootstrap"; // Import Bootstrap components

import { useDispatch, useSelector } from "react-redux";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Allevents from "../../assets/images/Allevents.svg";
import "./Navbar.css";
import { toggleLoginModal, toggleLoginView } from "../../views/redux/Login/loginSlice";
import { toggleRegisterModal, toggleRegisterView } from "../../views/redux/Register/RegisterSlice";

function Header() {
  const dispatch = useDispatch();

  const isRegisterView = useSelector((state) => state.register.isRegisterView);
  const isLoginView = useSelector((state) => state.login.isLoginView);

  console.log("isLoginView INSIDE NAVBAR COMP", isLoginView);

  const handleLoginClick = (e) => {
    e.preventDefault();
    if (isRegisterView) {
      dispatch(toggleRegisterView());
      console.log("if (isRegisterView)");
    }
    if (!isLoginView) {
      dispatch(toggleLoginView());
      console.log("if (!isLoginView)");
    }
    console.log("OUTSIDE BOTH IFS");
    dispatch(toggleLoginModal());
  };

  const handleRegisterClick = (e) => {
    if (isLoginView) {
      dispatch(toggleLoginView());
    }
    e.preventDefault();
    if (!isRegisterView) {
      dispatch(toggleRegisterView());
    }
    dispatch(toggleLoginModal());
    // dispatch(toggleRegisterModal());
  };

  return (
    <Navbar bg="body-tertiary" expand="lg" className="navbar">
      <Navbar.Brand href="#">
        <img src={Allevents} alt="Allevents" style={{ maxWidth: "100%" }} />
      </Navbar.Brand>
      <Button type="button" className="login-button-mobile" onClick={(e) => handleLoginClick(e)}>Login</Button>
      <Navbar.Toggle aria-controls="navbarSupportedContent" />
      <Navbar.Collapse id="navbarSupportedContent" className="navbar-collapse">
        <Nav className="mx-auto">

          <NavDropdown title="For him" id="navbarDropdown">
            <NavDropdown.Item href="#">Action</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#">Something else here</NavDropdown.Item>
          </NavDropdown>

          <NavDropdown title="For her" id="navbarDropdown">
            <NavDropdown.Item href="#">Action</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#">Something else here</NavDropdown.Item>
          </NavDropdown>

          <NavDropdown title="Vendors" id="navbarDropdown">
            <NavDropdown.Item href="#">Action</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#">Something else here</NavDropdown.Item>
          </NavDropdown>

          <NavDropdown title="Venues" id="navbarDropdown">
            <NavDropdown.Item href="#">Action</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#">Something else here</NavDropdown.Item>
          </NavDropdown>

          <NavDropdown title="Planning tools" id="navbarDropdown">
            <NavDropdown.Item href="#">Action</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#">Something else here</NavDropdown.Item>
          </NavDropdown>

        </Nav>
        <Form className="d-flex" role="search" style={{ maxHeight: "40px" }}>
          <Button
            variant=""
            type="button"
            className="login-button"
            style={{ fontSize: "16px", fontWeight: "700", color: "#A0C49D" }}
            onClick={(e) => handleLoginClick(e)}
          >
            Login
          </Button>

          <Button
            variant="outline-success"
            type="submit"
            className="create-account-btn"
            onClick={(e) => handleRegisterClick(e)}
          >
            Create Account

          </Button>
        </Form>
      </Navbar.Collapse>

    </Navbar>
  );
}

export default Header;
