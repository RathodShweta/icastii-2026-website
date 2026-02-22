import React from "react";
import "./GlobalCollaborators.css";

// Import Images
import sgbau from "../../assets/sgbau.png";
import iste from "../../assets/iste.png";
import iei from "../../assets/iei.png";
import iete from "../../assets/iete.png";
import iiche from "../../assets/iiche.png";
import ishrae from "../../assets/ishrae.png";

const collaborators = [
  { name: "Sant Gadge Baba Amravati University, Amravati", logo: sgbau },
  { name: "Indian Society for Technical Education (ISTE)", logo: iste },
  { name: "Institute of Engineers India (IEI)", logo: iei },
  { name: "Institution of Electronics and Telecommunication Engineers (IETE)", logo: iete },
  { name: "Indian Institute of Chemical Engineers (IICHE)", logo: iiche },
  { name: "ISHRAE – Nagpur Chapter", logo: ishrae },
];

const GlobalCollaborators = () => {
  return (
    <section className="global-section">
      <div className="global-container">

        <h2 className="global-title">
          GLOBAL COLLABORATORS & PARTNER SOCIETIES
        </h2>

        {/* Reduced Line */}
        <div className="global-line"></div>

        <div className="collaborator-grid">
          {collaborators.map((item, index) => (
            <div className="collaborator-card" key={index}>
              <img src={item.logo} alt={item.name} />
              <p>{item.name}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default GlobalCollaborators;