import React from 'react';
import './Service.css'
const Service = (props) => {
    // destructuring 
    const { img, title, price } = props.course
    return (
        <div className="col-md-4 gap-3">

            {/* single service  */}
            <div className="cart">
                <div className="logo-img">
                    <img className="w-75 rounded-3" src={img} alt="" />
                </div>
                <h2 className="fs-2 pt-2 fw-bold">{title}</h2>
                <h4 className="fs-4 pt-1 fw-semibold">Course Price: {price}</h4>

            </div>
        </div>
    );
};

export default Service;