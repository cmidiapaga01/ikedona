import React from 'react';
import usaImage from '../img/usa.png';
import brazilImage from '../img/brazil.png';
import spainImage from '../img/spain.png';

const Dropdown = ({ changeLanguage }) => {
  return (
    <div className="dropdown">
        <button className="dropbtn">
            <img src={usaImage} alt="English" className="flag-icon" />
            <span id="activeLanguageBtn">English</span>
        </button>
          <i className="bx bx-chevron-down"></i>
          <div className="dropdown-content">
            <a onClick={() => changeLanguage('en')}>
              <img src={usaImage} alt="English" className="flag-icon" />
              English
            </a>
            <a onClick={() => changeLanguage('pt')}>
              <img src={brazilImage} alt="Português" className="flag-icon" />
              Portuguese
            </a>
            <a onClick={() => changeLanguage('es')}>
              <img src={spainImage} alt="Español" className="flag-icon" />
              Spanish
            </a>
          </div>
    </div>
  );
};

export default Dropdown;


          