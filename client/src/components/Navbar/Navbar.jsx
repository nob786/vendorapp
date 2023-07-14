import React, { useState } from "react";
// import './Navbar';
import { Button, Form } from "react-bootstrap"; // Import Bootstrap components

import { useDispatch, useSelector } from "react-redux";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/fontawesome-free-solid";
import Allevents from "../../assets/images/Allevents.svg";
import "./Navbar.css";
import { toggleLoginModal, toggleLoginView } from "../../views/redux/Login/loginSlice";
import { toggleRegisterModal, toggleRegisterView } from "../../views/redux/Register/RegisterSlice";

function Header() {
  const dispatch = useDispatch();
  const [navbarToggler, setNavbarToggler] = useState(false);
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

  const handleNavbarToggler = () => {
    setNavbarToggler(!navbarToggler);
  };

  return (
    <Navbar bg="body-tertiary" expand="lg" className="navbar">
      <Navbar.Brand href="#">
        <img src={Allevents} alt="Allevents" style={{ maxWidth: "100%" }} />
      </Navbar.Brand>
      <Button
        type="button"
        // className="login-button"
        variant="success"
        // type="submit"
        className="roboto-semi-bold-16px-information login-button-mobile me-3"
        onClick={(e) => handleLoginClick(e)}
      >
        Login

      </Button>
      {/* <i className="fas fa-bars" style="color:#fff; font-size:28px;" /> */}
      {/* <FontAwesomeIcon icon={faBars} style={{ color: "#FFF" }} size="2xl" /> */}
      <Navbar.Toggle
        aria-controls="navbarSupportedContent"
        className="custom-toggler"
        style={{ border: "none", outline: "0", boxShadow: "none" }}
        onClick={handleNavbarToggler}
      >
        <span className="navbar-toggler-icon">
          {navbarToggler
            ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M10.4695 8.95046L17.7595 1.66046C17.9234 1.46916 18.009 1.22308 17.9993 0.971403C17.9895 0.719727 17.8852 0.480988 17.7071 0.302894C17.529 0.124799 17.2903 0.0204662 17.0386 0.0107451C16.7869 0.00102391 16.5408 0.0866304 16.3495 0.250457L9.05954 7.54046L1.76954 0.240457C1.57824 0.0766302 1.33217 -0.00897537 1.08049 0.000745785C0.828814 0.0104669 0.590075 0.114799 0.411981 0.292893C0.233886 0.470988 0.129554 0.709727 0.119832 0.961403C0.110111 1.21308 0.195718 1.45915 0.359544 1.65046L7.64954 8.95046L0.349544 16.2405C0.244862 16.3301 0.159842 16.4404 0.0998186 16.5645C0.0397953 16.6886 0.00606467 16.8237 0.000745179 16.9614C-0.00457431 17.0991 0.0186316 17.2365 0.0689062 17.3648C0.119181 17.4931 0.195439 17.6097 0.292894 17.7071C0.390349 17.8046 0.506896 17.8808 0.635221 17.9311C0.763546 17.9814 0.900878 18.0046 1.0386 17.9993C1.17632 17.9939 1.31145 17.9602 1.43551 17.9002C1.55958 17.8402 1.6699 17.7551 1.75954 17.6505L9.05954 10.3605L16.3495 17.6505C16.5408 17.8143 16.7869 17.8999 17.0386 17.8902C17.2903 17.8804 17.529 17.7761 17.7071 17.598C17.8852 17.4199 17.9895 17.1812 17.9993 16.9295C18.009 16.6778 17.9234 16.4318 17.7595 16.2405L10.4695 8.95046Z" fill="#797979" />
              </svg>
            )
            : (
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="16" viewBox="0 0 22 16" fill="none">
                <rect width="22" height="2" rx="1" fill="#1A1A1A" />
                <rect y="7" width="22" height="2" rx="1" fill="#1A1A1A" />
                <rect x="9" y="14" width="13" height="2" rx="1" fill="#1A1A1A" />
              </svg>
            )}
        </span>
      </Navbar.Toggle>
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
            type="button"
            // className="login-button"
            variant="success"
            // type="submit"
            className="login-button roboto-semi-bold-16px-information"
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
