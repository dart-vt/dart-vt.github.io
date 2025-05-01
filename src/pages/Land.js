/*import React from "react";
import './Land.css'

export function Land() {
		return (
				<div id="Landing">
						<h1>Landing</h1>
						<h1>Landing</h1>
						<h1>Landing</h1>
						<h1>Landing</h1>
						<h1>Landing</h1>
						<h1>Landing</h1>
						<h1>Landing</h1>
						<h1>Landing</h1>
						<h1>Landing</h1>
						<h1>Landing</h1>
						<h1>Landing</h1>
						<h1>Landing</h1>
						<h1>Landing</h1>
						<h1>Landing</h1>
						<h1>Landing</h1>
						<h1>Landing</h1>
						<h1>Landing</h1>
						<h1>Landing</h1>
						<h1>Landing</h1>
						<h1>Landing</h1>
						<h1>Landing</h1>
						<h1>Landing</h1>
						<h1>Landing</h1>
						<h1>Landing</h1>
						<h1>Landing</h1>
						<h1>Landing</h1>
						<h1>Landing</h1>
						<h1>Landing</h1>
						<h1>Landing</h1>
						<h1>Landing</h1>
						<h1>Landing</h1>
						<h1>Landing</h1>
						<h1>Landing</h1>
						<h1>Landing</h1>
						<h1>Landing</h1>
						<h1>Landing</h1>
						<h1>Landing</h1>
						<h1>Landing</h1>
						<h1>Landing</h1>
						<h1>Landing</h1>
						<h1>Landing</h1>
						<h1>Landing</h1>
						<h1>Landing</h1>
						<h1>Landing</h1>
						<h1>Landing</h1>
						<h1>Landing</h1>
						<h1>Landing</h1>
						<h1>Landing</h1>
						<h1>Landing</h1>
						<h1>Landing</h1>
						<h1>Landing</h1>
						<h1>Landing</h1>
						<h1>Landing</h1>
						<h1>Landing</h1>
						<h1>Landing</h1>
						<h1>Landing</h1>
						<h1>Landing</h1>

				</div>
		)
}*/
/*import React from "react";
import './Land.css'

export function Land() {
		return (
				<div id="Landing">
						<h1>Landing</h1>
						<h1>Landing</h1>
						<h1>Landing</h1>
						<h1>Landing</h1>
						<h1>Landing</h1>
						<h1>Landing</h1>
						<h1>Landing</h1>
						<h1>Landing</h1>
						<h1>Landing</h1>
						<h1>Landing</h1>
						<h1>Landing</h1>
						<h1>Landing</h1>
						<h1>Landing</h1>
						<h1>Landing</h1>
						<h1>Landing</h1>
						<h1>Landing</h1>
						<h1>Landing</h1>
						<h1>Landing</h1>
						<h1>Landing</h1>
						<h1>Landing</h1>
						<h1>Landing</h1>
						<h1>Landing</h1>
						<h1>Landing</h1>
						<h1>Landing</h1>
						<h1>Landing</h1>
						<h1>Landing</h1>
						<h1>Landing</h1>
						<h1>Landing</h1>
						<h1>Landing</h1>
						<h1>Landing</h1>
						<h1>Landing</h1>
						<h1>Landing</h1>
						<h1>Landing</h1>
						<h1>Landing</h1>
						<h1>Landing</h1>
						<h1>Landing</h1>
						<h1>Landing</h1>
						<h1>Landing</h1>
						<h1>Landing</h1>
						<h1>Landing</h1>
						<h1>Landing</h1>
						<h1>Landing</h1>
						<h1>Landing</h1>
						<h1>Landing</h1>
						<h1>Landing</h1>
						<h1>Landing</h1>
						<h1>Landing</h1>
						<h1>Landing</h1>
						<h1>Landing</h1>
						<h1>Landing</h1>
						<h1>Landing</h1>
						<h1>Landing</h1>
						<h1>Landing</h1>
						<h1>Landing</h1>
						<h1>Landing</h1>
						<h1>Landing</h1>
						<h1>Landing</h1>

				</div>
		)
}*/
import React, { useState, useEffect } from "react";
import "./Land.css";
import heroVid from "../assets/IMG_9158.mp4";
import circuitImg from "../assets/circuit.png";
import teamPhoto from '../assets/team.jpg';


// Media carousel items
const mediaItems = [
  { type: "video", src: heroVid },
  { type: "image", src: "/images/IMG_9052 (1).png", alt: "Behind the scenes" },
  { type: "image", src: "/images/IMG_8931.png", alt: "Pinhead Larry" },
  { type: "image", src: "/images/IMG_9107.png", alt: "Storm Surge" },
];

// Carousel component
function MediaCarousel() {
  const [current, setCurrent] = useState(0);
  const next = () => setCurrent((current + 1) % mediaItems.length);
  const prev = () => setCurrent((current - 1 + mediaItems.length) % mediaItems.length);
  const item = mediaItems[current];

  return (
    <div className="carousel-container">
      <button onClick={prev} className="arrow left">❮</button>
      <div className="media-item">
        {item.type === "video" ? (
          <video controls className="media-video">
            <source src={item.src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <img src={item.src} alt={item.alt} className="media-image" />
        )}
      </div>
      <button onClick={next} className="arrow right">❯</button>
    </div>
  );
}

export function Land() {
	useEffect(() => {
		const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
		const theme = isDark ? 'dark' : 'light';
	  
		const themes = {
		  light: {
			'--overlay': '#b84c4c',
			'--bg': '#dedede',
			'--txt': '#1a1919',
			'--icon-filter': 'none',
			'--cta-color': '#cc0000',
			'--cta-color-hover': '#e60000',
		  },
		  dark: {
			'--overlay': '#3a5e27',
			'--bg': '#2b2b2b',
			'--txt': '#dedede',
			'--icon-filter': 'invert(1)',
			'--cta-color': '#00cc66',
			'--cta-color-hover': '#00e676',
		  },
		};
	  
		const root = document.documentElement;
		const selected = themes[theme];
	  
		for (const key in selected) {
		  root.style.setProperty(key, selected[key]);
		}
	  }, []);
	  

  return (
    //<div id="Landing" style={{ backgroundImage: `url(${circuitImg})` }}>
	<div id="Landing">

      <div className="hero-text">
        <img src="/images/DART.svg" alt="DART Logo" className="hero-logo" />
        <h1>DART Robotics</h1>
        <p>Innovating through destruction – Virginia Tech’s Combat Robotics Team</p>
      </div>

      <section className="about">
        <h2>About the Team</h2>
        <p>
          Founded in 2022, DART Robotics builds combat robots for competitions like RoboGames,
          AutoNav, and VEX-style arena matches. We bring together mechanical, software, and
          electrical engineers from all disciplines.
        </p>
      </section>

      <section className="projects">
        <h2>Robots</h2>
        <div className="project-grid">
          <div className="project-card">
            <img src="/images/stormsurge.png" alt="Storm Surge" />
            <h3>Storm Surge</h3>
          </div>
          <div className="project-card">
            <img src="/images/pinhead.png" alt="Pinhead Larry" />
            <h3>Pinhead Larry</h3>
			<a href="/robots" className="cta-btn">View Full Robot Page</a>
          </div>
		  <div className="project-card">
            <img src="/images/eggbeater.png" alt="Pinhead Larry" />
            <h3>Eggbeater</h3>
          </div>
          <div style={{ textAlign: "center", marginTop: "2rem" }}>
          </div>
        </div>
      </section>

      <section className="team-preview">
        <h2>Meet the Founders</h2>
        <div className="team-row">
  <div className="team-member">
    <img src="/images/Trevor Ierardi.png" alt="Trevor Ierardi" />
    <h3>Trevor Ierardi</h3>
  </div>
  <div className="team-member">
    <img src="/images/Nick Cowen.png" alt="Nick Cowen" />
    <h3>Nick Cowen</h3>
  </div>
</div>

		<h2></h2>
        <a href="/team" className="cta-btn">Full Team Roster</a>
      </section>

      <section className="media">
        <h2>Gallery & Media</h2>
        <MediaCarousel />
      </section>

      <section className="news">
        <h2>Updates & Highlights</h2>
        <ul>
          <li>🔧 April 2025: Competed at RoboGames in San Jose!</li>
          <li>🎉 March 2025: Hosted VT’s first arena combat scrimmage.</li>
        </ul>
      </section>

      <section
  className="join-section"
  style={{
    backgroundImage: `url(${teamPhoto})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    padding: '5rem 2rem',
    textAlign: 'center',
    color: 'white',
    position: 'relative',
  }}
>
  <div style={{
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    padding: '2rem',
    borderRadius: '8px',
    maxWidth: '800px',
    margin: '0 auto'
  }}>
    <h2>Want To Join Us?</h2>
    <p>
      DART Robotics is open to students from all majors interested in combat robotics — no experience required. Join us to learn, build, and compete.
    </p>
	<h2></h2>
    <a href="mailto:tsierardi@vt.edu" className="cta-btn">
      tsierardi@vt.edu
    </a>
  </div>
</section>



    </div>
  );
}

