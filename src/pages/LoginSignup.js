import React, { useState } from 'react'; // Import React and useState for managing component state
import './LoginSignup.css'; // Import CSS for styling the component
import LoginImage from '../assets/login.png'; // Import the login image for the left section

const LoginSignup = () => {
  // State to toggle between Login and Signup forms
  const [isLogin, setIsLogin] = useState(true);

  // Function to toggle the state and switch forms
  const toggleForm = () => {
    setIsLogin(!isLogin); // Inverts the isLogin state
  };

  return (
    <div className="login-signup-container">
      {/* Left Section - Image */}
      <div className="login-signup-image">
        {/* Display the imported image */}
        <img src={LoginImage} alt="Login/Signup Illustration" />
      </div>

      {/* Right Section - Form */}
      <div className="login-signup-form">
        {/* Dynamic Heading based on isLogin state */}
        <h1>{isLogin ? 'Login' : 'Signup'}</h1>

        {/* Form Section */}
        <form>
          {/* Email Input Field */}
          <div className="form-group">
            <label>Email:</label>
            <input type="email" placeholder="Enter your email" required />
          </div>

          {/* Password Input Field */}
          <div className="form-group">
            <label>Password:</label>
            <input type="password" placeholder="Enter your password" required />
          </div>

          {/* Conditional Rendering for Confirm Password (only in Signup form) */}
          {!isLogin && (
            <div className="form-group">
              <label>Confirm Password:</label>
              <input type="password" placeholder="Confirm your password" required />
            </div>
          )}

          {/* Submit Button */}
          <button type="submit">{isLogin ? 'Login' : 'Signup'}</button>
        </form>

        {/* Toggle between Login and Signup forms */}
        <p>
          {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
          <button type="button" onClick={toggleForm}>
            {isLogin ? 'Signup' : 'Login'}
          </button>
        </p>
      </div>
    </div>
  );
};

export default LoginSignup;
