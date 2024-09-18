import React from 'react';
import './Home.scss'; 
import { FaGithub } from 'react-icons/fa6';
import { FaLinkedin } from 'react-icons/fa';

const Home: React.FC = () => {

    const downloadResume = () => {
        const link = document.createElement('a');
        link.href = '/public/SULAIMON_EYITAYO_BABAJIDE_RESUME.pdf'; // Update with the correct path
        link.setAttribute('download', 'SULAIMON_EYITAYO_BABAJIDE_RESUME.pdf');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      };
    

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
              <a onClick={downloadResume}>Download Resume</a>
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
