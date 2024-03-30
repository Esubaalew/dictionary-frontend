// src/App.js

import React from 'react';
import DictionaryContainer from './components/DictionaryContainer';
import WordOfTheDay from './components/WordOfTheDay';
import BreakComponent from './components/BreakComponent';

function App() {
  return (
    <div className="app-container">
    <DictionaryContainer />
    <BreakComponent />
    <WordOfTheDay />
  </div>
  );
}

export default App;
