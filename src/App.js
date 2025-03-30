import React from 'react'; // Import React for building components
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import routing components
import Header from './components/Header'; // Import the Header component
import Footer from './components/Footer'; // Import the Footer component
import Home from './pages/Home'; // Import the Home page
import About from './pages/About'; // Import the About page
import LoginSignup from './pages/LoginSignup'; // Import the LoginSignup page
import XRayUpload from './pages/XRayUpload'; // Import the X-Ray Upload page
import Result from './pages/Result'; // Import the Result page
import FAQ from "./pages/FAQ"; // Import the FAQ page
import PrivacyPolicy from './pages/PrivacyPolicy';  // Import the Privacy Policy page
import TermsAndConditions from './pages/TermsAndConditions'; // Import the Terms and Conditions page

const App = () => {
  return (
    <Router>
      {/* The Router component enables routing in the app */}
      <Header />
      {/* Header is a shared component that will be displayed on all pages */}
      
      <main>
        {/* The main content area of the app */}
        <Routes>
          {/* Routes define the different paths of the application */}
          <Route path="/" element={<Home />} />
          {/* Renders the Home page when the user is at the root URL ("/") */}
          
          <Route path="/about" element={<About />} />
          {/* Renders the About page when the user navigates to "/about" */}
          
          <Route path="/login" element={<LoginSignup />} />
          {/* Renders the LoginSignup page when the user navigates to "/login" */}
          
          <Route path="/upload" element={<XRayUpload />} />
          {/* Renders the X-Ray Upload page when the user navigates to "/upload" */}
          
          <Route path="/result" element={<Result />} />
          {/* Renders the Result page when the user navigates to "/result" */}
          
          <Route path="/faq" element={<FAQ />} />
          {/* Renders the FAQ page when the user navigates to "/faq" */}
          
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          {/* Renders the Privacy Policy page when the user navigates to "/privacy-policy" */}
          
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          {/* Renders the Terms and Conditions page when the user navigates to "/terms-and-conditions" */}
        </Routes>
      </main>
      
      <Footer />
      {/* Footer is a shared component that will be displayed on all pages */}
    </Router>
  );
};

export default App;
