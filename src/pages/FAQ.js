import React from 'react';
// import backgroundImg from '../assets/background.jpg'; // Adjust path accordingly
import './FAQ.css';

const FAQ = () => {
  return (
    <div className="faq-container">
      <h1 className="faq-title">Frequently Asked Questions</h1>
      <div className="faq-content">
        <div className="faq-item">
          <h2>1. What is Quick Scan: AI-Powered X-Ray Evaluation ?</h2>
          <p>
            Quick Scan is a web-based AI tool that analyzes X-ray images to detect 
            <strong> Bone Fractures</strong> and <strong>Abnormalities.</strong> It assists doctors and patients by
            providing quick, accurate results and further recommendations.
          </p>
        </div>
        <div className="faq-item">
          <h2>2. How does the Quick Scan tool work ?</h2>
          <p>
            The tool uses <b>AI</b> and <b>Machine learning</b> to analyze uploaded X-ray
            images. The system processes the image and detects <b>potential
            fractures or abnormalities.</b> It then provides a detailed result,
            including the affected area and possible next steps.
          </p>
        </div>
        <div className="faq-item">
          <h2>3. What types of X-ray images can I upload ?</h2>
          <ul>
            <li>Arms and legs (upper and lower limbs)</li>
            <li>Spine and vertebrae</li>
            <li>Ribs and chest</li>
            <li>Hands and feet</li>
          </ul>
        </div>
        <div className="faq-item">
          <h2>4. What file formats are supported for uploading ?</h2>
          <ul>
            <li>JPG / JPEG</li>
            <li>PNG</li>
            <li>DICOM</li>
          </ul>
          <p>
            Make sure the image is <strong>clear</strong> and not blurry for
            accurate analysis.
          </p>
        </div>
        <div className="faq-item">
          <h2>5. Who can use this tool ?</h2>
          <p>
          Anyone can use Quick Scan. Doctors can use it as a second opinion, 
          and patients can upload X-rays for quick feedback. It's simple, fast, 
          and user-friendly.
          </p>
        </div>
        <div className="faq-item">
          <h2>6. Do I need to create an account to use this tool ?</h2>
          <p>
          Yes, you need to sign up and log in to securely upload and access your 
          X-ray analysis results.
          </p>
        </div>
        <div className="faq-item">
          <h2>7. Is the Quick Scan tool free to use ?</h2>
          <p>
          Yes, the tool is currently free for basic usage. Future plans may include 
          additional premium features.
          </p>
        </div>
        <div className="faq-item">
          <h2>8. How accurate is the AI analysis ?</h2>
          <p>
            Our AI model has been trained using a large dataset of bone X-rays
            to achieve high accuracy. However, it is <strong>not a replacement
            for medical advice</strong>. Always consult a professional doctor
            to confirm the results.
          </p>
        </div>
        {/* Add more FAQs as needed */}
      </div>
    </div>
  );
};

export default FAQ;
