import './App.css';
import { useState } from 'react';

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Header */}
      <header className="header">
        <div className="nav">
          <div className="logo">
            <svg className="location-icon" width="40" height="40" viewBox="0 0 40 40" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <circle cx="20" cy="20" r="18" stroke="#6366f1" strokeWidth="4" fill="none" />
              <path
                d="M20 8C16.686 8 14 10.686 14 14C14 18.5 20 28 20 28S26 18.5 26 14C26 10.686 23.314 8 20 8ZM20 17C18.343 17 17 15.657 17 14C17 12.343 18.343 11 20 11C21.657 11 23 12.343 23 14C23 15.657 21.657 17 20 17Z"
                fill="#6366f1" />
            </svg>
            <span>Know Your <span className="trips-text">Trips</span></span>
          </div>
          <nav className="nav-links">
            <a href="#blogs">Blogs</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>
          <button className="mobile-menu-btn" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? '✕' : '☰'}
          </button>
          <button className="download-btn">Download the App</button>
        </div>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
          <nav className="mobile-nav-links">
            <a href="#blogs" onClick={toggleMobileMenu}>Blogs</a>
            <a href="#about" onClick={toggleMobileMenu}>About</a>
            <a href="#contact" onClick={toggleMobileMenu}>Contact</a>
            <button className="mobile-download-btn" onClick={toggleMobileMenu}>Download the App</button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <p className="vision-text">OUR VISION IS TO-</p>
              <h1>EMPOWER EVERY JOURNEY WITH<br />SAFETY</h1>
              <div className="hero-buttons">
                <button className="download-btn primary">Download the App</button>
                <button className="product-hunt-btn">Find us on Product Hunt</button>
              </div>
            </div>
            <div className="hero-image">
              <div className="app-mockup-container">
                {/* Main circular city image */}
                <div className="city-image-main"></div>

                {/* Safety Score Card */}
                <div className="safety-score-card">
                  <div className="safety-header">
                    <span className="check-icon">✓</span>
                    <span className="safety-label">Safety Score</span>
                    <span className="location-label">Dublin</span>
                  </div>
                  <div className="safety-score-large">8.5</div>
                  <p className="safety-status">Generally Safe</p>
                  <p className="safety-description">Very Similar to your home neighbourhood</p>
                  <button className="know-more-btn">Know More &gt;</button>
                </div>

                {/* Weather Alert Card */}
                <div className="weather-alert-card">
                  <div className="alert-icon">🌫️</div>
                  <div className="alert-content">
                    <p className="alert-title">Dense Fog And Cold Wave Forecast</p>
                    <p className="alert-subtitle">For Kota Region</p>
                    <p className="alert-time">6 hours from</p>
                  </div>
                </div>

                {/* Map background with pins */}
                <div className="map-background">
                  <div className="map-pin pin-1"></div>
                  <div className="map-pin pin-2"></div>
                  <div className="map-pin pin-3"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <div className="feature-cards">
            <div className="feature-card">
              <div className="feature-icon">✨</div>
              <h3>AI Safety Intelligence</h3>
              <p>Smart Suggestions And Planning</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🛡️</div>
              <h3>Risk Assessment</h3>
              <p>Evaluate Locations Before You Go</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔔</div>
              <h3>Real-Time Incident Alerts</h3>
              <p>Know Your Safety</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about">
        <div className="container">
          <div className="about-content">
            <div className="about-left">
              <div className="placeholder-grid">
                {Array.from({ length: 40 }, (_, i) => (
                  <div key={i} className="placeholder-block"></div>
                ))}
              </div>
            </div>
            <div className="about-right">
              <h2>About</h2>
              <h3>REAL-TIME SAFETY INTELLIGENCE FOR TRAVELLERS</h3>
              <p>Introducing Knowyourtrips, The Dedicated App Designed To Inform And Empower Every Traveler. We Deliver Real-Time Safety Intelligence—Not Just General Advice—To Help You Actively Avoid Incidents That Could Disrupt Your Journey. Navigate Any City, New Or Familiar, With The Confidence That Comes From Knowing The Ground Truth. Your Peace Of Mind Starts Here.</p>
            </div>
          </div>
        </div>
      </section>

      {/* App Download Section */}
      <section className="app-download">
        <div className="download-container">
          <div className="download-content">
            <div className="download-text">
              <h2>Get real-time safety alerts on your phone with our app</h2>
              <p>Get real-time safety alerts on your phone with our app</p>
              <div className="qr-code">
                <svg width="120" height="120" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* White background */}
                  <rect x="0" y="0" width="29" height="29" fill="white" />
                  {/* Top-left position square */}
                  <rect x="2" y="2" width="7" height="7" fill="black" />
                  <rect x="3" y="3" width="5" height="5" fill="white" />
                  <rect x="4" y="4" width="3" height="3" fill="black" />

                  {/* Top-right position square */}
                  <rect x="20" y="2" width="7" height="7" fill="black" />
                  <rect x="21" y="3" width="5" height="5" fill="white" />
                  <rect x="22" y="4" width="3" height="3" fill="black" />

                  {/* Bottom-left position square */}
                  <rect x="2" y="20" width="7" height="7" fill="black" />
                  <rect x="3" y="21" width="5" height="5" fill="white" />
                  <rect x="4" y="22" width="3" height="3" fill="black" />

                  {/* Timing patterns */}
                  <rect x="10" y="8" width="1" height="1" fill="black" />
                  <rect x="12" y="8" width="1" height="1" fill="black" />
                  <rect x="14" y="8" width="1" height="1" fill="black" />
                  <rect x="16" y="8" width="1" height="1" fill="black" />
                  <rect x="18" y="8" width="1" height="1" fill="black" />

                  <rect x="8" y="10" width="1" height="1" fill="black" />
                  <rect x="8" y="12" width="1" height="1" fill="black" />
                  <rect x="8" y="14" width="1" height="1" fill="black" />
                  <rect x="8" y="16" width="1" height="1" fill="black" />
                  <rect x="8" y="18" width="1" height="1" fill="black" />

                  {/* Data pattern - Row 0 */}
                  <rect x="11" y="2" width="1" height="1" fill="black" />
                  <rect x="13" y="2" width="1" height="1" fill="black" />
                  <rect x="14" y="2" width="1" height="1" fill="black" />
                  <rect x="17" y="2" width="1" height="1" fill="black" />
                  <rect x="18" y="2" width="1" height="1" fill="black" />

                  {/* Data pattern - Row 1 */}
                  <rect x="10" y="3" width="1" height="1" fill="black" />
                  <rect x="12" y="3" width="1" height="1" fill="black" />
                  <rect x="13" y="3" width="1" height="1" fill="black" />
                  <rect x="15" y="3" width="1" height="1" fill="black" />
                  <rect x="17" y="3" width="1" height="1" fill="black" />
                  <rect x="19" y="3" width="1" height="1" fill="black" />

                  {/* Data pattern - Row 2 */}
                  <rect x="10" y="4" width="1" height="1" fill="black" />
                  <rect x="11" y="4" width="1" height="1" fill="black" />
                  <rect x="14" y="4" width="1" height="1" fill="black" />
                  <rect x="16" y="4" width="1" height="1" fill="black" />
                  <rect x="17" y="4" width="1" height="1" fill="black" />
                  <rect x="19" y="4" width="1" height="1" fill="black" />

                  {/* Data pattern - Row 3 */}
                  <rect x="10" y="5" width="1" height="1" fill="black" />
                  <rect x="12" y="5" width="1" height="1" fill="black" />
                  <rect x="15" y="5" width="1" height="1" fill="black" />
                  <rect x="16" y="5" width="1" height="1" fill="black" />
                  <rect x="18" y="5" width="1" height="1" fill="black" />
                  <rect x="19" y="5" width="1" height="1" fill="black" />

                  {/* Data pattern - Row 4 */}
                  <rect x="10" y="6" width="1" height="1" fill="black" />
                  <rect x="11" y="6" width="1" height="1" fill="black" />
                  <rect x="13" y="6" width="1" height="1" fill="black" />
                  <rect x="14" y="6" width="1" height="1" fill="black" />
                  <rect x="16" y="6" width="1" height="1" fill="black" />
                  <rect x="18" y="6" width="1" height="1" fill="black" />
                  <rect x="19" y="6" width="1" height="1" fill="black" />

                  {/* Data pattern - Row 5 */}
                  <rect x="10" y="7" width="1" height="1" fill="black" />
                  <rect x="12" y="7" width="1" height="1" fill="black" />
                  <rect x="13" y="7" width="1" height="1" fill="black" />
                  <rect x="15" y="7" width="1" height="1" fill="black" />
                  <rect x="17" y="7" width="1" height="1" fill="black" />
                  <rect x="19" y="7" width="1" height="1" fill="black" />

                  {/* Data pattern - Row 7 */}
                  <rect x="11" y="9" width="1" height="1" fill="black" />
                  <rect x="12" y="9" width="1" height="1" fill="black" />
                  <rect x="14" y="9" width="1" height="1" fill="black" />
                  <rect x="16" y="9" width="1" height="1" fill="black" />
                  <rect x="17" y="9" width="1" height="1" fill="black" />
                  <rect x="19" y="9" width="1" height="1" fill="black" />

                  {/* Data pattern - Row 8 */}
                  <rect x="2" y="10" width="1" height="1" fill="black" />
                  <rect x="4" y="10" width="1" height="1" fill="black" />
                  <rect x="5" y="10" width="1" height="1" fill="black" />
                  <rect x="6" y="10" width="1" height="1" fill="black" />
                  <rect x="10" y="10" width="1" height="1" fill="black" />
                  <rect x="11" y="10" width="1" height="1" fill="black" />
                  <rect x="13" y="10" width="1" height="1" fill="black" />
                  <rect x="15" y="10" width="1" height="1" fill="black" />
                  <rect x="17" y="10" width="1" height="1" fill="black" />
                  <rect x="18" y="10" width="1" height="1" fill="black" />
                  <rect x="20" y="10" width="1" height="1" fill="black" />
                  <rect x="21" y="10" width="1" height="1" fill="black" />
                  <rect x="23" y="10" width="1" height="1" fill="black" />
                  <rect x="24" y="10" width="1" height="1" fill="black" />
                  <rect x="26" y="10" width="1" height="1" fill="black" />

                  {/* Data pattern - Row 9 */}
                  <rect x="3" y="11" width="1" height="1" fill="black" />
                  <rect x="5" y="11" width="1" height="1" fill="black" />
                  <rect x="7" y="11" width="1" height="1" fill="black" />
                  <rect x="10" y="11" width="1" height="1" fill="black" />
                  <rect x="12" y="11" width="1" height="1" fill="black" />
                  <rect x="14" y="11" width="1" height="1" fill="black" />
                  <rect x="16" y="11" width="1" height="1" fill="black" />
                  <rect x="18" y="11" width="1" height="1" fill="black" />
                  <rect x="19" y="11" width="1" height="1" fill="black" />
                  <rect x="21" y="11" width="1" height="1" fill="black" />
                  <rect x="22" y="11" width="1" height="1" fill="black" />
                  <rect x="24" y="11" width="1" height="1" fill="black" />
                  <rect x="26" y="11" width="1" height="1" fill="black" />

                  {/* Data pattern - Row 10 */}
                  <rect x="2" y="12" width="1" height="1" fill="black" />
                  <rect x="4" y="12" width="1" height="1" fill="black" />
                  <rect x="6" y="12" width="1" height="1" fill="black" />
                  <rect x="10" y="12" width="1" height="1" fill="black" />
                  <rect x="11" y="12" width="1" height="1" fill="black" />
                  <rect x="13" y="12" width="1" height="1" fill="black" />
                  <rect x="15" y="12" width="1" height="1" fill="black" />
                  <rect x="17" y="12" width="1" height="1" fill="black" />
                  <rect x="19" y="12" width="1" height="1" fill="black" />
                  <rect x="20" y="12" width="1" height="1" fill="black" />
                  <rect x="22" y="12" width="1" height="1" fill="black" />
                  <rect x="23" y="12" width="1" height="1" fill="black" />
                  <rect x="25" y="12" width="1" height="1" fill="black" />
                  <rect x="26" y="12" width="1" height="1" fill="black" />

                  {/* Data pattern - Row 11 */}
                  <rect x="3" y="13" width="1" height="1" fill="black" />
                  <rect x="5" y="13" width="1" height="1" fill="black" />
                  <rect x="7" y="13" width="1" height="1" fill="black" />
                  <rect x="10" y="13" width="1" height="1" fill="black" />
                  <rect x="12" y="13" width="1" height="1" fill="black" />
                  <rect x="14" y="13" width="1" height="1" fill="black" />
                  <rect x="16" y="13" width="1" height="1" fill="black" />
                  <rect x="18" y="13" width="1" height="1" fill="black" />
                  <rect x="20" y="13" width="1" height="1" fill="black" />
                  <rect x="21" y="13" width="1" height="1" fill="black" />
                  <rect x="23" y="13" width="1" height="1" fill="black" />
                  <rect x="25" y="13" width="1" height="1" fill="black" />

                  {/* Data pattern - Row 12 */}
                  <rect x="2" y="14" width="1" height="1" fill="black" />
                  <rect x="4" y="14" width="1" height="1" fill="black" />
                  <rect x="6" y="14" width="1" height="1" fill="black" />
                  <rect x="10" y="14" width="1" height="1" fill="black" />
                  <rect x="11" y="14" width="1" height="1" fill="black" />
                  <rect x="13" y="14" width="1" height="1" fill="black" />
                  <rect x="15" y="14" width="1" height="1" fill="black" />
                  <rect x="17" y="14" width="1" height="1" fill="black" />
                  <rect x="19" y="14" width="1" height="1" fill="black" />
                  <rect x="21" y="14" width="1" height="1" fill="black" />
                  <rect x="22" y="14" width="1" height="1" fill="black" />
                  <rect x="24" y="14" width="1" height="1" fill="black" />
                  <rect x="26" y="14" width="1" height="1" fill="black" />

                  {/* Data pattern - Row 13 */}
                  <rect x="3" y="15" width="1" height="1" fill="black" />
                  <rect x="5" y="15" width="1" height="1" fill="black" />
                  <rect x="7" y="15" width="1" height="1" fill="black" />
                  <rect x="10" y="15" width="1" height="1" fill="black" />
                  <rect x="12" y="15" width="1" height="1" fill="black" />
                  <rect x="14" y="15" width="1" height="1" fill="black" />
                  <rect x="16" y="15" width="1" height="1" fill="black" />
                  <rect x="18" y="15" width="1" height="1" fill="black" />
                  <rect x="20" y="15" width="1" height="1" fill="black" />
                  <rect x="22" y="15" width="1" height="1" fill="black" />
                  <rect x="23" y="15" width="1" height="1" fill="black" />
                  <rect x="25" y="15" width="1" height="1" fill="black" />

                  {/* Data pattern - Row 14 */}
                  <rect x="2" y="16" width="1" height="1" fill="black" />
                  <rect x="4" y="16" width="1" height="1" fill="black" />
                  <rect x="6" y="16" width="1" height="1" fill="black" />
                  <rect x="10" y="16" width="1" height="1" fill="black" />
                  <rect x="11" y="16" width="1" height="1" fill="black" />
                  <rect x="13" y="16" width="1" height="1" fill="black" />
                  <rect x="15" y="16" width="1" height="1" fill="black" />
                  <rect x="17" y="16" width="1" height="1" fill="black" />
                  <rect x="19" y="16" width="1" height="1" fill="black" />
                  <rect x="21" y="16" width="1" height="1" fill="black" />
                  <rect x="23" y="16" width="1" height="1" fill="black" />
                  <rect x="24" y="16" width="1" height="1" fill="black" />
                  <rect x="26" y="16" width="1" height="1" fill="black" />

                  {/* Data pattern - Row 15 */}
                  <rect x="3" y="17" width="1" height="1" fill="black" />
                  <rect x="5" y="17" width="1" height="1" fill="black" />
                  <rect x="7" y="17" width="1" height="1" fill="black" />
                  <rect x="10" y="17" width="1" height="1" fill="black" />
                  <rect x="12" y="17" width="1" height="1" fill="black" />
                  <rect x="14" y="17" width="1" height="1" fill="black" />
                  <rect x="16" y="17" width="1" height="1" fill="black" />
                  <rect x="18" y="17" width="1" height="1" fill="black" />
                  <rect x="20" y="17" width="1" height="1" fill="black" />
                  <rect x="22" y="17" width="1" height="1" fill="black" />
                  <rect x="24" y="17" width="1" height="1" fill="black" />
                  <rect x="25" y="17" width="1" height="1" fill="black" />

                  {/* Data pattern - Row 16 */}
                  <rect x="2" y="18" width="1" height="1" fill="black" />
                  <rect x="4" y="18" width="1" height="1" fill="black" />
                  <rect x="6" y="18" width="1" height="1" fill="black" />
                  <rect x="10" y="18" width="1" height="1" fill="black" />
                  <rect x="11" y="18" width="1" height="1" fill="black" />
                  <rect x="13" y="18" width="1" height="1" fill="black" />
                  <rect x="15" y="18" width="1" height="1" fill="black" />
                  <rect x="17" y="18" width="1" height="1" fill="black" />
                  <rect x="19" y="18" width="1" height="1" fill="black" />
                  <rect x="21" y="18" width="1" height="1" fill="black" />
                  <rect x="23" y="18" width="1" height="1" fill="black" />
                  <rect x="25" y="18" width="1" height="1" fill="black" />
                  <rect x="26" y="18" width="1" height="1" fill="black" />

                  {/* Data pattern - Row 17 */}
                  <rect x="10" y="19" width="1" height="1" fill="black" />
                  <rect x="12" y="19" width="1" height="1" fill="black" />
                  <rect x="14" y="19" width="1" height="1" fill="black" />
                  <rect x="16" y="19" width="1" height="1" fill="black" />
                  <rect x="18" y="19" width="1" height="1" fill="black" />
                  <rect x="20" y="19" width="1" height="1" fill="black" />
                  <rect x="22" y="19" width="1" height="1" fill="black" />
                  <rect x="24" y="19" width="1" height="1" fill="black" />
                  <rect x="26" y="19" width="1" height="1" fill="black" />

                  {/* Data pattern - Row 18 */}
                  <rect x="10" y="20" width="1" height="1" fill="black" />
                  <rect x="11" y="20" width="1" height="1" fill="black" />
                  <rect x="13" y="20" width="1" height="1" fill="black" />
                  <rect x="15" y="20" width="1" height="1" fill="black" />
                  <rect x="17" y="20" width="1" height="1" fill="black" />
                  <rect x="19" y="20" width="1" height="1" fill="black" />
                  <rect x="21" y="20" width="1" height="1" fill="black" />
                  <rect x="23" y="20" width="1" height="1" fill="black" />
                  <rect x="25" y="20" width="1" height="1" fill="black" />

                  {/* Data pattern - Row 19 */}
                  <rect x="10" y="21" width="1" height="1" fill="black" />
                  <rect x="12" y="21" width="1" height="1" fill="black" />
                  <rect x="14" y="21" width="1" height="1" fill="black" />
                  <rect x="16" y="21" width="1" height="1" fill="black" />
                  <rect x="18" y="21" width="1" height="1" fill="black" />
                  <rect x="20" y="21" width="1" height="1" fill="black" />
                  <rect x="22" y="21" width="1" height="1" fill="black" />
                  <rect x="24" y="21" width="1" height="1" fill="black" />
                  <rect x="26" y="21" width="1" height="1" fill="black" />

                  {/* Data pattern - Row 20 */}
                  <rect x="10" y="22" width="1" height="1" fill="black" />
                  <rect x="11" y="22" width="1" height="1" fill="black" />
                  <rect x="13" y="22" width="1" height="1" fill="black" />
                  <rect x="15" y="22" width="1" height="1" fill="black" />
                  <rect x="17" y="22" width="1" height="1" fill="black" />
                  <rect x="19" y="22" width="1" height="1" fill="black" />
                  <rect x="21" y="22" width="1" height="1" fill="black" />
                  <rect x="23" y="22" width="1" height="1" fill="black" />
                  <rect x="25" y="22" width="1" height="1" fill="black" />

                  {/* Data pattern - Row 21 */}
                  <rect x="10" y="23" width="1" height="1" fill="black" />
                  <rect x="12" y="23" width="1" height="1" fill="black" />
                  <rect x="14" y="23" width="1" height="1" fill="black" />
                  <rect x="16" y="23" width="1" height="1" fill="black" />
                  <rect x="18" y="23" width="1" height="1" fill="black" />
                  <rect x="20" y="23" width="1" height="1" fill="black" />
                  <rect x="22" y="23" width="1" height="1" fill="black" />
                  <rect x="24" y="23" width="1" height="1" fill="black" />
                  <rect x="26" y="23" width="1" height="1" fill="black" />

                  {/* Data pattern - Row 22 */}
                  <rect x="10" y="24" width="1" height="1" fill="black" />
                  <rect x="11" y="24" width="1" height="1" fill="black" />
                  <rect x="13" y="24" width="1" height="1" fill="black" />
                  <rect x="15" y="24" width="1" height="1" fill="black" />
                  <rect x="17" y="24" width="1" height="1" fill="black" />
                  <rect x="19" y="24" width="1" height="1" fill="black" />
                  <rect x="21" y="24" width="1" height="1" fill="black" />
                  <rect x="23" y="24" width="1" height="1" fill="black" />
                  <rect x="25" y="24" width="1" height="1" fill="black" />

                  {/* Data pattern - Row 23 */}
                  <rect x="10" y="25" width="1" height="1" fill="black" />
                  <rect x="12" y="25" width="1" height="1" fill="black" />
                  <rect x="14" y="25" width="1" height="1" fill="black" />
                  <rect x="16" y="25" width="1" height="1" fill="black" />
                  <rect x="18" y="25" width="1" height="1" fill="black" />
                  <rect x="20" y="25" width="1" height="1" fill="black" />
                  <rect x="22" y="25" width="1" height="1" fill="black" />
                  <rect x="24" y="25" width="1" height="1" fill="black" />
                  <rect x="26" y="25" width="1" height="1" fill="black" />

                  {/* Data pattern - Row 24 */}
                  <rect x="10" y="26" width="1" height="1" fill="black" />
                  <rect x="11" y="26" width="1" height="1" fill="black" />
                  <rect x="13" y="26" width="1" height="1" fill="black" />
                  <rect x="15" y="26" width="1" height="1" fill="black" />
                  <rect x="17" y="26" width="1" height="1" fill="black" />
                  <rect x="19" y="26" width="1" height="1" fill="black" />
                  <rect x="21" y="26" width="1" height="1" fill="black" />
                  <rect x="23" y="26" width="1" height="1" fill="black" />
                  <rect x="25" y="26" width="1" height="1" fill="black" />
                </svg>
              </div>
              <button className="download-btn">Download the App</button>
            </div>
            <div className="phone-mockup">
              <div className="phone">
                <div className="phone-screen">
                  <div className="phone-content">
                    <div className="phone-header">
                      <div className="phone-location">📍 Paris</div>
                      <div>9:41</div>
                    </div>

                    <div className="phone-greeting">Hello Sarah!</div>

                    <div className="phone-search">🔍 Search</div>

                    <div className="phone-safety-card">
                      <div className="phone-safety-header">
                        <div className="phone-safety-label">✓ Safety Score</div>
                        <div className="phone-location-name">Dublin</div>
                      </div>
                      <div className="phone-safety-score">8.5</div>
                      <div className="phone-safety-status">Generally Safe</div>
                      <div style={{ fontSize: '4px', color: '#64748b', marginBottom: '4px' }}>Very Similar to your home neighbourhood</div>
                      <button className="phone-know-more">Know More &gt;</button>
                    </div>

                    <div className="phone-cards-row">
                      <div className="phone-card phone-card-blue">
                        <div className="phone-card-title">Paris, 20°</div>
                        <div className="phone-card-subtitle">Forecast rain ahead</div>
                      </div>
                      <div className="phone-card phone-card-purple">
                        <div className="phone-card-title">Meet MILO!</div>
                        <div className="phone-card-subtitle">I am your AI-powered travel guide</div>
                      </div>
                    </div>

                    <div className="phone-section-title">Smart Remainders</div>

                    <div className="phone-bottom-nav">
                      <div className="phone-nav-item">
                        <div className="phone-nav-icon"></div>
                        <div className="phone-nav-label">Home</div>
                      </div>
                      <div className="phone-nav-item">
                        <div className="phone-nav-icon"></div>
                        <div className="phone-nav-label">My Trips</div>
                      </div>
                      <div className="phone-nav-item">
                        <div className="phone-nav-icon"></div>
                        <div className="phone-nav-label">Profile</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Intelligence Section */}
      <section className="mobile-safety-section">
        <div className="mobile-container">
          <div className="mobile-title-box">
            <div className="mobile-dynamic">Dynamic</div>
            <div className="mobile-safety-title">Safety Intelligence</div>
          </div>
          <div className="mobile-features-list">
            <div className="mobile-feature-card">
              <div className="mobile-number">01</div>
              <div className="mobile-content">
                <h3>Real time incident alerts</h3>
                <p>Real-time alerts inform travellers of immediate journey disruptions, including localized crime, civil
                  unrest, adverse weather, and transport problems, allowing for quick route adjustments.</p>
              </div>
            </div>
            <div className="mobile-feature-card mobile-highlighted">
              <div className="mobile-number">02</div>
              <div className="mobile-content">
                <h3>AI Safety Intelligence</h3>
                <p>AI Safety Intelligence analyzes the impact of an incident, calculates your distance from the event, and
                  dynamically generates safe alternate routes while highlighting specific areas to avoid</p>
              </div>
            </div>
            <div className="mobile-feature-card">
              <div className="mobile-number">03</div>
              <div className="mobile-content">
                <h3>Destination Risk Assessment</h3>
                <p>Stay vigilant against petty crime, recognize common scams, and always prioritize secure and verified
                  transport/walking methods.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* User Feedback Section */}
      <section className="user-feedback">
        <div className="container">
          <h2>User Feedback</h2>
          <div className="feedback-carousel">
            <button className="carousel-btn prev">‹</button>
            <div className="feedback-card">
              <div className="user-avatar">
                <img src="/man-image.png"
                  alt="User" />
              </div>
              <div className="feedback-content">
                <p>Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua. Ut Enim Ad Minim Veniam, Quis Nostrud Exercitation Ullamco Laboris Nisi Ut Aliquip Ex Ea Commodo Consequat. Duis Aute Irure Dolor In Reprehenderit In Voluptate Velit Esse Cillum Dolore Eu Fugiat Nulla Pariatur. Excepteur Sint Occaecat Cupidatat Non Proident, Sunt In Culpa Qui Officia Deserunt Mollit Anim Id Est Laborum.</p>
              </div>
            </div>
            <button className="carousel-btn next">›</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-left">
            <h3>Data sources:</h3>
            <p>Local police reports, government travel advisories, user reports, crime statistics, AI analysis. Safety scores updated hourly.</p>
            <div className="footer-links">
              <a href="#about">About</a> | <a href="#privacy">Privacy</a> | <a href="#terms">Terms</a> | <a href="#contact">Contact</a>
            </div>
            <p className="copyright">© 2025 knowyourtrips. All rights reserved.</p>
          </div>
          <div className="footer-right">
            <div className="qr-code-footer">
              <svg width="100" height="100" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* White background */}
                <rect x="0" y="0" width="25" height="25" fill="white" />
                {/* Top-left position square */}
                <rect x="0" y="0" width="7" height="7" fill="black" />
                <rect x="1" y="1" width="5" height="5" fill="white" />
                <rect x="2" y="2" width="3" height="3" fill="black" />

                {/* Top-right position square */}
                <rect x="18" y="0" width="7" height="7" fill="black" />
                <rect x="19" y="1" width="5" height="5" fill="white" />
                <rect x="20" y="2" width="3" height="3" fill="black" />

                {/* Bottom-left position square */}
                <rect x="0" y="18" width="7" height="7" fill="black" />
                <rect x="1" y="19" width="5" height="5" fill="white" />
                <rect x="2" y="20" width="3" height="3" fill="black" />

                {/* Timing patterns */}
                <rect x="8" y="6" width="1" height="1" fill="black" />
                <rect x="10" y="6" width="1" height="1" fill="black" />
                <rect x="12" y="6" width="1" height="1" fill="black" />
                <rect x="14" y="6" width="1" height="1" fill="black" />
                <rect x="16" y="6" width="1" height="1" fill="black" />

                <rect x="6" y="8" width="1" height="1" fill="black" />
                <rect x="6" y="10" width="1" height="1" fill="black" />
                <rect x="6" y="12" width="1" height="1" fill="black" />
                <rect x="6" y="14" width="1" height="1" fill="black" />
                <rect x="6" y="16" width="1" height="1" fill="black" />

                {/* Data pattern - Row 0 */}
                <rect x="9" y="0" width="1" height="1" fill="black" />
                <rect x="11" y="0" width="1" height="1" fill="black" />
                <rect x="12" y="0" width="1" height="1" fill="black" />
                <rect x="15" y="0" width="1" height="1" fill="black" />
                <rect x="16" y="0" width="1" height="1" fill="black" />

                {/* Data pattern - Row 1 */}
                <rect x="8" y="1" width="1" height="1" fill="black" />
                <rect x="10" y="1" width="1" height="1" fill="black" />
                <rect x="11" y="1" width="1" height="1" fill="black" />
                <rect x="13" y="1" width="1" height="1" fill="black" />
                <rect x="15" y="1" width="1" height="1" fill="black" />
                <rect x="17" y="1" width="1" height="1" fill="black" />

                {/* Data pattern - Row 2 */}
                <rect x="8" y="2" width="1" height="1" fill="black" />
                <rect x="9" y="2" width="1" height="1" fill="black" />
                <rect x="12" y="2" width="1" height="1" fill="black" />
                <rect x="14" y="2" width="1" height="1" fill="black" />
                <rect x="15" y="2" width="1" height="1" fill="black" />
                <rect x="17" y="2" width="1" height="1" fill="black" />

                {/* Data pattern - Row 3 */}
                <rect x="8" y="3" width="1" height="1" fill="black" />
                <rect x="10" y="3" width="1" height="1" fill="black" />
                <rect x="13" y="3" width="1" height="1" fill="black" />
                <rect x="14" y="3" width="1" height="1" fill="black" />
                <rect x="16" y="3" width="1" height="1" fill="black" />
                <rect x="17" y="3" width="1" height="1" fill="black" />

                {/* Data pattern - Row 4 */}
                <rect x="8" y="4" width="1" height="1" fill="black" />
                <rect x="9" y="4" width="1" height="1" fill="black" />
                <rect x="11" y="4" width="1" height="1" fill="black" />
                <rect x="12" y="4" width="1" height="1" fill="black" />
                <rect x="14" y="4" width="1" height="1" fill="black" />
                <rect x="16" y="4" width="1" height="1" fill="black" />
                <rect x="17" y="4" width="1" height="1" fill="black" />

                {/* Data pattern - Row 5 */}
                <rect x="8" y="5" width="1" height="1" fill="black" />
                <rect x="10" y="5" width="1" height="1" fill="black" />
                <rect x="11" y="5" width="1" height="1" fill="black" />
                <rect x="13" y="5" width="1" height="1" fill="black" />
                <rect x="15" y="5" width="1" height="1" fill="black" />
                <rect x="17" y="5" width="1" height="1" fill="black" />

                {/* Data pattern - Row 7 */}
                <rect x="9" y="7" width="1" height="1" fill="black" />
                <rect x="10" y="7" width="1" height="1" fill="black" />
                <rect x="12" y="7" width="1" height="1" fill="black" />
                <rect x="14" y="7" width="1" height="1" fill="black" />
                <rect x="15" y="7" width="1" height="1" fill="black" />
                <rect x="17" y="7" width="1" height="1" fill="black" />

                {/* Data pattern - Row 8 */}
                <rect x="0" y="8" width="1" height="1" fill="black" />
                <rect x="2" y="8" width="1" height="1" fill="black" />
                <rect x="3" y="8" width="1" height="1" fill="black" />
                <rect x="4" y="8" width="1" height="1" fill="black" />
                <rect x="8" y="8" width="1" height="1" fill="black" />
                <rect x="9" y="8" width="1" height="1" fill="black" />
                <rect x="11" y="8" width="1" height="1" fill="black" />
                <rect x="13" y="8" width="1" height="1" fill="black" />
                <rect x="15" y="8" width="1" height="1" fill="black" />
                <rect x="16" y="8" width="1" height="1" fill="black" />
                <rect x="18" y="8" width="1" height="1" fill="black" />
                <rect x="19" y="8" width="1" height="1" fill="black" />
                <rect x="21" y="8" width="1" height="1" fill="black" />
                <rect x="22" y="8" width="1" height="1" fill="black" />
                <rect x="24" y="8" width="1" height="1" fill="black" />

                {/* Data pattern - Row 9 */}
                <rect x="1" y="9" width="1" height="1" fill="black" />
                <rect x="3" y="9" width="1" height="1" fill="black" />
                <rect x="5" y="9" width="1" height="1" fill="black" />
                <rect x="8" y="9" width="1" height="1" fill="black" />
                <rect x="10" y="9" width="1" height="1" fill="black" />
                <rect x="12" y="9" width="1" height="1" fill="black" />
                <rect x="14" y="9" width="1" height="1" fill="black" />
                <rect x="16" y="9" width="1" height="1" fill="black" />
                <rect x="17" y="9" width="1" height="1" fill="black" />
                <rect x="19" y="9" width="1" height="1" fill="black" />
                <rect x="20" y="9" width="1" height="1" fill="black" />
                <rect x="22" y="9" width="1" height="1" fill="black" />
                <rect x="24" y="9" width="1" height="1" fill="black" />

                {/* Data pattern - Row 10 */}
                <rect x="0" y="10" width="1" height="1" fill="black" />
                <rect x="2" y="10" width="1" height="1" fill="black" />
                <rect x="4" y="10" width="1" height="1" fill="black" />
                <rect x="8" y="10" width="1" height="1" fill="black" />
                <rect x="9" y="10" width="1" height="1" fill="black" />
                <rect x="11" y="10" width="1" height="1" fill="black" />
                <rect x="13" y="10" width="1" height="1" fill="black" />
                <rect x="15" y="10" width="1" height="1" fill="black" />
                <rect x="17" y="10" width="1" height="1" fill="black" />
                <rect x="18" y="10" width="1" height="1" fill="black" />
                <rect x="20" y="10" width="1" height="1" fill="black" />
                <rect x="21" y="10" width="1" height="1" fill="black" />
                <rect x="23" y="10" width="1" height="1" fill="black" />
                <rect x="24" y="10" width="1" height="1" fill="black" />

                {/* Data pattern - Row 11 */}
                <rect x="1" y="11" width="1" height="1" fill="black" />
                <rect x="3" y="11" width="1" height="1" fill="black" />
                <rect x="5" y="11" width="1" height="1" fill="black" />
                <rect x="8" y="11" width="1" height="1" fill="black" />
                <rect x="10" y="11" width="1" height="1" fill="black" />
                <rect x="12" y="11" width="1" height="1" fill="black" />
                <rect x="14" y="11" width="1" height="1" fill="black" />
                <rect x="16" y="11" width="1" height="1" fill="black" />
                <rect x="18" y="11" width="1" height="1" fill="black" />
                <rect x="19" y="11" width="1" height="1" fill="black" />
                <rect x="21" y="11" width="1" height="1" fill="black" />
                <rect x="23" y="11" width="1" height="1" fill="black" />

                {/* Data pattern - Row 12 */}
                <rect x="0" y="12" width="1" height="1" fill="black" />
                <rect x="2" y="12" width="1" height="1" fill="black" />
                <rect x="4" y="12" width="1" height="1" fill="black" />
                <rect x="8" y="12" width="1" height="1" fill="black" />
                <rect x="9" y="12" width="1" height="1" fill="black" />
                <rect x="11" y="12" width="1" height="1" fill="black" />
                <rect x="13" y="12" width="1" height="1" fill="black" />
                <rect x="15" y="12" width="1" height="1" fill="black" />
                <rect x="17" y="12" width="1" height="1" fill="black" />
                <rect x="19" y="12" width="1" height="1" fill="black" />
                <rect x="20" y="12" width="1" height="1" fill="black" />
                <rect x="22" y="12" width="1" height="1" fill="black" />
                <rect x="24" y="12" width="1" height="1" fill="black" />

                {/* Data pattern - Row 13 */}
                <rect x="1" y="13" width="1" height="1" fill="black" />
                <rect x="3" y="13" width="1" height="1" fill="black" />
                <rect x="5" y="13" width="1" height="1" fill="black" />
                <rect x="8" y="13" width="1" height="1" fill="black" />
                <rect x="10" y="13" width="1" height="1" fill="black" />
                <rect x="12" y="13" width="1" height="1" fill="black" />
                <rect x="14" y="13" width="1" height="1" fill="black" />
                <rect x="16" y="13" width="1" height="1" fill="black" />
                <rect x="18" y="13" width="1" height="1" fill="black" />
                <rect x="20" y="13" width="1" height="1" fill="black" />
                <rect x="21" y="13" width="1" height="1" fill="black" />
                <rect x="23" y="13" width="1" height="1" fill="black" />

                {/* Data pattern - Row 14 */}
                <rect x="0" y="14" width="1" height="1" fill="black" />
                <rect x="2" y="14" width="1" height="1" fill="black" />
                <rect x="4" y="14" width="1" height="1" fill="black" />
                <rect x="8" y="14" width="1" height="1" fill="black" />
                <rect x="9" y="14" width="1" height="1" fill="black" />
                <rect x="11" y="14" width="1" height="1" fill="black" />
                <rect x="13" y="14" width="1" height="1" fill="black" />
                <rect x="15" y="14" width="1" height="1" fill="black" />
                <rect x="17" y="14" width="1" height="1" fill="black" />
                <rect x="19" y="14" width="1" height="1" fill="black" />
                <rect x="21" y="14" width="1" height="1" fill="black" />
                <rect x="22" y="14" width="1" height="1" fill="black" />
                <rect x="24" y="14" width="1" height="1" fill="black" />

                {/* Data pattern - Row 15 */}
                <rect x="1" y="15" width="1" height="1" fill="black" />
                <rect x="3" y="15" width="1" height="1" fill="black" />
                <rect x="5" y="15" width="1" height="1" fill="black" />
                <rect x="8" y="15" width="1" height="1" fill="black" />
                <rect x="10" y="15" width="1" height="1" fill="black" />
                <rect x="12" y="15" width="1" height="1" fill="black" />
                <rect x="14" y="15" width="1" height="1" fill="black" />
                <rect x="16" y="15" width="1" height="1" fill="black" />
                <rect x="18" y="15" width="1" height="1" fill="black" />
                <rect x="20" y="15" width="1" height="1" fill="black" />
                <rect x="22" y="15" width="1" height="1" fill="black" />
                <rect x="23" y="15" width="1" height="1" fill="black" />

                {/* Data pattern - Row 16 */}
                <rect x="0" y="16" width="1" height="1" fill="black" />
                <rect x="2" y="16" width="1" height="1" fill="black" />
                <rect x="4" y="16" width="1" height="1" fill="black" />
                <rect x="8" y="16" width="1" height="1" fill="black" />
                <rect x="9" y="16" width="1" height="1" fill="black" />
                <rect x="11" y="16" width="1" height="1" fill="black" />
                <rect x="13" y="16" width="1" height="1" fill="black" />
                <rect x="15" y="16" width="1" height="1" fill="black" />
                <rect x="17" y="16" width="1" height="1" fill="black" />
                <rect x="19" y="16" width="1" height="1" fill="black" />
                <rect x="21" y="16" width="1" height="1" fill="black" />
                <rect x="23" y="16" width="1" height="1" fill="black" />
                <rect x="24" y="16" width="1" height="1" fill="black" />

                {/* Data pattern - Row 17 */}
                <rect x="8" y="17" width="1" height="1" fill="black" />
                <rect x="10" y="17" width="1" height="1" fill="black" />
                <rect x="12" y="17" width="1" height="1" fill="black" />
                <rect x="14" y="17" width="1" height="1" fill="black" />
                <rect x="16" y="17" width="1" height="1" fill="black" />
                <rect x="18" y="17" width="1" height="1" fill="black" />
                <rect x="20" y="17" width="1" height="1" fill="black" />
                <rect x="22" y="17" width="1" height="1" fill="black" />
                <rect x="24" y="17" width="1" height="1" fill="black" />

                {/* Data pattern - Row 18 */}
                <rect x="8" y="18" width="1" height="1" fill="black" />
                <rect x="9" y="18" width="1" height="1" fill="black" />
                <rect x="11" y="18" width="1" height="1" fill="black" />
                <rect x="13" y="18" width="1" height="1" fill="black" />
                <rect x="15" y="18" width="1" height="1" fill="black" />
                <rect x="17" y="18" width="1" height="1" fill="black" />
                <rect x="19" y="18" width="1" height="1" fill="black" />
                <rect x="21" y="18" width="1" height="1" fill="black" />
                <rect x="23" y="18" width="1" height="1" fill="black" />

                {/* Data pattern - Row 19 */}
                <rect x="8" y="19" width="1" height="1" fill="black" />
                <rect x="10" y="19" width="1" height="1" fill="black" />
                <rect x="12" y="19" width="1" height="1" fill="black" />
                <rect x="14" y="19" width="1" height="1" fill="black" />
                <rect x="16" y="19" width="1" height="1" fill="black" />
                <rect x="18" y="19" width="1" height="1" fill="black" />
                <rect x="20" y="19" width="1" height="1" fill="black" />
                <rect x="22" y="19" width="1" height="1" fill="black" />
                <rect x="24" y="19" width="1" height="1" fill="black" />

                {/* Data pattern - Row 20 */}
                <rect x="8" y="20" width="1" height="1" fill="black" />
                <rect x="9" y="20" width="1" height="1" fill="black" />
                <rect x="11" y="20" width="1" height="1" fill="black" />
                <rect x="13" y="20" width="1" height="1" fill="black" />
                <rect x="15" y="20" width="1" height="1" fill="black" />
                <rect x="17" y="20" width="1" height="1" fill="black" />
                <rect x="19" y="20" width="1" height="1" fill="black" />
                <rect x="21" y="20" width="1" height="1" fill="black" />
                <rect x="23" y="20" width="1" height="1" fill="black" />

                {/* Data pattern - Row 21 */}
                <rect x="8" y="21" width="1" height="1" fill="black" />
                <rect x="10" y="21" width="1" height="1" fill="black" />
                <rect x="12" y="21" width="1" height="1" fill="black" />
                <rect x="14" y="21" width="1" height="1" fill="black" />
                <rect x="16" y="21" width="1" height="1" fill="black" />
                <rect x="18" y="21" width="1" height="1" fill="black" />
                <rect x="20" y="21" width="1" height="1" fill="black" />
                <rect x="22" y="21" width="1" height="1" fill="black" />
                <rect x="24" y="21" width="1" height="1" fill="black" />

                {/* Data pattern - Row 22 */}
                <rect x="8" y="22" width="1" height="1" fill="black" />
                <rect x="9" y="22" width="1" height="1" fill="black" />
                <rect x="11" y="22" width="1" height="1" fill="black" />
                <rect x="13" y="22" width="1" height="1" fill="black" />
                <rect x="15" y="22" width="1" height="1" fill="black" />
                <rect x="17" y="22" width="1" height="1" fill="black" />
                <rect x="19" y="22" width="1" height="1" fill="black" />
                <rect x="21" y="22" width="1" height="1" fill="black" />
                <rect x="23" y="22" width="1" height="1" fill="black" />

                {/* Data pattern - Row 23 */}
                <rect x="8" y="23" width="1" height="1" fill="black" />
                <rect x="10" y="23" width="1" height="1" fill="black" />
                <rect x="12" y="23" width="1" height="1" fill="black" />
                <rect x="14" y="23" width="1" height="1" fill="black" />
                <rect x="16" y="23" width="1" height="1" fill="black" />
                <rect x="18" y="23" width="1" height="1" fill="black" />
                <rect x="20" y="23" width="1" height="1" fill="black" />
                <rect x="22" y="23" width="1" height="1" fill="black" />
                <rect x="24" y="23" width="1" height="1" fill="black" />

                {/* Data pattern - Row 24 */}
                <rect x="8" y="24" width="1" height="1" fill="black" />
                <rect x="9" y="24" width="1" height="1" fill="black" />
                <rect x="11" y="24" width="1" height="1" fill="black" />
                <rect x="13" y="24" width="1" height="1" fill="black" />
                <rect x="15" y="24" width="1" height="1" fill="black" />
                <rect x="17" y="24" width="1" height="1" fill="black" />
                <rect x="19" y="24" width="1" height="1" fill="black" />
                <rect x="21" y="24" width="1" height="1" fill="black" />
                <rect x="23" y="24" width="1" height="1" fill="black" />
              </svg>
            </div>
            <button className="footer-download-btn">Download the App</button>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;