import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/fontawesome-free-solid";
import { Card, Col, Container, Row } from "react-bootstrap";
import Header from "../../components/Navbar/Navbar";
import user from "../../assets/images/profile-settings/user.svg";

import personalInfo from "../../assets/images/profile-settings/personal-info.svg";
import companyInfo from "../../assets/images/profile-settings/company-info.svg";
import changePass from "../../assets/images/profile-settings/change-pass.svg";
import deleteIcon from "../../assets/images/profile-settings/delete.svg";
// import profile_bg from "../../assets/images/profile-settings/profile-bg.svg";
import "./ProfileSettings.css";
import Footer from "../../components/Footer/Footer";
import TabNavigation from "../../components/TabNavigation/TabNavigation";

function ProfileSettings({ setCurrentView }) {
  // const [currentView, setCurrentView] = useState("profileSettings");

  return (
    <>
      <Header />
      <TabNavigation />
      <div className="profile-settings-banner d-flex align-items-center justify-content-between">
        <div style={{ marginLeft: "100px" }}>
          <div className="roboto-bold-36px-h1">Profile Settings</div>
          <div className="roboto-regular-18px-body3">
            Update your information with ease
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            right: "100px",
            top: "-28px",
            display: "flex",
          }}
        >
          <div style={{ marginTop: "30px" }}>
            <img src={user} alt="user" />
          </div>
        </div>
      </div>

      <Container
        fluid
        style={{ marginTop: "100px", marginBottom: "200px" }}
        className=""
      >
        <Row className="justify-content-center">
          <Col md={11} lg={9} xl={8}>
            <Row className="mb-5">
              <Col md={6}>
                <Card
                  style={{ width: "21rem" }}
                  className="custom-card"
                  onClick={() => setCurrentView("PersonalInformation")}
                >
                  <Card.Body>
                    <div className="d-flex justify-content-between">
                      <img
                        src={personalInfo}
                        alt="personalInfo"
                        className="mb-4"
                      />
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        style={{
                          fontSize: "30px",
                          color: "#878787",
                          marginTop: "12px",
                        }}
                        className="cards-arrow"
                      />
                    </div>
                    <Card.Title>Personal Information</Card.Title>
                    <Card.Text>Edit your information with ease</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={6}>
                <Card
                  style={{ width: "21rem" }}
                  className="custom-card"
                  onClick={() => setCurrentView("CompanyInformation")}
                >
                  <Card.Body>
                    <div className="d-flex justify-content-between">
                      <img
                        src={companyInfo}
                        alt="companyInfo"
                        className="mb-4"
                      />
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        style={{
                          fontSize: "30px",
                          color: "#878787",
                          marginTop: "12px",
                        }}
                        className="cards-arrow"
                      />
                    </div>
                    <Card.Title>Company Information</Card.Title>
                    <Card.Text>Update your company info</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <Card
                  style={{ width: "21rem" }}
                  className="custom-card"
                  onClick={() => setCurrentView("ChangePassword")}
                >
                  <Card.Body>
                    <div className="d-flex justify-content-between">
                      <img src={changePass} alt="changePass" className="mb-4" />
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        style={{
                          fontSize: "30px",
                          color: "#878787",
                          marginTop: "12px",
                        }}
                        className="cards-arrow"
                      />
                    </div>
                    <Card.Title>Change Password</Card.Title>
                    <Card.Text>Update your account password</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={6}>
                <Card
                  style={{ width: "21rem" }}
                  className="custom-card"
                  onClick={() => setCurrentView("DeleteAccount")}
                >
                  <Card.Body>
                    <div className="d-flex justify-content-between">
                      <img src={deleteIcon} alt="deleteIcon" className="mb-4" />
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        style={{
                          fontSize: "30px",
                          color: "#878787",
                          marginTop: "12px",
                        }}
                        className="cards-arrow"
                      />
                    </div>
                    <Card.Title>Delete Account</Card.Title>
                    <Card.Text>Deactivate your account</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>

      <Footer />
    </>
  );
}

export default ProfileSettings;
