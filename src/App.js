// src/App.js
import React, { useState } from 'react';
import Menu from './components/Menu';
import Settings from './components/Settings';
import { languageData } from './languageData';
import './styles.css';

function App() {
  const [language, setLanguage] = useState('en'); // Default language is English
  
  const handleLanguageChange = (newLanguage) => {
    setLanguage(newLanguage);
  };

  return (
    <div className="App">
      <Settings onLanguageChange={handleLanguageChange} />
      <Menu language={language} />
    </div>
  );
}

export default App;
