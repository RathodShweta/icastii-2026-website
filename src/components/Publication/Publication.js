// src/components/Publication/Publication.js
import React from "react";
import "./Publication.css";
import cureusLogo from "../../assets/curve.png";

function Publication() {
  return (
    <section className="publication-section">

      <div className="section-container">

        <h2 className="section-heading">
          Publication & Paper Protocol
        </h2>
        <div className="heading-line"></div>

        <div className="publication-grid">

          {/* LEFT SIDE */}
          <div className="left-column">

            <h3 className="sub-heading">Publication & Paper Protocol</h3>

            <h4 className="orange-text">
              For PG / Research Scholar / Faculty
            </h4>

            <p>
              Full papers (maximum 6 pages) must be original and prepared
              strictly according to the conference template. All submissions
              will undergo plagiarism screening, and papers with a
              similarity index greater than 15% may be rejected. Accepted
              papers will be published in the conference proceedings with
              an ISBN. Selected high-quality papers will be recommended for
              <b>Cureus Journal (Part of Springer Nature), as per the respective journal guidelines.</b>
            </p>

            {/* Cureus Box */}
            <div className="cureus-box">
              <img src={cureusLogo} alt="Cureus" />
              <span>PUBLICATION PARTNERS</span>
            </div>

            <h4 className="orange-text">For UG Students</h4>

            <p>
              Full papers (maximum 6 pages) must be prepared strictly
              according to the conference template.
              All registered participants will be issued certificate
              of participation.
            </p>

          </div>

          {/* RIGHT SIDE */}
          <div className="right-column">

            <h3 className="sub-heading">Award Opportunity:</h3>
            <p>
              One paper selected from each track will be eligible for the
              Best Paper Award.
            </p>

            <h3 className="sub-heading">
              Direct Access & Contact Points
            </h3>

            <table className="contact-table">
              <tbody>
                <tr>
                  <td>Official Website</td>
                  <td>https://conference.jdiet.ac.in</td>
                </tr>
                <tr>
                  <td>Conference Email (General Queries)</td>
                  <td>icastii2026@jdiet.ac.in</td>
                </tr>
                <tr>
                  <td>CMT Submission Queries</td>
                  <td>9226715020</td>
                </tr>
                <tr>
                  <td>Contact Number 1</td>
                  <td>9665998773</td>
                </tr>
                <tr>
                  <td>Contact Number 2</td>
                  <td>9096839317</td>
                </tr>
              </tbody>
            </table>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Publication;
