import React from 'react';


const Services = () => {
  return (
    <section className="services section">
      <span className="section__subtitle">My Services</span>
      <h2 className="section__title">What I Offer</h2>

      <div className="services__container container grid">
        <div className="services__card">
          <i className='aa'></i>

          <h3 className="services__title">Frontend Development</h3>

          <span className="services__button">
            Read More <i className='bx bx-right-arrow-alt services__icon'></i>
          </span>

          <div className="services__modal">
            <div className="services__modal-content">
              <i className='bx bx-x services__modal-close'></i>

              <h3 className="services__modal-title">Frontend Developer</h3>
              <p className="services__modal-description">
                I architect and develop websites and applications using web technologies like HTML, CSS, DOM, and JavaScript.
              </p>

              <ul className="services__modal-list">
                <li className="services__modal-item">
                  <i className='bx bx-check services__modal-icon'></i>
                  <p className="services__modal-info">
                    I develop web pages.
                  </p>
                </li>
                <li className="services__modal-item">
                  <i className='bx bx-check services__modal-icon'></i>
                  <p className="services__modal-info">
                    I add interactivity to web pages.
                  </p>
                </li>
                <li className="services__modal-item">
                  <i className='bx bx-check services__modal-icon'></i>
                  <p className="services__modal-info">
                    Implementing design on mobile websites.
                  </p>
                </li>
                <li className="services__modal-item">
                  <i className='bx bx-check services__modal-icon'></i>
                  <p className="services__modal-info">
                    Optimized web experiences.
                  </p>
                </li>
                <li className="services__modal-item">
                  <i className='bx bx-check services__modal-icon'></i>
                  <p className="services__modal-info">
                    Developing and maintaining user experience.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="services__card">
          <i className='bx bx-palette serv__icon'></i>

          <h3 className="services__title">UI/UX Design</h3>

          <span className="services__button">
            Read More <i className='bx bx-right-arrow-alt services__icon'></i>
          </span>

          <div className="services__modal">
            <div className="services__modal-content">
              <i className='bx bx-x services__modal-close'></i>

              <h3 className="services__modal-title">UI/UX Designer</h3>
              <p className="services__modal-description">
                I design user interfaces and create user experiences for websites and applications with a focus on usability and aesthetics.
              </p>

              <ul className="services__modal-list">
                <li className="services__modal-item">
                  <i className='bx bx-check services__modal-icon'></i>
                  <p className="services__modal-info">
                    Creating wireframes and prototypes.
                  </p>
                </li>
                <li className="services__modal-item">
                  <i className='bx bx-check services__modal-icon'></i>
                  <p className="services__modal-info">
                    Designing intuitive and user-friendly interfaces.
                  </p>
                </li>
                <li className="services__modal-item">
                  <i className='bx bx-check services__modal-icon'></i>
                  <p className="services__modal-info">
                    Conducting user research and usability testing.
                  </p>
                </li>
                <li className="services__modal-item">
                  <i className='bx bx-check services__modal-icon'></i>
                  <p className="services__modal-info">
                    Collaborating with development teams.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
