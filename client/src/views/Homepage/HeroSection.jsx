import React from 'react'
import { Button, Col, Container, Form, FormControl, InputGroup, Row } from "react-bootstrap"
import heroImg from "../../assets/images/harold.jpg";
import useWindowDimensions from '../../utilities/hooks/useWindowDimension';

const HeroSection = () => {

    const { width } = useWindowDimensions()
    return (
        <Container fluid style={{ height: 'auto', padding: "0" }}>
            <Row className="h-100 col-12 g-0 flex-column-reverse flex-md-row">
                <Col md={7} className="d-flex align-items-center justify-content-center" style={{ padding: "50px 20px" }}>
                    <div>
                        <div className='hero-text' style={{ maxWidth: "461px" }}>
                            <h1 className="text-left heading">Lectus auctor faucibus</h1>
                            <p className="text-left">Sit pharetra consectetur odio sit. Molestie ipsum aliquam est quis morbi.</p>
                        </div>
                        <div className="s003">
                            <Form>
                                {width > 992 ?
                                    <InputGroup className='flex-nowrap'>
                                        <div className='d-flex' style={{ border: "1px solid #D9D9D9", borderRadius: "5px" }}>
                                            <FormControl className='shadow-none form-control' placeholder="Wedding Venues"
                                                style={{ outline: 0, border: "none", margin: "10px 0", borderRadius: "0", borderRight: "1px solid #D9D9D9" }} />
                                            <FormControl className='shadow-none form-control' placeholder="in Where" style={{ border: "none", margin: "10px 0" }} />
                                            <Button variant="success" size='lg' className='rounded-end-1 rounded-start-0'>
                                                Search
                                            </Button>
                                        </div>
                                    </InputGroup>
                                    :
                                    <>
                                        <Form.Control size="lg" type="text" placeholder="Wedding Venues" />
                                        <br />
                                        <Form.Control size="lg" type="text" placeholder="in Where" />
                                        <br />
                                        <Button variant="success" size='lg' style={{ width: "100%" }}>
                                            Search
                                        </Button>
                                    </>
                                }
                            </Form>
                        </div>
                    </div>
                </Col>
                <Col md={5} className="d-flex" style={{ justifyContent: "right", paddingRight: "0" }}>
                    <img src={heroImg} alt="Hero Image" style={{ maxWidth: "100%", objectFit: "cover" }} />
                </Col>
            </Row>
        </Container>
    )
}

export default HeroSection