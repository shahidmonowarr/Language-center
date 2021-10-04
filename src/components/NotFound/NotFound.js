import React from 'react';

const NotFound = () => {
    return (
        <div className="container ">
            <div className="error-section">
                <h2 className="title py-5">404 ERROR!</h2>
                <h4 className="text-danger pb-5 mb-5">The page you are looking for is not available</h4>
            </div>
        </div>
    );
};

export default NotFound;