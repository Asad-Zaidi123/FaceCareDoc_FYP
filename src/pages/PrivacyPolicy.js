import React from "react";
import "./PrivacyPolicy.css";

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy">
      <h1>Privacy Policy</h1>
      <p>
        At <b>Quick Scan</b>, we value your privacy and aim to keep your data secure. 
        This Privacy Policy explains how we handle your information <br></br><br></br>when you use our website.
      </p>

      <h2>1. Information We Collect</h2>
      <p>We collect only the data needed to provide and improve our service. This includes:</p>
      <ul>
        <li>Your name, email address, and contact details (if you create an account).</li>
        <li>X-ray images uploaded for evaluation.</li>
        <li>Usage data like device type and activity on the site.</li>
      </ul>
      <p>We collect this information to ensure smooth service and accurate AI analysis.</p>

      <h2>2. How We Use Your Data</h2>
      <p>Your data helps us:</p>
      <ul>
        <li>Analyze X-rays for bone-related issues.</li>
        <li>Improve the accuracy of our AI models.</li>
        <li>Communicate important updates or support information to you.</li>
      </ul>
      <p><b>We never sell or share your data for marketing purposes.</b></p>

      <h2>3. How We Protect Your Data</h2>
      <p>Your data is stored securely:</p>
      <ul>
        <li>Uploaded images are encrypted during upload and storage.</li>
        <li>Only authorized staff can access the data.</li>
        <li>All X-rays are deleted automatically after <b>[30 days]</b> to protect your privacy.</li>
      </ul>
      <p>Please remember that while we work hard to protect your data, no online platform can guarantee 100% security.</p>

      <h2>4. Consumer Rights</h2>
      <p>You can:</p>
      <ul>
        <li>Ask us to show or delete your data.</li>
        <li>Correct any personal information if needed.</li>
      </ul>
      <p>If you have questions or requests, email us at <a href="mailto:email@example.com">email@example.com</a>.</p>

      <h2>5. Cookies</h2>
      <p>
        We use cookies to make your experience better. Cookies help us remember your preferences and improve website performance. 
        <br></br><br></br>You can disable cookies through your browser if preferred.
      </p>

      <h2>6. Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy occasionally. Changes will be posted here with the date of the update.
      </p>

      <h2>7. Contact Us</h2>
      <p>
        For questions or concerns, email us at <a href="mailto:email@example.com">email@example.com</a>.
      </p>

      <p><b>Thank you for trusting Quick Scan. We are committed to keeping your data safe</b></p>
    </div>
  );
};

export default PrivacyPolicy;
