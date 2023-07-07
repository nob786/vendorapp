import { Button, Card, Container } from "react-bootstrap"
import EmblaCarousel from "../../components/Carousel/Carousel"
import imageByIndex from "../../components/Carousel/ImagesByIndex"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeart } from "@fortawesome/free-regular-svg-icons"

const PremiumVendors = () => {
    const OPTIONS = { slidesToScroll: 'auto', containScroll: 'trimSnaps' }

    const SLIDE_COUNT = 25
    const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

    const componentToRender = (index) => {
        return (
            <div className="embla__slide" key={index} >
                <Card style={{ padding: "10px" }}>
                    <Card.Img variant="top" src={imageByIndex(index)} />
                    <Card.Body>
                        <div class="position-absolute" style={{ top: "20px", right: "20px" }}>
                            <div className="d-flex align-items-center justify-content-center"
                                style={{ background: "#00000080", width: "40px", height: "40px", borderRadius: "50%" }}>
                                <FontAwesomeIcon icon={faHeart} size="lg" style={{ color: "#fff", }} />
                            </div>
                        </div>

                        <Card.Title style={{ margin: "0" }}>Name of card</Card.Title>
                        <Card.Text style={{ margin: "10px 0 7px 0" }}>
                            <div className="d-flex align-items-center">
                                <FontAwesomeIcon icon="fa-solid fa-star" style={{ color: "#f0be41", }} />
                                <span className="d-flex align-items-center" style={{ margin: "0 6px" }}><strong> 4.9 </strong></span>
                                <span className="d-flex align-items-center text-muted">(142)</span>
                            </div>
                        </Card.Text>
                        <Card.Text className="text-muted">
                            New York, NY
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        )
    }

    return (
        <Container fluid style={{ padding: "100px 0", backgroundColor: "#F5F5F5" }}>
            <Container >
                <h3>Find our Premium Premium Vendors</h3>
                <EmblaCarousel slides={SLIDES} options={OPTIONS} componentToRender={componentToRender} />
                <div className="d-flex justify-content-center mt-5">
                    <Button variant="success" type="submit">See all Vendors</Button>
                </div>
            </Container>
        </Container>
    )
}

export default PremiumVendors