// src/components/Menu.js
import React from 'react';
import { languageData } from '../languageData';

const Menu = ({ language }) => {
  const translatedText = languageData[language];

  return (
    <div className="menu">
      {Object.keys(translatedText).map((key) => (
        <div key={key} className="menu-item">
          <div className="image-container">
            {/* Reference images directly from the public folder */}
            <img
              src={`/${key}.jpg`} // Referencing the image from the public folder
              alt={translatedText[key]}
              className="full-screen-image"
            />
            {/* Black shadow overlay at the top of the image */}
            <div className="image-top-shadow"></div>
            <div className="image-overlay">
              <h2>{translatedText[key]}</h2>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Menu;
