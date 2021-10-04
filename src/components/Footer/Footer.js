import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagramSquare, faFacebookSquare, faTwitterSquare, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
        <div>
            <div className="footer-container">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5">
                            <div className="left-container text-start">
                                <h1>Language Center</h1>
                                <div className="icons-container d-flex text-center">
                                    <div className="icon">
                                        <FontAwesomeIcon icon={faInstagramSquare} />
                                    </div>
                                    <div className="icon">
                                        <FontAwesomeIcon icon={faFacebookSquare} />
                                    </div>
                                    <div className="icon">
                                        <FontAwesomeIcon icon={faTwitterSquare} />
                                    </div>
                                    <div className="icon">
                                        <FontAwesomeIcon icon={faYoutube} />
                                    </div>
                                </div>
                                <p><small className="mt-5">Shahid Ⓒ. All rights reserved</small></p>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div className="footer-menue-container">
                                <ul>
                                    <li className="footer-menu">Home</li>
                                    <li className="footer-menu">Services</li>
                                    <li className="footer-menu">Language Corner</li>
                                    <li className="footer-menu">About us</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="right-footer-container">
                                <div className="phone d-flex align-items-center justify-content-center mt-5">
                                    <div className="footer-phone-icon">
                                        <FontAwesomeIcon icon={faPhoneVolume} />
                                    </div>
                                    <div>
                                        <h5>+1 (838) 543-2774</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;