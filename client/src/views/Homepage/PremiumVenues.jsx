import { Button, Container } from "react-bootstrap"
import EmblaCarousel from "../../components/Carousel/Carousel"

const PremiumVenues = () => {
    const OPTIONS = { slidesToScroll: 'auto', containScroll: 'trimSnaps' }

    const SLIDE_COUNT = 25
    const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

//     <div className="embla__slide" key={index}>
//     <img
//       className="embla__slide__img"
//       src={imageByIndex(index)}
//       alt="Your alt text"
//     />
//     <h4>Country</h4>
//   </div>

    return (
        <Container fluid style={{ padding: "100px 0", backgroundColor: "#F5F5F5" }}>
            <Container >
                <h3>Find our Premium Venues</h3>
                <EmblaCarousel slides={SLIDES} options={OPTIONS} />
                <div className="d-flex justify-content-center mt-5">
                    <Button variant="success" type="submit">See all Venues</Button>
                </div>
            </Container>
        </Container>
    )
}

export default PremiumVenues