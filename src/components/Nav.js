import React, { useState, useEffect } from 'react';
import ThemeButton from './ThemeButton';
import usaImage from '../img/usa.png';
import brazilImage from '../img/brazil.png';
import spainImage from '../img/spain.png';



const Nav = () => {
    const [language, setLanguage] = useState('en');
    const [translations, setTranslations] = useState(null);
  
    useEffect(() => {
      const loadTranslations = async () => {
        const response = await fetch(`translations/${language}.json`);
        const data = await response.json();
        setTranslations(data);
      };
  
      loadTranslations();
    }, [language]);
  
    const changeLanguage = (lang) => {
      setLanguage(lang);
    };
  
    return (
      <nav className="nav container">
        <a href="#" className="nav__logo">.Theo</a>
        <div className="nav__menu">
          <ul className="nav__list">
            <li className="nav__item">
              <a href="#home" className="nav__link active-link">
                <i className='bx bx-home-alt'></i>
              </a>
            </li>
            <li className="nav__item">
              <a href="#about" className="nav__link">
                <i className='bx bx-user'></i>
              </a>
            </li>
            <li className="nav__item">
              <a href="#skills" className="nav__link">
                <i className='bx bx-book'></i>
              </a>
            </li>
            <li className="nav__item">
              <a href="#work" className="nav__link">
                <i className='bx bx-briefcase-alt-2'></i>
              </a>
            </li>
            <li className="nav__item">
              <a href="#contact" className="nav__link">
                <i className='bx bx-message-square-detail'></i>
              </a>
            </li>
          </ul>
        </div>
        {/* <i className='bx bx-moon change-theme' id="ThemeButton"></i> */}
        <ThemeButton />
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
      </nav>
    );
  };

export default Nav;