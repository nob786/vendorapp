import { Button, Container } from "react-bootstrap"
import EmblaCarousel from "../../components/Carousel/Carousel"

const PremiumVendors = () => {
    const OPTIONS = { slidesToScroll: 'auto', containScroll: 'trimSnaps' }

    const SLIDE_COUNT = 25
    const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

    return (
        <Container fluid style={{ padding: "100px 0", backgroundColor: "#F5F5F5" }}>
            <Container >
                <h3>Find our Premium Premium Vendors</h3>
                <EmblaCarousel slides={SLIDES} options={OPTIONS} />
                <div className="d-flex justify-content-center mt-5">
                    <Button variant="success" type="submit">See all Vendors</Button>
                </div>
            </Container>
        </Container>
    )
}

export default PremiumVendors