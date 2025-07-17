import React, { useEffect, useRef } from "react";

import "./Robots.css";
import { Link } from "react-router-dom";

const robotList = [
  {
    name: "Storm Surge",
    type: "Spinner Bot",
    image: "/images/stormsurge.png",
    description: "High-speed spinner designed for aggressive takedowns combat.",
    link: "/robots/storm-surge"
  },
  {
    name: "Pinhead Larry",
    type: "Flipper Bot",
    image: "/images/pinhead.png",
    description: "Robust flipper robot engineered for precision control and endurance battles.",
    link: "/robots/pinhead-larry"
  },
  {
    name: "Eggbeater",
    type: "Vertical Spinner",
    image: "/images/eggbeater.png",
    description: "Compact yet powerful vertical spinner ideal for maneuverability and knockout hits.",
    link: "/robots/eggbeater"
  },
  
];

export function Robots() {
  const listRef = useRef();

  return (
    <div className="robots-page">
      <h1 className="robots-title">Our Robots</h1>
      <div className="robots-grid">
        {robotList.map((robot, index) => (
          <Link to={robot.link} className="robot-card" key={index}>
            <img src={robot.image} alt={robot.name} className="robot-image" />
            <div className="robot-info">
              <h3>{robot.name}</h3>
              <p><em>{robot.type}</em></p>
              <p>{robot.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
