//IMPORTANT Note: aspect ratio of pics: 1.06:1
//https://imagy.app/image-aspect-ratio-changer/
import React, { useEffect } from "react";
import './Team.css';

const teamLeadership = [
  /*{
    name: "Trevor Ierardi",
    role: "Team Lead / Operations Lead / MBSE Officer / Campus Manager",
    image: "images/Trevor Ierardi.png",
    linkedin: "#",
  },*/
  {
    name: "Nick Cowen",
    role: "Team Lead / Operations Lead / Mechanical Lead",
    image: "images/Nick Cowen.png",
    linkedin: "#",
    email: ""
  }
];

const engineeringLeads = [
  {
    name: "Tiernan Bain",
    role: "Eggbeater Lead",
    image: "images/Tiernan Bain.png",
    linkedin: "https://www.linkedin.com/in/tiernan-bain/",
  },
  {
    name: "Luke Hartman",
    role: "Storm Surge Lead",
    image: "images/Luke Hartman.png",
    linkedin: "#",
  },
  {
    name: "TBA",
    role: "Pinhead Larry Lead / Flipper Lead / Full Body Spin Lead",
    image: "images/QuestionMark.png",
    linkedin: "#",
    email: ""
  },
  {
    name: "TBD",
    role: "TBD Bot Lead (2 positions)",
    image: "images/QuestionMark.png",
    linkedin: "#",
    email: ""
  },
  {
    name: "TBD in March",
    role: "Autonomous Lead",
    image: "images/QuestionMark.png",
    linkedin: "#",
    email: ""
  },
  {
    name: "TBD",
    role: "Control Lead",
    image: "images/QuestionMark.png",
    linkedin: "#",
    email: ""
  }
];

const operationsLeads = [
  {
    name: "Timothy Fish",
    role: "Programming Lead",
    image: "images/Timothy Fish.png",
    linkedin: "#",
  },
  {
    name: "Edison Melendez",
    role: "Systems Lead",
    image: "images/Edison Melendez.jpeg",
    linkedin: "https://www.linkedin.com/in/edison-melendez-0a0029294/",
  },
  {
    name: "Louis Bagtas",
    role: "Community Manager / Campus Manager",
    image: "images/Eric Louis Bagtas.png",
    linkedin: "https://www.linkedin.com/in/eric-louis-bagtas-47a576298/",
  },
  {
    name: "Britny Jiang",
    role: "Outreach Manager",
    image: "images/Britny Jiang.jpeg",
    linkedin: "https://www.linkedin.com/in/britny-jiang-a7894629a/",
    email: ""
  },
  {
    name: "Trevor Ierardi & VACANT",
    role: "MBSE Officer",
    image: "images/QuestionMark.png",
    linkedin: "#",
    email: ""
  },
  {
    name: "VACANT",
    role: "Financial Officer",
    image: "images/QuestionMark.png",
    linkedin: "#",
    email: ""
  },
  {
    name: "TBD",
    role: "SharePoint Manager",
    image: "images/QuestionMark.png",
    linkedin: "#",
    email: ""
  }
];

const webTeam = [
  {
    name: "Justin Burns",
    role: "Web Developer",
    image: "images/Justin Burns.jpg",
    linkedin: "https://www.linkedin.com/in/justin-burns-465036291",
  }
];

// --- Alumni data ---
const alumni = [
  {
    year: 2024,
    columns: [
      ["Trevor Ierardi"]
    ]
  }
];

export function Team() {
  useEffect(() => {
    const root = document.documentElement;
  
    const applyTheme = (isDark) => {
      root.style.setProperty('--link-hover', isDark ? '#158df7ff' : '#cc0000');
    };
  
    // Initial check
    const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    applyTheme(isDark);
  
    // Listen for theme changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e) => applyTheme(e.matches);
    mediaQuery.addEventListener('change', handleChange);
  
    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

<div style={{ textAlign: "center", marginTop: "2rem" }}>
  <a href="/robots" className="about-btn">View Robots</a>
</div>

  return (
    <div className="team-page">
      <h1 className="team-title">Team Leadership</h1>
      <div className="team-grid">
        {teamLeadership.map((member, index) => (
          <div className="team-card" key={index}>
            <img src={member.image} alt={member.name} className="team-photo" />
            <div className="team-info">
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
            <div className="team-links">
              {member.linkedin && (
                <a href={member.linkedin} target="_blank" rel="noreferrer">
                  <i className="fa-brands fa-linkedin"></i>
                </a>
              )}
              {member.email && (
                <a href={`mailto:${member.email}`}>
                  <i className="fa-solid fa-envelope"></i>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      <h1 className="team-title">Engineering Team Leads</h1>
      <div className="team-grid">
        {engineeringLeads.map((member, index) => (
          <div className="team-card" key={index}>
            <img src={member.image} alt={member.name} className="team-photo" />
            <div className="team-info">
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
            <div className="team-links">
              {member.linkedin && (
                <a href={member.linkedin} target="_blank" rel="noreferrer">
                  <i className="fa-brands fa-linkedin"></i>
                </a>
              )}
              {member.email && (
                <a href={`mailto:${member.email}`}>
                  <i className="fa-solid fa-envelope"></i>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      <h1 className="team-title">Operations Team</h1>
      <div className="team-grid">
        {operationsLeads.map((member, index) => (
          <div className="team-card" key={index}>
            <img src={member.image} alt={member.name} className="team-photo" />
            <div className="team-info">
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
            <div className="team-links">
              {member.linkedin && (
                <a href={member.linkedin} target="_blank" rel="noreferrer">
                  <i className="fa-brands fa-linkedin"></i>
                </a>
              )}
              {member.email && (
                <a href={`mailto:${member.email}`}>
                  <i className="fa-solid fa-envelope"></i>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      <h1 className="team-title">Web Development Team</h1>
      <div className="team-grid">
        {webTeam.map((member, index) => (
          <div className="team-card" key={index}>
            <img src={member.image} alt={member.name} className="team-photo" />
            <div className="team-info">
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
            <div className="team-links">
              {member.linkedin && (
                <a href={member.linkedin} target="_blank" rel="noreferrer">
                  <i className="fa-brands fa-linkedin"></i>
                </a>
              )}
              {member.email && (
                <a href={`mailto:${member.email}`}>
                  <i className="fa-solid fa-envelope"></i>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
<h1 className="team-title">Alumni</h1>
{/* --- Alumni Section --- */}
<section className="alumni-section">
  {alumni.map(({ year, columns }) => (
    <div className="alumni-year-block" key={year}>
      <h2 className="alumni-year">{year}</h2>
      <div className="alumni-columns">
        {columns.map((list, idx) => (
          <ul className="alumni-list" key={idx}>
            {list.map((name) => (
              <li key={name}>
                <span className="dot" aria-hidden="true"></span>
                <span className="name">{name}</span>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  ))}
</section>

      <div style={{ textAlign: "center", marginTop: "2rem" }}>
        <a href="/robots" className="about-btn">View Robots</a>
      </div>
    </div>
  );
}
