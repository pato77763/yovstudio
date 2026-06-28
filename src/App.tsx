/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AuthoritySection from "./components/AuthoritySection";
import ServiceSection from "./components/ServiceSection";
import DifferentialsSection from "./components/DifferentialsSection";
import ProcessSection from "./components/ProcessSection";
import ResultsSection from "./components/ResultsSection";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";
import ContactFormModal from "./components/ContactFormModal";
// @ts-ignore
import bgImage from "./assets/images/yov_background_1782671678576.jpg";

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  return (
    <div id="landing-app-root" className="min-h-screen bg-[#0B0A08] text-[#F2F2F2] font-sans overflow-x-hidden antialiased">
      {/* GLOWING AMBIENT BACKGROUND LAYER (CINEMATIC) WITH BLURRED LOGO IMAGE */}
      <div className="fixed inset-0 w-full h-full pointer-events-none z-0 overflow-hidden select-none">
        <img
          src={bgImage}
          alt="Luxury Geometric YOV Logo Background"
          className="w-full h-full object-cover opacity-[0.35] filter blur-[2px] scale-105"
          referrerPolicy="no-referrer"
        />
        {/* Subtle gradient dark wash overlays to guarantee outstanding content legibility and depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0B0A08]/55 to-[#0B0A08]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(11,10,8,0.12)_0%,rgba(11,10,8,0.80)_100%)]" />
      </div>

      <div className="fixed top-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-gold-deep/5 blur-[140px] premium-background-glow pointer-events-none z-0"></div>
      <div className="fixed bottom-[-10%] left-[-10%] w-[55%] h-[55%] rounded-full bg-gold-lux/5 blur-[150px] premium-background-glow pointer-events-none z-0"></div>

      {/* STICKY HEADER NAVBAR */}
      <Navbar onOpenContactModal={handleOpenModal} />

      {/* CORE WEB LAYOUT STACK */}
      <main className="relative z-10">
        {/* HERO SECTION */}
        <Hero onOpenContactModal={handleOpenModal} />

        {/* COMPREHENSIVE BRAND AUTHORITY */}
        <AuthoritySection />

        {/* HIGH PERFORMANCE SERVICES */}
        <ServiceSection onOpenContactModal={handleOpenModal} />

        {/* EXCLUSIVE VALUE DIFFERENTIATORS */}
        <DifferentialsSection />

        {/* CUSTOM METHODOLOGICAL WORKFLOW (PROCESS) */}
        <ProcessSection />

        {/* INTERACTIVE GROWTH GRAPHICS (RESULTS) */}
        <ResultsSection />

        {/* HIGH-END METRIC PORTFOLIO SHOWCASE */}
        <Portfolio />

        {/* DETAILED PARTNERS REVIEW (TESTIMONIALS) */}
        <Testimonials />

        {/* ESCALATION INVITATION (FINAL CTA) */}
        <FinalCTA onOpenContactModal={handleOpenModal} />
      </main>

      {/* SITEMAP FOOTER */}
      <Footer />

      {/* BRIEFING BUDGET FORM MODAL */}
      <ContactFormModal isOpen={modalOpen} onClose={handleCloseModal} />
    </div>
  );
}

