import React from 'react'
import "./Footer.css";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/fontawesome-free-solid'
// import { faInstagram } from '@fortawesome/fontawesome-free-solid'
import { faTwitter, faInstagram, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Container } from 'react-bootstrap';

const Footer = () => {
    return (
        <div className="d-flex flex-column h-100">
            <footer className="w-100 pt-4 flex-shrink-0" style={{ background: "#212529", paddingBottom: "0" }}>
                <div className="container pt-4" style={{ paddingBottom: "0" }}>
                    <Container>
                        <div className="row gy-4 gx-5">
                            <div className="col-lg-4 col-md-6">
                                <h5 className="h1 text-white">Allevents</h5>
                                {/* <FontAwesomeIcon icon="fa-brands fa-instagram" style={{ color: "#ffffff", }} /> */}
                                <i className="fas fa-brands fa-instagram" style={{ color: "#ffffff" }}></i>
                                <p className="small text-white">
                                    Maecenas consectetur in a a imperdiet nunc cras ipsum. Consequat sed eu sed pharetra velit.
                                </p>
                                {/* <p className="small text-white mb-0">&copy; Copyrights. All rights reserved. <a className="text-primary" href="#">Bootstrapious.com</a></p> */}
                            </div>
                            <div className="col-lg-4 col-md-6 links-container">
                                <ul style={{ paddingLeft: "0" }}>
                                    <li className="col-heading">
                                        <h3> Resources </h3>
                                    </li>
                                    <li><a href="#">For him</a></li>
                                    <li><a href="#">For her</a></li>
                                    <li><a href="#">Event types</a></li>
                                    <li><a href="#">Contact</a></li>
                                </ul>
                            </div>
                            <div className="col-lg-4 col-md-6 links-container">
                                {/* <h5 className="text-white mb-3">Quick links</h5>
                            <ul className="list-unstyled text-muted">
                                <li><a href="#">Home</a></li>
                                <li><a href="#">About</a></li>
                                <li><a href="#">Get started</a></li>
                                <li><a href="#">FAQ</a></li>
                            </ul> */}
                                <ul style={{ paddingLeft: "0" }}>
                                    <li className="col-heading">
                                        <h3> Contact </h3>
                                    </li>
                                    <li><a href="#">support@allevents.com</a></li>
                                    <li><a href="#">A cursus turpis eu a pellentesque. Nulla neque donec mauris at.</a></li>

                                    <li>
                                        <div className="col item social d-flex align-items-center justify-content-between mt-5" style={{ width: "204px" }}>
                                            {/* <FontAwesomeIcon icon="fa-brands fa-instagram" style={{ color: "#FFF", }} />                                        {/* <a href="#"><i className="icon ion-social-facebook"></i></a> */}
                                            {/* <FontAwesomeIcon icon={faCoffee} style={{ color: "#FFF" }} /> */}
                                            <FontAwesomeIcon icon={faTwitter} style={{ color: "#FFF" }} size='2xl' />
                                            <FontAwesomeIcon icon={faInstagram} style={{ color: "#FFF" }} size='2xl' />
                                            <FontAwesomeIcon icon={faFacebook} style={{ color: "#FFF" }} size='2xl' />
                                            <FontAwesomeIcon icon={faLinkedin} style={{ color: "#FFF" }} size='2xl' />
                                            {/* <FontAwesomeIcon icon="fa-brands fa-instagram" style={{ color: "#ffffff", }} /> */}
                                            {/* <FontAwesomeIcon icon={faInstagram} style={{ color: "#FFF" }} /> */}
                                            {/* <FontAwesomeIcon icon={solid("instagram")} /> */}
                                            {/* <a href="#"><i className="icon ion-social-twitter"></i></a>
                                        <a href="#"><i className="icon ion-social-snapchat"></i></a>
                                        <a href="#"><i className="icon ion-social-instagram"></i></a> */}
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            {/* <div className="col-lg-4 col-md-6">
                            <h5 className="text-white mb-3">Newsletter</h5>
                            <p className="small text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
                            <form action="#">
                                <div className="input-group mb-3">
                                    <input className="form-control" type="text" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2" />
                                    <button className="btn btn-primary" id="button-addon2" type="button"><i className="fas fa-paper-plane"></i></button>
                                </div>
                            </form>
                        </div> */}
                        </div>

                        <div className='d-flex align-items-center justify-content-center p-4 mt-3' style={{ borderTop: "1px solid #c7c7c7" }}>

                            <span className="copyright text-white">Allevents © 2023 - All Right Are Reserved</span>
                        </div>
                    </Container>
                </div>
            </footer>
        </div>
    )
}

export default Footer