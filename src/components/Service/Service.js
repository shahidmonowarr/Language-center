import React from 'react';
import './Service.css'
const Service = (props) => {
    const { img, title, price } = props.course
    return (
        <div className="col-md-4 gap-3">
            <div className="cart" style={{ cursor: "pointer" }, { margin: "10px" }}>
                <div className="logo-img">
                    <img className="w-50 rounded-pill" src={img} alt="" />
                </div>
                <h2>{title}</h2>
                <h4>Course Price: {price}</h4>

            </div>
        </div>
    );
};

export default Service;