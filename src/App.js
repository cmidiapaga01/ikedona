import React from 'react';
import './App.css';
import MyComponent from './components/MyComponent';
import MainSection from './MainSection';
import Footer from './components/Footer';
import Header from './components/Header'
const App = () => {
  return (
    <div className="App">
      <Header />
      <MainSection />
      <Footer />
      {/* <Home />
      <About />
      <Skills />
      <Services /> */}
    </div>
  );
};

export default App;


// function App() {
//   const [language, setLanguage] = useState('en');
//   const [translations, setTranslations] = useState(null);

//   const handleChangeLanguage = async (event) => {
//     const selectedLanguage = event.target.value;

//     // Utiliza o import() dinâmico para carregar o arquivo JSON correspondente ao idioma selecionado
//     const translationModule = await import(`./locales/${selectedLanguage}.json`);
//     setTranslations(translationModule.default);
    
//     setLanguage(selectedLanguage);
//   };

//   return (
//     <div className="container">
//       <h1 className="title">{translations?.title || 'Loading...'}</h1>
//       <select className="language-select" value={language} onChange={handleChangeLanguage}>
//         <option value="en">English</option>
//         <option value="pt">Português</option>
//         <option value="es">Español</option>
//       </select>
//       <p className="welcome-message">{translations?.welcomeMessage || 'Loading...'}</p>
//       <p>{translations?.bodyText || 'Loading...'}</p>
//       <h2>{translations?.sectionTitle || 'Loading...'}</h2>
//       <p>{translations?.sectionContent || 'Loading...'}</p>
//     </div>
//   );
// }

// export default App;
