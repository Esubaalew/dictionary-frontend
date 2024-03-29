// src/components/SearchBox.js

import React, { useState } from 'react';
import './../css/SearchBox.css'; // Corrected import path

const SearchBox = ({ onSearch }) => {
    const [word, setWord] = useState('');

    const handleInputChange = (e) => {
        setWord(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(word);
    };

    return (
        <div className="search-box-container"> {/* Corrected class name */}
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter a word..."
                    value={word}
                    onChange={handleInputChange}
                />
                <button type="submit">Search</button>
            </form>
        </div>
    );
};

export default SearchBox;
