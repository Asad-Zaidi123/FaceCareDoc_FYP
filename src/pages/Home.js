import React from 'react';
import './Home.css';
import humanImage from '../assets/login.png'; // image path

const Home = () => {
  return (
    <div className="home-container">
      {/* Green Section */}
      <div className="green-section">
        <div className="text-content">
          <h1>
            AI-Powered X-Ray
            </h1>
            <h2>
            Evaluation for Accurate
            Fast Results
          </h2>
          <h4>This platform helps analyze Bone X-rays <br />
              using AI-powered tools</h4>
          <button className="read-more-button" onClick={() => window.location.href = '/about'}>
            Read More
          </button>
        </div>
        <div className="image-content">
          <img src={humanImage} alt="Human X-Ray" />
        </div>
      </div>
    </div>
  );
};

export default Home;
