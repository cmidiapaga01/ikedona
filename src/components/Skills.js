import React from 'react';

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <span className="section__subtitle">My Abilities</span>
      <h2 className="section__title">My Experiences</h2>

      <div className="skills__container container grid">
        <div className="skills__content">
          <h3 className="skills__title">Frontend developer</h3>

          <div className="skills__box">
            <div className="skills__group">
              <div className="skills__data">
                <i className='BiAdjust'></i>

                <div>
                  <h3 className="skills__name">HTML</h3>
                  <span className="skills__level">Advanced</span>
                </div>
              </div>
              <div className="skills__data">
                <i className='BiAdjust'></i>

                <div>
                  <h3 className="skills__name">CSS</h3>
                  <span className="skills__level">Advanced</span>
                </div>
              </div>
              <div className="skills__data">
                <i className='BiAdjust'></i>

                <div>
                  <h3 className="skills__name">JavaScript</h3>
                  <span className="skills__level">Intermediate</span>
                </div>
              </div>
            </div>

            <div className="skills__group">
              <div className="skills__data">
                <i className='BiAdjust'></i>

                <div>
                  <h3 className="skills__name">Bootstrap</h3>
                  <span className="skills__level">Intermediate</span>
                </div>
              </div>
              <div className="skills__data">
                <i className='bi-badge-check'></i>

                <div>
                  <h3 className="skills__name">Git</h3>
                  <span className="skills__level">Intermediate</span>
                </div>
              </div>
              <div className="skills__data">
                <i className='bi-badge-check'></i>

                <div>
                  <h3 className="skills__name">React</h3>
                  <span className="skills__level">Basic</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="skills__content">
          <h3 className="skills__title">Advertising</h3>

          <div className="skills__box">
            <div className="skills__group">
              <div className="skills__data">
                <i className='BiAdjust'></i>

                <div>
                  <h3 className="skills__name">Google Ads</h3>
                  <span className="skills__level">Advanced</span>
                </div>
              </div>
              <div className="skills__data">
                <i className='bi-badge-check'></i>

                <div>
                  <h3 className="skills__name">META Ads</h3>
                  <span className="skills__level">Advanced</span>
                </div>
              </div>
              <div className="skills__data">
                <i className='bi-badge-check'></i>

                <div>
                  <h3 className="skills__name">Google Analytics</h3>
                  <span className="skills__level">Advanced</span>
                </div>
              </div>
            </div>

            <div className="skills__group">
              <div className="skills__data">
                <i className='bi-badge-check'></i>

                <div>
                  <h3 className="skills__name">Facebook Ads</h3>
                  <span className="skills__level">Intermediate</span>
                </div>
              </div>
              <div className="skills__data">
                <i className='bi-badge-check'></i>

                <div>
                  <h3 className="skills__name">LinkedIn Ads</h3>
                  <span className="skills__level">Intermediate</span>
                </div>
              </div>
              <div className="skills__data">
                <i className='bi-badge-check'></i>

                <div>
                  <h3 className="skills__name">Twitter Ads</h3>
                  <span className="skills__level">Intermediate</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
