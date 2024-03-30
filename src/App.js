// src/App.js

import React from 'react';
import DictionaryContainer from './components/DictionaryContainer';
import WordOfTheDay from './components/WordOfTheDay';

function App() {
  return (
    <div className="app-container">
    <DictionaryContainer />
    <WordOfTheDay />
  </div>
  );
}

export default App;
