import Button from 'react-bootstrap/Button'
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import './Home.css'
import { Link } from 'react-router-dom';
import Special from '../Special/Special';


const Home = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('fakedb.JSON')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className="container">
            <div className="test-section ">
                <br />
                <h2 className="test-section-title">Take Our Free Language Test</h2>
                <p className="test-details">This quick and free online test will tell your language level <br />
                    and help choose the best group course.</p>
                <Button variant="info fw-bold fs-5 my-3 p-3 text-white">Start Now</Button>
            </div>

            <Special></Special>

            <div >
                <h2 className="title">What We Offer</h2>
                <div className="courses">
                    <div className="row">

                        {/* services  */}
                        {
                            services.map(service => (
                                <div key={service._id} className="col-md-3 ">
                                    <div className="cart">
                                        <div className="logo-img">
                                            <img className="rounded-3" src={service.img} alt="" />
                                        </div>
                                        <h3 className="fs-3 pt-2 fw-bold">{service.title}</h3>
                                        <h4 className="fs-4 pt-1 fw-semibold">Course Price: {service.price}</h4>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>

                {/* link button for view all services  */}
                <Link to={`/services`}><Button variant="warning fw-bold fs-5 mb-5">View All</Button></Link>
            </div>
        </div>
    );
};

export default Home;