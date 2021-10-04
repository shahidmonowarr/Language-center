import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Service from '../Service/Service';
import './Services.css'
const Services = () => {
    // initial state 
    const [courses, setCourses] = useState([]);

    const [searchText, setSearchText] = useState("");

    // data loading 
    useEffect(() => {
        fetch('services.JSON')
            .then(res => res.json())
            .then(data => setCourses(data));
    }, [searchText]);

    // function for change search value 
    const handleOnChange = (e) => {

        setSearchText(e.target.value);
        console.log(e.target.value);
    };

    return (
        <div className="service-container container">
            <h2 className="title">Our Courses</h2>
            <div className="search-box">
                <input onChange={handleOnChange} type="text" className="p-1" placeholder="enter course name" />
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