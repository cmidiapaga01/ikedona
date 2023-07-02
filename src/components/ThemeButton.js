import React, { useEffect, useState } from 'react';

const ThemeButton = () => {
  const [selectedTheme, setSelectedTheme] = useState(localStorage.getItem('selected-theme') || 'light')
  const [selectedIcon, setSelectedIcon] = useState(localStorage.getItem('selected-icon') || 'bx bx-sun')

  const handleThemeToggle = () => {
    const currentTheme = selectedTheme === 'dark' ? 'light' : 'dark';
    const currentIcon = selectedIcon === 'bx bx-moon' ? 'bx bx-sun' : 'bx bx-moon';
    
    document.body.classList.toggle('light-theme', currentTheme === 'light');
    localStorage.setItem('selected-theme', currentTheme);
    localStorage.setItem('selected-icon', currentIcon);
    
    setSelectedTheme(currentTheme);
    setSelectedIcon(currentIcon);
  };

  useEffect(() => {
    document.body.classList.toggle('light-theme', selectedTheme === 'light');
  }, [selectedTheme]);

  return (
    <button id="theme-button" className={selectedIcon} onClick={handleThemeToggle}></button>
  );
};

export default ThemeButton;
