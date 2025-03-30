import React from "react";
import "./TermsAndConditions.css";

const TermsAndConditions = () => {
  return (
    <div className="terms-and-conditions">
      <h1>Terms and Conditions</h1>
      <p>
        Welcome to <b>Quick Scan: AI-Powered X-Ray Evaluation</b>! By using our website, you agree to follow 
        these terms and conditions. Please read them carefully before using our services.
      </p>

      <h2>1. Acceptance of Terms</h2>
      <p>
        By accessing or using our platform, you agree to comply with these terms. If you do not agree, please 
        do not use our website.
      </p>

      <h2>2. Purpose of the Service</h2>
      <p>
        Our platform is designed to help users analyze X-ray images for bone-related issues. It is not a 
        replacement for professional medical advice. Always consult a qualified doctor for diagnosis and treatment.
      </p>

      <h2>3. User Responsibilities</h2>
      <ul>
        <li>You must use our platform for lawful purposes only.</li>
        <li>Ensure the X-rays you upload belong to you or that you have permission to upload them.</li>
        <li>Avoid uploading harmful or offensive content.</li>
      </ul>

      <h2>4. Limitations of Use</h2>
      <p>
        Our service is for personal and non-commercial use only. You cannot resell or misuse the data or results 
        provided by the platform.
      </p>

      <h2>5. Data Handling</h2>
      <ul>
        <li>Uploaded X-rays are processed securely and deleted automatically after <b>[30 days]</b>.</li>
        <li>Personal information like name and email will only be used to improve your experience and for essential communication.</li>
      </ul>

      <h2>6. Disclaimers</h2>
      <p>
        Our AI-powered analysis is based on trained models and may not always be accurate. We are not responsible for any decisions 
        made based on the results provided by the platform.
      </p>

      <h2>7. Termination of Access</h2>
      <p>
        We reserve the right to restrict or terminate access to our platform if these terms are violated.
      </p>

      <h2>8. Changes to Terms</h2>
      <p>
        These terms may be updated from time to time. Users are encouraged to review this page periodically for any changes.
      </p>

      <h2>9. Contact Us</h2>
      <p>
        If you have questions or concerns about these terms, feel free to contact us:
      </p>
      <ul>
        <li>
          <b>Email:</b> <a href="mailto:email@example.com">contact@clarixray.com</a>
        </li>
      </ul>

      <p>
        By continuing to use <b>Quick Scan</b>, you agree to these terms and conditions. Thank you for trusting our platform to assist you!
      </p>
    </div>
  );
};

export default TermsAndConditions;
