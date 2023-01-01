import React from 'react';
import DarkMode from './dep/DarkMode';
import '../styles/nav-bar.css';

function NavBar() {
  return (
    <div className="nav-bar-container">
      <h3 className="font">Where in the world?</h3>
      <DarkMode />
    </div>
  );
}

export default NavBar;
