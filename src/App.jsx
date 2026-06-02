
import React from "react";
import Navbar from "./components/navbar/navbar";
import Hero from "./components/hero/hero";
import "./App.css";
import Features from "./components/features/features";
import DigitalSection from "./components/digitalSection/digitalSection";
import CyberSection from "./components/cyberSection/cyberSection";
import TeamSection from "./components/teamSection/teamSection";
import CompanySection from "./components/companySection/companySection";
import Workflow from "./components/workFlow/workflow";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";


function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Features />
      <DigitalSection />
      <CyberSection />
      <TeamSection />
      <CompanySection />
      <Workflow />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;


