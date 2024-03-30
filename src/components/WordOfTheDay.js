// src/components/WordOfTheDay.js

import React, { useState, useEffect } from 'react';
import { getWordOfTheDay } from '../api/tools';
import './../css/WordOfTheDay.css';

const WordOfTheDay = () => {
    const [wordData, setWordData] = useState(null);

    useEffect(() => {
        const fetchWordOfTheDay = async () => {
            const word = await getWordOfTheDay();
            setWordData(word);
        };

        fetchWordOfTheDay();
    }, []);

    return (
        <div className="word-of-the-day-container">
            <h3>Word of the Day</h3>
            {wordData ? (
                <>
                    {wordData.image && <img src={wordData.image.src} alt={wordData.image.alt} />}
                    <h4>{wordData.word}</h4>
                    <p>{wordData.meanings[0].definition}</p>
                    <ul>
                        {wordData.meanings[0].examples.map((example, index) => (
                            <li key={index}>{example}</li>
                        ))}
                    </ul>
                </>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default WordOfTheDay;
