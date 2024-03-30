// src/components/DictionaryContainer.js

import React, { useState } from 'react';
import { getDefinitions } from '../api/tools';
import SearchBox from './SearchBox';
import NoResults from './NoResults';
import LoadingSpinner from './LoadingSpinner';
import './../css/DictionaryContainer.css';

const DictionaryContainer = () => {
    const [definitions, setDefinitions] = useState([]);
    const [loading, setLoading] = useState(false);
    const [hasSearched, setHasSearched] = useState(false); 

    const searchDefinitions = async (word) => {
        setLoading(true);
        setHasSearched(true); 
        const data = await getDefinitions(word) || [];
        setDefinitions(data);
        setLoading(false);
    };

    return (
        <div className="definition-container">
            <SearchBox onSearch={searchDefinitions} />
            {loading ? (
                <LoadingSpinner />
            ) : hasSearched ? (
                definitions.length > 0 ? (
                    definitions.map((definition, index) => (
                        <div key={index}>
                            <h3>{definition.meaning}</h3>
                            <ul>
                                {definition.examples.map((example, index) => (
                                    <li key={index}>{example}</li>
                                ))}
                            </ul>
                        </div>
                    ))
                ) : (
                    <NoResults />
                )
            ) : (
            
                <div className="welcome-message">
                    <h2>Azeb's Dictionary!</h2>
                    <p>Type a word in the search box above to get started.</p>
                </div>
            )}
        </div>
    );
};

export default DictionaryContainer;
