import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import image1 from '../../assets/images/slide-1.jpg'
import image2 from '../../assets/images/slide-2.jpg'
import image3 from '../../assets/images/slide-3.jpg'
import image4 from '../../assets/images/slide-4.jpg'
import "./Homepage.css"

const eventsList = [
    {
        id: 1,
        title: "Event 1",
        description: "Description for Event 1",
        button: "Button 1",
        image: image1,
    },
    {
        id: 2,
        title: "Event 2",
        description: "Description for Event 2",
        button: "Button 2",
        image: image2,
    },
    {
        id: 3,
        title: "Event 3",
        description: "Description for Event 3",
        button: "Button 3",
        image: image3,
    },
    {
        id: 4,
        title: "Event 4",
        description: "Description for Event 4",
        button: "Button 4",
        image: image4,
    }
];


const PlanYourEvents = () => {
    return (
        <Container style={{ padding: "100px 0" }}>
            <div className='d-flex flex-column'>
                <h3 className="justify-content-left" style={{ marginBottom: "50px" }}>
                    Easily plan your event
                </h3>

                <Row style={{ gap: "30px", margin: "0" }}>
                    {eventsList &&
                        eventsList.map((product) => {
                            const { id, title, description, button, image } =
                                product;
                            return (
                                <Card className="event-card" key={id}>
                                    <Row className="g-0">
                                        <Col sm={7}>
                                            <Card.Body>
                                                <Card.Title>{title}</Card.Title>
                                                <Card.Text>{description}</Card.Text>
                                                {/* <Button variant="" style={{ color: "#A0C49D" }}>{button}</Button> */}
                                                <div variant="" style={{ color: "#A0C49D" }}>
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

                <div className='d-flex justify-content-center mt-5'>
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
            </div >
        </Container>
    )
}

export default PlanYourEvents