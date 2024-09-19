'use client';

import React, { ReactElement, useState } from 'react';
import styles from './Slider.module.css';
import PrevIcon from '@/public/prev-icon.svg';
import NextIcon from '@/public/next-icon.svg';


const sliderData = [
  {
    image: 'https://via.placeholder.com/800x400/ff7f7f',
    title: 'loft мебель',
    description: 'Современная и удобная мебель в Анапе',
    buttonText: 'Смотреть каталог',
    buttonUrl: '#slide1',
  },
  {
    image: 'https://via.placeholder.com/800x400/7f7fff',
    title: 'Слайд 2',
    description: 'Описание слайда 2',
    buttonText: 'Подробнее',
    buttonUrl: '#slide2',
  },
  {
    image: 'https://via.placeholder.com/800x400/7fff7f',
    title: 'Слайд 3',
    description: 'Описание слайда 3',
    buttonText: 'Подробнее',
    buttonUrl: '#slide3',
  },
];

const Slider = (): ReactElement => {

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === sliderData.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? sliderData.length - 1 : prev - 1));
  };

  return (
    <div className={styles.sliderContainer}>
      <div
        className={styles.sliderSlide}
        style={{
          backgroundImage: `url(${sliderData[currentSlide].image})`,
        }}
      >
        <div className={styles.sliderContent}>
          <h2>{sliderData[currentSlide].title}</h2>
          <p>{sliderData[currentSlide].description}</p>
          <a href={sliderData[currentSlide].buttonUrl} className={styles.sliderButton}>
            {sliderData[currentSlide].buttonText}
          </a>
        </div>
      </div>
      <button className={styles.sliderButtonPrev} onClick={prevSlide}>
        <PrevIcon />
      </button>
      <button className={styles.sliderButtonNext} onClick={nextSlide}>
        <NextIcon />
      </button>
    </div>
  );
};

export default Slider;
