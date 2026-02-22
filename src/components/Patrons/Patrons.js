import React from "react";
import "./Patrons.css";

import vijay from "../../assets/vijay-darda.jpg";
import milind from "../../assets/milind-barhate.jpg";
import devendra from "../../assets/devendra-darda.jpg";
import kishor from "../../assets/kishor-darda.jpg";

function Patrons() {
  return (
    <section className="patrons-section">

      <div className="section-container">
        <h2 className="section-heading">PATRONS</h2>
        <div className="heading-line"></div>

        <div className="patrons-grid fade-in">

          <div className="patron-card">
            <img src={vijay} alt="Vijay Darda" />
            <h3>Hon’able Shri. Vijay Darda</h3>
            <p>
              Founder President, JDES, Yavatmal<br/>
              Chairman, Lokmat Media Group<br/>
              Former MP Rajya Sabha (1998–2016)
            </p>
          </div>

          <div className="patron-card">
            <img src={milind} alt="Milind Barhate" />
            <h3>Hon. Dr. Milind A. Barhate</h3>
            <p>
              Vice-Chancellor,<br/>
              Sant Gadge Baba Amravati University, Amravati
            </p>
          </div>

          <div className="patron-card">
            <img src={devendra} alt="Devendra Darda" />
            <h3>Hon’able Shri. Devendra Darda</h3>
            <p>
              President, JDES, Yavatmal<br/>
              Managing Director, Lokmat Media Group
            </p>
          </div>

          <div className="patron-card">
            <img src={kishor} alt="Kishor Darda" />
            <h3>Hon’able Shri. Kishor Darda</h3>
            <p>
              Secretary, JDES, Yavatmal
            </p>
          </div>

        </div>
      </div>

    </section>
  );
}

export default Patrons;
