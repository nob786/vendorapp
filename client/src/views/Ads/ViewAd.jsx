/* eslint-disable camelcase */
import React, { useState } from "react";
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
import Header from "../../components/Navbar/Navbar";
import InstaIcon from "../../assets/images/post-ad/insta-outlined.svg";
import FbIcon from "../../assets/images/post-ad/fb-outlined.svg";
import MapIcon from "../../assets/images/post-ad/map-filled.svg";
import one from "../../assets/images/post-ad/1.svg";
import two from "../../assets/images/post-ad/2.svg";
import three from "../../assets/images/post-ad/3.svg";
import TickIcon from "../../assets/images/post-ad/tick.svg";
// import deleteIcon from "../../assets/images/post-ad/delete.svg";
// import editIcon from "../../assets/images/post-ad/edit.svg";
// import gotoIcon from "../../assets/images/post-ad/goto.svg";
// import noAds from "../../assets/images/post-ad/no-ads.svg";

// import bannerBackgroundImg from "../../assets/images/profile-settings/ads-bg.svg";
// import confirmPasswordIcon from "../../assets/images/profile-settings/confirm-password.svg";
// import questionIcon from "../../assets/images/profile-settings/question.svg";

// import profile_bg from "../../assets/images/profile-settings/profile-bg.svg";
// import "./ProfileSettings.css";
import Footer from "../../components/Footer/Footer";
import TabNavigation from "../../components/TabNavigation/TabNavigation";
import { secure_instance } from "../../axios/axios-config";
import "./Ads.css";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/fontawesome-free-solid";
import useEmblaCarousel from "embla-carousel-react";
import CarouselTest from "./carouselTest";

const CurrentAd = {
  id: 1,
  created_at: "2023-07-28T22:00:15.259177Z",
  updated_at: "2023-07-28T22:00:15.259487Z",
  website: "http://www.example.com",
  city: "string",
  street: "string",
  number: "string",
  full_address: "string",
  facebook: "http://www.example.com",
  instagram: "http://www.example.com",
  youtube: "http://www.example.com",
  tiktok: "http://www.example.com",
  twitter: "http://www.example.com",
  others: "http://www.example.com",
  offered_services: ["string"],
  company: 1,
  sub_category: 1,
  related_sub_categories: 1,
  country: 1,
  activation_countries: [1],
};

const offeredServices = [
  "In nulla ut volutpat",
  "In nulla ut volutpat",
  "In nulla ut volutpat",
  "In nulla ut volutpat",
  "In nulla ut volutpat",
  "In nulla ut volutpat",
  "In nulla ut volutpat",
  "In nulla ut volutpat",
  "In nulla ut volutpat",
  "In nulla ut volutpat",
  "In nulla ut volutpat",
  "In nulla ut volutpat",
];

const FAQs = [
  "Learning New Songs",
  "MC",
  "Learning New Songs",
  "MC",
  "Learning New Songs",
  "MC",
];

const slides = [
  {
    image1: one,
    image2: two,
    image3: three,
  },
  {
    image1: three,
    image2: two,
    image3: one,
  },
  // Add more slides as needed...
];

function ViewAd() {
  const navigate = useNavigate();
  const [carouselRef, embla] = useEmblaCarousel();

  const [currentTab, setCurrentTab] = useState(1);

  return (
    <>
      <Header />
      <TabNavigation />

      <CarouselTest />

      <Container
        // fluid
        style={{ marginTop: "40px", marginBottom: "200px" }}
        className=""
      >
        <Row>
          <div className="d-flex align-items-center justify-content-between mb-2">
            <div className="roboto-bold-36px-h1">Vendor Name</div>

            <div>
              <img src={MapIcon} alt="MapIcon" className="me-2" />
              <span className="roboto-regular-16px-information">Country</span>
            </div>
          </div>
          <Col lg={7}>
            <Row>
              {/* <div ref={carouselRef} className="carousel"> */}
              <div className="embla__viewport__view__ad" ref={carouselRef}>
                {slides.map((slide, index) => (
                  <div key={index} className="carousel-slide">
                    <Row>
                      <Col
                        sm={6}
                        md={6}
                        lg={6}
                        xl={6}
                        className="main-image-container"
                      >
                        <img
                          src={slide.image1}
                          alt="image1"
                          className="main-image"
                        />
                      </Col>

                      <Col sm={6} md={6} lg={6} xl={6} className="image-stack">
                        <img
                          src={slide.image2}
                          alt="Image2"
                          className="stacked-image"
                        />
                        <img
                          src={slide.image3}
                          alt="Image3"
                          className="stacked-image"
                        />
                      </Col>
                    </Row>
                  </div>
                ))}
              </div>
            </Row>
          </Col>
          <Col lg={5} style={{ border: "solid blue" }}>
            <div className="d-flex justify-content-between flex-column h-100">
              <div className="d-flex flex-column">
                <div className="d-flex align-items-center">
                  <FontAwesomeIcon icon={faStar} style={{ color: "#f0be41" }} />
                  <FontAwesomeIcon
                    icon="fa-solid fa-star"
                    style={{ color: "#f0be41" }}
                  />
                  <FontAwesomeIcon
                    icon="fa-solid fa-star"
                    style={{ color: "#f0be41" }}
                  />
                  <FontAwesomeIcon
                    icon="fa-solid fa-star"
                    style={{ color: "#f0be41" }}
                  />
                  <span
                    className="d-flex align-items-center roboto-regular-14px-information"
                    style={{ margin: "0 6px" }}
                  >
                    <strong> 4.9 </strong>
                  </span>
                  <span className="d-flex align-items-center text-muted roboto-regular-14px-information">
                    142 reviews
                  </span>
                </div>

                <div className="d-flex align-items-center justify-content-between">
                  <div className="roboto-regular-16px-information">
                    Follow us on
                  </div>

                  <div>
                    <img src={InstaIcon} alt="deleteIcon" className="me-3" />
                    <img src={FbIcon} alt="deleteIcon" />
                  </div>
                </div>
              </div>

              <div className="d-flex">
                <Button
                  type="submit"
                  // onClick={() => navigate("/post-ad")}
                  className="btn btn-success roboto-semi-bold-16px-information w-100 mt-5"
                  style={{}}
                  // style={{ padding: "0 100px" }}
                >
                  Request pricing
                </Button>
              </div>
            </div>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col lg={7}>
            <div
              className="d-flex align-items-center"
              style={{
                height: "50px",
                width: "100%",
                background: "#F4F4F4",
                padding: "0px 20px",
              }}
            >
              <div
                className={`${
                  currentTab === 1 && "active-tab"
                } roboto-regular-16px-information tab me-1`}
                onClick={() => setCurrentTab(1)}
              >
                About
              </div>
              <div
                className={`${
                  currentTab === 2 && "active-tab"
                } roboto-regular-16px-information tab`}
                onClick={() => setCurrentTab(2)}
              >
                FAQs
              </div>
            </div>
          </Col>
        </Row>

        <Row className="mt-4">
          <Col lg={7}>
            <div className="d-flex flex-column">
              <div className="d-flex roboto-semi-bold-24px-h3">About</div>

              <div className="d-flex roboto-regular-16px-information mt-4">
                Mauris id mollis natoque dictum enim et porta etiam. Velit
                mauris adipiscing cras tempus. At egestas lorem semper luctus.
                In non in diam elit nunc enim diam bibendum. Ullamcorper
                lobortis augue vestibulum urna erat. Dolor curabitur viverra
                iaculis magnis tincidunt. Massa accumsan nibh duis diam sodales
                et egestas magnis. Neque tellus odio urna malesuada feugiat vel
                lobortis. Enim habitasse imperdiet ullamcorper magna morbi
                tincidunt. Nibh maecenas et nisl sed risus. Eros porta sit
                cursus et lacus sit sit accumsan. Tortor pellentesque consequat
                sit pellentesque urna. Eleifend arcu enim pretium gravida.
              </div>
            </div>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col lg={7}>
            <div className="d-flex flex-column">
              <div className="d-flex roboto-semi-bold-24px-h3">
                Offered services
              </div>

              <Row className="mt-3">
                {offeredServices.map((service, index) => (
                  <Col key={index} lg={4}>
                    <ul className="custom-lists roboto-regular-16px-information">
                      <li>{service}</li>
                    </ul>
                  </Col>
                ))}
              </Row>
            </div>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col lg={7}>
            <div className="d-flex flex-column">
              <div className="d-flex roboto-semi-bold-24px-h3">
                Frequently Asked Questions
              </div>

              <div>
                <div
                  className="d-flex roboto-regular-18px-body3 mt-4"
                  style={{ fontWeight: "700" }}
                >
                  Which of the following are included in the price?
                </div>

                <Row className="mt-3">
                  {FAQs.map((service, index) => (
                    <Col key={index} lg={4}>
                      <ul className="custom-lists-tick-icon roboto-regular-16px-information">
                        <li>{service}</li>
                      </ul>
                    </Col>
                  ))}
                </Row>

                <div style={{ border: "1px solid #D9D9D9", width: "100%" }} />
              </div>
              <div>
                <div
                  className="d-flex roboto-regular-18px-body3 mt-4"
                  style={{ fontWeight: "700" }}
                >
                  What is the price of your popular wedding packege?
                </div>
                <div
                  className="roboto-regular-18px-body3 mb-2"
                  style={{ fontWeight: "700" }}
                >
                  $20,440
                </div>

                <div style={{ border: "1px solid #D9D9D9", width: "100%" }} />
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      <Footer />
    </>
  );
}

export default ViewAd;
