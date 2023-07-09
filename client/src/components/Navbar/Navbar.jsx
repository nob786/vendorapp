// import React from 'react';
import "./Navbar"
import { Button, Form } from 'react-bootstrap'; // Import Bootstrap components

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Allevents from "../../assets/images/Allevents.svg";
import "./Navbar.css"

function Header() {
  return (
    <>
      {/* <Navbar bg="body-tertiary" expand="lg" style={{ padding:"0 5rem",minHeight:"78px", background: "#FFF", boxShadow: "0px 4px 50px 0px rgba(0, 0, 0, 0.10)"}}> */}
      <Navbar bg="body-tertiary" expand="lg" className="navbar">
        <Navbar.Brand href="#">
          <img src={Allevents} alt="Allevents" style={{ maxWidth: "100%" }} />
        </Navbar.Brand>
        <Button variant="" type="submit" className="login-button-mobile">Login</Button>
        {/* <Button variant="" type="submit" style={{whiteSpace:"nowrap",marginRight:"1rem"}}>Login</Button> */}
        <Navbar.Toggle aria-controls="navbarSupportedContent" />

        {/* <Navbar.Collapse id="navbarSupportedContent"> */}

        <Navbar.Collapse id="navbarSupportedContent" className="navbar-collapse">
          <Nav className="mx-auto">
            {/* <Nav.Link href="#" active>Home</Nav.Link>
          <Nav.Link href="#">Link</Nav.Link> */}
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
            {/* <Nav.Link disabled>Disabled</Nav.Link> */}
          </Nav>
          <Form className="d-flex" role="search" style={{ maxHeight: "40px" }}>
            {/* <FormControl type="search" placeholder="Search" className="me-2" aria-label="Search" /> */}
            {/* style={{whiteSpace:"nowrap"}} */}
            <Button variant="" type="submit" className="login-button" style={{ fontSize: "16px", fontWeight: "700", color: "#A0C49D" }}>Login</Button>

            <Button variant="outline-success" type="submit" className="create-account-btn">Create Account</Button>
          </Form>

          {/* <Form className="d-flex" role="search">
          <FormControl type="search" placeholder="Search" className="me-2" aria-label="Search" />
          <Button variant="outline" type="submit">Login</Button>
        </Form> */}
        </Navbar.Collapse>

      </Navbar>
    </>
  );
}

export default Header