import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import GlobalCollaborators from "./components/GlobalCollaborators/GlobalCollaborators";
import OurSponsors from "./components/OurSponsors/OurSponsors";
import AboutSection from "./components/AboutSection/AboutSection";
import Patrons from './components/Patrons/Patrons';
import ConferenceLeadership from './components/ConferenceLeadership/ConferenceLeadership';
import Speakers from './components/Speakers/Speakers';
import Committees from './components/Committees/Committees';
import Registration from './components/Registration/Registration';
import Timeline from './components/Timeline/Timeline';
import Publication from './components/Publication/Publication';
import Footer from './components/Footer/Footer';
import SubmissionClosed from './components/SubmissionClosed/SubmissionClosed';
import PaymentPortal from './components/PaymentPortal/PaymentPortal';

const Home = () => (
  <>
    <Header />
    <GlobalCollaborators />
    <OurSponsors />
    <AboutSection />
    <Patrons />
    <ConferenceLeadership />
    <Speakers />
    <Committees />
    <Registration />
    <Timeline />
    <Publication />
    <Footer />
  </>
);

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ug-submission" element={<SubmissionClosed />} />
        <Route path="/payment" element={<PaymentPortal />} />
      </Routes>
    </div>
  );
}

export default App;