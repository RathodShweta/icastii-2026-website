// src/components/Footer/Footer.js
import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer-section">

      <div className="footer-container">

        {/* ORGANIZED BY */}
        <div className="footer-top">
          <h3>
            Organised by: Prof Ram Meghe Institute of Technology &
            Research, Badnera-Amravati
          </h3>

          <p className="footer-subtext">
            (Autonomous Institute | NAAC A+ | Approved by AICTE, New Delhi)
          </p>
        </div>

        {/* VISITS */}
        <div className="visit-counter">
          <span className="eye-icon">👁️</span>
          <span>Total Visits</span>
          <strong>11,004</strong>
        </div>

        {/* NOTICE */}
        <p className="footer-note">
          Continuous monitoring of the official conference website is
          advised for real-time updates on submission portal status and
          registration links.
        </p>

        {/* MICROSOFT CMT NOTE */}
        <div className="cmt-box">
          <p>
            The Microsoft CMT service was used for managing the
            peer-reviewing process for this conference.
            This service was provided for free by Microsoft and they
            bore all expenses, including costs for Azure cloud services
            as well as for software development and support.
          </p>
        </div>

        {/* COPYRIGHT */}
        <div className="footer-bottom">
          <p>© 2026 ICASTII Conference | All Rights Reserved</p>
          <p className="footer-credit">Created by Shweta Rathod</p>
        </div>

      </div>

    </footer>
  );
}

export default Footer;
