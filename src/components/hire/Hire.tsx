import React, { useState, FormEvent } from 'react';
import './Hire.scss';
import emailjs from '@emailjs/browser';


const Hire: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [subject, setSubject] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const serviceId = 'service_ntok78m';
    const templateId = 'template_bk7bw3l';
    const publicKey = 'Ahcb3l3w0yDHnjCIC';

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: 'Eyitayo Sulaimon',
      message: message,
      subject: subject,
      phone: phone,
    };

   emailjs.send(serviceId, templateId, templateParams, publicKey)
    .then((response) => {
      alert(`Email sent successfully`);
      console.log('Email sent successfully', response);
      setName('');
      setEmail('');
      setPhone('');
      setSubject('');
      setMessage('');
    })
    .catch((error) => {
      console.error('Error sending email', error);
    });
  };

  return (
    <div>
      <div className="profile">
        <div className="info">
          <h1>
            <span>Contact</span> Me
          </h1>
          <form onSubmit={handleSubmit} className="form" method="POST">
            <div className="input-box">
              <label htmlFor="full-name"></label>
              <input
                type="text"
                placeholder="Full Name"
                id="full-name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />

              <label htmlFor="email"></label>
              <input
                type="email"
                placeholder="Email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="input-box">
            <label htmlFor="phone-number">Phone</label>
             <input
             type="phone-number"
             id="phone-number"
             placeholder="Phone Number"
             value={phone}
             onChange={(e) => setPhone(e.target.value)}
             aria-label="Phone Number"
               />


              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                placeholder="Subject"
                id="subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
            </div>

            <textarea
              id="message"
              cols={30}
              rows={10}
              name="message"
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <input type="submit" value="Send Message" className="btn-1" id="submit" />
          </form>
        </div>
      </div>
      
    </div>
  );
};

export default Hire;
