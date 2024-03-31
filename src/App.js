// src/App.js

import React from 'react';
import DictionaryContainer from './components/DictionaryContainer';
import WordOfTheDay from './components/WordOfTheDay';
import BreakComponent from './components/BreakComponent';
import Footer from './components/Footer';
import { Analytics } from "@vercel/analytics/react"

function App() {
  return (
    <div className="app-container">
    <DictionaryContainer />
    <BreakComponent />
    <WordOfTheDay />
    <Footer />
    <Analytics />
  </div>
  );
}

export default App;
