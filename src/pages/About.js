import React from "react";
import { useTheme } from '../utils/useTheme'; // custom theme hook

export function About() {
  useTheme();

  return (
    <div className="about-page" style={{ padding: '2rem', fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif', color: 'var(--txt)', backgroundColor: 'var(--bg)' }}>
      <h1>About DART Robotics</h1>
      <p style={{ fontSize: '1.1rem', lineHeight: '1.6', maxWidth: '800px', margin: '1rem auto' }}>
        DART Robotics is Virginia Tech's premier combat robotics team. Since its founding in 2022, the team has specialized in designing, building, and competing with destructive robots in events like RoboGames, AutoNav, and VEX-style arena matches. DART brings together students across disciplines—mechanical, electrical, software engineering, and beyond—to collaborate on cutting-edge engineering challenges.
      </p>
      <p style={{ fontSize: '1.1rem', lineHeight: '1.6', maxWidth: '800px', margin: '1rem auto' }}>
        Our mission is to innovate through destruction. From vertical spinners to flippers and autonomous bots, our builds represent creativity, resilience, and technical excellence. DART fosters a learning-first culture where students of all backgrounds and experience levels are welcome to contribute, grow, and compete on a national level.
      </p>
      <p style={{ fontSize: '1.1rem', lineHeight: '1.6', maxWidth: '800px', margin: '1rem auto' }}>
        Beyond competition, DART Robotics is a hub for mentorship, hands-on learning, and personal growth. Members gain experience in CAD design, embedded systems, autonomous navigation, project management, and outreach. We believe in empowering future engineers by giving them the space and resources to build something real—something that hits hard and performs under pressure.
      </p>
      <p style={{ fontSize: '1.1rem', lineHeight: '1.6', maxWidth: '800px', margin: '1rem auto' }}>
        Whether you're interested in electronics, machining, programming, or event coordination, DART offers a place for you. We're not just a robotics team—we're a community of innovators, problem-solvers, and battle-hardened builders making an impact through every project and every hit in the arena.
      </p>

      <div style={{ textAlign: 'center', marginTop: '3rem' }}>
        <img src="/images/JanGam.jpg" alt="DART January GAM" style={{ maxWidth: '100%', borderRadius: '12px', boxShadow: '0 0 12px rgba(0,0,0,0.3)' }} />
      </div>
    </div>
  );
}
