// src/components/LoadingSpinner.js

import React from 'react';
import { FallingLines } from 'react-loader-spinner';
import './../css/LoadingSpinner.css';

const LoadingSpinner = () => {
    return (
        <div className="loading-spinner-container">
            <FallingLines
                color="#007bff"
                width="100"
                visible={true}
            />
        </div>
    );
};

export default LoadingSpinner;
