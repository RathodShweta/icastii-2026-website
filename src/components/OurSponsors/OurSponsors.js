import React from "react";
import "./OurSponsors.css";

import gtb from "../../assets/gtb.png";
import raymond from "../../assets/raymond.png";

const sponsors = [
  {
    name: "G.T. BIOSCIENCES PVT. LTD., Yavatmal",
    logo: gtb,
  },
  {
    name: "Raymond UCO Denim Pvt. Ltd., Yavatmal",
    logo: raymond,
  },
];

const OurSponsors = () => {
  return (
    <section className="sponsor-section">
      <div className="sponsor-container">
        <h2 className="sponsor-title">
          OUR SPONSOR / TECHNICAL PARTNER
        </h2>

        <div className="sponsor-line"></div>

        <div className="sponsor-grid">
          {sponsors.map((item, index) => (
            <div className="sponsor-card" key={index}>
              <img src={item.logo} alt={item.name} />
              <p>{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurSponsors;