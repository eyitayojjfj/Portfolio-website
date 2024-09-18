import React from 'react';
import './Hire.scss'; 
const Hire: React.FC = () => {
  return (
    <>

      <div id="body">
        <div className="profile">
          <div className="info">
            <h1><span>Contact</span> Me</h1>
            <form action="mailto:sulaimoneyitayo@gmail.com" className="form" method="POST">
              <div className="input-box">
                <input type="text" placeholder="Full Name" id="full-name" required />
                <input type="email" placeholder="Email" id="email" required />
              </div>

              <div className="input-box">
                <input type="tel" placeholder="Phone Number" id="phone-number" />
                <input type="text" placeholder="Subject" id="subject" />
              </div>
              
              <textarea id="message" cols={30} rows={10} name="message" placeholder="Your Message"></textarea>
              <input type="submit" value="Send Message" className="btn-1" id="submit" />
            </form>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default Hire;
