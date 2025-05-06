import React, { useEffect, useRef, useState } from "react";
import "./Land.css";
import heroVid from "../assets/IMG_9158.mp4";
import teamPhoto from "../assets/team.jpg";
import topImage from "../assets/IMG_8932.png";
import aboutImage from "../assets/IMG_9097.png";
import { useTheme } from '../utils/useTheme'; // custom theme hook

const mediaItems = [
  { type: "video", src: heroVid },
  { type: "image", src: "/images/IMG_9052 (1).png", alt: "Behind the scenes" },
  { type: "image", src: "/images/IMG_8931.png",  alt: "Pinhead Larry" },
  { type: "image", src: "/images/IMG_9107.png",  alt: "Storm Surge"  },
];

function MediaCarousel() {
  const [current, setCurrent] = useState(0);
  const next = () => setCurrent((current + 1) % mediaItems.length);
  const prev = () =>
    setCurrent((current - 1 + mediaItems.length) % mediaItems.length);
  const item = mediaItems[current];

  return (
    <div className="carousel-container">
      <button onClick={prev} className="about-btn">❮</button>
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
      <button onClick={next} className="about-btn">❯</button>
    </div>
  );
}

export function Land() {
  const aboutTextRef     = useRef(null);
  const foundersLeftRef  = useRef(null);
  const foundersRightRef = useRef(null);
  const trevorRef        = useRef(null);
  const nickRef          = useRef(null);

  useTheme();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          // ABOUT section: toggle visible on scroll in/out
          if (entry.target === aboutTextRef.current) {
            if (entry.isIntersecting) {
              aboutTextRef.current.classList.add("visible");
            } else {
              aboutTextRef.current.classList.remove("visible");
            }
          }
          // FOUNDERS section: slide all in/out with Trevor
          if (entry.target === trevorRef.current) {
            const action = entry.isIntersecting ? 'add' : 'remove';
            [
              trevorRef.current,
              nickRef.current,
              foundersLeftRef.current,
              foundersRightRef.current
            ].forEach(el => el.classList[action]("visible"));
          }
          // ROBOT cards: slide up/down on scroll in/out
          if (entry.target.classList.contains("project-card")) {
            entry.target.classList.toggle("visible", entry.isIntersecting);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px"
      }
    );

    // observe About section
    if (aboutTextRef.current) {
      observer.observe(aboutTextRef.current);
    }
    // observe Trevor for founders
    if (trevorRef.current) {
      observer.observe(trevorRef.current);
    }
    // set up and observe robot project cards
    const cards = Array.from(document.querySelectorAll(".project-grid .project-card"));
    cards.forEach((card, i) => {
      // add initial hidden + direction classes
      card.classList.add(
        "hidden",
        i === 1 ? "slide-down" : "slide-up"
      );
      observer.observe(card);
    });

    return () => {
      if (aboutTextRef.current)     observer.unobserve(aboutTextRef.current);
      if (trevorRef.current)        observer.unobserve(trevorRef.current);
      cards.forEach(card => observer.unobserve(card));
    };
  }, []);

  return (
    <div id="Landing">
      <div className="top-image-wrapper">
        <img src={topImage} alt="Top Robotics Scene" className="top-banner" />
        <div className="hero-overlay">
          <img src="/images/DART.svg" alt="DART Logo" className="hero-logo small" />
          <h1>DART Robotics</h1>
          <p>Innovating through destruction – Virginia Tech’s Combat Robotics Team</p>
        </div>
      </div>

      <section className="about-section">
        <img src={aboutImage} alt="About the team" className="about-image" />
        <div ref={aboutTextRef} className="about-overlay-text hidden">
          <h2>About the Team</h2>
          <p>
            Founded in 2022, DART Robotics builds combat robots for competitions
            like RoboGames, AutoNav, and VEX-style arena matches. We bring
            together mechanical, software, and electrical engineers from all
            disciplines.
          </p>
          <a href="/about" className="about-btn">Learn More</a>
        </div>
      </section>

      <section className="projects section-colored">
        <h2>Robots</h2>
        <div className="project-grid">
          <div className="project-card">
            <img src="/images/stormsurge.png" alt="Storm Surge" />
            <h3>Storm Surge</h3>
          </div>
          <div className="project-card">
            <img src="/images/pinhead.png" alt="Pinhead Larry" />
            <h3>Pinhead Larry</h3>
            <a href="/robots" className="about-btn">View Full Robot Page</a>
          </div>
          <div className="project-card">
            <img src="/images/eggbeater.png" alt="Eggbeater" />
            <h3>Eggbeater</h3>
          </div>
        </div>
      </section>

      <section className="spacer-section"></section>

      <section className="team-preview section-colored">
        <h2>Meet the Founders</h2>
        <div className="team-row">
          <div className="founder-block">
            <div ref={foundersLeftRef} className="founders-left-text hidden">
              <p>
                Trevor has been the operations lead since DART's inception,
                driving logistics and strategy for all robot builds and competitions.
              </p>
            </div>
            <div ref={trevorRef} className="team-member slide-in-left hidden">
              <img src="/images/Trevor Ierardi.png" alt="Trevor Ierardi" />
              <h3>Trevor Ierardi</h3>
            </div>
          </div>
          <div className="founder-block">
            <div ref={nickRef} className="team-member slide-in-right hidden">
              <img src="/images/Nick Cowen.png" alt="Nick Cowen" />
              <h3>Nick Cowen</h3>
            </div>
            <div ref={foundersRightRef} className="founders-right-text hidden">
              <p>
                Nick leads the mechanical team with a focus on design innovation and
                battle-ready durability for our flagship robots.
              </p>
            </div>
          </div>
        </div>
        <a href="/team" className="about-btn">Full Team Roster</a>
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
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "5rem 2rem",
          textAlign: "center",
          color: "white",
          position: "relative",
        }}
      >
        <div
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            padding: "2rem",
            borderRadius: "8px",
            maxWidth: "800px",
            margin: "0 auto",
          }}
        >
          <h2>Want To Join Us?</h2>
          <p>
            DART Robotics is open to students from all majors interested in
            combat robotics — no experience required. Join us to learn, build,
            and compete.
          </p>
          <a href="mailto:tsierardi@vt.edu" className="about-btn">
            tsierardi@vt.edu
          </a>
        </div>
      </section>
    </div>
  );
}
