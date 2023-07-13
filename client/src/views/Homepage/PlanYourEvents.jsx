import React from "react";
import {
  Button, Card, Col, Container, Row,
} from "react-bootstrap";
import image1 from "../../assets/images/slide-1.jpg";
import image2 from "../../assets/images/slide-2.jpg";
import image3 from "../../assets/images/slide-3.jpg";
import image4 from "../../assets/images/slide-4.jpg";
import "./Homepage.css";

const eventsList = [
  {
    id: 1,
    title: "Manage your events",
    description: "A vivamus blandit in mollis. Consectetur ornare diam risus integer dui vitae aenean lacus. Aliquam.",
    button: "Start your first event",
    image: image1,
  },
  {
    id: 2,
    title: "Guest List",
    description: "A vivamus blandit in mollis. Consectetur ornare diam risus integer dui vitae aenean lacus. Aliquam.",
    button: "Button 2",
    image: image2,
  },
  {
    id: 3,
    title: "Event Vendors",
    description: "A vivamus blandit in mollis. Consectetur ornare diam risus integer dui vitae aenean lacus. Aliquam.",
    button: "Button 3",
    image: image3,
  },
  {
    id: 4,
    title: "Budget Plan",
    description: "A vivamus blandit in mollis. Consectetur ornare diam risus integer dui vitae aenean lacus. Aliquam.",
    button: "Button 4",
    image: image4,
  },
];

function PlanYourEvents() {
  return (
    <Container style={{ padding: "100px 0" }}>
      <div className="d-flex flex-column">
        <div className="justify-content-left roboto-bold-36px-h1" style={{ marginBottom: "50px" }}>
          Easily plan your event
        </div>

        <Row style={{ gap: "30px", margin: "0" }}>
          {eventsList
            && eventsList.map((product) => {
              const {
                id, title, description, button, image,
              } = product;
              return (
                <Card className="event-card" key={id}>
                  <Row className="g-0">
                    <Col sm={7} className="d-flex justify-content-center align-items-center">
                      <Card.Body>
                        <Card.Title className="roboto-semi-bold-24px-h3" style={{ marginBottom: "8px" }}>
                          {title}
                        </Card.Title>
                        <Card.Text className="roboto-regular-16px-information" style={{ marginBottom: "20px" }}>
                          {description}
                        </Card.Text>
                        {/* <Button variant="" style={{ color: "#A0C49D" }}>{button}</Button> */}
                        <div style={{ color: "#A0C49D" }}>
                          <strong>
                            {button}
                          </strong>
                        </div>
                      </Card.Body>
                    </Col>
                    <Col sm={5} style={{ padding: "10px 0" }}>
                      <Card.Img src={image} alt="Event" style={{ height: "200px", objectFit: "cover" }} />
                    </Col>
                  </Row>
                </Card>
              );
            })}
        </Row>

        <div className="d-flex justify-content-center mt-5">
          <div className="col-md-3 col-sm-12 col-xs-12 col-lg-auto">
            <Button
              variant="success"
              type="submit"
              className="btn w-100"
            >
              Try all planning tools
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default PlanYourEvents;
