import React,{useState} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore,{ Autoplay,Pagination} from 'swiper';

import styles from '../styles/Circle.module.css'

SwiperCore.use([Autoplay,Pagination]);

export default function Circle() {
    const [images] =useState(()=>[
        '/images/1.jpg',
        '/images/2.jpg',
        '/images/3.jpg',
        '/images/4.jpg',
        '/images/5.jpg',
        '/images/6.jpg',
        '/images/7.jpg',
        '/images/8.jpg',
    ])
  
    return (
        <div className={styles.contain}>
            <Swiper
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                autoplay={{delay:2000,disableOnInteraction: false}}
                pagination={{ clickable: true }}
            >
                {images.map((image,i)=>{
                    return <SwiperSlide key={i}><img className={styles.img} src={image }/></SwiperSlide>
                })}
            </Swiper>

        </div>
        
    )
}