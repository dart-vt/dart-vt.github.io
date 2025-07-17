/*import React from 'react';
import { Robots } from "./Robots";
import { Route, Routes, Link, BrowserRouter } from "react-router-dom";
import { Blog } from './Blog'
import { About } from './About'
import { Land } from "./Land";
import data from './navigation.json'
import './Home.css'
import themes from './themes.json'
import { Team } from "./Team";
import { WhatWeDo } from "./WhatWeDo";

const theme = window.matchMedia('{prefers-color-scheme: dark}').matches;
function setTheme(themestr) { //TODO: Switch to enum
	const theme = themes[themestr];
	const keys = Object.keys(theme);
	const style = document.body.style;
	keys.map(
		(key) => {
			style.setProperty('--' + key, theme[key])
		}
	)
	style.background = theme["bg"];
}

function Header() {
	setTheme('light')
	return (
		<div id="header">
			<img src='icons/menu.svg' id="hamburber">
			</img>
			<Link to="/" id="logo_container"><img src='images/DART.svg' id="logo">
			</img></Link>
			<nav id="navPanel">
				{
					Object.keys(data).map((key, index) => (
						<li key={index} className="navItem">
							<Link to={data[key]}>
								{key}
							</Link>
						</li>
					))
				}
			</nav>
		</div>
	)
}

function Home() {
	return (
		<BrowserRouter>
			<Header />
			<div id='content'>
				<Routes>
					<Route index element={<Land />} />
					<Route path="/blog" element={<Blog />} />
					<Route path="/about" element={<About />} />
					<Route path="/team" element={<Team />} />
					<Route path="/what-we-do" element={<WhatWeDo />} />
					<Route path="/robots" element={<Robots />} />
				</Routes>

			</div>
		</BrowserRouter>
	)
}

export default Home;*/
import React from 'react';
import { Route, Routes, Link, BrowserRouter } from 'react-router-dom';
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
      <a href="/" className="home-link">
        <img src='images/DART.svg' id="logo" alt="logo" />
        </a>

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
            <a href="mailto:tsierardi@vt.edu" className="footer-button">
              <img src="/icons/person.svg" alt="Trevor" />
              <span>tsierardi@vt.edu</span>
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
    <BrowserRouter>
      <Header currentTheme={currentTheme} toggleTheme={toggleTheme} />
      <div id='content'>
        <Routes>
          <Route index element={<Land currentTheme={currentTheme} />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
          <Route path="/robots" element={<Robots />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default Home;