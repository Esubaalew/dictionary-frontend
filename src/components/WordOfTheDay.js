import React, { useState, useEffect } from 'react';
import { getWordOfTheDay } from '../api/tools';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import './../css/WordOfTheDay.css';
import { Hearts } from 'react-loader-spinner'
import { FallingLines } from 'react-loader-spinner';

const WordOfTheDay = () => {
    const [wordData, setWordData] = useState(null);
    const [expanded, setExpanded] = useState(false); // State to manage expansion

    useEffect(() => {
        const fetchWordOfTheDay = async () => {
            const word = await getWordOfTheDay();
            setWordData(word);
        };

        fetchWordOfTheDay();
    }, []);

    const toggleExpand = () => {
        setExpanded(!expanded);
    };

    return (
        <div className="word-of-the-day-container">
            <h3>Word of the Day</h3>
            {wordData ? (
                <>
                    {wordData.image && <img src={wordData.image.src} alt={wordData.image.alt} />}
                    <div className="word-header" onClick={toggleExpand}>
                        <h4>{wordData.word}</h4>
                        {expanded ? (
                            <FontAwesomeIcon icon={faChevronUp} style={{ color: '#007bff' }} />
                        ) : (
                            <FontAwesomeIcon icon={faChevronDown} style={{ color: '#007bff' }} /> 
                        )}
                    </div>
                    {expanded && (
                        wordData.meanings.map((meaning, index) => (
                            <div key={index}>
                                <p>{meaning.definition}</p>
                                <ul>
                                    {meaning.examples.map((example, exampleIndex) => (
                                        <li key={exampleIndex}>{example}</li>
                                    ))}
                                </ul>
                            </div>
                        ))
                    )}
                </>
            ) : (
 <div style={{ display: 'flex', justifyContent: 'center' }}>
<Hearts
  height="80"
  width="80"
  color="#007bff"
  ariaLabel="hearts-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true} />
  </div>

            )}
        </div>
    );
};

export default WordOfTheDay;
