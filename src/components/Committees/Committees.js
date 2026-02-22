import React from "react";
import "./Committees.css";

import tatwawadi from "../../assets/tatwawadi.jpg";
import arguelles from "../../assets/arguelles.jpg";
import patnaik from "../../assets/patnaik.jpg";

function Committees() {
  return (
    <section className="committees-section">
      <div className="section-container">

        {/* ================= ADVISORY COMMITTEES ================= */}
        <h2 className="section-heading">ADVISORY COMMITTEES</h2>
        <div className="heading-line"></div>

        {/* INTERNATIONAL */}
        <h3 className="sub-heading">International Advisory Committee</h3>

        <div className="international-grid">

          <div className="member-card">
            <img src={tatwawadi} alt="Tatwawadi" />
            <h4>Prof. Dr. Ramchandra S. Tatwawadi</h4>
          </div>

          <div className="member-card">
            <img src={arguelles} alt="Arguelles" />
            <h4>Prof. (Dr.) Pastor R. Arguelles Jr.</h4>
            <p>University of Batangas, Philippines</p>
          </div>

          <div className="member-card">
            <img src={patnaik} alt="Patnaik" />
            <h4>Dr. Asis Patnaik</h4>
            <p>Cape Peninsula University of Technology, South Africa</p>
          </div>

        </div>

        {/* NATIONAL */}
        <h3 className="sub-heading large-gap">National Advisory Committee</h3>

        <div className="committee-box">
          <div className="committee-grid">

            <p><strong>Dr. Sandeep A. Waghuley</strong> – Director, IQAC, SGBAU Amravati</p>
            <p><strong>Dr. H. R. Deshmukh</strong> – Dean, Science & Technology, SGBAU</p>
            <p><strong>Dr. Vilas S. Sapkal</strong> – Vice-Chancellor, MGM University</p>

            <p><strong>Shri. Nitin Shrivastava</strong> – Works Director, Raymond UCO Denim Pvt. Ltd.</p>
            <p><strong>Prof. Dr. A. M. Mahalle</strong> – Principal, Govt. COE Amravati</p>
            <p><strong>Dr. Gajendra R. Bamnote</strong> – Principal, PRMITR Badnera</p>

            <p><strong>Dr. S. B. Somani</strong> – Principal, SSGMCE Shegaon</p>
            <p><strong>Dr. Sanjay M. Kherde</strong> – Principal, Sipna COE</p>
            <p><strong>Dr. M. P. Khond</strong> – Director, COEP Technological University</p>

            <p><strong>Dr. Vivek K. Sunnapwar</strong> – Principal, KJ Somaiya Institute</p>
            <p><strong>Dr. Tarendra Lakhankar</strong> – Senior Scientist, CUNY CREST</p>
            <p><strong>Dr. Kartick Chandra Jana</strong> – IIT Dhanbad</p>

            <p><strong>Dr. Vijay Baheti</strong> – IIT Delhi</p>
            <p><strong>Dr. Altaf Badar</strong> – NIT Warangal</p>
            <p><strong>Dr. Mayur Parate</strong> – IIIT Nagpur</p>
            <p><strong>Dr. Parul Sahare</strong> – IIIT Nagpur</p>

          </div>
        </div>

       {/* ================= RESEARCH TRACKS ================= */}
<h2 className="section-heading large-gap">
  RESEARCH TRACKS & DOMAIN FOCUS
</h2>
<div className="heading-line"></div>

<div className="tracks-grid">

  <div className="track-card">
    <h4>Track 1: Mechanical Engineering</h4>
    <ul>
      <li>Sustainable systems & clean mobility</li>
      <li>Smart manufacturing & automation</li>
      <li>Advanced/functional materials</li>
      <li>Modeling, simulation & digital twins</li>
      <li>Robotics and Machine Learning</li>
    </ul>
  </div>

  <div className="track-card">
    <h4>Track 2: Computer Science and Engineering</h4>
    <ul>
      <li>AI, ML & data science</li>
      <li>Cybersecurity & blockchain</li>
      <li>IoT, edge/cloud computing</li>
      <li>Intelligent software systems</li>
      <li>Big Data, Privacy & Analytics</li>
    </ul>
  </div>

  <div className="track-card">
    <h4>Track 3: Electrical Engineering</h4>
    <ul>
      <li>Smart grids & renewable power</li>
      <li>Electric vehicles & power electronics</li>
      <li>Energy storage & hydrogen solutions</li>
      <li>Smart monitoring & protection systems</li>
    </ul>
  </div>

  <div className="track-card">
    <h4>Track 4: Civil Engineering</h4>
    <ul>
      <li>Sustainable materials & green buildings</li>
      <li>Smart infrastructure & urban systems</li>
      <li>Structural health & resilience</li>
      <li>Water resources & environmental solutions</li>
    </ul>
  </div>

  <div className="track-card">
    <h4>Track 5: Textile Engineering</h4>
    <ul>
      <li>Smart textiles & wearables</li>
      <li>Sustainable processing & circular textiles</li>
      <li>Technical textiles & nanofibers</li>
      <li>Automation & digital textile technologies</li>
    </ul>
  </div>

  <div className="track-card">
    <h4>Track 6: Electronics & Telecommunication Engineering</h4>
    <ul>
      <li>5G/6G & next-gen communication</li>
      <li>Embedded/IoT systems</li>
      <li>VLSI/SoC & semiconductor technologies</li>
      <li>Signal/image processing applications</li>
    </ul>
  </div>

  <div className="track-card">
    <h4>Track 7: Chemical Engineering</h4>
    <ul>
      <li>Advanced Functional Materials</li>
      <li>AI/ML for Chemical Processes</li>
      <li>Sustainable fuels & bioprocessing</li>
      <li>Functional materials & catalysts</li>
      <li>Environmental remediation</li>
      <li>Energy materials & nanotechnology</li>
    </ul>
  </div>

  <div className="track-card">
    <h4>Track 8: Applied Science & Emerging Technologies</h4>
    <ul>
      <li>AI-Driven Scientific Computing</li>
      <li>Green Chemistry & Low-Carbon Technologies</li>
      <li>Data-Driven Modeling & Scientific ML</li>
      <li>Photonics & smart sensors</li>
      <li>Scientific computing & modeling</li>
    </ul>
  </div>

</div>


      </div>
    </section>
  );
}

export default Committees;
