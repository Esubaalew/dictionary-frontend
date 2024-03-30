// src/components/SearchBox.js

import React, { useState } from 'react';
import './../css/SearchBox.css';

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
        <div className="search-box-container"> 
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter a word..."
                    value={word}
                    onChange={handleInputChange}
                    className="search-input"
                />
                <button type="submit" className="search-button">Search</button> 
            </form>
        </div>
    );
};

export default SearchBox;
