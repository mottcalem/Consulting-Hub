import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { AdvisoryServices } from "@/components/AdvisoryServices";
import { BoardExperience } from "@/components/BoardExperience";
import { BoardGovernanceSection } from "@/components/BoardGovernanceSection";
import { FaqSection } from "@/components/FaqSection";
import { AboutDrHaluk } from "@/components/AboutDrHaluk";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Navbar />
      <main>
        {/* Hero — main headline */}
        <Hero />

        {/* How I Help — 5 service cards */}
        <AdvisoryServices />

        {/* Family & Shareholder Governance deep-dive */}
        <BoardExperience />

        {/* Business & Board Governance */}
        <BoardGovernanceSection />

        {/* Frequently asked questions */}
        <FaqSection />

        {/* About Dr. Haluk — timeline profile */}
        <AboutDrHaluk />

        {/* Contact */}
        <ContactForm />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
