import React from 'react';
import './Portfolio.scss';
import { FiExternalLink } from "react-icons/fi";



const Portfolio: React.FC = () => {
  return (
    <div id='portfolio'>
      <div className="container">
    <h1 className='sub-title'> <span>My </span> Work</h1>
   <div className="work-list">
     <div className="work">
       <img src="/images/wk1.jpeg" width='280px' height='320px' alt="" />
       <div className="layer">
        <h3>E-commerce Website</h3>
        <p>This is a responsive E-commerce website built with React.js. It allows users to browse and purchase products online.</p>
        <a href="https://github.com/eyitayojjfj/HoneyWealth"><FiExternalLink /></a>
       </div>
     </div>

     <div className="work">
       <img src="/images/wk2.jpeg" width='280px' height='320px' alt="" />
       <div className="layer">
        <h3>Weather app</h3>
        <p>user-friendly web application built with React that allows users to check real-time weather conditions for any location around the world. Leveraging APIs for weather data.</p>
       <a href="https://github.com/eyitayojjfj/Weather-App"><FiExternalLink /></a>
       </div>
     </div>

     <div className="work">
      <img src="/images/wk3.jpeg" width='20px' height='320px' alt="" />
      <div className="layer">
        <h3>Portfolio Website</h3>
        <p>This portfolio website is a personal showcase built using React, TypeScript, and Sass. It is designed to highlight projects, skills, and experiences while providing an engaging user experience.</p>
       <a href="https://github.com/eyitayojjfj/Portfolio-website"><FiExternalLink /></a>
       </div>
     </div>

    
   </div>
     <a href='https://github.com/eyitayojjfj' className="btn">See more</a>
    </div>
    </div>
  );
};export default Portfolio;
