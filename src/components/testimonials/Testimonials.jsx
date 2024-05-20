import React from 'react';
import css from './Testimonials.module.css';
import Hero from '../../assets/testimonial.png';
import { TestimonialsData } from '../../data/testimonials';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Testimonials = () => {
    return (
        <div className={css.testimonials}>
            <div className={css.wrapper}>
                <div className={css.container}>
                    <span>Top Rated</span>
                    <samp>Seedily say has suitable disposal and boy. Exercise joy man children rejoiced.</samp>
                </div>
                <img src={Hero} alt='' /> 
                <div className={css.container}>
                    <span>100k</span>
                    <span>Happy Customer with us</span>
                </div>
            </div>
            <div className={css.reviews}>Reviews</div>
            <div className={css.carousel}>
                <Swiper
                    className={css.tCarausal}
                    slidesPerView={4}
                    slidesPerGroup={1}
                    spaceBetween={20}
                    breakpoints={{
                        856: {
                            slidesPerView: 3,
                            spaceBetween: 20
                        },
                        540: {
                            slidesPerView: 2,
                            spaceBetween: 20
                        },
                        0: {
                            slidesPerView: 1,
                        }
                    }}
                >
                    {
                        TestimonialsData.map((testimonial, i) => (
                            <SwiperSlide>
                                <div className={css.testimonial}>
                                    <img src={testimonial.image} alt='' />
                                    <span>{testimonial.comment}</span>
                                    <hr />
                                    <span>{testimonial.name}</span>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </div>
    )
}

export default Testimonials
