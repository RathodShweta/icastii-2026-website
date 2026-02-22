import React from "react";
import "./ConferenceLeadership.css";
import ram from "../../assets/ramchandra.jpg";
import ajay from "../../assets/ajay.jpg";
import jyoti from "../../assets/jyoti.jpg";
import rajesh from "../../assets/rajeshkumar.jpg";

function ConferenceLeadership() {
  return (
    <section className="leadership-section">
      <div className="section-container">

        <h2 className="section-heading">CONFERENCE LEADERSHIP</h2>
        <div className="heading-line"></div>

        <div className="leadership-grid fade-in">

          {/* Leader 1 */}
          <div className="leader-card">
            <img src={ram} alt="Ramchandra Tatwawadi" />
            <h3>Dr. G. R. Bamnote</h3>
            <span className="designation">General Chair</span>
            <p>Principal, PRMIT&R, Badnera-Amravati</p>
          </div>

          {/* Leader 2 */}
          <div className="leader-card">
            <img src={ajay} alt="Ajay Lad" />
            <h3>Prof. Dr. Ajay Lad</h3>
            <span className="designation">Director</span>
            <p>
              Board of Innovation, Incubation and Linkages
            </p>
            <p>
              Sant Gadge Baba Amravati University, Amravati
            </p>
          </div>

          {/* Leader 3 */}
          <div className="leader-card">
            <img src={jyoti} alt="Jyoti Fulzele" />
            <h3>Dr. Samir J. Deshmukh</h3>
            <span className="designation">Organizing Chair</span>
            <p>Dean Research & Innovation, PRMIT&R, Badnera-Amravati</p>
          </div>

          {/* Leader 4 */}
          <div className="leader-card">
            <img src={rajesh} alt="Rajeshkumar Sambhe" />
            <h3>Dr. C. N. Deshmukh</h3>
            <span className="designation">Organizing Chair</span>
            <p>Dean Quality Assurance, PRMIT&R, Badnera-Amravati</p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default ConferenceLeadership;