import { faPhoneVolume, } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './About.css'
import { useState } from 'react';
import { useEffect } from 'react';

const About = () => {
    const [instructors, setInstructors] = useState([]);

    // loading data 
    useEffect(() => {
        fetch('instructors.JSON')
            .then(res => res.json())
            .then(data => setInstructors(data))
    }, [])
    return (
        <div className="container">
            <h2 className="title">Our Instructors</h2>
            <div className="courses">
                <div className="row">
                    {
                        instructors.map(instructor => (
                            <div key={instructor._id} className="col-md-3 about-cart">
                                <div className="cart">
                                    <div className="logo-img">
                                        <img className="w-50 py-3 about-img" src={instructor.picture} alt="" />
                                    </div>
                                    <h2 className="fs-3 pt-2 fw-bold">{instructor.name}</h2>
                                    <div className="phone d-flex align-items-center justify-content-center">
                                        <div className="awesome-icon">
                                            <FontAwesomeIcon icon={faPhoneVolume} />
                                        </div>
                                        <div>
                                            <h5>{instructor.phone}</h5>
                                        </div>
                                    </div>
                                    <h6>Email: {instructor.email}</h6>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default About;