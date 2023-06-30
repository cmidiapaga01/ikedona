import React from 'react';
import fillImage2 from '../img/fill2.png';
const About = () => {
  return (
    <section className="about section" id="about">
      <span className="section__subtitle">My Intro</span>
      <h2 className="section__title">About Me</h2>

      <div className="about__container container grid">
      <img src={fillImage2} alt="" className="home__img" />

        <div className="about__data">
          <div className="about__info">
            <div className="about__box">
              <i className='bx bx-award about__icon'></i>
              <h3 className="about__title">Experience</h3>
              <span className="about__subtitle">Fresher</span>
            </div>
            <div className="about__box">
              <i className='bx bx-briefcase-alt about__icon'></i>
              <h3 className="about__title">Completed</h3>
              <span className="about__subtitle">5+ Projects</span>
            </div>
            <div className="about__box">
              <i className='bx bx-support about__icon'></i>
              <h3 className="about__title">Support</h3>
              <span className="about__subtitle">24/7 Online</span>
            </div>
          </div>

          <p className="about__description">
            As a skilled UI/UX designer, I create engaging websites with intuitive navigation, interactive games, lively forums, and captivating animations. These features make the user experience more friendly and enjoyable.
          </p>

          <a href="#contact" className="button btn-light">Contact Me</a>
        </div>
      </div>
    </section>
  );
}

export default About;
