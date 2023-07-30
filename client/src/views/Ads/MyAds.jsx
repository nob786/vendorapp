/* eslint-disable camelcase */
import React from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  Modal,
  Row,
} from "react-bootstrap";
// import * as formik from "formik";
// import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Navbar/Navbar";
import AdTemp from "../../assets/images/post-ad/ad-temp.svg";
import TimeIcon from "../../assets/images/post-ad/carbon_time.svg";
import MapIcon from "../../assets/images/post-ad/map-outlined.svg";
import deleteIcon from "../../assets/images/post-ad/delete.svg";
import editIcon from "../../assets/images/post-ad/edit.svg";
import gotoIcon from "../../assets/images/post-ad/goto.svg";
import noAds from "../../assets/images/post-ad/no-ads.svg";

// import bannerBackgroundImg from "../../assets/images/profile-settings/ads-bg.svg";
// import confirmPasswordIcon from "../../assets/images/profile-settings/confirm-password.svg";
// import questionIcon from "../../assets/images/profile-settings/question.svg";

// import profile_bg from "../../assets/images/profile-settings/profile-bg.svg";
// import "./ProfileSettings.css";
import Footer from "../../components/Footer/Footer";
import TabNavigation from "../../components/TabNavigation/TabNavigation";
import { secure_instance } from "../../axios/axios-config";
import "./Ads.css";

const AdsList = [
  {
    id: 1,
    category: "Ad Category",
    sub_category: "Sub-category",
    description: `Boost your business with our top-tier vendor services! Enjoy the flexibility of selling at your
      pace, alongside dedicated 24/7 support. Join us today and start turning your passion into profit!`,
    created_at: "Jan 12th, 2023",
    country: "Pakistan",
    // image: image1,
  },
  {
    id: 2,
    category: "Ad Category",
    sub_category: "Sub-category",
    description: `Boost your business with our top-tier vendor services! Enjoy the flexibility of selling at your
      pace, alongside dedicated 24/7 support. Join us today and start turning your passion into profit!`,
    created_at: "Jan 12th, 2023",
    country: "Pakistan",
    // image: image1,
  },
];

function MyAds() {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <TabNavigation />

      <div className="my-ad-banner d-flex align-items-center justify-content-between">
        <div style={{ marginLeft: "100px" }}>
          <div className="roboto-bold-36px-h1">Ad Management</div>
          <div className="roboto-regular-18px-body3">
            Keep track of your posted ads with ease
          </div>
        </div>
      </div>

      <Container
        fluid
        style={{ marginTop: "40px", marginBottom: "200px" }}
        className=""
      >
        <Row className="justify-content-center">
          {AdsList.length > 0 ? (
            AdsList.map((product) => {
              const {
                id,
                category,
                description,
                sub_category,
                created_at,
                country,
              } = product;
              return (
                <Col lg={10} className="mb-4">
                  <Card key={id} className="ad-card">
                    <Row className="g-0">
                      <Col sm={3} style={{ padding: "20px" }}>
                        <Card.Img
                          src={AdTemp}
                          alt="AdTemp"
                          style={{ objectFit: "cover" }}
                        />
                      </Col>
                      <Col
                        sm={9}
                        className="d-flex justify-content-center align-items-center"
                      >
                        <Card.Body style={{ height: "100%" }}>
                          <div className="d-flex flex-column justify-content-between h-100">
                            <div>
                              <Card.Title style={{ marginBottom: "8px" }}>
                                <div className="d-flex justify-content-between">
                                  <div className="roboto-semi-bold-28px-h2">
                                    {category}
                                  </div>
                                  <div
                                    className="roboto-regular-14px-information text-white"
                                    style={{
                                      borderRadius: "10px",
                                      background: "#A0C49D",
                                      padding: "4px 10px",
                                      fontWeight: "500",
                                    }}
                                  >
                                    {sub_category}
                                  </div>
                                </div>

                                <div className="roboto-regular-14px-information d-flex align-items-center mt-2">
                                  <img
                                    src={TimeIcon}
                                    alt="TimeIcon"
                                    className="me-2"
                                  />
                                  {created_at}
                                </div>
                              </Card.Title>
                              <Card.Text
                                className="roboto-regular-16px-information"
                                style={{
                                  marginTop: "20px",
                                  marginBottom: "17px",
                                  maxWidth: "70%",
                                }}
                              >
                                {`${description.slice(0, 200)}...`}
                              </Card.Text>
                            </div>

                            <div>
                              <div
                                style={{
                                  border: "1px solid rgba(26, 26, 26, 0.2)",
                                  width: "100%",
                                }}
                              />
                              <div className="d-flex justify-content-between mt-3">
                                <div className="roboto-regular-14px-information d-flex align-items-center">
                                  <img
                                    src={MapIcon}
                                    alt="MapIcon"
                                    className="me-2"
                                  />
                                  {country}
                                </div>
                                <div>
                                  <img
                                    src={editIcon}
                                    alt="editIcon"
                                    className="me-3"
                                  />
                                  <img
                                    src={gotoIcon}
                                    alt="gotoIcon"
                                    className="me-3"
                                    onClick={() => navigate(`/view-ad/${id}`)}
                                  />
                                  <img
                                    src={deleteIcon}
                                    alt="deleteIcon"
                                    className="me-3"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </Card.Body>
                      </Col>
                    </Row>
                  </Card>
                </Col>
              );
            })
          ) : (
            <>
              <Col lg={6} style={{ padding: "30px 0" }}>
                <Col
                  lg={10}
                  className="d-flex justify-content-center text-center"
                >
                  <div className="roboto-semi-bold-28px-h2">
                    Currently you have no Ads!
                  </div>
                </Col>
                <Col lg={12} className="d-flex justify-content-center mt-4">
                  <ul>
                    <li
                      className="roboto-regular-18px-body3"
                      style={{ color: "#797979" }}
                    >
                      Post your Services as an ad and start making money
                    </li>
                    <li
                      className="roboto-regular-18px-body3"
                      style={{ color: "#797979" }}
                    >
                      Multiple categories to choose from
                    </li>
                    <li
                      className="roboto-regular-18px-body3"
                      style={{ color: "#797979" }}
                    >
                      Easy transactions and smooth process
                    </li>
                    <Button
                      type="submit"
                      onClick={() => navigate("/post-ad")}
                      className="btn btn-success roboto-semi-bold-16px-information btn-lg mt-5"
                      style={{ width: "80%", marginLeft: "-20px" }}
                      // style={{ padding: "0 100px" }}
                    >
                      Post another Ad
                    </Button>
                  </ul>
                </Col>
                {/* <Col
                  className="d-flex"
                  lg={10}
                  style={{ marginTop: "80px", marginLeft: "100px" }}
                >
                  <Button
                    type="submit"
                    onClick={() => navigate("/post-ad")}
                    className="btn btn-success roboto-semi-bold-16px-information btn-lg"
                    // style={{ padding: "0 100px" }}
                  >
                    Post another Ad
                  </Button>
                </Col> */}
              </Col>

              <Col lg={6} className="d-flex">
                <img
                  src={noAds}
                  alt="noAds"
                  style={{ maxWidth: "100%", objectFit: "cover" }}
                />
              </Col>

              {/* <Col lg={6}>
                <img src={noAds} />
              </Col> */}
            </>
          )}
        </Row>

        {AdsList.length > 0 && (
          <Col
            className="d-flex justify-content-end"
            style={{ marginRight: "100px", marginTop: "80px" }}
          >
            <Button
              type="submit"
              onClick={() => navigate("/post-ad")}
              className="btn btn-success roboto-semi-bold-16px-information btn-lg"
              style={{ padding: "0 100px" }}
            >
              Post another Ad
            </Button>
          </Col>
        )}
      </Container>

      <Footer />
    </>
  );
}

export default MyAds;
