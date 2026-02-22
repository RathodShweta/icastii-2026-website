import React from "react";
import "./Header.css";
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import { BsGlobe } from "react-icons/bs";

const Header = () => {
  return (
    <div className="web-container">
      {/* Background Decorative Elements */}
      <div className="accent-shape-top"></div>
      <div className="accent-shape-bottom"></div>

      <div className="main-poster-card">

        {/* Header Branding Row */}
        <div className="brand-header">
          <div className="side-logo-placeholder">ICASTII-2026</div>
          <div className="center-brand">
            <h2 className="brand-title">Cureus</h2>
            <p className="brand-sub">Part of <span>SPRINGER NATURE</span></p>
          </div>
          <div className="side-logo-placeholder red-logo">PRMIT&R</div>
        </div>

        {/* Teal Badge */}
        <div className="badge-wrapper">
          <div className="conference-badge">
            INTERNATIONAL CONFERENCE • ICASTII 2026
          </div>
        </div>

        {/* Main Event Title */}
        <h1 className="hero-heading">
          Advances in Science, Technology & Interdisciplinary Innovations
        </h1>

        {/* Organizer Details */}
        <div className="organizer-section">
          <p className="label-orange">ORGANIZED BY</p>
          <h2 className="college-title">
            Prof Ram Meghe Institute of Technology and Research, Badnera-Amravati
          </h2>
          <p className="college-meta">
            Autonomous Institute | NAAC A+ | Affiliated to Sant Gadge Baba Amravati University
          </p>
        </div>

        {/* Collaboration Details */}
        <div className="collaboration-block">
          <p className="collab-label">In Collaboration</p>
          <p className="collab-text">
            Board of Innovation, Incubation & Linkages<br />
            Sant Gadge Baba Amravati University, Amravati
          </p>
        </div>

        {/* Info Bar (Pill Shape) */}
        <div className="event-info-bar">
          <div className="info-item">
            <FaCalendarAlt className="icon-teal" /> 24th–25th March 2026
          </div>
          <div className="info-item">
            <BsGlobe className="icon-teal" /> Hybrid Mode
          </div>
          <div className="info-item">
            <FaMapMarkerAlt className="icon-teal" /> PRMIT&R, Badnera-Amravati
          </div>
        </div>

        {/* Theme Footer */}
        <div className="theme-container">
          <h3 className="theme-text">
            Theme: <span>Sustainable Innovation for a Smarter Future</span>
          </h3>
        </div>

      </div>

    </div>

  );
};

export default Header;