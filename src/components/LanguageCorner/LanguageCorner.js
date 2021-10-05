import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button'

const LanguageCorner = () => {
    // initial state 
    const [brochures, setBrochures] = useState([]);

    // data loading 
    useEffect(() => {
        fetch('brochures.JSON')
            .then(res => res.json())
            .then(data => setBrochures(data))
    }, [])
    return (
        <div className="container">
            <div>
                <h2 className="title">2020 Course Brochures</h2>
                <div className="row">
                    {
                        brochures.map(brochure => (
                            <div key={brochure._id} className="col-md-4 border-end p-5">
                                <div>
                                    <h2 className="fs-2 fw-bold">{brochure.title}</h2>
                                    <h6>{brochure.description}</h6>
                                    <Button variant="warning fw-bold fs-6 mt-3 mb-5">Download PDF</Button>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default LanguageCorner;