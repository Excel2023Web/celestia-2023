import React, { Component } from "react";
import Carousel from "react-spring-3d-carousel";
import { v4 as uuidv4 } from 'uuid';
import { config } from "react-spring";
import Pic1 from "../../assets/png/panelist.png";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";

export default class ImageSlider extends Component {
  state = {
    goToSlide: 0,
    offsetRadius: 1,
    showNavigation: true,
    config: config.gentle,
    autoPlay: true,
    interval: 2500, 
  };

  componentDidMount() {
    this.startAutoPlay();
  }

  componentWillUnmount() {
    this.stopAutoPlay();
  }

  startAutoPlay() {
    this.autoPlayInterval = setInterval(() => {
      this.setState((prevState) => ({
        goToSlide: (prevState.goToSlide + 1) % this.slides.length,
      }));
    }, this.state.interval);
  }

  stopAutoPlay() {
    clearInterval(this.autoPlayInterval);
  }

  slides = [
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

  render() {
    return (
      <div style={{ width: "50%", height: "500px", margin: "0 auto" }}>
        <Carousel
          slides={this.slides}
          goToSlide={this.state.goToSlide}
          offsetRadius={this.state.offsetRadius}
          animationConfig={this.state.config}
          autoPlay={this.state.autoPlay}
          interval={this.state.interval}
        />
        <div
          style={{
            margin: "0 auto",
            marginTop: "2rem",
            width: "50%",
            display: "flex",
            justifyContent: "space-around",
            gap:"4rem"
          }}
        >
          <div>
            <button
              onClick={() => {
                this.setState({ goToSlide: this.state.goToSlide - 1 });
              }}
              className="left__button"
            >
              <FaAngleLeft />
            </button>
            &nbsp; &nbsp; &nbsp; &nbsp;
            <button
              onClick={() => {
                this.setState({ goToSlide: this.state.goToSlide + 1 });
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
}
