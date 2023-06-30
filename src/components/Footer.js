import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">.Theo</h1>

                <ul className="footer__list">
                    <li>
                        <a href="#about" className="footer__link">About</a>
                    </li>
                    <li>
                        <a href="#work" className="footer__link">Projects</a>
                    </li>
                    <li>
                        <a href="#testimonial" className="footer__link">Testimonials</a>
                    </li>
                </ul>

                <ul className="footer__social">
                    <a href="https://github.com/" target="_blank" className="footer__social-link">
                        <i className='bx bxl-github'></i>
                    </a>
                    <a href="https://www.linkedin.com/in//" target="_blank" className="footer__social-link">
                        <i className='bx bxl-linkedin'></i>
                    </a>
                    <a href="https://www.instagram.com/the/" target="_blank" className="footer__social-link">
                        <i className='bx bxl-instagram'></i>
                    </a>
                </ul>

                <span className="footer__copy">
                    &#169; Theo. All rights reserved. Made in 2023
                </span>
            </div>
        </footer>
    );
}

export default Footer;
