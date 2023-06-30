import React, { useEffect } from 'react';
import testimonial1Image from '../img/testimonial1.png';
import testimonial2Image from '../img/testimonial2.png';
import testimonial3Image from '../img/testimonial3.png';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';

const Testimonials = () => {
    useEffect(() => {
        const swiperTestimonial = new Swiper('.testimonial__container', {
            spaceBetween: 24,
            loop: true,
            grabCursor: true,
            breakpoints: {
                576: {
                    slidesPerView: 2,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 48,
                },
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        });

        return () => {
            // Destrua a instância do Swiper ao desmontar o componente
            swiperTestimonial.destroy();
        };
    }, []);
    return (
        <section className="testimonial section">
            <span className="section__subtitle">My Clients Say</span>
            <h2 className="section__title">Testimonials</h2>

            <div className="testimonial__container container swiper">
                <div className="swiper-wrapper">
                    <div className="testimonial__card swiper-slide">
                        <img src={testimonial1Image} alt="" className="testimonial__img" />

                        <h3 className="testimonial__name">John Doe</h3>
                        <p className="testimonial__description">
                            Your designs have transformed our website,
                            making it visually appealing and user-friendly.
                        </p>
                    </div>
                    <div className="testimonial__card swiper-slide">
                        <img src={testimonial2Image} alt="" className="testimonial__img" />

                        <h3 className="testimonial__name">Pula Vusy</h3>
                        <p className="testimonial__description">
                            The attention to detail in your UI/UX work has
                            greatly enhanced our app's usability and overall user experience.
                        </p>
                    </div>
                    <div className="testimonial__card swiper-slide">
                        <img src={testimonial3Image} alt="" className="testimonial__img" />

                        <h3 className="testimonial__name">Sara Cill</h3>
                        <p className="testimonial__description">
                            Your expertise in frontend shines
                            through in the seamless functionality and responsiveness of our website.
                        </p>
                    </div>
                </div>
                <div className="swiper-pagination"></div>
            </div>
        </section>
    );
}

export default Testimonials;
