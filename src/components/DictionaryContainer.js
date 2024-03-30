// src/components/DictionaryContainer.js

import React, { useState } from 'react';
import { getDefinitions } from '../api/tools';
import SearchBox from '../components/SearchBox';
import LoadingSpinner from '../components/LoadingSpinner';
import './../css/DictionaryContainer.css';

const DictionaryContainer = () => {
    const [definitions, setDefinitions] = useState([]);
    const [loading, setLoading] = useState(false);

    const searchDefinitions = async (word) => {
        setLoading(true);
        const data = await getDefinitions(word);
        setDefinitions(data);
        setLoading(false);
    };

    return (
        <div className="definition-container"> {/* Corrected class name */}
            <h2>Dictionary</h2>
            <SearchBox onSearch={searchDefinitions} />
            {loading ? (
                <LoadingSpinner /> // Display loading spinner while waiting for search results
            ) : (
                <div>
                    {definitions.map((definition, index) => (
                        <div key={index}>
                            <h3>{definition.meaning}</h3>
                            <ul>
                                {definition.examples.map((example, index) => (
                                    <li key={index}>{example}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                    {/* Display a message if no definitions are found */}
                    {definitions.length === 0 && <p>No definitions found.</p>}
                </div>
            )}
        </div>
    );
};

export default DictionaryContainer;
