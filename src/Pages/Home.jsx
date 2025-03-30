import React from 'react';
import Header from '../Nav_Bar/Header';
import Footer from '../components/Footer/Footer';
import '../Styles/Home.css';

const Home = () => {
    return (
        <div>
            <Header />
            <div className="container">
                <div className="content-box">
                    {/* Left Section */}
                    <div className="text-section">
                        <h2 className="site-name">Deszone.net</h2>
                        <h1 className="title">Skin Disease</h1>
                        <p className="description">
                            Skin disease vector design concept. Diagnostics dermatology. Skin
                            treatment. Doctor with medical equipment looking on pimples at
                            character.
                        </p>
                        <button className="read-more-btn">READ MORE</button>
                    </div>

                    {/* Right Section - Illustration */}
                    <div className="image-section">
                    <img src='/Assets/home.png' alt="Skin Disease Illustration" className="illustration" />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Home;