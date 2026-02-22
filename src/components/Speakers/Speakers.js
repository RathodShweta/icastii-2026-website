import React from "react";
import "./Speakers.css";

import arguelles from "../../assets/arguelles.jpg";
import umale from "../../assets/umale.jpg";

function Speakers() {
  return (
    <section className="speakers-section">
      <div className="section-container">

        <h2 className="section-heading">
          INTERNATIONAL DISTINGUISHED SPEAKERS
        </h2>
        <div className="heading-line"></div>

        <div className="speakers-grid">

          {/* Speaker 1 */}
          <div className="speaker-card">
            <img src={arguelles} alt="Pastor Arguelles" />

            <h4 className="short-name">Pastor Arguelles</h4>

            <h3>Prof. (Dr.) Pastor R. Arguelles Jr.</h3>

            <div className="designation">
              <p>Director, Research & Publication Office</p>
              <p>University of Batangas, Philippines</p>
            </div>

            <p>
              A distinguished 30+ international award-winning scientist,
              accomplished author, and holder of multiple patents.
              With 29 years of professional experience, he is a
              recognized pioneer in Artificial Intelligence,
              Machine Learning, and Smart Systems.
            </p>
          </div>

          {/* Speaker 2 */}
          <div className="speaker-card">
            <img src={umale} alt="Sudhakar Umale" />

            <h4 className="short-name">Sudhakar Umale</h4>

            <h3>Dr. Sudhakar Umale</h3>

            <div className="designation">
              <p>Professor</p>
              <p>Thakur College of Engineering, Mumbai</p>
            </div>

            <p>
              A multi-award-winning engineering academic leader with
              38 years of experience in academics and research.
              Honored with the International Award of Excellence 2025.
            </p>

           
          </div>

        </div>
      </div>
    </section>
  );
}

export default Speakers;