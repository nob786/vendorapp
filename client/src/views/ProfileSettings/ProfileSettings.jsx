import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faCamera } from "@fortawesome/fontawesome-free-solid";
import { Card, Col, Container, Row, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { CircularProgress } from "@mui/material";
import Header from "../../components/Navbar/Navbar";
import userIcon from "../../assets/images/profile-settings/user.svg";

import personalInfo from "../../assets/images/profile-settings/personal-info.svg";
import companyInfo from "../../assets/images/profile-settings/company-info.svg";
import changePass from "../../assets/images/profile-settings/change-pass.svg";
import deleteIcon from "../../assets/images/profile-settings/delete.svg";
// import profile_bg from "../../assets/images/profile-settings/profile-bg.svg";
import "./ProfileSettings.css";
import Footer from "../../components/Footer/Footer";
import TabNavigation from "../../components/TabNavigation/TabNavigation";
import { handleProfileSettingsCurrentView } from "../redux/TabNavigation/TabNavigationSlice";
import { getAuthenticatedUser } from "../redux/Auth/authSlice";

function ProfileSettings() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const [loadingImage, setLoadingImage] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  // const [currentRowImage, setCurrentRowImage] = useState(null);
  const [imageUrlToUpload, setImageUrlToUpload] = useState(null);
  console.log({ user });

  useEffect(() => {
    if (user.userCompanyId === null) {
      dispatch(getAuthenticatedUser());
    }
  }, []);

  const updateNewProfilePic = (imageUrl) => {};

  const handleSelectedImage = async (e) => {
    e.preventDefault();

    setLoadingImage(true);
    setSelectedImage(e.target.files[0]);

    const formData = new FormData(); // pass in the form
    formData.append("file", e.target.files[0]);
    formData.append("content_type", e.target.files[0].type);
    try {
      const response = await secure_instance.request({
        url: "/api/companies/upload-url/",
        method: "Post",
        data: formData,
      });
      updateNewProfilePic(response.data.data.file_url);
      // setImageUrlToUpload(response.data.data);
    } catch (e) {
      // --------- WILL ROUTE ON SOME PAGE ON FAILURE ---------
      console.log("error", e);
    }

    e.target.value = "";
  };

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

        {/* <div
          style={{
            position: "absolute",
            right: "100px",
            top: "0",
          }}
        >
          <img
            src={user.userImage ?? userIcon}
            alt="user"
            style={{
              maxWidth: "100%",
              maxHeight: "100%",
              width: "160px",
              height: "160px",
              objectFit: "cover",
              borderRadius: "50%",
            }}
          />
        </div> */}

        <div
          className="d-flex"
          style={{
            position: "absolute",
            right: "100px",
            top: "0",
          }}
        >
          <label
            htmlFor="file-input"
            style={
              {
                // position: "relative",
                // background: "#F8F9FA",
                // border: "1px solid #E9ECEF",
                // padding: "3px 6px",
                // borderRadius: "10px",
                // display: "flex",
                // flexDirection: "row",
                // justifyContent: "flex-end",
                // maxWidth: "300px",
              }
            }
          >
            {loadingImage && (
              <>
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    right: "0",
                    // left: "20px",
                    maxWidth: "100%",
                    maxHeight: "100%",
                    width: "160px",
                    height: "160px",
                    objectFit: "cover",
                    borderRadius: "50%",

                    backgroundColor: "rgba(108, 117, 125, 0.3)",
                    backdropFilter: "blur(1px)",
                    zIndex: 2,
                  }}
                  className="d-flex justify-content-center align-items-center"
                />

                <CircularProgress
                  style={{
                    position: "absolute",
                    top: "60px",
                    left: "60px",
                    color: "#51f742",
                  }}
                />
              </>
            )}

            {selectedImage || user.userImage ? (
              <img
                // width="198"
                // height="210"
                // style={{ objectFit: "contain" }}
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  width: "160px",
                  height: "160px",
                  objectFit: "cover",
                  borderRadius: "50%",
                }}
                src={
                  selectedImage === null
                    ? user.userImage
                    : selectedImage && URL.createObjectURL(selectedImage)
                }
                alt=""
              />
            ) : (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  cursor: "pointer",
                  width: "198px",
                  height: "210px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  upload
                  {/* <CloudUploadIcon
                    style={{ color: "#7B2CBF", fontSize: "100px" }}
                  /> */}
                </div>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <span className="s2 grey8">Upload Profile Picture</span>
                </div>
              </div>
            )}

            <div
              style={{
                position: "absolute",
                bottom: "0px",
                right: "0px",
                width: "30px",
                height: "30px",
                background: "#FFFFFF",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "30px",
                zIndex: "10",
              }}
            >
              <FontAwesomeIcon
                icon={faCamera}
                style={{ color: "black" }}
                size="md"
              />
            </div>
          </label>

          <input
            style={{ width: "50px", display: "none" }}
            onChange={(event) => handleSelectedImage(event)}
            id="file-input"
            type="file"
          />
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
                  onClick={() =>
                    dispatch(
                      handleProfileSettingsCurrentView("PersonalInformation")
                    )
                  }
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
                  onClick={() =>
                    dispatch(
                      handleProfileSettingsCurrentView("CompanyInformation")
                    )
                  }
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
                  onClick={() =>
                    dispatch(handleProfileSettingsCurrentView("ChangePassword"))
                  }
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
                  onClick={() =>
                    dispatch(handleProfileSettingsCurrentView("DeleteAccount"))
                  }
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
