import React, { useState, useEffect } from "react";
import Carousel from "react-spring-3d-carousel";
import { v4 as uuidv4 } from 'uuid';
import { config } from "react-spring";
import Pic1 from "../../assets/png/panelist.png";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";

function ImageSlider() {
  const [goToSlide, setGoToSlide] = useState(0);
  const [offsetRadius, setOffsetRadius] = useState(1);
  const [showNavigation] = useState(true);
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
    <div style={{ width: "50%", height: "500px", margin: "0 auto" }}>
      <Carousel
        slides={slides}
        goToSlide={goToSlide}
        offsetRadius={offsetRadius}
        animationConfig={carouselConfig}
        autoPlay={autoPlay}
        interval={interval}
      />
      <div
        style={{
          margin: "0 auto",
          marginTop: "2rem",
          width: "50%",
          display: "flex",
          justifyContent: "space-around",
          gap: "4rem"
        }}
      >
        <div>
          <button
            onClick={() => {
              setGoToSlide((prevGoToSlide) => prevGoToSlide - 1);
            }}
            className="left__button"
          >
            <FaAngleLeft />
          </button>
          &nbsp; &nbsp; &nbsp; &nbsp;
          <button
            onClick={() => {
              setGoToSlide((prevGoToSlide) => prevGoToSlide + 1);
            }}
            className="right__button"
          >
            <FaAngleRight />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ImageSlider;
