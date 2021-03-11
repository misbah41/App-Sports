
import React from 'react';
import './Banner.css';
import homeBanner from '../Home/img-banner/banner.jpg'
const Banner = () => {
  return (
    <>
      <div style={{ backgroundImage: `linear-gradient(0deg, rgb(126 126 126 / 56%), rgb(58 58 58 / 79%)),url(${homeBanner})` }} className=" banner">
        <h2>The Sport Premier Leagues</h2>
      </div>
    </>
  );
};

export default Banner;


