import React from 'react';
import { Carousel } from 'react-bootstrap';
import image1 from './images/image1.png'
import image2 from './images/image2.png'
import image3 from './images/image3.png'
import './Special.css'

const Special = () => {
    return (
        <div className="carousel-section py-5 row">
            <div className="col-md-4">
                <h2 className="title">Our Special Care</h2>
            </div>
            <div className="col-md-8 ">
                <Carousel className="w-100  mb-5 ">
                    <Carousel.Item interval={2000}>
                        <img
                            className="d-block w-100"
                            src={image1}
                            alt="First slide"
                        />
                        <Carousel.Caption className="pt-3">
                            <h3 className="slider-title ">Children learn English as Another Language</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={2000}>
                        <img
                            className="d-block w-100"
                            src={image2}
                            alt="Second slide"
                        />
                        <Carousel.Caption className="pt-3">
                            <h3 className="slider-title ">Am I too old to learn a new language?</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={image3}
                            alt="Third slide"
                        />
                        <Carousel.Caption className="pt-3">
                            <h3 className="slider-title ">Live Language studies with our teacher</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    );
};

export default Special;