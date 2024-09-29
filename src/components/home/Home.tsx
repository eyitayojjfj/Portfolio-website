import React from 'react';
import './Home.scss'; 
import { FaGithub } from 'react-icons/fa6';
import { FaLinkedin } from 'react-icons/fa';

const Home: React.FC = () => {
    

  return (
    <div >

        <div id='up'>
          <div id='prof'>
            <div id='in'>
              <h1>I'm <span>Eyitayo</span> Sulaimon</h1>
              <p>
                This is my official portfolio website to showcase all my works related to Front-End web
                <br />development and UI design
              </p>
            <a href='/public/SULAIMON EYITAYO BABAJIDE RESUME.pdf' download><button>Download Resume</button></a>
            </div>
            <div id='imge'>
              <img
                width='300px'
                height='500px'
                src="/images/Tboy.jpg"
                className="back-img"
                alt="Eyitayo Sulaimon"
              />
            </div>
          </div>
        </div>

        <div id='social'>
          <a href="https://www.linkedin.com/in/eyitayo-sulaimon-69400b314/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://github.com/eyitayojjfj" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
        </div>
    
    </div>
  );
};

export default Home;
