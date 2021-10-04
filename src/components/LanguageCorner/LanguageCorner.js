import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button'

const LanguageCorner = () => {
    const [brochures, setBrochures] = useState([])
    useEffect(() => {
        fetch('brochures.JSON')
            .then(res => res.json())
            .then(data => setBrochures(data))
    }, [])
    return (
        <div>
            <div>
                <h2 className="title">2020 Course Brochures</h2>
                <div className="row">
                    {
                        brochures.map(brochure => (
                            <div className="col-md-4">
                                <div>
                                    <h2>{brochure.title}</h2>
                                    <h6>Email: {brochure.description}</h6>
                                    <Button variant="warning fw-bold fs-6 my-5">Download PDF</Button>
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