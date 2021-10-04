import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Service from '../Service/Service';
import './Services.css'
const Services = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('services.JSON')
            .then(res => res.json())
            .then(data => setCourses(data));
    }, []);
    console.log(courses);
    return (
        <div className="service-container">
            <h2 className="title">Our Courses</h2>
            <div className="search-box">
                <input type="text" className="p-1" placeholder="enter course name" />
                <button className="btn btn-warning mb-1">Search</button>
            </div>
            <div className="courses">
                <div className="row">
                    {
                        courses.map(course => <Service key={course._id} course={course}></Service>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Services; <h2>this is Services</h2>