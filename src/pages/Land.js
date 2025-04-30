import React from "react";
import "./Land.css";
import heroVid from "../assets/IMG_9158.mp4"; // Use your own video or fallback image
import circuitImg from "../assets/circuit.png";

export function Land() {
  return (
    <div id="Landing" style={{ backgroundImage: `url(${circuitImg})` }}>
      <div className="hero-text">
        <img src="/images/DART.svg" alt="DART Logo" className="hero-logo" />
        <h1>DART Robotics</h1>
        <p>Innovating through destruction – Virginia Tech’s Combat Robotics Team</p>
        <a href="/team" className="cta-btn">Meet the Team</a>
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
        <h2>What We Do</h2>
        <div className="project-grid">
          <div className="project-card">
            <img src="/images/stormsurge.png" alt="Storm Surge" />
            <h3>Storm Surge</h3>
            <p>High-speed spinner designed for aggressive takedowns in VEX-style combat.</p>
          </div>
          <div className="project-card">
            <img src="/images/pinhead.png" alt="Pinhead Larry" />
            <h3>Pinhead Larry</h3>
            <p>Robust flipper robot engineered for precision control and endurance battles.</p>
          </div>
        </div>
      </section>

      <section className="team-preview">
        <h2>Meet the Team</h2>
        <div className="team-row">
          <img src="/images/TrevorIerardi.png" alt="Trevor Ierardi" />
          <img src="/images/NickCowen.png" alt="Nick Cowen" />
          <img src="/images/JustinBurns.png" alt="Justin Burns" />
        </div>
        <a href="/team" className="cta-btn">Full Team Roster</a>
      </section>

      <section className="media">
        <h2>Gallery & Media</h2>
        <div className="media-row">
          <video controls className="media-video">
            <source src={heroVid} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <img src="/images/buildphoto1.png" alt="Behind the scenes" />
        </div>
      </section>

      <section className="news">
        <h2>Updates & Highlights</h2>
        <ul>
          <li>🔧 April 2025: Competed at RoboGames in San Jose!</li>
          <li>🎉 March 2025: Hosted VT’s first arena combat scrimmage.</li>
        </ul>
      </section>

      <section className="contact">
        <h2>Contact & Links</h2>
        <p>Email: <a href="mailto:dart@vt.edu">dart@vt.edu</a></p>
        <div className="social-links">
          <a href="https://github.com/dart-vt">GitHub</a>
          <a href="https://instagram.com/dart.vt">Instagram</a>
          <a href="/apply">Join Us</a>
        </div>
      </section>
    </div>
  );
}
