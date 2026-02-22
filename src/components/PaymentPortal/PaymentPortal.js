// src/components/PaymentPortal/PaymentPortal.js
import React from "react";
import "./PaymentPortal.css";
import icastiiLogo from "../../assets/icastii-logo.png";
import jdietLogo from "../../assets/jdiet-logo.png";
import cureusLogo from "../../assets/curve.png";
import { FaCalendarAlt, FaLaptopHouse, FaMapMarkerAlt } from "react-icons/fa";

function PaymentPortal() {
    return (
        <div className="payment-portal">
            <div className="payment-container">

                {/* Header Section */}
                <header className="payment-header">
                    <div className="header-logos">
                        <img src={icastiiLogo} alt="ICASTII" />
                        <div className="cureus-logo-container">
                            <img src={cureusLogo} alt="Cureus" />
                            <span>Part of SPRINGER NATURE</span>
                        </div>
                        <img src={jdietLogo} alt="JDIET" />
                    </div>

                    <div className="conference-tag">
                        INTERNATIONAL CONFERENCE • ICASTII 2026
                    </div>

                    <h1>
                        Advances in Science, Technology & <br />
                        Interdisciplinary Innovations
                    </h1>

                    <div className="organized-by">Organized By</div>
                    <div className="institute-name">
                        Prof. Ram Meghe Institute of Technology and Research, Badnera-Amravati
                    </div>
                    <div className="institute-meta">
                        Autonomous Institute | NAAC A+ | AICTE Approved | Affiliated to Sant Gadge Baba Amravati University
                    </div>

                    <div className="info-cards">
                        <div className="info-item">
                            <FaCalendarAlt />
                            24th – 25th March 2026
                        </div>
                        <div className="info-item">
                            <FaLaptopHouse />
                            Hybrid Mode
                        </div>
                        <div className="info-item">
                            <FaMapMarkerAlt />
                            PRMITR, Badnera-Amravati
                        </div>
                    </div>

                    <div className="theme-banner">
                        <h2>Theme: Sustainable Innovation for a Smarter Future</h2>
                    </div>
                </header>

                <h3 style={{ textAlign: "center", color: "#1a4a7a", borderBottom: "2px solid #007c7c", paddingBottom: "10px", margin: "20px 0" }}>
                    Registration & Payment Details
                </h3>

                <form className="payment-form">

                    {/* Section 1 */}
                    <div className="payment-form-section">
                        <div className="section-title">
                            <span className="bar"></span>
                            1. Registration Category & Paper ID
                        </div>
                        <div className="form-grid">
                            <div className="form-group">
                                <label>Category *</label>
                                <select required>
                                    <option value="">-- Select Category --</option>
                                    <option>UG Student</option>
                                    <option>PG / Research Scholar / Faculty</option>
                                    <option>Industry Professional</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label>Paper ID *</label>
                                <input type="text" placeholder="Enter Paper ID" required />
                            </div>
                        </div>
                    </div>

                    {/* Section 2 */}
                    <div className="payment-form-section">
                        <div className="section-title">
                            <span className="bar"></span>
                            2. Paper & Registering Author Details
                        </div>
                        <div className="form-grid">
                            <div className="form-group">
                                <label>Article Track *</label>
                                <select required>
                                    <option value="">-- Select Track --</option>
                                    <option>Track 1</option>
                                    <option>Track 2</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label>Presentation Mode *</label>
                                <select required>
                                    <option value="">-- Select Presentation Mode --</option>
                                    <option>Online</option>
                                    <option>Offline</option>
                                </select>
                            </div>
                            <div className="form-group full-width">
                                <label>Paper Title *</label>
                                <input type="text" placeholder="Enter full paper title" required />
                            </div>
                            <div className="form-group full-width">
                                <label>Full Name of Registering Author (Author 1) *</label>
                                <input type="text" placeholder="Will auto-fill for UG if Paper ID is valid, otherwise fill manually." required />
                            </div>
                            <div className="form-group">
                                <label>Email ID *</label>
                                <input type="email" placeholder="Enter email address" required />
                            </div>
                            <div className="form-group">
                                <label>Mobile Number *</label>
                                <input type="tel" placeholder="10-digit mobile number" required />
                            </div>
                            <div className="form-group full-width">
                                <label>Name of the Affiliation/Institute/University</label>
                                <input type="text" placeholder="Enter affiliation name" />
                            </div>
                            <div className="form-group">
                                <label>Country Name *</label>
                                <input type="text" placeholder="Enter country" required />
                            </div>
                            <div className="form-group">
                                <label>Full Address *</label>
                                <input type="text" placeholder="Enter full address" required />
                            </div>
                        </div>
                    </div>

                    {/* Section 3 */}
                    <div className="payment-form-section">
                        <div className="section-title">
                            <span className="bar"></span>
                            3. Payment Information
                        </div>

                        <p style={{ fontWeight: "700", color: "#1a4a7a", marginBottom: "10px" }}>Registration Fees (INR)</p>

                        <div className="fees-display">
                            <span>**Total Amount Due:**</span>
                            <span>0.00 INR</span>
                        </div>

                        <div className="terms-group">
                            <label>
                                <input type="checkbox" required />
                                <span>
                                    I have read and agree to the <a href="#!">Terms and Conditions of ICASTII-2026.</a>
                                </span>
                            </label>
                        </div>

                        <button type="button" className="submit-btn" onClick={() => window.open("https://mitra.ac.in/", "_blank")}>
                            Proceed to Payment (Secure)
                        </button>
                        <p className="required-note" style={{ textAlign: "center", marginTop: "20px" }}>
                            Visit Institute Website: <a href="https://mitra.ac.in/" target="_blank" rel="noopener noreferrer">mitra.ac.in</a>
                        </p>
                        <p className="required-note">* Indicates required fields.</p>
                    </div>

                </form>
            </div>
        </div>
    );
}

export default PaymentPortal;
