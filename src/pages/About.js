// src/components/About.js
import React from "react";
import "./About.css";
import { useTheme } from "../utils/useTheme";

export function About() {
  useTheme();

  return (
    <div className="about-page" style={{ padding: "2rem" }}>
      <h1 className="about-title">About DART Robotics</h1>

      <p className="about-text">
        DART Robotics is Virginia Tech's premier combat robotics team. Since its
        founding in 2022, the team has specialized in designing, building,
        and competing with destructive robots in events like RoboGames, AutoNav,
        and VEX-style arena matches. DART brings together students across
        disciplines—mechanical, electrical, software engineering, and beyond—to
        collaborate on cutting-edge engineering challenges.
      </p>

      <p className="about-text">
        Our mission is to innovate through destruction. From vertical spinners to
        flippers and autonomous bots, our builds represent creativity,
        resilience, and technical excellence. DART fosters a learning-first
        culture where students of all backgrounds and experience levels are
        welcome to contribute, grow, and compete on a national level.
      </p>

      <p className="about-text">
        Beyond competition, DART Robotics is a hub for mentorship, hands‑on
        learning, and personal growth. Members gain experience in CAD design,
        embedded systems, autonomous navigation, project management, and
        outreach. We believe in empowering future engineers by giving them the
        space and resources to build something real—something that hits hard and
        performs under pressure.
      </p>

      <p className="about-text">
        Whether you're interested in electronics, machining, programming, or
        event coordination, DART offers a place for you. We're not just a
        robotics team—we're a community of innovators, problem-solvers, and
        battle-hardened builders making an impact through every project and every
        hit in the arena.
      </p>

      {/* Image back at the bottom */}
      <div style={{ textAlign: "center", marginTop: "3rem" }}>
        <img
          src="/images/JanGam.jpg"
          alt="DART January GAM"
          style={{
            maxWidth: "100%",
            borderRadius: "12px",
            boxShadow: "0 0 12px rgba(0,0,0,0.3)",
          }}
        />
      </div>
    </div>
  );
}
