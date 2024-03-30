import React, { useState, useEffect } from 'react';
import { getEntries } from '../api/tools';
import './../css/RelatedWords.css';

const RelatedWords = ({ word }) => {
    const [entries, setEntries] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchEntries = async () => {
            setLoading(true);
            const data = await getEntries(word);
            setEntries(data);
            setLoading(false);
        };

        fetchEntries();
    }, [word]);

    return (
        <div className="related-words-container">
            <h3>Related Words</h3>
            {loading ? (
                <p>Loading related words...</p>
            ) : entries.length > 0 ? (
                <ul>
                    {entries.map((entry, index) => (
                        <li key={index}>
                            <a href={entry.link}>{entry.text}</a>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No related words found.</p>
            )}
        </div>
    );
};

export default RelatedWords;
