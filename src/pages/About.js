import React from 'react';
import './About.css'; // Import the CSS file for styling
import AboutUsImage from '../assets/aboutUsImage.png'; //image path

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        {/* Image Section */}
        <div className="about-image">
        <img src={AboutUsImage} alt="Human X-Ray" />
        </div>

        {/* Text Content */}
        <div className="about-text">
          <h1>About ClariX-RAY</h1>
          <p>
            Welcome to <b>Quick Scan: AI-Powered X-Ray Evaluation</b> Our mission is to assist healthcare professionals by providing a reliable and efficient platform for analyzing X-ray images. With the power of artificial intelligence, our system focuses on detecting bone fractures and other abnormalities, delivering quick and accurate insights. Our goal is to bridge the gap between technology and medicine, offering doctors a supportive tool that enhances patient care. Whether you’re a medical professional or a curious user, our platform is designed to be user-friendly, reliable, and informative.
            <br /><br />
            <b>Thank you for choosing Quick Scan to revolutionize X-ray analysis with advanced AI.</b>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
