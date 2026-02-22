// src/components/Timeline/Timeline.js
import React from "react";
import "./Timeline.css";

function Timeline() {
  return (
    <section className="timeline-section">

      <div className="section-container">

        <h2 className="section-heading">
          CRITICAL SUBMISSION TIMELINE
        </h2>
        <div className="heading-line"></div>

        <div className="timeline-table-wrapper">

          <table className="timeline-table">
            <thead>
              <tr>
                <th>Event</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Last Date of Full Paper Submission</td>
                <td>15<sup>th</sup> Feb 2026</td>
              </tr>
              <tr>
                <td>Notification of Acceptance (Review in Process)</td>
                <td>17<sup>th</sup> Feb 2026</td>
              </tr>
              <tr>
                <td>Registration till</td>
                <td>20<sup>th</sup> Feb 2026</td>
              </tr>
              <tr>
                <td>Camera Ready</td>
                <td>25<sup>th</sup> Feb 2026</td>
              </tr>
              <tr className="highlight-row">
                <td>Conference Date</td>
                <td>24<sup>th</sup> & 25<sup>th</sup> March 2026</td>
              </tr>
            </tbody>
          </table>

        </div>

      </div>
    </section>
  );
}

export default Timeline;
