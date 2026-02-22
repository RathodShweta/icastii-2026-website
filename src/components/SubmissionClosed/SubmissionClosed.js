import React from "react";
import { useNavigate } from "react-router-dom";
import "./SubmissionClosed.css";

function SubmissionClosed() {
  const navigate = useNavigate();
  return (
    <div className="closed-page">
      <div className="closed-box">

        <div className="top-bar">
          <h1>ICASTII-2026 International Conference</h1>
          <p>Prof Ram Meghe Institute of Technology and Research, Badnera-Amravati</p>
        </div>

        <h2>Manuscript Submission is Now Closed</h2>

        <p>
          Thank you for the overwhelming response to ICASTII-2026.
          The manuscript submission window has officially been closed.
        </p>

        <div className="highlight-box">
          If your paper has been reviewed and accepted,
          please proceed with the registration payment using the link below.
        </div>

        <button
          className="btn-green"
          onClick={() => navigate("/payment")}
        >
          Proceed to Registration Payment
        </button>

        <p className="contact-text">
          For any queries, contact the conference committee. <br />
          Email: icastii@jdiet.ac.in
        </p>

      </div>
    </div>
  );
}

export default SubmissionClosed;