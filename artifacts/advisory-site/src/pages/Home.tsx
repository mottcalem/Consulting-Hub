import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { AdvisoryServices } from "@/components/AdvisoryServices";
import { StatsAboutStrip } from "@/components/StatsAboutStrip";
import { CoreOfferings } from "@/components/CoreOfferings";
import { BoardExperience } from "@/components/BoardExperience";
import { SuccessionSection } from "@/components/SuccessionSection";
import { BoardGovernanceSection } from "@/components/BoardGovernanceSection";
import { Testimonial } from "@/components/Testimonial";
import { AboutDrHaluk } from "@/components/AboutDrHaluk";
import { FaqAccordion } from "@/components/FaqAccordion";
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

        {/* About strip — credibility + stats */}
        <StatsAboutStrip />

        {/* Three core advisory areas */}
        <CoreOfferings />

        {/* Family & Shareholder Governance deep-dive */}
        <BoardExperience />

        {/* Succession & Next-Generation */}
        <SuccessionSection />

        {/* Business & Board Governance */}
        <BoardGovernanceSection />

        {/* Why Work With Me */}
        <Testimonial />

        {/* About Dr. Haluk — timeline profile */}
        <AboutDrHaluk />

        {/* FAQ */}
        <FaqAccordion />

        {/* Contact */}
        <ContactForm />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
