import React from 'react';
import './About.scss';


const About: React.FC = () => {
  return (
    <>

      <div className="profile">
        <header className="sport">
          <h1><span>About</span> Me</h1>
        </header>

        <section className="info">
            <div>
          <h2>CAREER OBJECTIVE</h2><br /><br />
          <p>
            A dedicated and highly motivated Front-End web developer seeking <br />an 
            internship position to apply academic knowledge and gain <br />  practical experience 
            in front end development.
          </p>
          </div>

          <div className='img1'>
          <img src="/images/web.jpeg" width='400px' height='350px' alt="" />
          </div>
        </section><br /><br />


        <section className="info">
        <div className='img2'>
          <img src="/images/web2.jpeg" width='330px' height='300px' alt="" />
          </div>


          <div>
          <h2>SKILLS</h2><br /><br />
          <p>
             HTML  CSS  Javascript  REACT  JSX  REDUX <br />
             Responsive UI  State Management  CSS Preprocessors. <br />
             Version Control/GIT  Browser Developer Tools TeamWork <br />
             Soft Skills  Willingness To Learn.
          </p>
          </div>
        </section><br /><br />


        <section className="info">
            <div>
          <h2>EDUCATION</h2><br /><br />
          <p>
             University Of Lagos - Bachelor Of Finance (in view, 2024) <br />
             GOMYCODE - Front-End Development (2023-2024) <br />
             Senior Secondary School Certificate - International School University Of Lagos, Akoka, Lagos State (2017-2023)  
          </p>
          </div>

          <div className='img1'>
          <img src="/images/bks.jpeg" width='400px' height='350px' alt="" />
          </div>
        </section>


        <section className="info">
        <div className='img1'>
          <img src="/images/code.jpeg" width='400px' height='350px' alt="" />
          </div>
          
          <div>
          <h2>CERTIFICATES</h2><br /><br />
          <p>
             GOMYCODE Introduction To Web Development <br />
             GOMYCODE Front-End Developer React JS Certified <br />
            <a href="Sulaimon Eyitayo-Front End Developer - React JS Certified Certificate of Completion.pdf" target="_blank" rel="noopener noreferrer">Download Certificate</a>
          </p>
          <div className="images">
          <img className="pic1" src="/images/gomy.jpg" width="200px" height="180px"/>
          <img className="pic2" src="/images/gmc.jpg" width="200px" height="180px"/>
          </div>
          </div>
        </section>
      </div>

    </>
  );
}

export default About;
