import React from "react";
import { useNavigate } from "react-router-dom";
import "./Registration.css";
import qrCode from "../../assets/qr-code.jpg";

function Registration() {
  const navigate = useNavigate();
  return (
    <section className="registration-section">

      <div className="section-container">

        <h2 className="section-heading">
          REGISTRATION & SUBMISSION FLOW
        </h2>
        <div className="heading-line"></div>

        <p>
          Registration for the conference must be completed <b>"online"</b>.
          Prospective authors can register after receiving notification
          of provisional acceptance.
        </p>

        <p>
          It is <b>mandatory</b> for at least one author of an accepted paper
          to register for inclusion in the conference proceedings.
        </p>

        {/* ===== TABLE ===== */}
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Category</th>
                <th>India (INR)</th>
                <th>Others (EURO)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>UG</td>
                <td>1000*</td>
                <td>20</td>
              </tr>
              <tr>
                <td>PG / Research Scholar / Faculty</td>
                <td>2500**</td>
                <td>25</td>
              </tr>
              <tr>
                <td>Industry Professional</td>
                <td>3500**</td>
                <td>30</td>
              </tr>
              <tr>
                <td>Other Attendees</td>
                <td>1000</td>
                <td>15</td>
              </tr>
            </tbody>
          </table>

          <div className="note-text">
            * Maximum Three Authors (UG) <br />
            ** Maximum Four Authors (PG/Faculty/Industry)
          </div>
        </div>

        {/* ===== STEP 1 ===== */}
        <h3 className="step-heading">
          Step 1: Mandatory Paper Template & Guidelines
        </h3>

        <div className="step-box">
          <h4>
            CRITICAL REQUIREMENT:
            Download and strictly use the official template before submission.
          </h4>

          <ul>
            <li>All papers must use official template.</li>
            <li>Non-compliant papers will be desk rejected.</li>
          </ul>

          <button className="btn-teal">
            DOWNLOAD TEMPLATE NOW
          </button>
        </div>

        {/* ===== STEP 2 & 3 ===== */}
        <h3 className="step-heading">
          Step 2: Manuscript Submission & Step 3: Payment Phase
        </h3>

        <div className="steps-grid">

          {/* STEP 2 */}
          <div className="card">
            <div className="card-header">
              <h4>Manuscript Submission Portal</h4>
              <span className="badge">Step 2</span>
            </div>

            <div className="orange-line"></div>

            <p><b>For UG Authors:</b></p>
            <ul>
              <li>Submit via internal portal.</li>
              <li>Paper ID assigned automatically.</li>
            </ul>

            <button
              className="btn-orange"
              onClick={() => navigate("/ug-submission")}
            >
              SUBMIT VIA UG PORTAL
            </button>

            <p><b>For PG / Faculty / Industry:</b></p>
            <ul>
              <li>Submit & track on Microsoft CMT.</li>
              <li>CMT assigns Paper ID.</li>
            </ul>

            <button
              className="btn-blue"
              onClick={() => window.open("https://cmt3.research.microsoft.com/User/Login?ReturnUrl=%2FICASTII2026%2f", "_blank")}
            >
              GO TO MICROSOFT CMT PORTAL
            </button>
          </div>

          {/* STEP 3 */}
          <div className="card">
            <div className="card-header">
              <h4>Final Registration Payment</h4>
              <span className="badge">Step 3</span>
            </div>

            <div className="orange-line"></div>

            <p className="green-text">
              POST-ACCEPTANCE FEE REQUIRED
            </p>

            <ul>
              <li>Acceptance letter required.</li>
              <li>Use assigned Paper ID for payment.</li>
              <li>Secures paper inclusion.</li>
            </ul>

            <div className="payment-section">
              <div>
                <p>Scan to Pay</p>
                <img src={qrCode} alt="QR Code" />
              </div>

              <div className="or-text">OR</div>

              <button
                className="btn-orange"
                onClick={() => navigate("/payment")}
              >
                PROCEED TO PAYMENT PORTAL
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Registration;
