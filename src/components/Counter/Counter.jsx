import React, { useState, useEffect } from "react";
import './Counter.css'
const calculateTimeLeft = () => {
  let difference = +new Date("2023-10-14T09:30:00+05:30") - +new Date(); // MM/DD/YYYY
  let timeLeft = {};

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  } else {
    timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  }

  return timeLeft;
};

const Counter = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <div className="timer__container">
      <div className="timer__box">
        <div className="hr__box">
          <p className="time__digit">{timeLeft.days}</p>
          <p className="time__unit">DAYS</p>
        </div>
        <div className="hr__box">
          <p className="time__digit">{timeLeft.hours}</p>
          <p className="time__unit">HOURS</p>
        </div>
        <div className="hr__box">
          <p className="time__digit">{timeLeft.minutes}</p>
          <p className="time__unit">MINUTES</p>
        </div>
        <div className="hr__box">
          <p className="time__digit">{timeLeft.seconds}</p>
          <p className="time__unit">SECONDS</p>
        </div>
      </div>
    </div>
  );
};

export default Counter;
