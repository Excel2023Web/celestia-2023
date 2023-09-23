import React, { useState, useEffect } from "react";
import Carousel from "react-spring-3d-carousel";
import { v4 as uuidv4 } from 'uuid';
import { config } from "react-spring";
import Pic1 from "../../assets/png/panelist.png";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";

function ImageSlider() {
  const [goToSlide, setGoToSlide] = useState(0);
  const [offsetRadius] = useState(1);
  // const [showNavigation] = useState(true);
  const [carouselConfig] = useState(config.gentle);
  const [autoPlay] = useState(true);
  const [interval] = useState(2500);

  const slides = [
    {
      key: uuidv4(),
      content: <img src={Pic1} width="550rem" height="500rem" alt="1" />
    },
    {
      key: uuidv4(),
      content: <img src={Pic1} width="500rem" height="500rem" alt="2" />
    },
    {
      key: uuidv4(),
      content: <img src={Pic1} width="500rem" height="500rem" alt="3" />
    },
    {
      key: uuidv4(),
      content: <img src={Pic1} width="500rem" height="500rem" alt="4" />
    },
    {
      key: uuidv4(),
      content: <img src={Pic1} width="500rem" height="500rem" alt="5" />
    },
    {
      key: uuidv4(),
      content: <img src={Pic1} width="500rem" height="500rem" alt="6" />
    },
    {
      key: uuidv4(),
      content: <img src={Pic1} width="500rem" height="500rem" alt="7" />
    },
    {
      key: uuidv4(),
      content: <img src={Pic1} width="500rem" height="500rem" alt="8" />
    }
  ];

  useEffect(() => {
    function startAutoPlay() {
      const autoPlayInterval = setInterval(() => {
        setGoToSlide((prevGoToSlide) => (prevGoToSlide + 1) % slides.length);
      }, interval);

      return () => {
        clearInterval(autoPlayInterval);
      };
    }

    const stopAutoPlay = startAutoPlay();

    return () => {
      stopAutoPlay();
    };
  }, [interval, slides.length]);

  return (
    <div className="panelist__caroussel" data-aos="fade-up">
        <button className="panelist__caroussel__btn" onClick={() => {
              setGoToSlide((prevGoToSlide) => prevGoToSlide - 1);
            }} data-aos="fade-up"><FaAngleLeft /></button>
        <div className="panelist__caroussel__img" data-aos="fade-up">
          <Carousel
            slides={slides}
            goToSlide={goToSlide}
            offsetRadius={offsetRadius}
            animationConfig={carouselConfig}
            autoPlay={autoPlay}
            interval={interval}
          />
        </div>

        <button className="panelist__caroussel__btn" onClick={() => {
              setGoToSlide((prevGoToSlide) => prevGoToSlide + 1);
            }} data-aos="fade-up"><FaAngleRight /></button>
      </div>
  );
}

export default ImageSlider;
