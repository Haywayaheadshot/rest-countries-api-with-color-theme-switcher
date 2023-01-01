import React, { useState } from 'react';
import dayImg from '../../assets/images/day.png';
import nightImg from '../../assets/images/night-mode.png';
import '../../styles/dark-mode.css';

function DarkMode() {
  const [day, night] = useState(false);
  const { body } = document;

  if (day) {
    body.classList.add('night');
    body.classList.remove('day');
  } else {
    body.classList.replace('night', 'day');
  }

  return (
    <div className="dark-mode-container">
      {!day && (
        <button onClick={() => night((day) => !day)} type="button" className="half-moon-btn">
          <img className="half-moon-img" src={dayImg} alt="Day mode" />
          <h2 className="font">Dark Mode</h2>
        </button>
      )}
      {day && (
        <button onClick={() => night((day) => !day)} type="button" className="half-moon-btn">
          <img className="half-moon-img" src={nightImg} alt="Night mode" />
          <h2 className="font">Dark Mode</h2>
        </button>
      )}
    </div>
  );
}

export default DarkMode;
