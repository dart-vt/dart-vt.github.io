import React from 'react';
import {Route, Routes, Link, HashRouter } from 'react-router-dom'; // at the top
import { Sponsors } from './Sponsors';
import ScrollToTop from "./ScrollToTop";
import { About } from './About';
import { Land } from './Land';
import data from './navigation.json';
import './Home.css';
import themes from './themes.json';
import { Team } from './Team';
import { Robots } from './Robots';

function setTheme(themestr) {
  const theme = themes[themestr];
  const style = document.body.style;
  Object.keys(theme).forEach((key) => {
    style.setProperty('--' + key, theme[key]);
  });
  style.background = theme.bg;
  style.setProperty('--icon-filter', themestr === 'dark' ? 'invert(1)' : 'none');
  style.setProperty('--cta-color', themestr === 'dark' ? '#00cc66' : '#cc0000');
  style.setProperty('--cta-color-hover', themestr === 'dark' ? '#00e676' : '#e60000');
}

function Header({ currentTheme, toggleTheme }) {
  React.useEffect(() => {
    setTheme(currentTheme);
  }, [currentTheme]);

  return (
    <div id="header">
      <img src='icons/menu.svg' id="hamburber" alt="menu" />
      <Link to="/" id="logo_container">
        <img src='images/DART.svg' id="logo" alt="logo" />

      </Link>
      <nav id="navPanel">
        {Object.keys(data).map((key, index) => (
          <li key={index} className="navItem">
            <Link to={data[key]}>{key}</Link>
          </li>
        ))}
      </nav>
      <button id="theme" onClick={toggleTheme}>
        <img src={currentTheme === 'light' ? 'icons/moon.svg' : 'icons/sun.svg'} alt="theme toggle" />
      </button>
    </div>
  );
}

function Footer() {
  return (
    <footer id="footer">
      <div className="footer-wrapper">
        <div className="footer-section">
          <h3>Contact Us</h3>
          <div className="footer-links">
            <a href="mailto:dart-g@vt.edu" className="footer-button">
              <img src="/icons/email.svg" alt="Email" />
              <span>dart-g@vt.edu</span>
            </a>
            <a href="mailto:DARTvtech@gmail.com" className="footer-button">
              <img src="/icons/person.svg" alt="Trevor" />
              <span>DARTvtech@gmail.com</span>
            </a>
          </div>
        </div>
        <div className="footer-section">
          <h3>Social</h3>
          <div className="footer-links">
            <a href="https://www.instagram.com/vtdart/" target="_blank" rel="noreferrer" className="footer-button">
              <img src="/icons/instagram.svg" alt="Instagram" />
              <span>Instagram</span>
            </a>
            <a href="https://discord.gg/GY4mx3Eb" target="_blank" rel="noreferrer" className="footer-button">
              <img src="/icons/discord.svg" alt="Discord" />
              <span>Discord</span>
            </a>
            <a href="https://vt.campuslabs.com/engage/organization/dart" target="_blank" rel="noreferrer" className="footer-button">
              <img src="/icons/gobbler.svg" alt="GobblerConnect" />
              <span>GobblerConnect</span>
            </a>
            <a href="https://www.linkedin.com/company/destructive-arena-robotics-team-dart/" target="_blank" rel="noreferrer" className="footer-button">
              <img src="/icons/linkedin.svg" alt="LinkedIn" />
              <span>LinkedIn</span>
            </a>
            <a href="https://www.youtube.com/@DARTatVirginiaTech" target="_blank" rel="noreferrer" className="footer-button">
              <img src="/icons/youtube.svg" alt="YouTube" />
              <span>YouTube</span>
            </a>
          </div>
        </div>
      
      </div>
    </footer>
  );
}

function Home() {
  const [currentTheme, setCurrentTheme] = React.useState('light');
  const toggleTheme = () => setCurrentTheme(prev => (prev === 'light' ? 'dark' : 'light'));

 return (
  <HashRouter>
    <ScrollToTop />
    <Header currentTheme={currentTheme} toggleTheme={toggleTheme} />
    <div id='content'>
        <Routes>
          <Route index element={<Land currentTheme={currentTheme} />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
          <Route path="/robots" element={<Robots />} />
          <Route path="/sponsors" element={<Sponsors />} />
        </Routes>
      </div>
      <Footer />
  </HashRouter>
  );
}

export default Home;