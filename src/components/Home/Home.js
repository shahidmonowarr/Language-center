import Button from 'react-bootstrap/Button'
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import './Home.css'
const Home = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('fakedb.JSON')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className="service-container">
            <h2 className="title">What We Offer</h2>
            <div className="courses">
                <div className="row">
                    {
                        services.map(service => (
                            <div className="col-md-3 ">
                                <div className="cart">
                                    <div className="logo-img">
                                        <img className="rounded-3" src={service.img} alt="" />
                                    </div>
                                    <h3>{service.title}</h3>
                                    <h4>Course Price: {service.price}</h4>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <Button variant="warning fw-bold fs-6 my-5">View All</Button>
        </div>
    );
};

export default Home;