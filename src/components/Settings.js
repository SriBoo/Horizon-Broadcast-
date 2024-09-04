// src/components/Settings.js
import React from 'react';
import './Settings.css'; // Importing the CSS file for styling

const Settings = ({ onLanguageChange }) => {
  const handleLanguageSelect = (e) => {
    onLanguageChange(e.target.value);
  };

  return (
    <div className="settings">
      <label htmlFor="language-select" className="settings-label">Choose a language:</label>
      <select id="language-select" className="settings-select" onChange={handleLanguageSelect}>
        <option value="en">English</option>
        <option value="fr">French</option>
        <option value="de">German</option>
        <option value="ru">Russian</option>
        <option value="es">Spanish</option>
        <option value="zh">Chinese</option>
      </select>
    </div>
  );
};

export default Settings;
