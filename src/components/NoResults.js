// src/components/NoResults.js

import React from 'react';
import noResultsImage from '../assets/images/noresult.jpg'; // Make sure the import path is correct
import './../css/NoResults.css';

const NoResults = () => {
    return (
        <div className="no-results-container">
            <img src={noResultsImage} alt="No results" />
            <p>No definitions found.</p>
        </div>
    );
};

export default NoResults;
