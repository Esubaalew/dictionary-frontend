// src/components/DictionaryContainer.js

import React, { useState } from 'react';
import { getDefinitions } from '../api/tools';
import SearchBox from '../components/SearchBox';
import './../css/DictionaryContainer.css'; // Corrected import path

const DictionaryContainer = () => {
    const [definitions, setDefinitions] = useState([]);

    const searchDefinitions = async (word) => {
        const data = await getDefinitions(word);
        setDefinitions(data);
    };

    return (
        <div className="definition-container"> {/* Corrected class name */}
            <h2>Dictionary</h2>
            <SearchBox onSearch={searchDefinitions} />
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
            </div>
        </div>
    );
};

export default DictionaryContainer;
