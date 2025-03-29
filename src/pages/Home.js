import React from 'react';
import { Route, Routes, Link, BrowserRouter, useNavigate } from "react-router-dom";
import { Blog } from './Blog';
import { About } from './About';
import { Land } from "./Land";
import { Team } from "./Team";
import { WhatWeDo } from "./WhatWeDo";
import MissionStrip from './MissionStrip';

import data from './navigation.json';
import myImage from '../assets/JanGam.jpg';

import './Home.css';
import './MissionStrip.css';



function ImageWithText() {
    return (
        <div id="image-container" style={{ textAlign: 'center', marginTop: '20px', marginBottom: '40px' }}>
            <p style={{ fontSize: '18px', marginBottom: '10px' }}>Welcome to DARTS Robotics
                <p>[Placeholder text introducing DARTS Robotics.]</p>

            </p>
            <img src={myImage} alt='Custom' style={{ width: '500px', borderRadius: '10px' }} />
        </div>
    );
}

function Home() {
    return (
      <BrowserRouter>
        <div id="header">
          <Link to="/" id="logo_container">
            <img src='resources/DART.jpeg' id="logo" alt='Logo' />
          </Link>
          <ul id="navPanel">
            {Object.keys(data).map((key, index) => (
              <li key={index} className="navItem">
                <Link to={data[key]}>{key}</Link>
              </li>
            ))}
          </ul>
        </div>
  
        <div id='content'>
          <Routes>
            <Route index element={
              <>
                <Land />
                <ImageWithText />
                <MissionStrip />
              </>
            } />
            <Route path="/blog" element={<Blog />} />
            <Route path="/about" element={<About />} />
            <Route path="/team" element={<Team />} />
            <Route path="/what-we-do" element={<WhatWeDo />} />
          </Routes>
  
          {/*Moved the buttons outside of <Routes> so they're always visible */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '20px',
            marginTop: '30px',
            marginBottom: '60px'
          }}>
            <InstagramButton />
            <ContactButton />
          </div>
        </div>
      </BrowserRouter>
    );
  }
  
  
function ContactButton() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/about');
    };

    return (
        <button
            onClick={handleClick}
            style={{
                padding: '10px 20px',
                backgroundColor: 'red',
                color: 'black',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                marginTop: '20px'
            }}
        >
            Contact Us
        </button>
    );
}

function InstagramButton() {
    return (
        <a
            href="https://www.instagram.com/vtdart?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            target="_blank"
            rel="noopener noreferrer"
        >
            <button
                style={{
                    padding: '10px 20px',
                    backgroundColor: 'red',
                    color: 'black',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    marginTop: '10px',
                    marginLeft: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px'
                }}
            >
                <i className="fa-brands fa-instagram" style={{ fontSize: '18px', color: 'black' }}></i>
                Follow Us on Instagram
            </button>
        </a>
    );
}





/*function Home() {
    return (
        <BrowserRouter>
            <div id="header">
                <Link to="/" id="logo_container">
                    <img src='resources/DART.jpeg' id="logo" alt='Logo' />
                </Link>
                <ul id="navPanel">
                    {
                        Object.keys(data).map((key, index) => (
                            <li key={index} className="navItem">
                                <Link to={data[key]}>
                                    {key}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
            
            <div id='content'>
                <Routes>
                    <Route index element={<Land />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/team" element={<Team />} />
                    <Route path="/what-we-do" element={<WhatWeDo />} />
                </Routes>
            </div>
            
        </BrowserRouter>
    );
}*/

export default Home;
