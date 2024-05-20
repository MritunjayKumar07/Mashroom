import React from 'react'
import './Slider.css';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { SliderProducts } from '../../data/products'

const Slider = () => {
    console.log(SliderProducts)
    return (
        <div className='s-container'>
            <Swiper
                modules={[Pagination, Navigation]}
                className='swiper'
                navigation={true}
                slidesPerView={4}
                spaceBetween={40}
                slidesPerGroup={1}
                loop={true}
                breakpoints={{
                    640: {
                        slidesPerView: 3,
                    },
                    0: {
                        slidesPerView: 1,
                    }
                }}
            >
                {SliderProducts.map((slide, i) => (
                    <SwiperSlide className='swiper-slider'>
                        <div className='left-s'>
                            <div className='name'>
                                <span>{slide.name}</span>
                                <span>{slide.detail}</span>
                            </div>
                            <span>{slide.text}</span>
                            <div>Shop now</div>
                        </div>
                        <img src={slide.img} alt='product' className='img-p' />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default Slider
