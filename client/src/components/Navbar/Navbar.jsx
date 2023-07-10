import React from "react";
// import './Navbar';
import { Button, Form } from "react-bootstrap"; // Import Bootstrap components

import { useDispatch } from "react-redux";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Allevents from "../../assets/images/Allevents.svg";
import "./Navbar.css";
import { toggleLoginModal } from "../../views/redux/Login/loginSlice";

function Header() {
  const dispatch = useDispatch();

  const handleLoginClick = (e) => {
    e.preventDefault();
    dispatch(toggleLoginModal());
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

          <Button variant="outline-success" type="submit" className="create-account-btn">Create Account</Button>
        </Form>
      </Navbar.Collapse>

    </Navbar>
  );
}

export default Header;
