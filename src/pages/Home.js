import React from 'react';
import DisplayCountries from '../components/dep/DisplayCountries';
import '../styles/home.css';

function Home() {
  return (
    <div className="home-container">
      <DisplayCountries />
    </div>
  );
}

export default Home;
