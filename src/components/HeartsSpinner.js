// src/components/HeartsSpinner.js

import React from 'react';
import { Hearts } from 'react-loader-spinner';
import './../css/HeartsSpinner.css';

const HeartsSpinner = () => {
    return (
        <div className="hearts-spinner-container">
            <Hearts
                height="80"
                width="80"
                color="#007bff"
                ariaLabel="hearts-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
            />
        </div>
    );
};

export default HeartsSpinner;
