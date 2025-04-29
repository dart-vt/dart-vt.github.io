/*import React from "react";

export function Team() {
		return (
				<div className="saw">
						<h1>Team</h1>
				</div>
		)
}*/
import React from "react";
import './Team.css';

const teamLeadership = [
  {
    name: "Trevor Ierardi",
    role: "Team Lead / Operations Lead / MBSE Officer / Campus Manager",
    image: "images/Trevor Ierardi.png",
    linkedin: "#",
  },
  {
    name: "Nick Cowen",
    role: "Vice Team Lead / Mechanical Lead",
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
    linkedin: "#",
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
    image: "images/TBA.png",
    linkedin: "#",
    email: ""
  },
  {
    name: "TBD",
    role: "TBD Bot Lead (2 positions)",
    image: "images/TBD.png",
    linkedin: "#",
    email: ""
  },
  {
    name: "TBD in March",
    role: "Autonomous Lead",
    image: "images/TBDinMarch.png",
    linkedin: "#",
    email: ""
  },
  {
    name: "TBD",
    role: "Control Lead",
    image: "images/TBD2.png",
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
    linkedin: "#",
  },
  {
    name: "Britny Jiang",
    role: "Outreach Manager",
    image: "images/BritnyJiang.png",
    linkedin: "#",
    email: ""
  },
  {
    name: "Trevor Ierardi & VACANT",
    role: "MBSE Officer",
    image: "images/TrevorAndVacant.png",
    linkedin: "#",
    email: ""
  },
  {
    name: "VACANT",
    role: "Financial Officer",
    image: "images/VACANT.png",
    linkedin: "#",
    email: ""
  },
  {
    name: "TBD",
    role: "SharePoint Manager",
    image: "images/TBD3.png",
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
  },
  {
    name: "Samartha",
    role: "Web Developer",
    image: "images/Samartha Madhyastha.jpeg",
    linkedin: "https://www.linkedin.com/in/samartha-m03/",
  }
];

export function Team() {
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
      <div style={{ textAlign: "center", marginTop: "2rem" }}>
  <a href="/robots" className="cta-btn">View Robots</a>
</div>

    </div>
  );
}
