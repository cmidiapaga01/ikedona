import React from 'react';
import fillImage from '../img/fill2.jpg';

const Home = () => {
  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <div className="home__data">
          <span className="home__greeting">Hello, I'm</span>
          <h1 className="home__name">Theo Bucaretchi</h1>
          <h3 className="home__education">Junior Frontend Engineer</h3>

          <div className="home__buttons">
            {/* <a download="" href="assets/pdf/resume.pdf" className="button button--ghost">Download CV</a> */}
            <a href="#about" className="button btn-light">About Me</a>
          </div>
        </div>

        <div className="home__handle">
        <img src={fillImage} alt="" className="home__img" />

        </div>

        <div className="home__social">
          <a href="https://github.com/DEFINIRRRRRRR" target="_blank" className="home__social-link"><i className='bx bxl-github'></i></a>
          <a href="https://www.linkedin.com/inDEFINIRRRRR" target="_blank" className="home__social-link"><i className='bx bxl-linkedin-square'></i></a>
          <a href="https://www.instagram.com/theo_buca/" target="_blank" className="home__social-link"><i className='bx bxl-instagram'></i></a>
        </div>

        <a href="#about" className="home__scroll">
          <i className='bx bx-mouse home__scroll-icon'></i>
          <span className="home__scroll-name">Scroll Down</span>
        </a>
      </div>
    </section>
  );
}

export default Home;
